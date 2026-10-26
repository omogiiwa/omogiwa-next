"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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

const ododoStages = [
  {
    number: "01",
    title: "The identity system",
    description: "The logo, monogram, and icon in their supplied colour versions.",
    files: [
      "ododo-logo-full-colour.png", "ododo-logo-full-colour.svg",
      "ododo-logo-reversed.png", "ododo-logo-reversed.svg",
      "ododo-logo-black.png", "ododo-logo-black.svg",
      "ododo-logo-white.png", "ododo-logo-white.svg",
      "ododo-monogram-full-colour.png", "ododo-monogram-full-colour.svg",
      "ododo-monogram-reversed.png", "ododo-monogram-reversed.svg",
      "ododo-monogram-black.png", "ododo-monogram-black.svg",
      "ododo-monogram-white.png", "ododo-monogram-white.svg",
      "ododo-icon-ink-1024.png", "ododo-icon-ink.svg",
      "ododo-icon-paper-1024.png", "ododo-icon-paper.svg",
      "ododo-icon-signal-1024.png", "ododo-icon-signal.svg",
      "ododo-avatar-circle-ink-1024.png", "ododo-avatar-circle-paper-1024.png",
      "ododo-avatar-circle-signal-1024.png",
    ],
  },
  {
    number: "02",
    title: "The pattern garden",
    description: "Five repeat patterns, shown in the supplied colourways without recolouring or cropping.",
    files: [
      "ododo-pattern-bloom-ink-on-paper-tile.png", "ododo-pattern-bloom-ink-on-paper.svg",
      "ododo-pattern-bloom-ink-on-signal-tile.png", "ododo-pattern-bloom-ink-on-signal.svg",
      "ododo-pattern-bloom-paper-on-ink-tile.png", "ododo-pattern-bloom-paper-on-ink.svg",
      "ododo-pattern-bloom-signal-on-ink-tile.png", "ododo-pattern-bloom-signal-on-ink.svg",
      "ododo-pattern-chain-ink-on-paper-tile.png", "ododo-pattern-chain-ink-on-paper.svg",
      "ododo-pattern-chain-ink-on-signal-tile.png", "ododo-pattern-chain-ink-on-signal.svg",
      "ododo-pattern-chain-paper-on-ink-tile.png", "ododo-pattern-chain-paper-on-ink.svg",
      "ododo-pattern-chain-signal-on-ink-tile.png", "ododo-pattern-chain-signal-on-ink.svg",
      "ododo-pattern-garden-ink-on-paper-tile.png", "ododo-pattern-garden-ink-on-paper.svg",
      "ododo-pattern-garden-ink-on-signal-tile.png", "ododo-pattern-garden-ink-on-signal.svg",
      "ododo-pattern-garden-paper-on-ink-tile.png", "ododo-pattern-garden-paper-on-ink.svg",
      "ododo-pattern-garden-signal-on-ink-tile.png", "ododo-pattern-garden-signal-on-ink.svg",
      "ododo-pattern-orbit-ink-on-paper-tile.png", "ododo-pattern-orbit-ink-on-paper.svg",
      "ododo-pattern-orbit-ink-on-signal-tile.png", "ododo-pattern-orbit-ink-on-signal.svg",
      "ododo-pattern-orbit-paper-on-ink-tile.png", "ododo-pattern-orbit-paper-on-ink.svg",
      "ododo-pattern-orbit-signal-on-ink-tile.png", "ododo-pattern-orbit-signal-on-ink.svg",
      "ododo-pattern-petals-ink-on-paper-tile.png", "ododo-pattern-petals-ink-on-paper.svg",
      "ododo-pattern-petals-ink-on-signal-tile.png", "ododo-pattern-petals-ink-on-signal.svg",
      "ododo-pattern-petals-paper-on-ink-tile.png", "ododo-pattern-petals-paper-on-ink.svg",
      "ododo-pattern-petals-signal-on-ink-tile.png", "ododo-pattern-petals-signal-on-ink.svg",
    ],
  },
  {
    number: "03",
    title: "App icon family",
    description: "The supplied iOS, Android, adaptive-layer, and notification icon exports.",
    files: [
      "ios-1024.png", "ios-180.png", "ios-167.png", "ios-152.png", "ios-120.png", "ios-60.png",
      "android-512.png", "android-192.png", "android-144.png", "android-96.png",
      "android-72.png", "android-48.png",
      "android-adaptive-foreground-432.png", "android-adaptive-background-432.png",
      "android-notification-96.png",
    ],
  },
].map((stage) => ({
  ...stage,
  images: stage.files.map((file) => {
    const label = file
      .replace(/\.(png|svg)$/i, "")
      .replace(/^ododo-/, "")
      .replace(/-tile$/, "")
      .replace(/-/g, " ");
    const darkSurface = /paper-on-ink|signal-on-ink|logo-white|logo-reversed|monogram-white|monogram-reversed|icon-paper|icon-signal/.test(file);
    const signalSurface = /ink-on-signal/.test(file);
    return {
      src: `/ododo/${file}`,
      alt: `Ododo Bloom brand asset: ${label}`,
      surface: darkSurface ? "ink" : signalSurface ? "signal" : "paper",
    };
  }),
}));

