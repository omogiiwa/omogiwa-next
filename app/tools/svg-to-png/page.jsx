"use client";

import { useRef, useState } from "react";

export default function SvgToPngPage() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);
  const [keepRatio, setKeepRatio] = useState(true);
  const [background, setBackground] = useState("transparent");

  const handleFile = (selectedFile) => {
    if (!selectedFile || selectedFile.type !== "image/svg+xml") {
      alert("Please select an SVG file.");
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();

    reader.onload = (event) => {
      setPreview(event.target.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleInputChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleWidthChange = (value) => {
    setWidth(value);

    if (keepRatio && preview) {
      const img = new Image();

      img.onload = () => {
        const ratio = img.height / img.width;
        setHeight(Math.round(value * ratio));
      };

      img.src = preview;
    }
  };

  const convertToPng = () => {
    if (!preview || !file) return;

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = Number(width);
      canvas.height = Number(height);

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        const filename = file.name.replace(/\.svg$/i, "");

        link.href = url;
        link.download = `${filename}.png`;
        link.click();

        URL.revokeObjectURL(url);
      }, "image/png");
    };

    img.src = preview;
  };

  return (
    <main className="svg-png-tool">
      <section className="svg-png-hero">
        <span className="section-label">OmoGiwa Tools</span>

        <h1>SVG → PNG</h1>

        <p>
          Convert your SVG files into high-quality PNG images directly in your
          browser.
        </p>
      </section>

      <section className="svg-png-toolbox">
        <div
          className={`svg-upload ${file ? "has-file" : ""}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,image/svg+xml"
            onChange={handleInputChange}
            hidden
          />

          {!file ? (
            <>
              <div className="svg-upload-icon">+</div>

              <h2>Drop your SVG here</h2>

              <p>or click to browse your files</p>
            </>
          ) : (
            <>
              <div className="svg-upload-icon">✓</div>

              <h2>{file.name}</h2>

              <p>Click to choose another SVG</p>
            </>
          )}
        </div>

        {preview && (
          <div className="svg-png-editor">
            <div className="svg-preview-panel">
              <span>Preview</span>

              <div className="svg-preview">
                <img src={preview} alt="SVG preview" />
              </div>
            </div>

            <div className="svg-settings">
              <span>Export settings</span>

              <div className="svg-setting-group">
                <label htmlFor="svg-width">Width</label>

                <input
                  id="svg-width"
                  type="number"
                  min="1"
                  value={width}
                  onChange={(e) => handleWidthChange(Number(e.target.value))}
                />
              </div>

              <div className="svg-setting-group">
                <label htmlFor="svg-height">Height</label>

                <input
                  id="svg-height"
                  type="number"
                  min="1"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </div>

              <label className="svg-checkbox">
                <input
                  type="checkbox"
                  checked={keepRatio}
                  onChange={(e) => setKeepRatio(e.target.checked)}
                />

                <span>Keep aspect ratio</span>
              </label>

              <div className="svg-setting-group">
                <label htmlFor="svg-background">Background</label>

                <select
                  id="svg-background"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                >
                  <option value="transparent">Transparent</option>
                  <option value="#ffffff">White</option>
                  <option value="#000000">Black</option>
                </select>
              </div>

              <button
                type="button"
                className="svg-download-button"
                onClick={convertToPng}
              >
                Download PNG
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="svg-png-info">
        <h2>Fast, private and browser-based.</h2>

        <p>
          Your SVG is converted directly on your device. Nothing needs to be
          uploaded to a server.
        </p>
      </section>
    </main>
  );
}