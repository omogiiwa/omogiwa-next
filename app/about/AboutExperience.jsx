"use client";

import { useEffect, useState } from "react";

const lenses = [
  {
    id: "anatomy",
    number: "01",
    title: "Human Anatomy",
    verb: "Observe the system.",
    description: "My bachelor's degree in Human Anatomy at Gregory University Uturu trained me to look beyond the surface, notice structure, and understand how individual parts influence the whole.",
    contribution: "A systems-minded way of seeing problems.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    verb: "Make meaning visible.",
    description: "Branding, graphic design, illustration, and digital design help me translate ideas into visual languages that people can recognise, understand, and remember.",
    contribution: "A visual voice with a reason to exist.",
  },
  {
    id: "technology",
    number: "03",
    title: "Technology",
    verb: "Bring the idea to life.",
    description: "As a self-taught software engineer, I think about how the experience actually works: its structure, responsiveness, performance, interactions, and usefulness.",
    contribution: "Ideas people can actually use.",
  },
];

const approach = [
  { n: "01", title: "Understand the real problem", text: "Who is this for? What needs to change? What should the experience make clearer? Good execution starts with asking better questions." },
  { n: "02", title: "Find the right direction", text: "I connect the message, audience, visual language, and structure into a direction that fits the project, not just the trend of the moment." },
  { n: "03", title: "Design and build with intention", text: "Identity, interface, content, and functionality should feel like parts of one considered experience, not separate pieces stitched together." },
  { n: "04", title: "Refine what matters", text: "I work through the details that shape the result: hierarchy, spacing, responsiveness, clarity, consistency, and the little things people feel even when they do not notice them." },
];

