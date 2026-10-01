"use client";

import OmoGiwaExperience from "../../../components/experiences/omogiwa/OmoGiwaExperience";
import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import "./frame-picker.css";
const FRAMES_PER_SECOND = 10;
const JPEG_QUALITY = 0.95;
const STEPS = ["Upload video", "Choose a moment", "Pick and download"];

const ICON_PATHS = {
  upload: "M12 16V4m0 0L7 9m5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3",
  check: "M5 12.5l4.5 4.5L19 7.5",
  close: "M6 6l12 12M18 6L6 18",
  download: "M12 4v12m0 0l-5-5m5 5l5-5M4 20h16",
  prev: "M15 6l-6 6 6 6",
  next: "M9 6l6 6-6 6",
};

function Icon({ name }) {
  return (
    <svg
      className="omogiwa-frame-picker-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

/* Format seconds as mm:ss (or hh:mm:ss). Pass withTenths for mm:ss.t */
function formatTime(seconds, withTenths = false) {
  const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  const whole = Math.floor(safe);
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const secs = whole % 60;
  const pad = (value) => String(value).padStart(2, "0");

  const base =
    hours > 0
      ? `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
      : `${pad(minutes)}:${pad(secs)}`;

  if (!withTenths) return base;

  const tenth = Math.min(Math.floor((safe - whole) * 10 + 1e-6), 9);
  return `${base}.${tenth}`;
}

function fileSafeTime(seconds) {
  return formatTime(seconds, true).replace(/[:.]/g, "-");
}

function revokeFrameUrls(list) {
  list.forEach((frame) => URL.revokeObjectURL(frame.url));
}

/* Seek the video and wait until the browser has the frame ready. */
function seekVideo(video, timestamp) {
  return new Promise((resolve, reject) => {
    const target = Math.min(
      Math.max(timestamp, 0),
      Math.max(video.duration - 0.001, 0)
    );

    // "seeked" never fires if we are already at the target time.
    if (Math.abs(video.currentTime - target) < 0.0005 && video.readyState >= 2) {
      resolve();
      return;
    }

    const cleanup = () => {
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
    const handleSeeked = () => {
      cleanup();
      resolve();
    };
    const handleError = () => {
      cleanup();
      reject(new Error("The browser could not seek to this frame."));
    };

    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("error", handleError);
    video.currentTime = target;
  });
}

/* Draw the current video frame to the canvas and return it as a JPEG blob. */
function captureFrame(video, canvas) {
  if (!canvas) throw new Error("Frame canvas is unavailable.");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d", { alpha: false });
  if (!context) throw new Error("The browser could not create a canvas context.");

  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) =>
        blob ? resolve(blob) : reject(new Error("Could not create the frame image.")),
      "image/jpeg",
      JPEG_QUALITY
    );
  });
}

function triggerDownload(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function FramePickerClient() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const framesRef = useRef([]);
  const selectedRef = useRef([]);

  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState(0);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
  const [currentSecond, setCurrentSecond] = useState(0);
  const [playhead, setPlayhead] = useState(0);
  const [frames, setFrames] = useState([]);
  const [selectedFrames, setSelectedFrames] = useState([]);
  const [previewId, setPreviewId] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  /* ---------- Derived values ---------- */

  const totalSeconds = Math.max(1, Math.ceil(duration));
  const sectionEnd = Math.min(currentSecond + 1, duration);
  const isReady = duration > 0;

  // The last section of a video can be shorter than one second.
  const framesInSection = Math.min(
    FRAMES_PER_SECOND,
    Math.max(
      1,
      Math.ceil((duration - currentSecond) * FRAMES_PER_SECOND - 1e-6)
    )
  );

  const selectedById = useMemo(
    () => new Map(selectedFrames.map((frame) => [frame.id, frame])),
    [selectedFrames]
  );
  const selectedCount = selectedFrames.length;
  const allCurrentSelected =
    frames.length > 0 && frames.every((frame) => selectedById.has(frame.id));

  const step = !videoFile ? 1 : frames.length === 0 ? 2 : 3;
  const previewIndex = frames.findIndex((frame) => frame.id === previewId);
  const previewFrame = previewIndex >= 0 ? frames[previewIndex] : null;
  const aspectRatio =
    videoSize.width && videoSize.height
      ? `${videoSize.width} / ${videoSize.height}`
      : "16 / 9";

  /* ---------- Effects ---------- */

  // Keep refs in sync so the unmount cleanup can release every frame URL.
  useEffect(() => {
    framesRef.current = frames;
  }, [frames]);

  useEffect(() => {
    selectedRef.current = selectedFrames;
  }, [selectedFrames]);

  useEffect(() => {
    return () => {
      revokeFrameUrls([
        ...new Set([...framesRef.current, ...selectedRef.current]),
      ]);
    };
  }, []);

  // Create and release the temporary URL for the chosen video.
  useEffect(() => {
    if (!videoFile) {
      setVideoUrl("");
      return;
    }

    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  // Preview keyboard controls: Escape closes, arrows move between frames.
  useEffect(() => {
    if (previewId === null) return;

    const index = frames.findIndex((frame) => frame.id === previewId);

    function handleKeyDown(event) {
      if (event.key === "Escape") setPreviewId(null);
      if (event.key === "ArrowLeft" && index > 0) {
        setPreviewId(frames[index - 1].id);
      }
      if (event.key === "ArrowRight" && index < frames.length - 1) {
        setPreviewId(frames[index + 1].id);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewId, frames]);

  /* ---------- Loading a video ---------- */

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function loadFile(file) {
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setError("That file is not a video. Choose an MP4, MOV or WebM file.");
      return;
    }

    revokeFrameUrls([...new Set([...frames, ...selectedFrames])]);

    setFrames([]);
    setSelectedFrames([]);
    setPreviewId(null);
    setDuration(0);
    setVideoSize({ width: 0, height: 0 });
    setCurrentSecond(0);
    setPlayhead(0);
    setProgress(0);
    setError("");
    setVideoFile(file);
  }

  function handleFileInput(event) {
    loadFile(event.target.files?.[0]);
    event.target.value = ""; // allows choosing the same file again
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    loadFile(event.dataTransfer.files?.[0]);
  }

  function handleLoadedMetadata(event) {
    const video = event.currentTarget;

    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      setError(
        "The length of this video could not be read. Try exporting it as MP4."
      );
      return;
    }

    setDuration(video.duration);
    setVideoSize({ width: video.videoWidth, height: video.videoHeight });
  }

  function handleVideoError() {
    setError(
      "Your browser cannot play this video. Try an MP4 (H.264) or WebM file."
    );
  }

  function handleTimeUpdate(event) {
    if (isGenerating) return; // the video seeks on its own while extracting
    setPlayhead(event.currentTarget.currentTime);
    <OmoGiwaExperience />
  }

  /* ---------- Choosing a section ---------- */

  // Frames that are not selected are no longer needed once hidden.
  function discardDisplayedFrames() {
    const kept = new Set(selectedFrames);
    revokeFrameUrls(frames.filter((frame) => !kept.has(frame)));
    setFrames([]);
    setPreviewId(null);
  }

  function changeSecond(newSecond) {
    const safeSecond = Math.min(Math.max(newSecond, 0), totalSeconds - 1);

    discardDisplayedFrames();
    setCurrentSecond(safeSecond);
    setPlayhead(safeSecond);
    setProgress(0);
    setError("");

    if (videoRef.current) {
      videoRef.current.currentTime = safeSecond;
    }
  }

  function jumpToPlayhead() {
    changeSecond(Math.floor(videoRef.current?.currentTime ?? 0));
  }

  function handleTimelineChange(event) {
    const timestamp = Number(event.target.value);
    const second = Math.min(Math.floor(timestamp), totalSeconds - 1);

    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
    }
    setPlayhead(timestamp);

    if (second !== currentSecond) {
      discardDisplayedFrames();
      setCurrentSecond(second);
      setProgress(0);
    }
  }

  /* ---------- Extracting frames ---------- */

  async function generateFrames() {
    const video = videoRef.current;
    if (!video || !isReady || isGenerating) return;

    setIsGenerating(true);
    setError("");
    setProgress(0);
    discardDisplayedFrames();
    video.pause();

    const generated = [];
    const created = [];

    try {
      for (let index = 0; index < framesInSection; index++) {
        const timestamp = currentSecond + index / FRAMES_PER_SECOND;
        const id = `${currentSecond}-${index}`;
        const alreadySelected = selectedById.get(id);

        if (alreadySelected) {
          generated.push(alreadySelected);
        } else {
          await seekVideo(video, timestamp);
          const blob = await captureFrame(video, canvasRef.current);
          const frame = { id, timestamp, blob, url: URL.createObjectURL(blob) };
          created.push(frame);
          generated.push(frame);
        }

        setProgress(Math.round(((index + 1) / framesInSection) * 100));
      }

      setFrames(generated);
      await seekVideo(video, currentSecond).catch(() => {});
      setPlayhead(currentSecond);
    } catch (generationError) {
      console.error(generationError);
      revokeFrameUrls(created);
      setError(
        "Frame extraction stopped before it finished. Press Extract to try again."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  /* ---------- Selecting frames ---------- */

  function toggleFrameSelection(frame) {
    setSelectedFrames((previous) =>
      previous.some((selected) => selected.id === frame.id)
        ? previous.filter((selected) => selected.id !== frame.id)
        : [...previous, frame]
    );
  }

  function selectAllCurrentFrames() {
    setSelectedFrames((previous) => [
      ...previous,
      ...frames.filter(
        (frame) => !previous.some((selected) => selected.id === frame.id)
      ),
    ]);
  }

  function deselectCurrentFrames() {
    const currentIds = new Set(frames.map((frame) => frame.id));
    setSelectedFrames((previous) =>
      previous.filter((frame) => !currentIds.has(frame.id))
    );
  }

  function removeSelectedFrame(frame) {
    setSelectedFrames((previous) =>
      previous.filter((selected) => selected.id !== frame.id)
    );
    if (!frames.includes(frame)) revokeFrameUrls([frame]);
  }

  function clearAllSelections() {
    revokeFrameUrls(selectedFrames.filter((frame) => !frames.includes(frame)));
    setSelectedFrames([]);
  }

  function shuffleCurrentFrames() {
    setFrames((previous) => {
      const shuffled = [...previous];
      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[index],
        ];
      }
      return shuffled;
    });
  }

  function stepPreview(direction) {
    const next = frames[previewIndex + direction];
    if (next) setPreviewId(next.id);
  }

  /* ---------- Downloading ---------- */

  function downloadFrame(frame) {
    triggerDownload(frame.url, `omogiwa-frame-${fileSafeTime(frame.timestamp)}.jpg`);
  }

  async function downloadSelectedFrames() {
    if (selectedCount === 0) return;

    setIsDownloading(true);
    setError("");

    try {
      const zip = new JSZip();

      selectedFrames.forEach((frame, index) => {
        const number = String(index + 1).padStart(3, "0");
        zip.file(`frame-${number}-${fileSafeTime(frame.timestamp)}.jpg`, frame.blob);
      });

      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "STORE", // JPEGs are already compressed
      });

      const url = URL.createObjectURL(zipBlob);
      triggerDownload(url, "omogiwa-selected-frames.zip");
      URL.revokeObjectURL(url);
    } catch (downloadError) {
      console.error(downloadError);
      setError("The ZIP file could not be created. Try again with fewer frames.");
    } finally {
      setIsDownloading(false);
    }
  }

  /* ---------- Render ---------- */

  return (
    <div id="omogiwa-frame-picker-app" className="omogiwa-frame-picker-app">
      <header className="omogiwa-frame-picker-header">
        <div className="omogiwa-frame-picker-heading-group">
          <h1 className="omogiwa-frame-picker-title">Video Frame Picker</h1>
          <p className="omogiwa-frame-picker-description">
            Turn a video into individual moments. Pick the frames you want and
            download them at the video&apos;s original resolution.
          </p>
        </div>

        <ol className="omogiwa-frame-picker-steps" aria-label="Progress">
          {STEPS.map((label, index) => {
            const number = index + 1;
            const state =
              step === number ? "is-active" : step > number ? "is-done" : "";

            return (
              <li
                key={label}
                className={`omogiwa-frame-picker-step ${state}`}
                aria-current={step === number ? "step" : undefined}
              >
                <span className="omogiwa-frame-picker-step-number">
                  {step > number ? <Icon name="check" /> : number}
                </span>
                {label}
              </li>
            );
          })}
        </ol>
      </header>

      <input
        ref={fileInputRef}
        id="omogiwa-frame-picker-file-input"
        className="omogiwa-frame-picker-file-input"
        type="file"
        accept="video/*"
        tabIndex={-1}
        onChange={handleFileInput}
      />

      {error && (
        <div className="omogiwa-frame-picker-error" role="alert">
          {error}
        </div>
      )}

      {!videoFile && (
        <button
          type="button"
          id="omogiwa-frame-picker-main-upload"
          className={`omogiwa-frame-picker-dropzone${
            isDragging ? " is-dragging" : ""
          }`}
          onClick={openFilePicker}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <span className="omogiwa-frame-picker-dropzone-icon">
            <Icon name="upload" />
          </span>
          <span className="omogiwa-frame-picker-dropzone-title">
            Drop a video here, or click to browse
          </span>
          <span className="omogiwa-frame-picker-dropzone-hint">
            MP4, MOV, WebM and other formats your browser can play
          </span>
        </button>
      )}

      {videoFile && (
        <section
          id="omogiwa-frame-picker-workspace"
          className="omogiwa-frame-picker-workspace"
        >
          {/* Player and timeline */}
          <div className="omogiwa-frame-picker-player">
            <div className="omogiwa-frame-picker-player-topbar">
              <div className="omogiwa-frame-picker-file-info">
                <strong className="omogiwa-frame-picker-file-name">
                  {videoFile.name}
                </strong>
                {isReady && (
                  <span className="omogiwa-frame-picker-file-meta">
                    {formatTime(duration)} long, {videoSize.width} ×{" "}
                    {videoSize.height}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="omogiwa-frame-picker-secondary-button"
                disabled={isGenerating}
                onClick={openFilePicker}
              >
                Change video
              </button>
            </div>

<div className="omogiwa-frame-picker-video-container"
  style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}
>
  <video
    ref={videoRef}
    id="omogiwa-frame-picker-video"
    className="omogiwa-frame-picker-video"
    style={{
      display: "block",
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      maxHeight: "60vh",
    }}
    src={videoUrl}
    controls
    playsInline
    preload="metadata"
    onLoadedMetadata={handleLoadedMetadata}
    onTimeUpdate={handleTimeUpdate}
    onSeeked={handleTimeUpdate}
    onError={handleVideoError}
  />
</div>


            {isReady && (
              <div className="omogiwa-frame-picker-timeline">
                <div className="omogiwa-frame-picker-timeline-labels">
                  <strong>{formatTime(playhead, true)}</strong>
                  <span>{formatTime(duration)}</span>
                </div>

                <div className="omogiwa-frame-picker-timeline-track">
                  <div className="omogiwa-frame-picker-timeline-rail">
                    <div
                      className="omogiwa-frame-picker-timeline-section"
                      style={{
                        left: `${(currentSecond / duration) * 100}%`,
                        width: `${((sectionEnd - currentSecond) / duration) * 100}%`,
                      }}
                    />
                  </div>
                  <input
                    id="omogiwa-frame-picker-timeline-input"
                    className="omogiwa-frame-picker-timeline-input"
                    type="range"
                    min="0"
                    max={duration}
                    step="0.01"
                    value={playhead}
                    disabled={isGenerating}
                    aria-label="Video timeline"
                    onChange={handleTimelineChange}
                  />
                </div>

                <p className="omogiwa-frame-picker-timeline-legend">
                  The purple bar marks the one-second section that will be
                  extracted.
                </p>
              </div>
            )}
          </div>

          {/* Section controls */}
          <aside
            id="omogiwa-frame-picker-section-controls"
            className="omogiwa-frame-picker-controls"
          >
            {!isReady ? (
              <p className="omogiwa-frame-picker-loading">Reading video…</p>
            ) : (
              <>
                <span className="omogiwa-frame-picker-section-label">
                  Selected one-second section
                </span>
                <h2 className="omogiwa-frame-picker-section-time">
                  {formatTime(currentSecond)}
                  <span>–</span>
                  {formatTime(sectionEnd)}
                </h2>
                <p className="omogiwa-frame-picker-section-count">
                  Section {currentSecond + 1} of {totalSeconds}
                </p>

                <div className="omogiwa-frame-picker-section-navigation">
                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    disabled={currentSecond === 0 || isGenerating}
                    onClick={() => changeSecond(currentSecond - 1)}
                  >
                    <Icon name="prev" />
                    Previous
                  </button>
                  <button
                    type="button"
                    className="omogiwa-frame-picker-secondary-button"
                    disabled={currentSecond >= totalSeconds - 1 || isGenerating}
                    onClick={() => changeSecond(currentSecond + 1)}
                  >
                    Next
                    <Icon name="next" />
                  </button>
                </div>

                <button
                  type="button"
                  className="omogiwa-frame-picker-secondary-button omogiwa-frame-picker-playhead-button"
                  disabled={isGenerating}
                  onClick={jumpToPlayhead}
                >
                  Use the video&apos;s current position
                </button>

                <button
                  id="omogiwa-frame-picker-generate-button"
                  className="omogiwa-frame-picker-primary-button omogiwa-frame-picker-large"
                  type="button"
                  disabled={isGenerating}
                  onClick={generateFrames}
                >
                  {isGenerating
                    ? `Extracting… ${progress}%`
                    : `Extract ${framesInSection} frames from ${formatTime(currentSecond)}`}
                </button>

                {isGenerating && (
                  <div
                    className="omogiwa-frame-picker-progress"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  >
                    <div
                      className="omogiwa-frame-picker-progress-bar"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <p className="omogiwa-frame-picker-controls-note">
                  Tip: pause the video on the moment you want, then choose
                  &ldquo;Use the video&apos;s current position&rdquo;.
                </p>
              </>
            )}
          </aside>

          {/* Extracted frames */}
          {isReady && (
            <section
              id="omogiwa-frame-picker-results"
              className="omogiwa-frame-picker-results"
            >
              <div className="omogiwa-frame-picker-results-header">
                <div>
                  <h2 className="omogiwa-frame-picker-results-title">
                    Extracted frames
                  </h2>
                  <p className="omogiwa-frame-picker-results-subtitle">
                    {frames.length > 0
                      ? `${frames.length} frames from ${formatTime(currentSecond)}. Click a frame to select it.`
                      : "Frames you extract will appear here."}
                  </p>
                </div>

                {frames.length > 0 && (
                  <div className="omogiwa-frame-picker-result-actions">
                    <button
                      type="button"
                      className="omogiwa-frame-picker-secondary-button"
                      onClick={shuffleCurrentFrames}
                    >
                      Shuffle order
                    </button>
                    <button
                      type="button"
                      className="omogiwa-frame-picker-secondary-button"
                      onClick={
                        allCurrentSelected
                          ? deselectCurrentFrames
                          : selectAllCurrentFrames
                      }
                    >
                      {allCurrentSelected ? "Deselect all" : "Select all"}
                    </button>
                  </div>
                )}
              </div>

              {frames.length === 0 ? (
                <div className="omogiwa-frame-picker-placeholder">
                  {isGenerating
                    ? "Extracting frames…"
                    : "Choose a section, then press Extract."}
                </div>
              ) : (
                <div
                  id="omogiwa-frame-picker-grid"
                  className="omogiwa-frame-picker-grid"
                  style={{ "--fp-aspect": aspectRatio }}
                >
                  {frames.map((frame) => {
                    const isSelected = selectedById.has(frame.id);
                    const label = formatTime(frame.timestamp, true);

                    return (
                      <article
                        key={frame.id}
                        className={`omogiwa-frame-picker-card${
                          isSelected ? " is-selected" : ""
                        }`}
                      >
                        <button
                          type="button"
                          className="omogiwa-frame-picker-frame-button"
                          aria-pressed={isSelected}
                          aria-label={`${isSelected ? "Deselect" : "Select"} frame at ${label}`}
                          onClick={() => toggleFrameSelection(frame)}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={frame.url}
                            alt={`Video frame at ${label}`}
                            loading="lazy"
                          />
                          <span className="omogiwa-frame-picker-selection-indicator">
                            <Icon name="check" />
                          </span>
                        </button>

                        <div className="omogiwa-frame-picker-card-footer">
                          <span className="omogiwa-frame-picker-card-time">
                            {label}
                          </span>
                          <div className="omogiwa-frame-picker-card-actions">
                            <button
                              type="button"
                              aria-label={`Enlarge frame at ${label}`}
                              onClick={() => setPreviewId(frame.id)}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              aria-label={`Download frame at ${label}`}
                              onClick={() => downloadFrame(frame)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          )}
        </section>
      )}

      <canvas
        ref={canvasRef}
        id="omogiwa-frame-picker-processing-canvas"
        className="omogiwa-frame-picker-processing-canvas"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {videoFile && (
        <div
          id="omogiwa-frame-picker-privacy"
          className="omogiwa-frame-picker-privacy"
        >
          <strong>Your video stays on your device.</strong>
          <span>
            Frames are extracted in your browser. Nothing is uploaded to
            Omogiwa.com
          </span>
        </div>
      )}

      {/* Sticky selection bar */}
      {selectedCount > 0 && (
        <section
          id="omogiwa-frame-picker-download-panel"
          className="omogiwa-frame-picker-selection-bar"
          aria-label="Selected frames"
        >
          <div className="omogiwa-frame-picker-selection-summary">
            <strong>
              {selectedCount} {selectedCount === 1 ? "frame" : "frames"} selected
            </strong>
            <span>Downloads as a ZIP at full resolution</span>
          </div>

          <ul className="omogiwa-frame-picker-selection-strip">
            {selectedFrames.map((frame) => (
              <li key={frame.id}>
                <button
                  type="button"
                  className="omogiwa-frame-picker-selection-thumb"
                  aria-label={`Remove frame at ${formatTime(frame.timestamp, true)}`}
                  onClick={() => removeSelectedFrame(frame)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={frame.url} alt="" />
                </button>
              </li>
            ))}
          </ul>

          <div className="omogiwa-frame-picker-selection-actions">
            <button
              type="button"
              className="omogiwa-frame-picker-dark-button"
              onClick={clearAllSelections}
            >
              Clear
            </button>
            <button
              type="button"
              className="omogiwa-frame-picker-primary-button"
              disabled={isDownloading}
              onClick={downloadSelectedFrames}
            >
              <Icon name="download" />
              {isDownloading ? "Preparing ZIP…" : "Download ZIP"}
            </button>
          </div>
        </section>
      )}

      {/* Enlarged frame */}
      {previewFrame && (
        <div
          className="omogiwa-frame-picker-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged frame"
          onClick={() => setPreviewId(null)}
        >
          <div
            className="omogiwa-frame-picker-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="omogiwa-frame-picker-lightbox-header">
              <div>
                <strong>{formatTime(previewFrame.timestamp, true)}</strong>
                <span>
                  Frame {previewIndex + 1} of {frames.length}
                </span>
              </div>
              <button
                type="button"
                className="omogiwa-frame-picker-lightbox-close"
                aria-label="Close preview"
                onClick={() => setPreviewId(null)}
              >
                <Icon name="close" />
              </button>
            </div>

            <div className="omogiwa-frame-picker-lightbox-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewFrame.url}
                alt={`Video frame at ${formatTime(previewFrame.timestamp, true)}`}
              />
            </div>

            <div className="omogiwa-frame-picker-lightbox-footer">
              <div>
                <button
                  type="button"
                  className="omogiwa-frame-picker-secondary-button"
                  disabled={previewIndex === 0}
                  onClick={() => stepPreview(-1)}
                >
                  <Icon name="prev" />
                  Previous
                </button>
                <button
                  type="button"
                  className="omogiwa-frame-picker-secondary-button"
                  disabled={previewIndex === frames.length - 1}
                  onClick={() => stepPreview(1)}
                >
                  Next
                  <Icon name="next" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="omogiwa-frame-picker-secondary-button"
                  onClick={() => downloadFrame(previewFrame)}
                >
                  Save this frame
                </button>
                <button
                  type="button"
                  className="omogiwa-frame-picker-primary-button"
                  onClick={() => toggleFrameSelection(previewFrame)}
                >
                  {selectedById.has(previewFrame.id)
                    ? "Deselect frame"
                    : "Select frame"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}