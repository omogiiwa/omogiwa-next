"use client";

import { useState } from "react";

export default function FramePicker() {
  const [videoFile, setVideoFile] = useState(null);

  function handleVideoSelect(event) {
    const file = event.target.files[0];

    if (file) {
      setVideoFile(file);
    }
  }

  return (
    <main>
      <h1>Video Frame Picker</h1>

      <p>Choose a video and extract frames from it.</p>

      <input
        type="file"
        accept="video/*"
        onChange={handleVideoSelect}
      />

      {videoFile && (
        <p>
          Selected video: <strong>{videoFile.name}</strong>
        </p>
      )}
    </main>
  );
}