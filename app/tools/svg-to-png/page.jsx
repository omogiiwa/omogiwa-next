"use client";

import "./svg-to-png.css";
import { useEffect, useRef, useState } from "react";

export default function SvgToPngPage() {
  const fileInputRef = useRef(null);
  const editorSvgRef = useRef(null);
  const canvasRef = useRef(null);

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

  const [cropMode, setCropMode] = useState(false);
  const [cropStart, setCropStart] = useState(null);
  const [cropRect, setCropRect] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const [zoom, setZoom] = useState(1);

  /*
   * Sanitize imported SVG content.
   *
   * Some SVG files contain links to external resources.
   * Those references can cause the browser to request
   * files from your Next.js site and produce 404 errors.
   */
  const sanitizeSvg = (svgText) => {
    const parser = new DOMParser();

    const parsed = parser.parseFromString(
      svgText,
      "image/svg+xml"
    );

    const parserError = parsed.querySelector("parsererror");

    if (parserError) {
      throw new Error("Invalid SVG file.");
    }

    const svg = parsed.documentElement;

    if (!svg || svg.nodeName.toLowerCase() !== "svg") {
      throw new Error("Invalid SVG file.");
    }

    /*
     * Remove scripts and potentially executable content.
     */
    parsed
      .querySelectorAll("script, foreignObject")
      .forEach((element) => element.remove());

    /*
     * Prevent SVG links from navigating the website.
     */
    parsed.querySelectorAll("a").forEach((element) => {
      element.removeAttribute("href");
      element.removeAttribute("xlink:href");
    });

    /*
     * Remove external image references.
     *
     * Keep:
     * - data:
     * - blob:
     * - internal SVG references beginning with #
     */
    parsed.querySelectorAll("image, use").forEach((element) => {
      ["href", "xlink:href"].forEach((attribute) => {
        const value = element.getAttribute(attribute);

        if (
          value &&
          !value.startsWith("#") &&
          !value.startsWith("data:") &&
          !value.startsWith("blob:")
        ) {
          element.removeAttribute(attribute);
        }
      });
    });

    /*
     * Remove external URL references from inline SVG styles
     * while preserving internal definitions such as url(#gradient).
     */
    parsed.querySelectorAll("[style]").forEach((element) => {
      const style = element.getAttribute("style");

      if (!style) return;

      const cleanedStyle = style.replace(
        /url\((?!['"]?#)(?!['"]?(?:data|blob):)[^)]+\)/gi,
        "none"
      );

      element.setAttribute("style", cleanedStyle);
    });

    /*
     * Add IDs to editable vector elements.
     */
    const editableElements = parsed.querySelectorAll(
      "path, circle, rect, ellipse, line, polygon, polyline, text, image, use, g"
    );

    editableElements.forEach((element, index) => {
      element.setAttribute(
        "data-svg-id",
        `vector-${index}`
      );
    });

    return new XMLSerializer().serializeToString(svg);
  };

  /*
   * Read an SVG's dimensions.
   */
  const readSvgDimensions = (svgText) => {
    const parser = new DOMParser();

    const parsed = parser.parseFromString(
      svgText,
      "image/svg+xml"
    );

    const svg = parsed.documentElement;

    const viewBox = svg.getAttribute("viewBox");

    if (viewBox) {
      const values = viewBox
        .trim()
        .split(/[\s,]+/)
        .map(Number);

      if (values.length === 4) {
        const [, , viewBoxWidth, viewBoxHeight] = values;

        if (viewBoxWidth > 0 && viewBoxHeight > 0) {
          return {
            width: Math.round(viewBoxWidth),
            height: Math.round(viewBoxHeight),
          };
        }
      }
    }

    const svgWidth = parseFloat(
      svg.getAttribute("width")
    );

    const svgHeight = parseFloat(
      svg.getAttribute("height")
    );

    if (svgWidth > 0 && svgHeight > 0) {
      return {
        width: Math.round(svgWidth),
        height: Math.round(svgHeight),
      };
    }

    return {
      width: 1200,
      height: 800,
    };
  };

  /*
   * Upload SVG.
   */
  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const isSvg =
      selectedFile.type === "image/svg+xml" ||
      selectedFile.name.toLowerCase().endsWith(".svg");

    if (!isSvg) {
      alert("Please select an SVG file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const rawSvg = event.target.result;

        const preparedSvg = sanitizeSvg(rawSvg);

        const dimensions =
          readSvgDimensions(preparedSvg);

        setFile(selectedFile);

        setOriginalSvg(preparedSvg);
        setSvgMarkup(preparedSvg);

        setHistory([]);
        setSelectedId(null);

        setWidth(dimensions.width);
        setHeight(dimensions.height);

        setCropMode(false);
        setCropStart(null);
        setCropRect(null);
        setIsCropping(false);
        setZoom(1);
      } catch (error) {
        console.error(error);
        alert(
          "This SVG could not be opened. Please make sure it is a valid SVG file."
        );
      }
    };

    reader.readAsText(selectedFile);
  };

  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0];

    handleFile(selectedFile);

    /*
     * Allows the same file to be selected again.
     */
    event.target.value = "";
  };

  /*
   * Drag and drop.
   */
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

    const droppedFile =
      event.dataTransfer.files?.[0];

    handleFile(droppedFile);
  };

  /*
   * Render the SVG into the isolated editor surface.
   */
  useEffect(() => {
    if (!editorSvgRef.current || !svgMarkup) return;

    const parser = new DOMParser();

    const parsed = parser.parseFromString(
      svgMarkup,
      "image/svg+xml"
    );

    const svg = parsed.documentElement;

    if (!svg || svg.nodeName.toLowerCase() !== "svg") {
      return;
    }

    editorSvgRef.current.innerHTML = "";

    Array.from(svg.attributes).forEach((attribute) => {
      editorSvgRef.current.setAttribute(
        attribute.name,
        attribute.value
      );
    });

    Array.from(svg.childNodes).forEach((node) => {
      editorSvgRef.current.appendChild(
        document.importNode(node, true)
      );
    });
  }, [svgMarkup]);

  /*
   * Save the current state before editing.
   */
  const saveHistory = () => {
    setHistory((previous) => [
      ...previous,
      svgMarkup,
    ]);
  };

  /*
   * Select a vector.
   */
  const handleSvgClick = (event) => {
    if (cropMode) return;

    event.preventDefault();
    event.stopPropagation();

    const target = event.target;

    if (!(target instanceof Element)) {
      setSelectedId(null);
      return;
    }

    const vector = target.closest(
      "[data-svg-id]"
    );

    if (!vector) {
      setSelectedId(null);
      return;
    }

    setSelectedId(
      vector.getAttribute("data-svg-id")
    );
  };

  /*
   * Delete selected vector.
   */
  const deleteSelected = () => {
    if (!selectedId || !svgMarkup) return;

    const parser = new DOMParser();

    const parsed = parser.parseFromString(
      svgMarkup,
      "image/svg+xml"
    );

    const selectedElement =
      parsed.querySelector(
        `[data-svg-id="${selectedId}"]`
      );

    if (!selectedElement) return;

    saveHistory();

    selectedElement.remove();

    const updatedSvg =
      new XMLSerializer().serializeToString(
        parsed.documentElement
      );

    setSvgMarkup(updatedSvg);
    setSelectedId(null);
  };

  /*
   * Undo.
   */
  const undo = () => {
    if (!history.length) return;

    const previousSvg =
      history[history.length - 1];

    setSvgMarkup(previousSvg);

    setHistory((previous) =>
      previous.slice(0, -1)
    );

    setSelectedId(null);
  };

  /*
   * Reset.
   */
  const resetSvg = () => {
    if (!originalSvg) return;

    setSvgMarkup(originalSvg);

    setHistory([]);
    setSelectedId(null);

    setCropMode(false);
    setCropStart(null);
    setCropRect(null);
    setIsCropping(false);

    setZoom(1);

    const dimensions =
      readSvgDimensions(originalSvg);

    setWidth(dimensions.width);
    setHeight(dimensions.height);
  };

  /*
   * Start crop selection.
   */
  const handleCropStart = (event) => {
    if (!cropMode || !canvasRef.current) {
      return;
    }

    const canvas =
      canvasRef.current.getBoundingClientRect();

    const x =
      event.clientX - canvas.left;

    const y =
      event.clientY - canvas.top;

    setCropStart({ x, y });

    setCropRect({
      x,
      y,
      width: 0,
      height: 0,
    });

    setIsCropping(true);
  };

  /*
   * Move crop selection.
   */
  const handleCropMove = (event) => {
    if (
      !cropMode ||
      !isCropping ||
      !cropStart ||
      !canvasRef.current
    ) {
      return;
    }

    const canvas =
      canvasRef.current.getBoundingClientRect();

    const currentX =
      event.clientX - canvas.left;

    const currentY =
      event.clientY - canvas.top;

    const x = Math.min(
      cropStart.x,
      currentX
    );

    const y = Math.min(
      cropStart.y,
      currentY
    );

    const cropWidth = Math.abs(
      currentX - cropStart.x
    );

    const cropHeight = Math.abs(
      currentY - cropStart.y
    );

    setCropRect({
      x,
      y,
      width: cropWidth,
      height: cropHeight,
    });
  };

  /*
   * Finish dragging crop area.
   */
  const handleCropEnd = () => {
    if (!isCropping) return;

    setIsCropping(false);
  };

  /*
   * Apply crop by changing the SVG viewBox.
   *
   * Nothing outside the selected area is destroyed.
   * The artwork is simply reframed to the selected area.
   */
  const applyCrop = () => {
    if (
      !cropRect ||
      cropRect.width < 5 ||
      cropRect.height < 5 ||
      !editorSvgRef.current ||
      !canvasRef.current
    ) {
      return;
    }

    const svg = editorSvgRef.current;

    const svgBounds =
      svg.getBoundingClientRect();

    const canvasBounds =
      canvasRef.current.getBoundingClientRect();

    const viewBox =
      svg.getAttribute("viewBox");

    let viewBoxX = 0;
    let viewBoxY = 0;
    let viewBoxWidth =
      parseFloat(svg.getAttribute("width")) ||
      svgBounds.width;

    let viewBoxHeight =
      parseFloat(svg.getAttribute("height")) ||
      svgBounds.height;

    if (viewBox) {
      const values = viewBox
        .trim()
        .split(/[\s,]+/)
        .map(Number);

      if (values.length === 4) {
        [
          viewBoxX,
          viewBoxY,
          viewBoxWidth,
          viewBoxHeight,
        ] = values;
      }
    }

    /*
     * Position of the SVG relative to the
     * editor canvas.
     */
    const svgLeft =
      svgBounds.left - canvasBounds.left;

    const svgTop =
      svgBounds.top - canvasBounds.top;

    /*
     * Convert screen pixels into SVG units.
     */
    const scaleX =
      viewBoxWidth / svgBounds.width;

    const scaleY =
      viewBoxHeight / svgBounds.height;

    const cropX =
      viewBoxX +
      (cropRect.x - svgLeft) *
        scaleX;

    const cropY =
      viewBoxY +
      (cropRect.y - svgTop) *
        scaleY;

    const cropWidth =
      cropRect.width * scaleX;

    const cropHeight =
      cropRect.height * scaleY;

    if (
      cropWidth <= 0 ||
      cropHeight <= 0
    ) {
      return;
    }

    const parser = new DOMParser();

    const parsed = parser.parseFromString(
      svgMarkup,
      "image/svg+xml"
    );

    const parsedSvg =
      parsed.documentElement;

    saveHistory();

    parsedSvg.setAttribute(
      "viewBox",
      `${cropX} ${cropY} ${cropWidth} ${cropHeight}`
    );

    parsedSvg.setAttribute(
      "preserveAspectRatio",
      "xMidYMid meet"
    );

    const updatedSvg =
      new XMLSerializer().serializeToString(
        parsedSvg
      );

    setSvgMarkup(updatedSvg);

    setWidth(Math.round(cropWidth));
    setHeight(Math.round(cropHeight));

    setCropRect(null);
    setCropStart(null);
    setCropMode(false);
    setZoom(1);
  };

  /*
   * Export edited SVG as PNG.
   */
  const convertToPng = () => {
    if (!svgMarkup) return;

    try {
      const parser = new DOMParser();

      const parsed = parser.parseFromString(
        svgMarkup,
        "image/svg+xml"
      );

      const svg =
        parsed.documentElement;

      svg.setAttribute(
        "width",
        width
      );

      svg.setAttribute(
        "height",
        height
      );

      if (!svg.getAttribute("xmlns")) {
        svg.setAttribute(
          "xmlns",
          "http://www.w3.org/2000/svg"
        );
      }

      const serializedSvg =
        new XMLSerializer().serializeToString(
          svg
        );

      const svgBlob = new Blob(
        [serializedSvg],
        {
          type: "image/svg+xml;charset=utf-8",
        }
      );

      const svgUrl =
        URL.createObjectURL(svgBlob);

      const img = new Image();

      img.onload = () => {
        const canvas =
          document.createElement("canvas");

        canvas.width = Number(width);
        canvas.height = Number(height);

        const ctx =
          canvas.getContext("2d");

        if (!ctx) {
          URL.revokeObjectURL(svgUrl);
          return;
        }

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
          if (!blob) {
            URL.revokeObjectURL(svgUrl);
            return;
          }

          const url =
            URL.createObjectURL(blob);

          const link =
            document.createElement("a");

          const filename = file
            ? file.name.replace(
                /\.svg$/i,
                ""
              )
            : "omogiwa-export";

          link.href = url;
          link.download =
            `${filename}.png`;

          document.body.appendChild(link);

          link.click();

          link.remove();

          URL.revokeObjectURL(url);
          URL.revokeObjectURL(svgUrl);
        }, "image/png");
      };

      img.onerror = () => {
        URL.revokeObjectURL(svgUrl);

        alert(
          "The SVG could not be rendered for export."
        );
      };

      img.src = svgUrl;
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while exporting the PNG."
      );
    }
  };

  /*
   * Keep aspect ratio.
   */
  const handleWidthChange = (value) => {
    const newWidth = Number(value);

    if (!Number.isFinite(newWidth)) return;

    if (
      keepRatio &&
      width > 0 &&
      height > 0
    ) {
      const ratio = height / width;

      setWidth(newWidth);
      setHeight(
        Math.round(newWidth * ratio)
      );

      return;
    }

    setWidth(newWidth);
  };

  const handleHeightChange = (value) => {
    const newHeight = Number(value);

    if (!Number.isFinite(newHeight)) return;

    if (
      keepRatio &&
      width > 0 &&
      height > 0
    ) {
      const ratio = width / height;

      setHeight(newHeight);
      setWidth(
        Math.round(newHeight * ratio)
      );

      return;
    }

    setHeight(newHeight);
  };

  return (
    <main className="svg-png-tool">
      {/* HERO */}

      <section className="svg-png-hero">
        <span className="section-label">
          OmoGiwa Tools
        </span>

        <h1>SVG → PNG</h1>

        <p>
          Edit your SVG, remove unwanted vectors,
          crop your artwork and export it as a
          high-quality PNG.
        </p>
      </section>

      {/* TOOL */}

      <section className="svg-png-toolbox">
        {!svgMarkup && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept=".svg,image/svg+xml"
              hidden
              onChange={handleInputChange}
            />

            <div
              className={`svg-upload ${
                isDragging ? "dragging" : ""
              }`}
              onClick={() =>
                fileInputRef.current?.click()
              }
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
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
          </>
        )}

        {svgMarkup && (
          <div className="svg-editor">
            {/* TOOLBAR */}

            <div className="svg-editor-toolbar">
              <div className="svg-editor-tools">
                <button
                  type="button"
                  className={`svg-tool-button ${
                    !cropMode ? "active" : ""
                  }`}
                  onClick={() => {
                    setCropMode(false);
                    setCropRect(null);
                    setCropStart(null);
                  }}
                >
                  Select
                </button>

                <button
                  type="button"
                  className={`svg-tool-button ${
                    cropMode ? "active" : ""
                  }`}
                  onClick={() => {
                    setCropMode(true);
                    setSelectedId(null);
                    setCropRect(null);
                    setCropStart(null);
                  }}
                >
                  Crop
                </button>

                <button
                  type="button"
                  className="svg-tool-button"
                  onClick={undo}
                  disabled={!history.length}
                >
                  Undo
                </button>
              </div>

              <div className="svg-editor-actions">
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

            <div
              ref={canvasRef}
              className={`svg-editor-canvas ${
                cropMode
                  ? "crop-active"
                  : ""
              }`}
              onPointerDown={
                cropMode
                  ? handleCropStart
                  : undefined
              }
              onPointerMove={
                cropMode
                  ? handleCropMove
                  : undefined
              }
              onPointerUp={
                cropMode
                  ? handleCropEnd
                  : undefined
              }
              onPointerCancel={
                cropMode
                  ? handleCropEnd
                  : undefined
              }
            >
              <div
                className="svg-editable"
                style={{
                  transform: `scale(${zoom})`,
                }}
              >
                <svg
                  ref={editorSvgRef}
                  onClick={handleSvgClick}
                  onPointerDown={(event) => {
                    if (cropMode) {
                      event.stopPropagation();
                    }
                  }}
                />
              </div>

              {cropMode &&
                cropRect && (
                  <div
                    className="svg-crop-selection"
                    style={{
                      left: cropRect.x,
                      top: cropRect.y,
                      width: cropRect.width,
                      height: cropRect.height,
                    }}
                  >
                    <span>
                      {Math.round(
                        cropRect.width
                      )}{" "}
                      ×{" "}
                      {Math.round(
                        cropRect.height
                      )}
                    </span>
                  </div>
                )}
            </div>

            {/* CROP ACTIONS */}

            {cropMode && (
              <div className="svg-crop-actions">
                <span>
                  Drag around the area you
                  want to keep.
                </span>

                <button
                  type="button"
                  onClick={applyCrop}
                  disabled={
                    !cropRect ||
                    cropRect.width < 5 ||
                    cropRect.height < 5
                  }
                >
                  Apply crop
                </button>
              </div>
            )}

            {/* ZOOM */}

            <div className="svg-zoom-controls">
              <button
                type="button"
                onClick={() =>
                  setZoom((value) =>
                    Math.max(
                      0.25,
                      value - 0.25
                    )
                  )
                }
              >
                −
              </button>

              <span>
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={() =>
                  setZoom((value) =>
                    Math.min(
                      4,
                      value + 0.25
                    )
                  )
                }
              >
                +
              </button>

              <button
                type="button"
                onClick={() =>
                  setZoom(1)
                }
              >
                Reset
              </button>
            </div>

            {/* VECTOR CONTROLS */}

            <div className="svg-vector-controls">
              {selectedId ? (
                <div>
                  <strong>
                    Vector selected
                  </strong>

                  <span>
                    {selectedId}
                  </span>
                </div>
              ) : (
                <div>
                  <strong>
                    Select a vector
                  </strong>

                  <span>
                    Click any shape, path or
                    object
                  </span>
                </div>
              )}

              <button
                type="button"
                className="svg-delete-button"
                onClick={deleteSelected}
                disabled={!selectedId}
              >
                Delete vector
              </button>
            </div>

            {/* EXPORT SETTINGS */}

            <div className="svg-export-settings">
              <span>
                Export settings
              </span>

              <div className="svg-export-fields">
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
                      handleWidthChange(
                        event.target.value
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
                      handleHeightChange(
                        event.target.value
                      )
                    }
                  />
                </div>
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

                Keep aspect ratio
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
        )}
      </section>

      {/* INFO */}

      <section className="svg-png-info">
        <h2>
          Edit it before you export it.
        </h2>

        <p>
          Select individual SVG elements,
          remove unwanted vectors, crop
          your artwork and prepare it before
          turning it into a PNG.
        </p>
      </section>
    </main>
  );
}