"use client";

import { useEffect, useState } from "react";
import "./ododo-presentation.css";

const asset = (name) => `/ododo/${name}`;
const motifs = [
  "ododo-pattern-bloom-ink-on-paper-tile.png",
  "ododo-pattern-chain-ink-on-paper-tile.png",
  "ododo-pattern-garden-ink-on-paper-tile.png",
  "ododo-pattern-orbit-ink-on-paper-tile.png",
  "ododo-pattern-petals-ink-on-paper-tile.png",
];
const chapters = [
  { id: "ododo-intro", n: "01", label: "Introduction" },
  { id: "ododo-marks", n: "02", label: "The identity" },
  { id: "ododo-motifs", n: "03", label: "Flower language" },
  { id: "ododo-applications", n: "04", label: "In the world" },
];

export default function OdodoPresentation() {
  const [mode, setMode] = useState("light");
  const [motif, setMotif] = useState(0);
  const [active, setActive] = useState(chapters[0].id);
  const dark = mode === "dark";

  useEffect(() => {
    const nodes = chapters.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { threshold: [0.2, 0.45, 0.7] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });

  return (
    <section className={`ododo-presentation ${dark ? "is-dark" : "is-light"}`} aria-label="Ododo brand identity presentation">
      <div className="ododo-presentation-masthead"><span>OMOGIWA / BRAND IDENTITY</span><span>CASE STUDY 02 · 2026</span></div>
      <nav className="ododo-presentation-nav" aria-label="Presentation chapters">
        <span className="ododo-nav-label">THE STORY</span>
        {chapters.map((chapter) => <button key={chapter.id} type="button" className={active === chapter.id ? "active" : ""} onClick={() => goTo(chapter.id)}><i>{chapter.n}</i>{chapter.label}</button>)}
        <div className="ododo-mode-switch" aria-label="Choose light or dark presentation">
          <button type="button" aria-pressed={!dark} className={!dark ? "selected" : ""} onClick={() => setMode("light")}>Light</button>
          <button type="button" aria-pressed={dark} className={dark ? "selected" : ""} onClick={() => setMode("dark")}>Dark</button>
        </div>
      </nav>

      <section className="ododo-chapter ododo-intro" id="ododo-intro">
        <div className="ododo-intro-pattern" aria-hidden="true" style={{ backgroundImage: `url("${asset(motifs[motif])}")` }} />
        <div className="ododo-intro-copy">
          <p className="ododo-eyebrow"><span className="ododo-pulse" /> A CREATIVE WORLD IN FULL BLOOM</p>
          <h1>Ododo<span>.</span></h1>
          <p className="ododo-intro-tagline">One name.<br /><em>Many blooms.</em></p>
          <p className="ododo-body-copy">A flexible creative identity for fashion, design, app and film — built to grow in every direction.</p>
          <button className="ododo-continue" type="button" onClick={() => goTo("ododo-marks")}>Meet the identity <span>↓</span></button>
        </div>
        <div className="ododo-intro-specimen">
          <div className="ododo-specimen-meta"><span>ODODO BLOOM</span><span>VISUAL IDENTITY / 2026</span></div>
          <div className="ododo-wordmark-wrap"><img src={asset(dark ? "ododo-logo-reversed.png" : "ododo-logo-black.png")} alt="Ododo wordmark, selected for the presentation background" /></div>
          <div className="ododo-specimen-bottom"><span>A signature that keeps unfolding.</span><div className="ododo-flower-token"><img src={asset("ododo-icon-paper-1024.png")} alt="" /></div></div>
        </div>
        <div className="ododo-scroll-cue"><span /> SCROLL TO DISCOVER</div>
      </section>

      <section className="ododo-chapter ododo-marks" id="ododo-marks">
        <div className="ododo-section-copy">
          <p className="ododo-eyebrow">02 / THE IDENTITY</p>
          <h2>Recognisable<br /><em>by design.</em></h2>
          <p className="ododo-body-copy">A distinctive wordmark and flower-inspired symbol give Ododo a visual signature that adapts across surfaces without losing its character.</p>
        </div>
        <div className="ododo-logo-comparison">
          <article className="ododo-logo-card ododo-logo-light"><span>01 — INK ON PAPER</span><img src={asset("ododo-logo-black.png")} alt="Ododo black logo for light backgrounds" /><small>For light surfaces</small></article>
          <article className="ododo-logo-card ododo-logo-dark"><div className="ododo-card-pattern" aria-hidden="true" style={{ backgroundImage: `url("${asset(motifs[0])}")` }} /><span>02 — PAPER ON INK</span><img src={asset("ododo-logo-reversed.png")} alt="Ododo white logo for dark backgrounds" /><small>For dark surfaces</small></article>
        </div>
        <div className="ododo-palette-strip" aria-label="Ododo brand colour palette"><span /><span /><span /></div>
      </section>

      <section className="ododo-chapter ododo-motifs" id="ododo-motifs">
        <div className="ododo-section-copy">
          <p className="ododo-eyebrow">03 / PATTERN LANGUAGE</p>
          <h2>A little bloom<br /><em>in every detail.</em></h2>
          <p className="ododo-body-copy">The small scallop-flower motifs bring rhythm and warmth to the identity. Explore the pattern family and watch the visual atmosphere shift with each selection.</p>
        </div>
        <div className="ododo-pattern-explorer">
          <div className="ododo-pattern-canvas" key={motifs[motif]} style={{ backgroundImage: `url("${asset(motifs[motif])}")` }}>
            <div className="ododo-pattern-wash" />
            <div className="ododo-pattern-ring ododo-ring-a" /><div className="ododo-pattern-ring ododo-ring-b" />
            <img src={asset(dark ? "ododo-logo-reversed.png" : "ododo-logo-black.png")} alt="Ododo wordmark on the selected floral pattern" />
            <span className="ododo-pattern-number">MOTIF / 0{motif + 1}</span>
          </div>
          <div className="ododo-pattern-tools">
            <div><p className="ododo-eyebrow">THE FLOWER LIBRARY</p><p className="ododo-pattern-hint">Choose a motif to change the scene.</p></div>
            <div className="ododo-motif-picker">{motifs.map((file, index) => <button key={file} type="button" className={motif === index ? "selected" : ""} onClick={() => setMotif(index)} aria-pressed={motif === index} aria-label={`Select flower motif ${index + 1}`}><img src={asset(file)} alt="" /><span>0{index + 1}</span></button>)}</div>
          </div>
        </div>
      </section>

      <section className="ododo-chapter ododo-applications" id="ododo-applications">
        <div className="ododo-app-heading">
          <p className="ododo-eyebrow">04 / THE BRAND IN THE WORLD</p>
          <h2>Made to live<br /><em>beyond the logo.</em></h2>
          <p className="ododo-body-copy">The same identity moves from app icons to everyday touchpoints — expressive, adaptable, and unmistakably Ododo.</p>
        </div>
        <div className="ododo-application-grid">
          <article className="ododo-application-card application-ink"><span>01 / APP ICON</span><img src={asset("ododo-icon-ink-1024.png")} alt="Ododo ink app icon" /><p>Quiet confidence.</p></article>
          <article className="ododo-application-card application-paper"><span>02 / APP ICON</span><img src={asset("ododo-icon-paper-1024.png")} alt="Ododo paper app icon" /><p>Room to breathe.</p></article>
          <article className="ododo-application-card application-signal"><span>03 / APP ICON</span><img src={asset("ododo-icon-signal-1024.png")} alt="Ododo signal-colour app icon" /><p>A flash of energy.</p></article>
        </div>
        <footer className="ododo-presentation-footer"><img src={asset(dark ? "ododo-logo-reversed.png" : "ododo-logo-black.png")} alt="Ododo wordmark" /><div><span>END OF CASE STUDY 02</span><p>One name. Many blooms.</p></div><button type="button" onClick={() => goTo("ododo-intro")}>Back to the beginning ↑</button></footer>
      </section>
    </section>
  );
}
