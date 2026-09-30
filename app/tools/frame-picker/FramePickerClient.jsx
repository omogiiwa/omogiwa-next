"use client";
import { useEffect, useState } from "react";
export default function FramePickerClient() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState(null);
  const [videoWidth, setVideoWidth] = useState(null);
  const [videoHeight, setVideoHeight] = useState(null);
  useEffect(() => {
    if (!videoFile) {
      setVideoUrl("");
      setVideoDuration(null);
      setVideoWidth(null);
      setVideoHeight(null);
      return;
    }
    const temporaryUrl = URL.createObjectURL(videoFile);
    setVideoUrl(temporaryUrl);
    return () => {
      URL.revokeObjectURL(temporaryUrl);
    };
  }, [videoFile]);
  function handleVideoSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setVideoFile(file);
    // Reset old video information.
    setVideoDuration(null);
    setVideoWidth(null);
    setVideoHeight(null);
  }
  function handleVideoMetadata(event) {
    const video = event.currentTarget;
    setVideoDuration(video.duration);
    setVideoWidth(video.videoWidth);
    setVideoHeight(video.videoHeight);
  }
  function formatDuration(seconds) {
    if (!Number.isFinite(seconds)) return "--:--";
    const totalSeconds = Math.floor(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    }
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }
  return (
    <>
      <div
        id="omogiwa-frame-picker-introduction"
        className="omogiwa-frame-picker-introduction"
      >
        <p
          id="omogiwa-frame-picker-eyebrow"
          className="omogiwa-frame-picker-eyebrow"
        >
          OMOGIWA TOOL
        </p>
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
          Extract, explore and select individual frames from your videos
          directly in your browser.
        </p>
      </div>
      <div
        id="omogiwa-frame-picker-upload-area"
        className="omogiwa-frame-picker-upload-area"
      >
        <input
          id="omogiwa-frame-picker-file-input"
          className="omogiwa-frame-picker-file-input"
          type="file"
          accept="video/*"
          onChange={handleVideoSelect}
        />
        <label
          htmlFor="omogiwa-frame-picker-file-input"
          id="omogiwa-frame-picker-upload-button"
          className="omogiwa-frame-picker-upload-button"
        >
          Choose Video
        </label>
        <p
          id="omogiwa-frame-picker-upload-note"
          className="omogiwa-frame-picker-upload-note"
        >
          Select a video from your device to get started.
        </p>
      </div>
      {videoFile && videoUrl && (
        <div
          id="omogiwa-frame-picker-preview"
          className="omogiwa-frame-picker-preview"
        >
          <div
            id="omogiwa-frame-picker-file-name"
            className="omogiwa-frame-picker-file-name"
          >
            {videoFile.name}
          </div>
          <video
            id="omogiwa-frame-picker-video"
            className="omogiwa-frame-picker-video"
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={handleVideoMetadata}
          />
          {videoDuration !== null &&
            videoWidth !== null &&
            videoHeight !== null && (
              <div
                id="omogiwa-frame-picker-metadata"
                className="omogiwa-frame-picker-metadata"
              >
                <div
                  id="omogiwa-frame-picker-duration"
                  className="omogiwa-frame-picker-metadata-item"
                >
                  <span className="omogiwa-frame-picker-metadata-label">
                    Duration
                  </span>
                  <strong className="omogiwa-frame-picker-metadata-value">
                    {formatDuration(videoDuration)}
                  </strong>
                </div>
                <div
                  id="omogiwa-frame-picker-resolution"
                  className="omogiwa-frame-picker-metadata-item"
                >
                  <span className="omogiwa-frame-picker-metadata-label">
                    Resolution
                  </span>
                  <strong className="omogiwa-frame-picker-metadata-value">
                    {videoWidth} × {videoHeight}
                  </strong>
                </div>
              </div>
            )}
        </div>
      )}
      <p
        id="omogiwa-frame-picker-privacy"
        className="omogiwa-frame-picker-privacy"
      >
        Your video is processed locally in your browser. It is not uploaded
        to Omogiwa.com
      </p>
    </>
  );
}