"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Brand & Visual Design",
    description: "Visual identities, graphic systems and creative work built to make brands recognizable, distinctive and memorable.",
    tags: "IDENTITY · ART DIRECTION · VISUAL SYSTEMS",
    href: "/portfolio/brand-design",
    className: "portfolio-brand",
    color: "violet",
  },
  {
    number: "02",
    title: "Web & Digital Design",
    description: "Websites and digital experiences designed to look sharp, communicate clearly and make interaction feel natural.",
    tags: "WEBSITES · INTERFACES · DIGITAL EXPERIENCES",
    href: "/portfolio/web-design",
    className: "portfolio-web",
    color: "coral",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description: "Creative and digital thinking that connects your brand, audience, content and online presence with a clear purpose.",
    tags: "POSITIONING · CONTENT · DIGITAL DIRECTION",
    href: "/portfolio/digital-strategy",
    className: "portfolio-strategy",
    color: "gold",
  },
];

const introductions = [
  "A collection of identities, digital experiences and ideas made to move things forward.",
  "Different disciplines. Different ways of thinking. One point of view.",
  "I bring design, technology and strategy together to make ideas matter.",
];

export default function PortfolioExperience() {
  const trackRef = useRef(null);
  const [view, setView] = useState("carousel");
  const [introIndex, setIntroIndex] = useState(0);

  const moveTrack = (direction) => {
    if (!trackRef.current) return;
    const amount = Math.max(300, trackRef.current.clientWidth * 0.72);
    trackRef.current.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <main className="portfolio-page portfolio-manon">
      <section className="portfolio-manon-hero">
        <div className="portfolio-manon-top">
          <span className="portfolio-manon-label"><i /> PORTFOLIO / SELECTED WORK</span>
          <span className="portfolio-manon-coordinate">OMOGIWA® — 2026</span>
        </div>

        <div className="portfolio-manon-intro">
          <div className="portfolio-manon-title-wrap">
            <p className="portfolio-manon-eyebrow">INDEPENDENT DESIGNER & CREATIVE DEVELOPER</p>
            <h1>Work in<br /><span>many forms<span className="portfolio-manon-dot">.</span></span></h1>
          </div>
          <div className="portfolio-manon-intro-copy">
            <p key={introIndex}>{introductions[introIndex]}</p>
            <button
              type="button"
              className="portfolio-reload"
              onClick={() => setIntroIndex((current) => (current + 1) % introductions.length)}
              aria-label="Refresh portfolio introduction"
            >
              <span className="portfolio-reload-symbol" aria-hidden="true">⟳</span>
              <span>ANOTHER WAY TO PUT IT</span>
            </button>
          </div>
        </div>

        <div className="portfolio-manon-bottomline">
          <span>01—03 / AREAS OF PRACTICE</span>
          <a href="#portfolio-explore">EXPLORE THE WORK <span aria-hidden="true">↓</span></a>
        </div>
        <span className="portfolio-manon-orbit portfolio-manon-orbit-a" />
        <span className="portfolio-manon-orbit portfolio-manon-orbit-b" />
      </section>

      <section className="portfolio-manon-work" id="portfolio-explore">
        <div className="portfolio-manon-work-head">
          <div>
            <span className="portfolio-manon-label"><i /> EXPLORE BY DISCIPLINE</span>
            <h2>A few sides<br />of the <span>same mind.</span></h2>
          </div>
          <div className="portfolio-manon-controls">
            <div className="portfolio-manon-view" role="group" aria-label="Portfolio layout">
              <button type="button" onClick={() => setView("carousel")} className={view === "carousel" ? "active" : ""} aria-pressed={view === "carousel"}>CAROUSEL</button>
              <button type="button" onClick={() => setView("index")} className={view === "index" ? "active" : ""} aria-pressed={view === "index"}>INDEX</button>
            </div>
            {view === "carousel" && (
              <div className="portfolio-manon-arrows">
                <button type="button" onClick={() => moveTrack(-1)} aria-label="Previous disciplines">←</button>
                <button type="button" onClick={() => moveTrack(1)} aria-label="Next disciplines">→</button>
              </div>
            )}
          </div>
        </div>

        <div
          ref={trackRef}
          className={`portfolio-manon-track ${view === "index" ? "is-index" : ""}`}
          aria-label="Portfolio disciplines"
        >
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.number}
              className={`portfolio-manon-card ${category.className} portfolio-tone-${category.color}`}
            >
              <div className="portfolio-manon-card-art" />
              <div className="portfolio-manon-card-top">
                <span>{category.number} / 03</span>
                <span className="portfolio-manon-card-mark" aria-hidden="true">✳</span>
              </div>
              <div className="portfolio-manon-card-copy">
                <span className="portfolio-manon-card-tags">{category.tags}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="portfolio-manon-card-link">EXPLORE <span aria-hidden="true">→</span></span>
              </div>
              <span className="portfolio-manon-card-index" aria-hidden="true">{category.number}</span>
            </Link>
          ))}
        </div>

        <div className="portfolio-manon-foot">
          <span>DRAG / SWIPE TO EXPLORE</span>
          <span>THREE DISCIPLINES. ONE PRACTICE.</span>
        </div>
      </section>
    </main>
  );
}