export default function AboutExperience() {
  const [activeLens, setActiveLens] = useState("anatomy");

  useEffect(() => {
    const elements = document.querySelectorAll(".omg-about-page [data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const selectedLens = lenses.find((lens) => lens.id === activeLens) || lenses[0];

  return (
    <main className="omg-about-page">
      <section className="omg-about-hero omg-about-hero-new">
        <div className="omg-about-logo-field" aria-hidden="true">
          <img className="omg-about-logo-ghost omg-about-logo-ghost-one" src="/og-mark.svg" alt="" />
          <img className="omg-about-logo-ghost omg-about-logo-ghost-two" src="/og-mark.svg" alt="" />
          <img className="omg-about-logo-ghost omg-about-logo-ghost-three" src="/og-mark.svg" alt="" />
          <span className="omg-about-logo-orbit omg-about-logo-orbit-one" />
          <span className="omg-about-logo-orbit omg-about-logo-orbit-two" />
        </div>
        <div className="omg-about-hero-content omg-about-hero-content-new">
          <div className="omg-about-hero-text" data-reveal>
            <p className="omg-about-eyebrow">A little about me</p>
            <h1 className="omg-about-title">Omogbolahan<br /><span>Giwa.</span></h1>
            <p className="omg-about-intro">Multidisciplinary designer and software engineer helping businesses turn ideas into thoughtful visual identities, digital experiences, and practical creative solutions.</p>
            <a className="omg-about-hero-link" href="#omg-about-story">Get to know my thinking <span aria-hidden="true">↓</span></a>
          </div>
          <div className="omg-about-profile-wrap omg-about-profile-wrap-new" data-reveal>
            <img src="/profile2.png" alt="Omogbolahan Giwa" className="omg-about-profile-image" />
            <span className="omg-about-profile-caption">DESIGN · TECHNOLOGY · STRATEGY</span>
          </div>
        </div>
        <div className="omg-about-hero-foot"><span>INDEPENDENT CREATIVE PRACTICE</span><span>01 — THE THINKING</span></div>
      </section>

      <section className="omg-about-story" id="omg-about-story">
        <div className="omg-about-section-kicker" data-reveal><span>01 / PHILOSOPHY</span><span>A principle I keep coming back to</span></div>
        <div className="omg-about-story-grid">
          <h2 data-reveal>Good design is not just about looking good<span>.</span></h2>
          <div className="omg-about-story-copy">
            <p className="omg-about-lead-new" data-reveal>It is about making the right things clear, memorable, and useful.</p>
            <p data-reveal>I believe creativity works best when it has a purpose. A beautiful identity means little if people cannot recognise the brand behind it. A website is not doing its job if it looks impressive but leaves visitors wondering what to do next.</p>
            <p data-reveal>That is why I approach design as more than decoration. I consider the message, the audience, the experience, and the bigger picture before worrying about which shade of purple looks best.</p>
            <p data-reveal>Although, admittedly, the shade of purple still matters.</p>
          </div>
        </div>
      </section>

      <section className="omg-about-lenses">
        <div className="omg-about-section-kicker" data-reveal><span>02 / THE CONNECTIONS</span><span>Three lenses, one practice</span></div>
        <div className="omg-about-lenses-heading" data-reveal>
          <h2>I don't see separate boxes.<br /><em>I see connections.</em></h2>
          <p>My background gives me different ways into a problem. Select a node and see what each one brings to the work.</p>
        </div>
        <div className="omg-about-node-stage" data-reveal>
          <svg className="omg-about-node-lines" viewBox="0 0 900 510" aria-hidden="true" preserveAspectRatio="none">
            <defs><linearGradient id="omg-node-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#411f96"/><stop offset="100%" stopColor="#ac5fe6"/></linearGradient></defs>
            <path className="omg-about-line omg-about-line-left" d="M450 110 C340 135 265 185 210 270 S310 390 450 420" />
            <path className="omg-about-line omg-about-line-right" d="M450 110 C560 135 635 185 690 270 S590 390 450 420" />
            <path className="omg-about-line omg-about-line-cross" d="M210 270 C360 220 540 220 690 270" />
            <circle className="omg-about-line-pulse" cx="450" cy="110" r="5" />
          </svg>
          <button type="button" className={"omg-about-node omg-about-node-anatomy " + (activeLens === "anatomy" ? "is-active" : "")} onClick={() => setActiveLens("anatomy")} aria-pressed={activeLens === "anatomy"}>
            <span className="omg-about-node-index">01</span><span className="omg-about-node-symbol">◎</span><strong>Human Anatomy</strong><small>Observe</small>
          </button>
          <button type="button" className={"omg-about-node omg-about-node-design " + (activeLens === "design" ? "is-active" : "")} onClick={() => setActiveLens("design")} aria-pressed={activeLens === "design"}>
            <span className="omg-about-node-index">02</span><span className="omg-about-node-symbol">✳</span><strong>Design</strong><small>Communicate</small>
          </button>
          <button type="button" className={"omg-about-node omg-about-node-tech " + (activeLens === "technology" ? "is-active" : "")} onClick={() => setActiveLens("technology")} aria-pressed={activeLens === "technology"}>
            <span className="omg-about-node-index">03</span><span className="omg-about-node-symbol">⌘</span><strong>Technology</strong><small>Build</small>
          </button>
          <div className="omg-about-node-core" aria-hidden="true"><img src="/og-mark.svg" alt="" /><span>ONE CONNECTED PRACTICE</span></div>
        </div>
        <div className="omg-about-lens-detail" aria-live="polite" key={selectedLens.id}>
          <div><span className="omg-about-lens-number">{selectedLens.number} / {selectedLens.title}</span><h3>{selectedLens.verb}</h3></div>
          <div><p>{selectedLens.description}</p><strong>{selectedLens.contribution}</strong></div>
        </div>
      </section>

      <section className="omg-about-background">
        <div className="omg-about-section-kicker" data-reveal><span>03 / THE BACKGROUND</span><span>How the pieces came together</span></div>
        <div className="omg-about-background-grid">
          <h2 data-reveal>Curiosity gave me more than one way to create<span>.</span></h2>
          <div>
            <p data-reveal>I hold a bachelor's degree in Human Anatomy from Gregory University Uturu, and I am a self-taught software engineer. My path into design grew from a natural interest in visual communication into consistent practice in branding, graphic design, illustration, and digital design.</p>
            <p data-reveal>I also design and build websites, which allows me to think beyond how a digital product looks and consider how it actually works. Layout, usability, responsiveness, performance, and the experience a visitor has all matter.</p>
            <p data-reveal>I am also exploring AI development and the possibilities it creates for building useful digital products. There is plenty to learn, but that has never been a particularly good reason to avoid learning something.</p>
          </div>
        </div>
      </section>

      <section className="omg-about-practice">
        <div className="omg-about-section-kicker" data-reveal><span>04 / THE PRACTICE</span><span>What I bring to a project</span></div>
        <div className="omg-about-practice-heading" data-reveal>
          <p className="omg-about-eyebrow">One connected practice</p>
          <h2>Branding, websites, and digital strategy <em>— all connected.</em></h2>
          <p>I bring design, technology, and strategy together to help businesses communicate clearly and grow with purpose.</p>
        </div>
        <div className="omg-about-service-list-new">
          <article data-reveal><span>01</span><h3>Brand &amp; Visual Design</h3><p>Distinctive identities and visual systems that make your brand recognisable, memorable, and consistent.</p><b aria-hidden="true">↗</b></article>
          <article data-reveal><span>02</span><h3>Web &amp; Digital Design</h3><p>Purposeful digital experiences that look considered, feel intuitive, and work beautifully across devices.</p><b aria-hidden="true">↗</b></article>
          <article data-reveal><span>03</span><h3>Digital Strategy</h3><p>Clear direction connecting your message, audience, and business goals to the right experience.</p><b aria-hidden="true">↗</b></article>
        </div>
      </section>

      <section className="omg-about-approach">
        <div className="omg-about-section-kicker" data-reveal><span>05 / HOW I WORK</span><span>Thought first, details always</span></div>
        <div className="omg-about-approach-heading" data-reveal><h2>Make it clear.<br /><em>Make it matter.</em></h2><p>I do not believe in designing first and asking questions later. That is a very efficient way to create something nobody asked for.</p></div>
        <div className="omg-about-approach-list">
          {approach.map((item) => <article key={item.n} data-reveal><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><i aria-hidden="true">+</i></article>)}
        </div>
      </section>

      <section className="omg-about-difference">
        <div className="omg-about-difference-mark" aria-hidden="true"><img src="/og-mark.svg" alt="" /></div>
        <div className="omg-about-difference-content" data-reveal>
          <p className="omg-about-eyebrow">THE DIFFERENCE</p>
          <h2>Not just how it looks.<br /><em>How it all works together.</em></h2>
          <p>I care about the reasoning behind the work. I want to understand why a direction makes sense, what it communicates, and how it serves the business. A design decision should have a reason beyond “it looks cool” — even when it does look very cool.</p>
        </div>
      </section>

      <section className="omg-about-end">
        <div className="omg-about-end-mark" aria-hidden="true"><img src="/og-mark.svg" alt="" /></div>
        <div className="omg-about-end-content" data-reveal>
          <p className="omg-about-eyebrow">THAT'S HOW I THINK</p>
          <h2>Have a good idea?<br /><em>Let's make it real.</em></h2>
          <p>If you are building a brand, improving your digital presence, or figuring out how to bring an idea to life, let's work through it together.</p>
          <a href="/hire" className="omg-about-cta">Let's work together <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
