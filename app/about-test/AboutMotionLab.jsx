"use client";

import { useEffect, useState } from "react";

const disciplines = {
  anatomy: { label: "Human Anatomy", kicker: "Observe the system", copy: "Anatomy trained me to look closer, understand structure, and notice how individual parts affect the whole.", tag: "STRUCTURE" },
  design: { label: "Design", kicker: "Make meaning visible", copy: "Design turns observations into visual language: identity, hierarchy, emotion, and experiences people can understand.", tag: "COMMUNICATION" },
  code: { label: "Technology", kicker: "Make the idea work", copy: "Code brings the idea to life, connecting the visual experience to real interactions, useful systems, and practical outcomes.", tag: "FUNCTION" }
};

const paragraphs = [
  { number: "01", label: "The point of view", title: "I don't think in boxes.", body: "I think in connections. The most interesting work happens when different ways of seeing a problem come together." },
  { number: "02", label: "The foundation", title: "Look closer. Ask better questions.", body: "My background in Human Anatomy taught me to pay attention to structure and relationships. Design taught me how to make meaning visible. Software engineering lets me build the experience behind the idea." },
  { number: "03", label: "The practice", title: "Make it clear. Make it useful. Make it matter.", body: "I bring brand identity, digital design, development, and strategy into the same conversation, so the final result feels connected instead of assembled from separate parts." },
  { number: "04", label: "The person", title: "Curious by default.", body: "I like understanding why something works, questioning the obvious answer, and learning whatever the problem requires. There is always more to explore, and that is part of the fun." }
];

