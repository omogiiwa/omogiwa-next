"use client";

import "./svg-to-png.css";
import { useRef, useState } from "react";

export default function SvgToPngPage() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [originalSvg, setOriginalSvg] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [history, setHistory] = useState([]);

  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);
  const [keepRatio, setKeepRatio] = useState(true);
  const [background, setBackground] = useState("transparent");

  const [isDragging, setIsDragging] = useState(false);

  /*
   * Add unique IDs to SVG elements so we can identify
   * individual vectors when they are clicked.
   */
  const prepareSvg = (svgText) => {
    const parser = new DOMParser();
    const document = parser.parseFromString(svgText, "image/svg+xml");

    const svg = document.documentElement;

    if (!svg || svg.nodeName.toLowerCase() !== "svg") {
      throw new Error("Invalid SVG file.");
    }

    const elements = svg.querySelectorAll(
      "path, circle, rect, ellipse, line, polygon, polyline, text, image, g"
    );

    elements.forEach((element, index) => {
      element.setAttribute("data-svg-id", `vector-${index}`);
    });

    return new XMLSerializer().serializeToString(svg);
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const isSvg =
      selectedFile.type === "image/svg+xml" ||
      selectedFile.name.toLowerCase().endsWith(".svg");

    if (!isSvg) {
      alert("Please select an SVG file.");
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const rawSvg = event.target.result;

        const preparedSvg = prepareSvg(rawSvg);

        setOriginalSvg(preparedSvg);
        setSvgMarkup(preparedSvg);
        setHistory([]);
        setSelectedId(null);

        /*
         * Try to read the SVG's natural dimensions.
         */
        const parser = new DOMParser();
        const document = parser.parseFromString(
          preparedSvg,
          "image/svg+xml"
        );

        const svg = document.documentElement;

        const viewBox = svg.getAttribute("viewBox");
        const svgWidth = parseFloat(svg.getAttribute("width"));
        const svgHeight = parseFloat(svg.getAttribute("height"));

        if (viewBox) {
          const values = viewBox
            .trim()
            .split(/[\s,]+/)
            .map(Number);

          if (values.length === 4) {
            const [, , viewBoxWidth, viewBoxHeight] = values;

            if (viewBoxWidth > 0 && viewBoxHeight > 0) {
              setWidth(Math.round(viewBoxWidth));
              setHeight(Math.round(viewBoxHeight));
            }
          }
        } else if (svgWidth && svgHeight) {
          setWidth(Math.round(svgWidth));
          setHeight(Math.round(svgHeight));
        }
      } catch (error) {
        console.error(error);
        alert("This SVG could not be opened.");
      }
    };

    reader.readAsText(selectedFile);
  };

  const handleInputChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];

    handleFile(droppedFile);
  };

  /*
   * Save the current SVG before making an edit.
   */
  const saveHistory = () => {
    setHistory((previous) => [
      ...previous,
      svgMarkup,
    ]);
  };

  /*
   * Select individual SVG vectors.
   */
  const handleSvgClick = (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const id = target.getAttribute("data-svg-id");

    if (!id) {
      setSelectedId(null);
      return;
    }

    setSelectedId(id);
  };

  /*
   * Delete the currently selected vector.
   */
  const deleteSelected = () => {
    if (!selectedId || !svgMarkup) return;

    const parser = new DOMParser();
    const document = parser.parseFromString(
      svgMarkup,
      "image/svg+xml"
    );

    const selectedElement = document.querySelector(
      `[data-svg-id="${selectedId}"]`
    );

    if (!selectedElement) return;

    saveHistory();

    selectedElement.remove();

    const updatedSvg = new XMLSerializer().serializeToString(
      document.documentElement
    );

    setSvgMarkup(updatedSvg);
    setSelectedId(null);
  };

  /*
   * Undo the latest edit.
   */
  const undo = () => {
    if (!history.length) return;

    const previousSvg = history[history.length - 1];

    setSvgMarkup(previousSvg);
    setHistory((previous) => previous.slice(0, -1));
    setSelectedId(null);
  };

  /*
   * Restore the original SVG.
   */
  const resetSvg = () => {
    if (!originalSvg) return;

    setSvgMarkup(originalSvg);
    setHistory([]);
    setSelectedId(null);
  };

  /*
   * Export the currently edited SVG as PNG.
   */
  const convertToPng = () => {
    if (!svgMarkup) return;

    const parser = new DOMParser();
    const document = parser.parseFromString(
      svgMarkup,
      "image/svg+xml"
    );

    const svg = document.documentElement;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    const serializedSvg = new XMLSerializer().serializeToString(svg);

    const svgBlob = new Blob(
      [serializedSvg],
      { type: "image/svg+xml;charset=utf-8" }
    );

    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = Number(width);
      canvas.height = Number(height);

      const ctx = canvas.getContext("2d");

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height
      );

      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        const filename = file
          ? file.name.replace(/\.svg$/i, "")
          : "omogiwa-export";

        link.href = url;
        link.download = `${filename}.png`;

        link.click();

        URL.revokeObjectURL(url);
        URL.revokeObjectURL(svgUrl);
      }, "image/png");
    };

    img.src = svgUrl;
  };

  return (
    <main className="svg-png-tool">

      {/* HERO */}

      <section className="svg-png-hero">
        <span className="section-label">
          OmoGiwa Tools
        </span>

        <h1>
          SVG → PNG
        </h1>

        <p>
          Edit your SVG, remove unwanted vectors,
          crop your artwork and export it as a
          high-quality PNG.
        </p>
      </section>


      {/* TOOL */}

      <section className="svg-png-toolbox">

        {!svgMarkup && (
          <div
            className={`svg-upload ${
              isDragging ? "is-dragging" : ""
            }`}
            onClick={() =>
              fileInputRef.current?.click()
            }
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".svg,image/svg+xml"
              onChange={handleInputChange}
              hidden
            />

            <div className="svg-upload-icon">
              +
            </div>

            <h2>
              Drop your SVG here
            </h2>

            <p>
              or click to browse your files
            </p>
          </div>
        )}


        {svgMarkup && (
          <>
            {/* EDITOR */}

            <div className="svg-editor">

              <div className="svg-editor-toolbar">

                <div className="svg-editor-tools">

                  <button
                    type="button"
                    className="svg-tool-button active"
                  >
                    Select
                  </button>

                  <button
                    type="button"
                    className="svg-tool-button"
                    disabled
                  >
                    Crop
                  </button>

                </div>

                <div className="svg-editor-actions">

                  <button
                    type="button"
                    className="svg-action-button"
                    onClick={undo}
                    disabled={!history.length}
                  >
                    Undo
                  </button>

                  <button
                    type="button"
                    className="svg-action-button"
                    onClick={resetSvg}
                  >
                    Reset
                  </button>

                </div>

              </div>


              {/* CANVAS */}

              <div className="svg-editor-canvas">

                <div
                  className="svg-editable"
                  onClick={handleSvgClick}
                  dangerouslySetInnerHTML={{
                    __html: svgMarkup,
                  }}
                />

              </div>


              {/* VECTOR CONTROLS */}

              <div className="svg-vector-controls">

                <div>
                  {selectedId ? (
                    <>
                      <strong>
                        Vector selected
                      </strong>

                      <span>
                        {selectedId}
                      </span>
                    </>
                  ) : (
                    <>
                      <strong>
                        Select a vector
                      </strong>

                      <span>
                        Click any shape, path or object
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="svg-delete-button"
                  onClick={deleteSelected}
                  disabled={!selectedId}
                >
                  Delete vector
                </button>

              </div>

            </div>


            {/* EXPORT */}

            <div className="svg-png-editor">

              <div className="svg-settings">

                <span>
                  Export settings
                </span>

                <div className="svg-setting-group">
                  <label htmlFor="svg-width">
                    Width
                  </label>

                  <input
                    id="svg-width"
                    type="number"
                    min="1"
                    value={width}
                    onChange={(event) =>
                      setWidth(
                        Number(event.target.value)
                      )
                    }
                  />
                </div>

                <div className="svg-setting-group">
                  <label htmlFor="svg-height">
                    Height
                  </label>

                  <input
                    id="svg-height"
                    type="number"
                    min="1"
                    value={height}
                    onChange={(event) =>
                      setHeight(
                        Number(event.target.value)
                      )
                    }
                  />
                </div>

                <label className="svg-checkbox">
                  <input
                    type="checkbox"
                    checked={keepRatio}
                    onChange={(event) =>
                      setKeepRatio(
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    Keep aspect ratio
                  </span>
                </label>

                <div className="svg-setting-group">
                  <label htmlFor="svg-background">
                    Background
                  </label>

                  <select
                    id="svg-background"
                    value={background}
                    onChange={(event) =>
                      setBackground(
                        event.target.value
                      )
                    }
                  >
                    <option value="transparent">
                      Transparent
                    </option>

                    <option value="#ffffff">
                      White
                    </option>

                    <option value="#000000">
                      Black
                    </option>
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

          </>
        )}

      </section>


      {/* INFO */}

      <section className="svg-png-info">

        <h2>
          Edit it before you export it.
        </h2>

        <p>
          Select individual SVG elements, remove
          unwanted vectors and prepare your artwork
          before turning it into a PNG.
        </p>

      </section>

    </main>
  );
}