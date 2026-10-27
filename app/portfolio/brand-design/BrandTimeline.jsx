"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import OdodoPresentation from "./OdodoPresentation";

const stages = [
  {
    number: "01",
    title: "The identity",
    description: "The visual foundation behind Mings.",
    images: [
      { src: "/mings-show.png", alt: "Mings brand identity presentation", shape: "wide" },
      { src: "/mings-logo.png", alt: "Mings logo", shape: "normal" },
      { src: "/mings-board.png", alt: "Mings brand board", shape: "normal" },
    ],
  },
  {
    number: "02",
    title: "A brand in motion",
    description: "The identity carried into digital and everyday use.",
    images: [
      { src: "/app-mockup.png", alt: "Mings app mockup", shape: "normal" },
      { src: "/mings-watch.png", alt: "Mings watch branding", shape: "normal" },
      { src: "/shirt-mockup.png", alt: "Mings shirt mockup", shape: "normal" },
    ],
  },
  {
    number: "03",
    title: "Out in the world",
    description: "Making the brand visible across spaces and transport.",
    images: [
      { src: "/mings-building.png", alt: "Mings building branding", shape: "wide" },
      { src: "/mings-truck.png", alt: "Mings truck branding", shape: "normal" },
      { src: "/mings-boards.png", alt: "Mings outdoor boards", shape: "normal" },
      { src: "/mings-jacket.png", alt: "Mings jacket branding", shape: "normal" },
    ],
  },
  {
    number: "04",
    title: "The details",
    description: "Smaller touchpoints that make the identity feel complete.",
    images: [
      { src: "/mings-stationery.png", alt: "Mings stationery", shape: "normal" },
      { src: "/mings-letterhead.png", alt: "Mings letterhead", shape: "normal" },
      { src: "/mings-box.png", alt: "Mings branded box", shape: "normal" },
      { src: "/mings-mugs.png", alt: "Mings branded mugs", shape: "normal" },
      { src: "/mings-cap.png", alt: "Mings branded cap", shape: "normal" },
    ],
  },
];

export default function BrandTimeline() {
  const [activeImage, setActiveImage] = useState(null);
  const allImages = useMemo(
    () => stages.flatMap((stage) => stage.images.map((image) => ({ ...image, stage: stage.title }))),
    []
  );
  const activeIndex = activeImage
    ? allImages.findIndex((image) => image.src === activeImage)
    : -1;

  const closeViewer = useCallback(() => setActiveImage(null), []);
  const showRelativeImage = useCallback((direction) => {
    setActiveImage((current) => {
      const index = allImages.findIndex((image) => image.src === current);
      if (index < 0) return current;
      return allImages[(index + direction + allImages.length) % allImages.length].src;
    });
  }, [allImages]);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") showRelativeImage(1);
      if (event.key === "ArrowLeft") showRelativeImage(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, closeViewer, showRelativeImage]);

  const jumpToStage = (number) => {
    document.getElementById(`mings-stage-${number}`)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <main className="mings-page">
        <header className="mings-header">
          <div className="mings-header-copy">
            <p className="mings-kicker">CASE STUDY 01 / BRAND IDENTITY / 2026</p>
            <h1>Mings</h1>
            <p className="mings-description">
              A visual identity for a logistics company built to move things forward.
            </p>
            <p className="mings-instruction">A closer look at the identity, its applications, and the details in between.</p>
          </div>
          <p className="mings-year">CASE STUDY 01<br />MORE PROJECTS TO COME</p>
        </header>

        <nav className="mings-stage-nav" aria-label="Jump to a project stage">
          <span className="mings-nav-label">EXPLORE THE PROJECT</span>
          {stages.map((stage) => (
            <button key={stage.number} type="button" onClick={() => jumpToStage(stage.number)}>
              <span>{stage.number}</span>{stage.title}
            </button>
          ))}
        </nav>

        <div className="mings-timeline" aria-label="Mings brand identity timeline">
          {stages.map((stage) => (
            <section className="mings-timeline-stage" id={`mings-stage-${stage.number}`} key={stage.number}>
              <div className="mings-stage-marker" aria-hidden="true">
                <span>{stage.number}</span>
                <span className="mings-stage-line" />
              </div>
              <div className="mings-stage-content">
                <header className="mings-stage-heading">
                  <div>
                    <h2>{stage.title}</h2>
                    <p>{stage.description}</p>
                  </div>
                  <span className="mings-stage-count">{String(stage.images.length).padStart(2, "0")} visuals</span>
                </header>
                <div className="mings-stage-gallery">
                  {stage.images.map((image, index) => {
                    const imageIndex = allImages.findIndex((item) => item.src === image.src);
                    return (
                      <button
                        type="button"
                        key={image.src}
                        className={`mings-timeline-image ${image.shape === "wide" ? "mings-image-wide" : ""}`}
                        onClick={() => setActiveImage(image.src)}
                        aria-label={`View ${image.alt} larger`}
                      >
                        <img src={image.src} alt={image.alt} loading={stage.number === "01" && index === 0 ? "eager" : "lazy"} />
                        <span className="mings-image-index">{String(imageIndex + 1).padStart(2, "0")}</span>
                        <span className="mings-image-open" aria-hidden="true">View image</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
        <footer className="mings-endnote">
          <span>END OF CASE STUDY 01</span>
          <p>One identity, carried through every touchpoint.</p>
          <p className="mings-next-case-study">This is the first in a growing collection of brand design case studies. More projects and stories are on the way.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>
            Back to the beginning
          </button>
        </footer>
      </main>

      {activeImage && activeIndex >= 0 && (
        <div className="mings-viewer" role="dialog" aria-modal="true" aria-label="Image viewer" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}>
          <button type="button" className="mings-viewer-close" onClick={closeViewer} aria-label="Close image viewer">×</button>
          <button type="button" className="mings-viewer-arrow mings-viewer-prev" onClick={() => showRelativeImage(-1)} aria-label="Previous image">‹</button>
          <div className="mings-viewer-content">
            <img src={allImages[activeIndex].src} alt={allImages[activeIndex].alt} />
            <div className="mings-viewer-caption">
              <div>
                <span>{allImages[activeIndex].stage}</span>
                <p>{allImages[activeIndex].alt}</p>
              </div>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")}</span>
            </div>
          </div>
          <button type="button" className="mings-viewer-arrow mings-viewer-next" onClick={() => showRelativeImage(1)} aria-label="Next image">›</button>
          <p className="mings-viewer-hint">Use the arrows to explore · Esc to close</p>
        </div>
      )}

      <OdodoCaseStudy />
    </>
  );
}


function OdodoCaseStudy() {
  return <OdodoPresentation />;
}
