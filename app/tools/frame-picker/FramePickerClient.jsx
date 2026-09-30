"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";

const FRAMES_PER_SECOND = 10;
const JPEG_QUALITY = 0.95;

export default function FramePickerClient() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const objectUrlRef = useRef(null);

  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const [duration, setDuration] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  const [currentSecond, setCurrentSecond] = useState(0);
  const [frames, setFrames] = useState([]);
  const [selectedFrames, setSelectedFrames] = useState([]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const totalSeconds = Math.max(1, Math.ceil(duration));

  const currentSecondStart = currentSecond;
  const currentSecondEnd = Math.min(
    currentSecond + 1,
    duration
  );

  const selectedCount = selectedFrames.length;

  const allCurrentFramesSelected = useMemo(() => {
    return (
      frames.length > 0 &&
      frames.every((frame) =>
        selectedFrames.some(
          (selected) => selected.id === frame.id
        )
      )
    );
  }, [frames, selectedFrames]);

  /*
   * Clean up temporary video URLs.
   */
  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  /*
   * Create the video URL when a new video is selected.
   */
  useEffect(() => {
    if (!videoFile) {
      setVideoUrl("");
      return;
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }

    const url = URL.createObjectURL(videoFile);

    objectUrlRef.current = url;
    setVideoUrl(url);

    return () => {
      URL.revokeObjectURL(url);

      if (objectUrlRef.current === url) {
        objectUrlRef.current = null;
      }
    };
  }, [videoFile]);

  /*
   * Reset the application.
   */
  function resetTool() {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    setVideoFile(null);
    setVideoUrl("");
    setDuration(0);
    setVideoWidth(0);
    setVideoHeight(0);
    setCurrentSecond(0);
    setFrames([]);
    setSelectedFrames([]);
    setGenerationProgress(0);
    setError("");
    setIsGenerating(false);
  }

  /*
   * Select a new video.
   */
  function handleVideoSelect(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setError("Please select a valid video file.");
      return;
    }

    setError("");
    setFrames([]);
    setSelectedFrames([]);
    setCurrentSecond(0);
    setGenerationProgress(0);

    setVideoFile(file);
  }

  /*
   * Read video metadata.
   */
  function handleLoadedMetadata(event) {
    const video = event.currentTarget;

    setDuration(video.duration);
    setVideoWidth(video.videoWidth);
    setVideoHeight(video.videoHeight);
  }

  /*
   * Format seconds into a readable timestamp.
   */
  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
      return "00:00";
    }

    const total = Math.floor(seconds);

    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secondsRemaining = total % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(secondsRemaining).padStart(
        2,
        "0"
      )}`;
    }

    return `${String(minutes).padStart(2, "0")}:${String(
      secondsRemaining
    ).padStart(2, "0")}`;
  }

  /*
   * Seek the video to an exact timestamp.
   */
  function seekVideo(video, timestamp) {
    return new Promise((resolve, reject) => {
      const safeTimestamp = Math.min(
        Math.max(timestamp, 0),
        Math.max(video.duration - 0.001, 0)
      );

      const handleSeeked = () => {
        cleanup();
        resolve();
      };

      const handleError = () => {
        cleanup();
        reject(new Error("The browser could not seek to this frame."));
      };

      const cleanup = () => {
        video.removeEventListener("seeked", handleSeeked);
        video.removeEventListener("error", handleError);
      };

      video.addEventListener("seeked", handleSeeked, {
        once: true,
      });

      video.addEventListener("error", handleError, {
        once: true,
      });

      video.currentTime = safeTimestamp;
    });
  }

  /*
   * Capture the current video frame as a JPEG Blob.
   */
  function captureCurrentFrame(video) {
    const canvas = canvasRef.current;

    if (!canvas) {
      throw new Error("Frame canvas is unavailable.");
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d", {
      alpha: false,
    });

    if (!context) {
      throw new Error("The browser could not create a canvas context.");
    }

    context.drawImage(
      video,
      0,
      0,
      video.videoWidth,
      video.videoHeight
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Could not create the frame image."));
            return;
          }

          resolve(blob);
        },
        "image/jpeg",
        JPEG_QUALITY
      );
    });
  }

  /*
   * Generate the ten frames belonging to the currently
   * selected one-second section.
   */
  async function generateFramesForCurrentSecond() {
    const video = videoRef.current;

    if (!video || !duration) return;

    setIsGenerating(true);
    setError("");
    setGenerationProgress(0);
    setFrames([]);

    try {
      const generatedFrames = [];

      const sectionStart = currentSecondStart;

      for (let index = 0; index < FRAMES_PER_SECOND; index++) {
        const offset = index / FRAMES_PER_SECOND;

        let timestamp = sectionStart + offset;

        /*
         * Don't seek beyond the actual end of the video.
         */
        if (timestamp >= duration) {
          timestamp = Math.max(duration - 0.001, 0);
        }

        await seekVideo(video, timestamp);

        const blob = await captureCurrentFrame(video);

        const frameUrl = URL.createObjectURL(blob);

        generatedFrames.push({
          id: `${currentSecond}-${index}-${timestamp}`,
          index,
          timestamp,
          blob,
          url: frameUrl,
        });

        setGenerationProgress(
          Math.round(
            ((index + 1) / FRAMES_PER_SECOND) * 100
          )
        );
      }

      setFrames(generatedFrames);
    } catch (generationError) {
      console.error(generationError);

      setError(
        "Something went wrong while extracting the frames. Try again with this video."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  /*
   * Change the active one-second section.
   */
  function changeSecond(newSecond) {
    const safeSecond = Math.min(
      Math.max(newSecond, 0),
      totalSeconds - 1
    );

    setCurrentSecond(safeSecond);
    setFrames([]);
    setGenerationProgress(0);
    setError("");

    if (videoRef.current) {
      videoRef.current.currentTime = safeSecond;
    }
  }

  /*
   * Timeline slider.
   */
  function handleTimelineChange(event) {
    const timestamp = Number(event.target.value);

    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
    }

    const second = Math.min(
      Math.floor(timestamp),
      totalSeconds - 1
    );

    if (second !== currentSecond) {
      setCurrentSecond(second);
      setFrames([]);
    }
  }

  /*
   * Select or deselect a frame.
   */
  function toggleFrameSelection(frame) {
    setSelectedFrames((previous) => {
      const exists = previous.some(
        (selected) => selected.id === frame.id
      );

      if (exists) {
        return previous.filter(
          (selected) => selected.id !== frame.id
        );
      }

      return [...previous, frame];
    });
  }

  /*
   * Select all frames currently visible.
   */
  function selectAllCurrentFrames() {
    setSelectedFrames((previous) => {
      const newSelections = frames.filter(
        (frame) =>
          !previous.some(
            (selected) => selected.id === frame.id
          )
      );

      return [...previous, ...newSelections];
    });
  }

  /*
   * Deselect all currently visible frames.
   */
  function deselectCurrentFrames() {
    const currentIds = new Set(
      frames.map((frame) => frame.id)
    );

    setSelectedFrames((previous) =>
      previous.filter(
        (frame) => !currentIds.has(frame.id)
      )
    );
  }

  /*
   * Shuffle the order of the displayed frames.
   */
  function shuffleCurrentFrames() {
    setFrames((previous) => {
      const shuffled = [...previous];

      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(
          Math.random() * (index + 1)
        );

        [shuffled[index], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[index],
        ];
      }

      return shuffled;
    });
  }

  /*
   * Download one individual frame.
   */
  function downloadFrame(frame) {
    const link = document.createElement("a");

    link.href = frame.url;
    link.download = `omogiwa-frame-${formatTime(
      frame.timestamp
    ).replace(/:/g, "-")}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /*
   * Download all selected frames as a ZIP.
   */
  async function downloadSelectedFrames() {
    if (selectedFrames.length === 0) return;

    setIsDownloading(true);
    setError("");

    try {
      const zip = new JSZip();

      selectedFrames.forEach((frame, index) => {
        const timestamp = formatTime(frame.timestamp).replace(
          /:/g,
          "-"
        );

        zip.file(
          `frame-${String(index + 1).padStart(
            3,
            "0"
          )}-${timestamp}.jpg`,
          frame.blob
        );
      });

      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "STORE",
      });

      const downloadUrl = URL.createObjectURL(zipBlob);

      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = "omogiwa-selected-frames.zip";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(downloadUrl);
    } catch (downloadError) {
      console.error(downloadError);

      setError(
        "The selected frames could not be packaged for download."
      );
    } finally {
      setIsDownloading(false);
    }
  }

  /*
   * Clear all selected frames.
   */
  function clearAllSelections() {
    setSelectedFrames([]);
  }

  return (
    <div
      id="omogiwa-frame-picker-app"
      className="omogiwa-frame-picker-app"
    >
      <header
        id="omogiwa-frame-picker-header"
        className="omogiwa-frame-picker-header"
      >
        <div
          id="omogiwa-frame-picker-heading-group"
          className="omogiwa-frame-picker-heading-group"
        >
          <span
            id="omogiwa-frame-picker-eyebrow"
            className="omogiwa-frame-picker-eyebrow"
          >
            OMOGIWA / TOOL
          </span>

          <h1
            id="omogiwa-frame-picker-title"
            className="omogiwa-frame-picker-title"
          >
            Video Frame Picker
          </h1>

          <p
            id="omogiwa-frame-picker-description"
            className="omogiwa-frame-picker-description"
          >
            Turn a video into individual moments. Pick the frames
            you want and download them at the video's original
            resolution.
          </p>
        </div>

        {!videoFile && (
          <label
            htmlFor="omogiwa-frame-picker-file-input"
            id="omogiwa-frame-picker-main-upload"
            className="omogiwa-frame-picker-main-upload"
          >
            <span>Choose a video</span>
            <small>MP4, MOV, WebM and other browser-supported formats</small>
          </label>
        )}

        <input
          id="omogiwa-frame-picker-file-input"
          className="omogiwa-frame-picker-file-input"
          type="file"
          accept="video/*"
          onChange={handleVideoSelect}
        />
      </header>

      {error && (
        <div
          id="omogiwa-frame-picker-error"
          className="omogiwa-frame-picker-error"
          role="alert"
        >
          {error}
        </div>
      )}

      {videoFile && (
        <section
          id="omogiwa-frame-picker-workspace"
          className="omogiwa-frame-picker-workspace"
        >
          <div
            id="omogiwa-frame-picker-video-section"
            className="omogiwa-frame-picker-video-section"
          >
            <div
              id="omogiwa-frame-picker-video-topbar"
              className="omogiwa-frame-picker-video-topbar"
            >
              <div>
                <span className="omogiwa-frame-picker-file-label">
                  Current video
                </span>

                <strong className="omogiwa-frame-picker-file-name">
                  {videoFile.name}
                </strong>
              </div>

              <button
                id="omogiwa-frame-picker-reset"
                className="omogiwa-frame-picker-secondary-button"
                type="button"
                onClick={resetTool}
              >
                Change video
              </button>
            </div>

            <div
              id="omogiwa-frame-picker-video-container"
              className="omogiwa-frame-picker-video-container"
            >
              <video
                ref={videoRef}
                id="omogiwa-frame-picker-video"
                className="omogiwa-frame-picker-video"
                src={videoUrl}
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={handleLoadedMetadata}
              />
            </div>

            {duration > 0 && (
              <>
                <div
                  id="omogiwa-frame-picker-video-info"
                  className="omogiwa-frame-picker-video-info"
                >
                  <div>
                    <span>Duration</span>
                    <strong>{formatTime(duration)}</strong>
                  </div>

                  <div>
                    <span>Resolution</span>
                    <strong>
                      {videoWidth} × {videoHeight}
                    </strong>
                  </div>

                  <div>
                    <span>Frames / second</span>
                    <strong>{FRAMES_PER_SECOND}</strong>
                  </div>
                </div>

                <div
                  id="omogiwa-frame-picker-timeline"
                  className="omogiwa-frame-picker-timeline"
                >
                  <div className="omogiwa-frame-picker-timeline-labels">
                    <span>
                      {formatTime(
                        videoRef.current?.currentTime || 0
                      )}
                    </span>

                    <span>{formatTime(duration)}</span>
                  </div>

                  <input
                    id="omogiwa-frame-picker-timeline-input"
                    className="omogiwa-frame-picker-timeline-input"
                    type="range"
                    min="0"
                    max={duration}
                    step="0.01"
                    defaultValue="0"
                    onChange={handleTimelineChange}
                  />
                </div>
              </>
            )}
          </div>

          {duration > 0 && (
            <section
              id="omogiwa-frame-picker-section-controls"
              className="omogiwa-frame-picker-section-controls"
            >
              <div
                id="omogiwa-frame-picker-section-heading"
                className="omogiwa-frame-picker-section-heading"
              >
                <div>
                  <span className="omogiwa-frame-picker-section-label">
                    ONE-SECOND SECTION
                  </span>

                  <h2>
                    {formatTime(currentSecondStart)}{" "}
                    <span>—</span>{" "}
                    {formatTime(currentSecondEnd)}
                  </h2>
                </div>

                <div className="omogiwa-frame-picker-section-navigation">
                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    disabled={currentSecond === 0 || isGenerating}
                    onClick={() =>
                      changeSecond(currentSecond - 1)
                    }
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    disabled={
                      currentSecond >= totalSeconds - 1 ||
                      isGenerating
                    }
                    onClick={() =>
                      changeSecond(currentSecond + 1)
                    }
                  >
                    Next →
                  </button>
                </div>
              </div>

              <div
                id="omogiwa-frame-picker-section-selector"
                className="omogiwa-frame-picker-section-selector"
              >
                <input
                  id="omogiwa-frame-picker-second-slider"
                  className="omogiwa-frame-picker-second-slider"
                  type="range"
                  min="0"
                  max={Math.max(totalSeconds - 1, 0)}
                  step="1"
                  value={currentSecond}
                  disabled={isGenerating}
                  onChange={(event) =>
                    changeSecond(Number(event.target.value))
                  }
                />

                <div className="omogiwa-frame-picker-second-count">
                  Section {currentSecond + 1} of {totalSeconds}
                </div>
              </div>

              <button
                id="omogiwa-frame-picker-generate-button"
                className="omogiwa-frame-picker-primary-button"
                type="button"
                disabled={isGenerating}
                onClick={generateFramesForCurrentSecond}
              >
                {isGenerating
                  ? `Extracting ${generationProgress}%`
                  : `Extract 10 frames from ${formatTime(
                      currentSecondStart
                    )}`}
              </button>

              {isGenerating && (
                <div
                  id="omogiwa-frame-picker-progress"
                  className="omogiwa-frame-picker-progress"
                >
                  <div
                    className="omogiwa-frame-picker-progress-bar"
                    style={{
                      width: `${generationProgress}%`,
                    }}
                  />
                </div>
              )}
            </section>
          )}

          {frames.length > 0 && (
            <section
              id="omogiwa-frame-picker-results"
              className="omogiwa-frame-picker-results"
            >
              <div
                id="omogiwa-frame-picker-results-header"
                className="omogiwa-frame-picker-results-header"
              >
                <div>
                  <span className="omogiwa-frame-picker-section-label">
                    EXTRACTED FRAMES
                  </span>

                  <h2>
                    {frames.length} moments
                  </h2>
                </div>

                <div
                  id="omogiwa-frame-picker-result-actions"
                  className="omogiwa-frame-picker-result-actions"
                >
                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    onClick={shuffleCurrentFrames}
                  >
                    Shuffle
                  </button>

                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    onClick={
                      allCurrentFramesSelected
                        ? deselectCurrentFrames
                        : selectAllCurrentFrames
                    }
                  >
                    {allCurrentFramesSelected
                      ? "Deselect all"
                      : "Select all"}
                  </button>
                </div>
              </div>

              <div
                id="omogiwa-frame-picker-grid"
                className="omogiwa-frame-picker-grid"
              >
                {frames.map((frame) => {
                  const isSelected = selectedFrames.some(
                    (selected) =>
                      selected.id === frame.id
                  );

                  return (
                    <article
                      key={frame.id}
                      className={`omogiwa-frame-picker-card ${
                        isSelected
                          ? "omogiwa-frame-picker-card-selected"
                          : ""
                      }`}
                    >
                      <button
                        type="button"
                        className="omogiwa-frame-picker-frame-button"
                        onClick={() =>
                          toggleFrameSelection(frame)
                        }
                        aria-label={`${
                          isSelected
                            ? "Deselect"
                            : "Select"
                        } frame at ${formatTime(
                          frame.timestamp
                        )}`}
                      >
                        <img
                          src={frame.url}
                          alt={`Video frame at ${formatTime(
                            frame.timestamp
                          )}`}
                          loading="lazy"
                        />

                        <span className="omogiwa-frame-picker-selection-indicator">
                          {isSelected ? "✓" : ""}
                        </span>
                      </button>

                      <div className="omogiwa-frame-picker-card-footer">
                        <span>
                          {formatTime(frame.timestamp)}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            downloadFrame(frame)
                          }
                          aria-label={`Download frame at ${formatTime(
                            frame.timestamp
                          )}`}
                        >
                          Download
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <canvas
            ref={canvasRef}
            id="omogiwa-frame-picker-processing-canvas"
            className="omogiwa-frame-picker-processing-canvas"
            aria-hidden="true"
          />

          <section
            id="omogiwa-frame-picker-download-panel"
            className="omogiwa-frame-picker-download-panel"
          >
            <div>
              <span className="omogiwa-frame-picker-section-label">
                YOUR SELECTION
              </span>

              <strong>
                {selectedCount}{" "}
                {selectedCount === 1 ? "frame" : "frames"}
              </strong>
            </div>

            <div className="omogiwa-frame-picker-download-actions">
              <button
                type="button"
                className="omogiwa-frame-picker-secondary-button"
                disabled={selectedCount === 0}
                onClick={clearAllSelections}
              >
                Clear selection
              </button>

              <button
                type="button"
                className="omogiwa-frame-picker-primary-button"
                disabled={
                  selectedCount === 0 || isDownloading
                }
                onClick={downloadSelectedFrames}
              >
                {isDownloading
                  ? "Preparing ZIP…"
                  : "Download selected frames"}
              </button>
            </div>
          </section>

          <div
            id="omogiwa-frame-picker-privacy"
            className="omogiwa-frame-picker-privacy"
          >
            <strong>Your video stays on your device.</strong>
            <span>
              Frame extraction happens locally in your browser.
              Your video is not uploaded to Omogiwa.
            </span>
          </div>
        </section>
      )}
    </div>
  );
}