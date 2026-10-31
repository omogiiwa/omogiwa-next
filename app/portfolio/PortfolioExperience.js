"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = [
  {
    number: "01",
    title: "Brand & Visual Design",
    description: "Identities, visual systems and art direction that give brands a distinct presence.",
    detail: "IDENTITY · ART DIRECTION · VISUAL SYSTEMS",
    href: "/portfolio/brand-design",
    className: "sky-destination-brand",
  },
  {
    number: "02",
    title: "Web & Digital Design",
    description: "Digital places shaped around clarity, character and useful interaction.",
    detail: "WEBSITES · INTERFACES · DIGITAL EXPERIENCES",
    href: "/portfolio/web-design",
    className: "sky-destination-web",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description: "The thinking that connects a brand's story to the people it needs to reach.",
    detail: "POSITIONING · CONTENT · DIGITAL DIRECTION",
    href: "/portfolio/digital-strategy",
    className: "sky-destination-strategy",
  },
];

const statements = [
  "I make thoughtful things for a world that never stands still.",
  "Design, technology and strategy — connected by curiosity.",
  "Different perspectives. One clear point of view.",
];

export default function PortfolioExperience() {
  const [statement, setStatement] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio-page portfolio-sky">
      <section className="sky-world" id="sky-top">
        <div className="sky-atmosphere" aria-hidden="true">
          <div className="sky-sun" />
          <div className="sky-cloud sky-cloud-back sky-cloud-one" />
          <div className="sky-cloud sky-cloud-back sky-cloud-two" />
          <div className="sky-cloud sky-cloud-front sky-cloud-three" />
          <div className="sky-cloud sky-cloud-front sky-cloud-four" />
          <div className="sky-horizon" />
          <div className="sky-bird sky-bird-one" />
          <div className="sky-bird sky-bird-two" />
        </div>

        <header className="sky-header">
          <a className="sky-wordmark" href="#sky-top" aria-label="Omogiwa portfolio home">OmoGiwa<span>.</span></a>
          <span className="sky-header-note">INDEPENDENT DESIGNER / 2026</span>
          <button className="sky-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
            {menuOpen ? "CLOSE −" : "MENU +"}
          </button>
        </header>

        {menuOpen && (
          <nav className="sky-menu-panel" aria-label="Portfolio navigation">
            <a href="#sky-work" onClick={() => setMenuOpen(false)}>Selected work <span>01</span></a>
            <a href="#sky-practice" onClick={() => setMenuOpen(false)}>My practice <span>02</span></a>
            <a href="#sky-contact" onClick={() => setMenuOpen(false)}>Get in touch <span>03</span></a>
          </nav>
        )}

        <div className="sky-hero-copy">
          <p className="sky-eyebrow"><span /> A PORTFOLIO BY OMOGBOLAHAN GIWA</p>
          <h1>Ideas take<br /><em>shape.</em></h1>
          <p className="sky-hero-description" key={statement}>{statements[statement]}</p>
          <button className="sky-refresh" type="button" onClick={() => setStatement((current) => (current + 1) % statements.length)}>
            <span aria-hidden="true">↻</span> A DIFFERENT PERSPECTIVE
          </button>
        </div>

        <div className="sky-floating-label sky-label-left">
          <span className="sky-label-line" />
          <span>THOUGHTFUL BY DESIGN</span>
        </div>
        <div className="sky-floating-label sky-label-right">
          <span>BUILT TO MOVE IDEAS FORWARD</span>
          <span className="sky-label-line" />
        </div>

        <a className="sky-ascend" href="#sky-work">
          <span>EXPLORE THE WORK</span>
          <span className="sky-ascend-circle" aria-hidden="true">↓</span>
        </a>
        <span className="sky-coordinates">06° 31' N &nbsp; 03° 22' E</span>
      </section>

      <section className="sky-work-section" id="sky-work">
        <div className="sky-section-intro">
          <div>
            <p className="sky-section-kicker">01 / SELECTED WORK</p>
            <h2>Choose a<br /><em>direction.</em></h2>
          </div>
          <p className="sky-section-description">Three paths through my work. Each one explores a different way to make ideas visible, useful and memorable.</p>
        </div>

        <div className="sky-destinations">
          {destinations.map((item, index) => (
            <Link href={item.href} className={`sky-destination ${item.className}`} key={item.number}>
              <div className="sky-destination-cloud" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <div className="sky-destination-top">
                <span>{item.number} / 03</span>
                <span className="sky-destination-star" aria-hidden="true">✳</span>
              </div>
              <div className="sky-destination-copy">
                <span className="sky-destination-detail">{item.detail}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="sky-destination-link">ENTER THIS SPACE <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="sky-work-foot">
          <span>SCROLL TO DISCOVER</span>
          <span>THREE DISCIPLINES / ONE PRACTICE</span>
        </div>
      </section>

      <section className="sky-practice" id="sky-practice">
        <div className="sky-practice-cloud" aria-hidden="true" />
        <p className="sky-section-kicker">02 / THE THINKING BEHIND THE WORK</p>
        <h2>Good work starts<br />with <em>seeing things</em><br />differently.</h2>
        <p className="sky-practice-copy">I work across disciplines because the best solutions rarely live inside just one. I bring visual thinking, digital craft and strategic perspective together — then shape them around the problem at hand.</p>
        <a href="#sky-contact" className="sky-text-link">LET'S MAKE SOMETHING MEANINGFUL <span>↓</span></a>
      </section>

      <footer className="sky-contact" id="sky-contact">
        <div>
          <p className="sky-section-kicker">03 / THE NEXT CHAPTER</p>
          <h2>Have a good<br /><em>one in mind?</em></h2>
        </div>
        <a href="mailto:hello@omogiwa.com" className="sky-contact-link">LET'S TALK <span aria-hidden="true">↗</span></a>
        <div className="sky-footer-line">
          <span>OmoGiwa.</span>
          <span>DESIGNED & BUILT BY GIWA / 2026</span>
          <a href="#sky-top">BACK TO THE SKY ↑</a>
        </div>
      </footer>
    </main>
  );
}