function OdodoCaseStudy() {
  const [activeImage, setActiveImage] = useState(null);
  const allImages = useMemo(
    () => ododoStages.flatMap((stage) => stage.images.map((image) => ({ ...image, stage: stage.title }))),
    []
  );
  const activeIndex = activeImage ? allImages.findIndex((image) => image.src === activeImage) : -1;

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
    document.getElementById(`ododo-stage-${number}`)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="mings-page ododo-case-study" aria-labelledby="ododo-case-title">
      <header className="mings-header">
        <div className="mings-header-copy">
          <p className="mings-kicker">CASE STUDY 02 / BRAND IDENTITY / 2026</p>
          <h1 id="ododo-case-title">Ododo</h1>
          <p className="mings-description">
            A multipurpose creative identity for fashion, design, an app and film — one name, many blooms.
          </p>
          <p className="mings-instruction">
            Explore the identity, pattern system, and digital assets from the Bloom brand guidelines.
          </p>
          <a className="ododo-guidelines-link" href="/Ododo-finale.pdf" target="_blank" rel="noreferrer">
            View the brand guidelines (PDF) ↗
          </a>
        </div>
        <p className="mings-year">CASE STUDY 02<br />ONE NAME, MANY BLOOMS</p>
      </header>

      <nav className="mings-stage-nav" aria-label="Jump to an Ododo project stage">
        <span className="mings-nav-label">EXPLORE THE PROJECT</span>
        {ododoStages.map((stage) => (
          <button key={stage.number} type="button" onClick={() => jumpToStage(stage.number)}>
            <span>{stage.number}</span>{stage.title}
          </button>
        ))}
      </nav>

      <div className="mings-timeline" aria-label="Ododo Bloom brand identity assets">
        {ododoStages.map((stage) => (
          <section className="mings-timeline-stage" id={`ododo-stage-${stage.number}`} key={stage.number}>
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
              <div className="mings-stage-gallery ododo-stage-gallery">
                {stage.images.map((image, index) => {
                  const imageIndex = allImages.findIndex((item) => item.src === image.src);
                  return (
                    <button
                      type="button"
                      key={image.src}
                      className={`mings-timeline-image ododo-timeline-image ododo-surface-${image.surface}`}
                      onClick={() => setActiveImage(image.src)}
                      aria-label={`View ${image.alt} larger`}
                    >
                      <img src={image.src} alt={image.alt} loading={stage.number === "01" && index < 2 ? "eager" : "lazy"} />
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
        <span>END OF CASE STUDY 02</span>
        <p>One name, many blooms.</p>
        <p className="mings-next-case-study">
          The Ododo identity is built to hold many creative worlds together through one recognisable visual language.
        </p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>
          Back to the beginning
        </button>
      </footer>

      {activeImage && activeIndex >= 0 && (
        <div className="mings-viewer" role="dialog" aria-modal="true" aria-label="Ododo image viewer" onMouseDown={(event) => {
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
    </section>
  );
}