export default function AboutMotionLab() {
  const [activeDiscipline, setActiveDiscipline] = useState("anatomy");
  const [activeExample, setActiveExample] = useState("hybrid");

  useEffect(() => {
    const nodes = document.querySelectorAll(".about-lab [data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -5% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = disciplines[activeDiscipline];

  return (
    <main className="about-lab">
      <section className="lab-hero">
        <div className="lab-topline"><span>OMOGIWA. / EXPERIENCE LAB</span><span>ABOUT PAGE CONCEPTS · 2026</span></div>
        <p className="lab-eyebrow" data-reveal>AN EXPERIMENT IN PERSONAL STORYTELLING</p>
        <h1 data-reveal>The mind<br /><span>behind</span> the work<span className="lab-period">.</span></h1>
        <div className="lab-hero-bottom" data-reveal>
          <p>A set of living prototypes for a more expressive About page. Scroll, explore, and compare the treatments before choosing a direction.</p>
          <a href="#lab-examples">Explore the concepts <span aria-hidden="true">↓</span></a>
        </div>
        <div className="lab-orbit lab-orbit-one" aria-hidden="true" /><div className="lab-orbit lab-orbit-two" aria-hidden="true" /><span className="lab-hero-mark" aria-hidden="true">O.</span>
      </section>

      <nav className="lab-jump-nav" aria-label="Concept previews">
        <a href="#concept-story">01 / Story</a><a href="#concept-type">02 / Typography</a><a href="#concept-connection">03 / Connections</a><a href="#concept-reveal">04 / Paragraphs</a><a href="#concept-ending">05 / Closing</a>
      </nav>

      <section className="lab-intro" id="lab-examples" data-reveal>
        <p className="lab-eyebrow">THE IDEA</p><h2>Not motion for motion’s sake.<br /><span>Motion with a point of view.</span></h2>
        <p>Each section demonstrates a different technique. The writing is based on the story already present on your About page, with a few editorial lines added to make the animation easier to judge.</p>
      </section>

      <section className="lab-example lab-story" id="concept-story">
        <div className="lab-example-meta"><span>01 / SCROLL STORYTELLING</span><span>Calm · Cinematic · Personal</span></div>
        <div className="lab-story-layout">
          <div className="lab-story-sticky"><p className="lab-eyebrow">THE THROUGH-LINE</p><h2>Different disciplines.<br /><em>One way of thinking.</em></h2><p className="lab-muted">The narrative stays in view while each thought arrives. On smaller screens, this becomes a natural sequence instead of a forced sticky panel.</p><span className="lab-scroll-note"><span className="lab-scroll-dot" /> KEEP SCROLLING TO READ</span></div>
          <div className="lab-story-steps">{paragraphs.map((item) => <article className="lab-story-step" data-reveal key={item.number}><span className="lab-step-number">{item.number}</span><p className="lab-step-label">{item.label}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>

      <section className="lab-example lab-type" id="concept-type">
        <div className="lab-example-meta"><span>02 / KINETIC TYPOGRAPHY</span><span>Bold · Expressive · Memorable</span></div>
        <div className="lab-type-stage" data-reveal><p className="lab-eyebrow">A BIG IDEA, GIVEN ROOM</p><p className="lab-type-line">I THINK IN</p><div className="lab-type-word-wrap"><span className="lab-type-word">CONNEC</span><span className="lab-type-word lab-type-outline">TIONS.</span></div><p className="lab-type-caption">An oversized typographic moment. The word shifts into focus as it enters view, then settles into a clean, readable state.</p><div className="lab-type-stamps" aria-hidden="true"><span>DESIGN</span><span>×</span><span>TECHNOLOGY</span><span>×</span><span>STRATEGY</span></div></div>
      </section>

      <section className="lab-example lab-connections" id="concept-connection">
        <div className="lab-example-meta"><span>03 / CONNECTED DISCIPLINES</span><span>Interactive · Conceptual · Distinctive</span></div>
        <div className="lab-connection-head" data-reveal><p className="lab-eyebrow">THREE LENSES, ONE PRACTICE</p><h2>My background isn't a list.<br /><span>It's a set of connections.</span></h2><p>Select a node to see how each discipline contributes to the way I work.</p></div>
        <div className="lab-connection-board" data-reveal>
          <svg className="lab-connection-lines" viewBox="0 0 800 440" role="img" aria-label="Lines connect anatomy, design, and technology"><path d="M400 92 C270 95 230 150 205 220" /><path d="M400 92 C530 95 570 150 595 220" /><path d="M205 220 C250 330 320 350 400 350" /><path d="M595 220 C550 330 480 350 400 350" /><path d="M205 220 C360 260 440 260 595 220" className="lab-line-dash" /></svg>
          <button className={"lab-node lab-node-anatomy " + (activeDiscipline === "anatomy" ? "is-active" : "")} onClick={() => setActiveDiscipline("anatomy")} aria-pressed={activeDiscipline === "anatomy"}><span className="lab-node-symbol">◎</span><span>Human Anatomy</span><small>Observe</small></button>
          <button className={"lab-node lab-node-design " + (activeDiscipline === "design" ? "is-active" : "")} onClick={() => setActiveDiscipline("design")} aria-pressed={activeDiscipline === "design"}><span className="lab-node-symbol">✳</span><span>Design</span><small>Communicate</small></button>
          <button className={"lab-node lab-node-code " + (activeDiscipline === "code" ? "is-active" : "")} onClick={() => setActiveDiscipline("code")} aria-pressed={activeDiscipline === "code"}><span className="lab-node-symbol">⌘</span><span>Technology</span><small>Build</small></button>
          <div className="lab-node-center">OMOGIWA<span>.</span></div>
        </div>
        <div className="lab-discipline-detail" aria-live="polite"><div><span className="lab-step-label">{current.tag}</span><h3>{current.kicker}</h3></div><p>{current.copy}</p></div>
      </section>

      <section className="lab-example lab-paragraphs" id="concept-reveal">
        <div className="lab-example-meta"><span>04 / PARAGRAPH-BY-PARAGRAPH REVEAL</span><span>Readable · Rhythmic · Editorial</span></div>
        <div className="lab-paragraphs-head" data-reveal><p className="lab-eyebrow">LET THE READER SET THE PACE</p><h2>One thought at a time.<br /><span>Never a wall of text.</span></h2><p>Each paragraph reveals as it enters the viewport. The spacing gives every idea room to breathe without making visitors fight the scroll.</p></div>
        <div className="lab-paragraph-list">
          <article className="lab-paragraph-row" data-reveal><span>01</span><div><h3>Purpose before polish.</h3><p>Good design is not just about making things look good. It is about making the right things clear, memorable, and useful.</p></div><i aria-hidden="true">↘</i></article>
          <article className="lab-paragraph-row" data-reveal><span>02</span><div><h3>Think beyond the screen.</h3><p>A website should do more than impress. It should help people understand the offer, find their way around, and know what to do next.</p></div><i aria-hidden="true">↘</i></article>
          <article className="lab-paragraph-row" data-reveal><span>03</span><div><h3>Connect the whole picture.</h3><p>Identity, interface, content, and function are not separate finishing touches. They work together to shape how a business is understood.</p></div><i aria-hidden="true">↘</i></article>
          <article className="lab-paragraph-row" data-reveal><span>04</span><div><h3>Yes, the purple still matters.</h3><p>Strategy gives a creative decision its reason. Craft gives it its character. And occasionally, the shade of purple really does matter.</p></div><i aria-hidden="true">↘</i></article>
        </div>
      </section>

      <section className="lab-example lab-ending" id="concept-ending">
        <div className="lab-example-meta"><span>05 / THE FINAL BEAT</span><span>Quiet confidence · Clear next step</span></div>
        <div className="lab-ending-inner" data-reveal><p className="lab-eyebrow">THAT’S HOW I THINK</p><h2>Now, let’s put<br />that thinking <em>to work.</em></h2><p>Finish with a clear, human invitation. The animation slows down here, giving the story a deliberate landing rather than another visual trick.</p><a href="/hire" className="lab-cta">Let’s work together <span aria-hidden="true">↗</span></a><span className="lab-ending-orbit" aria-hidden="true">O.</span></div>
      </section>

      <section className="lab-review">
        <div><p className="lab-eyebrow">COMPARE THE APPROACHES</p><h2>Which feeling fits<br /><span>the real About page?</span></h2></div>
        <div className="lab-review-options" role="group" aria-label="Choose a preferred animation direction">
          {[{ id: "story", title: "01 / Story-led", copy: "Cinematic scroll narrative with calm reveals." }, { id: "type", title: "02 / Type-led", copy: "A bolder, more graphic personality." }, { id: "hybrid", title: "03 / Hybrid", copy: "Editorial story with a few memorable moments." }].map((option) => <button key={option.id} className={"lab-review-option " + (activeExample === option.id ? "is-selected" : "")} onClick={() => setActiveExample(option.id)} aria-pressed={activeExample === option.id}><span>{option.title}</span><p>{option.copy}</p><i>{activeExample === option.id ? "Selected" : "Select"}</i></button>)}
        </div>
        <div className="lab-review-result" aria-live="polite">{activeExample === "story" && <p><strong>Story-led:</strong> a thoughtful, immersive reading experience where each paragraph feels intentional.</p>}{activeExample === "type" && <p><strong>Type-led:</strong> stronger visual impact and a more expressive designer personality, used in shorter bursts.</p>}{activeExample === "hybrid" && <p><strong>Hybrid:</strong> the strongest balance: readable paragraphs, one kinetic headline, one connected-disciplines visual, and a confident ending.</p>}</div>
      </section>
      <footer className="lab-footer"><span>END OF PREVIEW</span><a href="/about">Return to current About page <span aria-hidden="true">→</span></a></footer>
    </main>
  );
}
