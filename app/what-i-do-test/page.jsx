"use client";

import { useState } from "react";

const services = [
  {
    key: "brand",
    label: "Brand",
    eyebrow: "01 / BRAND & VISUAL DESIGN",
    headline: "Make them\nfeel something.",
    description:
      "Identity, visual language, and a personality people remember.",
    tags: ["Identity", "Visuals", "Feeling"],
  },
  {
    key: "web",
    label: "Web",
    eyebrow: "02 / WEB & DIGITAL DESIGN",
    headline: "Give ideas\na place to live.",
    description:
      "Digital experiences that look sharp, feel intuitive, and work beautifully.",
    tags: ["Design", "Code", "Experience"],
  },
  {
    key: "strategy",
    label: "Strategy",
    eyebrow: "03 / DIGITAL STRATEGY",
    headline: "Make every move\nmean something.",
    description:
      "Connect the brand, the message, and the experience into one clear direction.",
    tags: ["Purpose", "Positioning", "Direction"],
  },
];

const manifesto = [
  {
    title: "I make brands impossible to ignore.",
    detail: "Distinctive identities with something to say.",
    word: "FEEL",
  },
  {
    title: "I turn ideas into digital experiences.",
    detail: "Useful, expressive websites built around people.",
    word: "EXPLORE",
  },
  {
    title: "I connect the dots.",
    detail: "A clear direction from first impression to final interaction.",
    word: "CONNECT",
  },
];

export default function WhatIDoTestPage() {
  const [playgroundService, setPlaygroundService] = useState("strategy");
  const [activeNode, setActiveNode] = useState("strategy");
  const [activeManifesto, setActiveManifesto] = useState(0);
  const [mix, setMix] = useState(["brand", "web"]);
  const [activeVibe, setActiveVibe] = useState("electric");
  const [revealCard, setRevealCard] = useState(-1);
  const [roulette, setRoulette] = useState(0);
  const [portalMode, setPortalMode] = useState(false);
  const [activePath, setActivePath] = useState("make");
  const [activeShape, setActiveShape] = useState("orbit");
  const [activeScene, setActiveScene] = useState(0);
  const [activeWord, setActiveWord] = useState("PLAY");
  const [activeBrief, setActiveBrief] = useState("launch");
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeSignal, setActiveSignal] = useState(0);
  const [activeLab, setActiveLab] = useState("type");
  const selectedService =
    services.find((service) => service.key === playgroundService) || services[2];
  const networkService =
    services.find((service) => service.key === activeNode) || services[2];

  return (
    <main className="concept-test">
      <section className="test-intro">
        <p className="test-kicker">OMOGIWA / INTERACTION LAB</p>
        <h1>
          What I do,
          <br />
          <span>in motion.</span>
        </h1>
        <p className="test-lede">
          Three directions for section 03. Play with each one, compare the
          energy, and choose what feels most like you.
        </p>
        <nav className="test-nav" aria-label="Jump to a concept">
          <a href="#playground">01 Playground</a>
          <a href="#network">02 Living network</a>
          <a href="#manifesto">03 Manifesto</a>
          <a href="#mix-lab">04 Build your mix</a>
          <a href="#vibe-machine">05 Vibe machine</a>
          <a href="#reveal-deck">06 Reveal deck</a>
          <a href="#portal">07 Portal switch</a>
          <a href="#choose-path">08 Choose your path</a>
          <a href="#shape-shifter">09 Shape shifter</a>
          <a href="#kinetic-world">10 Kinetic world</a>
          <a href="#word-play">11 Word play</a>
          <a href="#brief-builder">12 Brief builder</a>
          <a href="#infinite-gallery">13 Infinite gallery</a>
          <a href="#signal-room">14 Signal room</a>
          <a href="#creative-lab">15 Creative lab</a>
        </nav>
      </section>

      <section className="concept-section playground" id="playground">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 01</p>
          <div>
            <h2>Digital Playground</h2>
            <p>Tap a discipline. Watch the whole composition respond.</p>
          </div>
          <span className="concept-type">PLAYFUL / KINETIC</span>
        </div>

        <div className={"playground-stage active-" + playgroundService}>
          <div className="stage-topline">
            <span>WHAT I DO</span>
            <span>TOUCH TO SHIFT THE STORY ↘</span>
          </div>
          <div className="playground-art" aria-live="polite">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="floating-word word-one">
              {playgroundService === "brand" ? "FEEL" : playgroundService === "web" ? "BUILD" : "THINK"}
            </span>
            <span className="floating-word word-two">
              {playgroundService === "brand" ? "FORM" : playgroundService === "web" ? "FLOW" : "WHY"}
            </span>
            <span className="floating-dot dot-one" />
            <span className="floating-dot dot-two" />
            <span className="floating-dot dot-three" />
            <h3>{selectedService.headline}</h3>
            <span className="art-index">03—0{services.findIndex((s) => s.key === playgroundService) + 1}</span>
          </div>
          <div className="playground-bottom">
            <div className="service-switcher" role="group" aria-label="Choose a discipline">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.key}
                  className={playgroundService === service.key ? "selected" : ""}
                  onClick={() => setPlaygroundService(service.key)}
                  aria-pressed={playgroundService === service.key}
                >
                  <span>↳</span> {service.label}
                </button>
              ))}
            </div>
            <div className="service-reveal">
              <p>{selectedService.eyebrow}</p>
              <span>{selectedService.description}</span>
              <div className="tag-list">
                {selectedService.tags.map((tag) => <i key={tag}>{tag}</i>)}
              </div>
            </div>
          </div>
        </div>
        <p className="concept-note">The feel: expressive type, moving details, and a tactile little world built around your work.</p>
      </section>

      <section className="concept-section network-concept" id="network">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 02</p>
          <div>
            <h2>The Living Network</h2>
            <p>Your services work together. Explore how each one connects.</p>
          </div>
          <span className="concept-type">CONNECTED / SYSTEMIC</span>
        </div>

        <div className="network-stage">
          <div className="network-copy">
            <p className="network-overline">THE BIGGER PICTURE</p>
            <h3>{networkService.label}<span> is part of the whole.</span></h3>
            <p>{networkService.description}</p>
            <div className="network-tags">
              {networkService.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <p className="network-instruction">SELECT A NODE TO EXPLORE</p>
          </div>
          <div className="network-visual">
            <svg className="network-lines" viewBox="0 0 420 360" role="presentation" aria-hidden="true">
              <defs>
                <linearGradient id="networkGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#401E97" />
                  <stop offset="100%" stopColor="#B8A2FF" />
                </linearGradient>
              </defs>
              <path className="network-path path-a" d="M210 180 L105 91 L315 83 L210 180 L326 272 L105 91" />
              <path className="network-path path-b" d="M105 91 L91 270 L326 272 L315 83" />
              <circle cx="210" cy="180" r="76" className="network-ring" />
              <circle cx="210" cy="180" r="112" className="network-ring ring-two" />
            </svg>
            <button type="button" className={"network-node node-brand " + (activeNode === "brand" ? "active" : "")} onClick={() => setActiveNode("brand")} aria-pressed={activeNode === "brand"}>
              <span>01</span> Brand
            </button>
            <button type="button" className={"network-node node-web " + (activeNode === "web" ? "active" : "")} onClick={() => setActiveNode("web")} aria-pressed={activeNode === "web"}>
              <span>02</span> Web
            </button>
            <button type="button" className={"network-node node-strategy " + (activeNode === "strategy" ? "active" : "")} onClick={() => setActiveNode("strategy")} aria-pressed={activeNode === "strategy"}>
              <span>03</span> Strategy
            </button>
            <div className="network-core"><span>OMOGIWA</span><b>Ideas<br />in motion.</b></div>
          </div>
        </div>
        <p className="concept-note">The feel: a living system, with connected nodes and a clear sense that the disciplines strengthen each other.</p>
      </section>

      <section className="concept-section manifesto-concept" id="manifesto">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 03</p>
          <div>
            <h2>The Interactive Manifesto</h2>
            <p>Less explaining. More personality. Tap a statement to reveal its meaning.</p>
          </div>
          <span className="concept-type">BOLD / PERSONAL</span>
        </div>

        <div className="manifesto-stage">
          <div className="manifesto-topline">
            <span>MY PRACTICE, IN THREE THOUGHTS</span>
            <span>0{activeManifesto + 1} / 03</span>
          </div>
          <div className="manifesto-list">
            {manifesto.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={"manifesto-item " + (activeManifesto === index ? "active" : "")}
                onClick={() => setActiveManifesto(index)}
                aria-expanded={activeManifesto === index}
              >
                <span className="manifesto-index">0{index + 1}</span>
                <span className="manifesto-text">
                  <strong>{item.title}</strong>
                  {activeManifesto === index && <small>{item.detail}</small>}
                </span>
                <span className="manifesto-plus">{activeManifesto === index ? "−" : "+"}</span>
              </button>
            ))}
          </div>
          <div className="manifesto-visual" aria-live="polite">
            <span className="manifesto-giant">{manifesto[activeManifesto].word}</span>
            <span className="manifesto-stamp">IDEAS<br />MADE<br />TANGIBLE</span>
            <span className="manifesto-spark">✳</span>
          </div>
        </div>
        <p className="concept-note">The feel: a confident point of view, oversized type, and a reveal that gives visitors a reason to interact.</p>
      </section>


      <section className="concept-section mix-concept" id="mix-lab">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 04</p>
          <div><h2>Build your mix</h2><p>Let visitors combine disciplines and create their own version of your work.</p></div>
          <span className="concept-type">MODULAR / HANDS-ON</span>
        </div>
        <div className="mix-stage">
          <div className="mix-copy">
            <p className="mix-kicker">A LITTLE OF THIS. A LITTLE OF THAT.</p>
            <h3>Good things happen when <em>worlds collide.</em></h3>
            <p>Choose what you want to bring together.</p>
            <div className="mix-options">
              {services.map((service) => <button type="button" key={service.key} className={mix.includes(service.key) ? "chosen" : ""} onClick={() => setMix((current) => current.includes(service.key) ? current.filter((key) => key !== service.key) : [...current, service.key])} aria-pressed={mix.includes(service.key)}>{mix.includes(service.key) ? "✓" : "+"} {service.label}</button>)}
            </div>
          </div>
          <div className="mix-result" aria-live="polite">
            <span className="mix-result-number">{String(mix.length).padStart(2, "0")} / 03 SELECTED</span>
            <div className="mix-orbs">{services.filter((service) => mix.includes(service.key)).map((service, index) => <span key={service.key} className={"mix-orb orb-" + service.key} style={{ "--orb-index": index }}>{service.label}</span>)}</div>
            <h4>{mix.length === 0 ? "Start with a spark." : mix.length === 1 ? "One discipline. Endless possibilities." : mix.length === 2 ? "Two worlds. One stronger idea." : "The whole picture, connected."}</h4>
            <p>{mix.length === 0 ? "Pick one or more disciplines to see your mix take shape." : mix.map((key) => services.find((service) => service.key === key)?.label).join(" + ") + " — brought together with intention."}</p>
          </div>
        </div>
        <p className="concept-note">The feel: visitors actively compose their own combination instead of passively reading a list.</p>
      </section>

      <section className="concept-section vibe-concept" id="vibe-machine">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 05</p>
          <div><h2>The Vibe Machine</h2><p>One tap changes the mood, colour, typography, and energy of the whole section.</p></div>
          <span className="concept-type">MOOD / TRANSFORMATION</span>
        </div>
        <div className={"vibe-stage vibe-" + activeVibe}>
          <div className="vibe-controls"><span>SET THE FREQUENCY</span><div>{[{key:"electric",label:"Electric"},{key:"soft",label:"Soft"},{key:"raw",label:"Raw"}].map((vibe) => <button key={vibe.key} type="button" className={activeVibe === vibe.key ? "active" : ""} onClick={() => setActiveVibe(vibe.key)} aria-pressed={activeVibe === vibe.key}>{vibe.label}</button>)}</div></div>
          <div className="vibe-art"><span className="vibe-sticker">{activeVibe === "electric" ? "FULL VOLTAGE" : activeVibe === "soft" ? "ROOM TO BREATHE" : "NO FILTER"}</span><h3>{activeVibe === "electric" ? <>Make some<br/><i>noise.</i></> : activeVibe === "soft" ? <>Quietly<br/><i>different.</i></> : <>Break the<br/><i>pattern.</i></>}</h3><span className="vibe-shape" /></div>
          <p className="vibe-caption">{activeVibe === "electric" ? "High contrast. Big type. A little chaos, all intentional." : activeVibe === "soft" ? "Airy, tactile, and quietly confident." : "Unpolished edges, sharp statements, unapologetic character."}</p>
        </div>
        <p className="concept-note">The feel: a section that transforms like a music visualiser or an art direction switch.</p>
      </section>

      <section className="concept-section reveal-concept" id="reveal-deck">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 06</p>
          <div><h2>The Reveal Deck</h2><p>A set of oversized, tactile cards that flip from a bold promise to the work behind it.</p></div>
          <span className="concept-type">TACTILE / COLLECTIBLE</span>
        </div>
        <div className="reveal-grid">
          {[{front:"MAKE IT\nMEMORABLE",back:"Brand & Visual Design",detail:"Distinctive identities, visual systems, and a point of view."},{front:"MAKE IT\nWORK",back:"Web & Digital Design",detail:"Digital experiences that make the next step feel natural."},{front:"MAKE IT\nMATTER",back:"Digital Strategy",detail:"A clear connection between purpose, message, and experience."}].map((card,index) => <button type="button" key={card.back} className={"reveal-card card-" + index + (revealCard === index ? " flipped" : "")} onClick={() => setRevealCard(revealCard === index ? -1 : index)} aria-expanded={revealCard === index}><span className="reveal-card-index">0{index + 1} / 03</span><strong>{revealCard === index ? card.back : card.front}</strong><span className="reveal-card-bottom">{revealCard === index ? card.detail : "TAP TO TURN ↻"}</span><span className="reveal-card-symbol">{revealCard === index ? "↙" : "+"}</span></button>)}
        </div>
        <p className="concept-note">The feel: like flipping through a small collection of creative objects. Great for touchscreens.</p>
      </section>

      <section className="concept-section portal-concept" id="portal">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 07</p>
          <div><h2>The Portal Switch</h2><p>A dramatic before-and-after reveal that turns a quiet page into a living visual world.</p></div>
          <span className="concept-type">IMMERSIVE / DRAMATIC</span>
        </div>
        <div className={"portal-stage " + (portalMode ? "portal-open" : "")}>
          <div className="portal-copy"><span>THERE'S MORE BENEATH THE SURFACE</span><h3>{portalMode ? "Welcome to the other side." : "Curiosity looks good on you."}</h3><p>{portalMode ? "Strategy gives the idea direction. Design gives it form. Technology brings it to life." : "Press the switch. Step into a different way of presenting what you do."}</p><button type="button" onClick={() => setPortalMode((value) => !value)}>{portalMode ? "CLOSE THE PORTAL −" : "OPEN THE PORTAL + "}</button></div>
          <div className="portal-visual" aria-hidden="true"><span className="portal-ring ring-a" /><span className="portal-ring ring-b" /><span className="portal-core">{portalMode ? "IDEAS" : "?"}</span><span className="portal-orbit-word">{portalMode ? "IN MOTION" : "GO BEYOND"}</span></div>
        </div>
        <p className="concept-note">The feel: a small interactive moment with a big transition and a sense of discovery.</p>
      </section>

      <section className="concept-section path-concept" id="choose-path">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 08</p>
          <div><h2>Choose your path</h2><p>A tiny interactive story that makes each visitor feel like they're entering through their own door.</p></div>
          <span className="concept-type">STORY / PERSONAL</span>
        </div>
        <div className="path-stage">
          <p className="path-kicker">SO, WHAT BROUGHT YOU HERE?</p>
          <div className="path-choices">{[{key:"make",label:"I have an idea",symbol:"✳",answer:"Let's give that idea a shape.",detail:"From the first messy thought to a clear, confident concept."},{key:"grow",label:"I want to grow",symbol:"↗",answer:"Let's make your next move count.",detail:"A stronger identity and a digital presence built to move you forward."},{key:"explore",label:"I'm just exploring",symbol:"◎",answer:"Good. That's where things start.",detail:"Look around, follow a curiosity, and see what we could make together."}].map((path) => <button key={path.key} type="button" className={activePath === path.key ? "active" : ""} onClick={() => setActivePath(path.key)} aria-pressed={activePath === path.key}><span>{path.symbol}</span>{path.label}<b>{activePath === path.key ? "YOU ARE HERE" : "↘"}</b></button>)}</div>
          {(() => { const path = [{key:"make",answer:"Let's give that idea a shape.",detail:"From the first messy thought to a clear, confident concept."},{key:"grow",answer:"Let's make your next move count.",detail:"A stronger identity and a digital presence built to move you forward."},{key:"explore",answer:"Good. That's where things start.",detail:"Look around, follow a curiosity, and see what we could make together."}].find((item) => item.key === activePath); return <div className="path-answer" aria-live="polite"><span>YOUR STORY STARTS HERE</span><h3>{path.answer}</h3><p>{path.detail}</p></div>; })()}
        </div>
        <p className="concept-note">The feel: an experience-led intro that adapts to what a visitor is curious about.</p>
      </section>

      <section className="concept-section shape-concept" id="shape-shifter">
        <div className="concept-heading">
          <p className="concept-number">CONCEPT 09</p>
          <div><h2>Shape Shifter</h2><p>Change the visual language with a tap. The shape becomes part of the story.</p></div>
          <span className="concept-type">GENERATIVE / PLAYFUL</span>
        </div>
        <div className={"shape-stage shape-" + activeShape}>
          <div className="shape-copy"><span>FORM FOLLOWS FEELING</span><h3>Every idea has a different shape.</h3><p>Pick a form to change the entire composition.</p><div className="shape-options">{[{key:"orbit",label:"Orbit"},{key:"blob",label:"Organic"},{key:"grid",label:"Grid"},{key:"burst",label:"Burst"}].map((shape) => <button type="button" key={shape.key} className={activeShape === shape.key ? "active" : ""} onClick={() => setActiveShape(shape.key)}>{shape.label}</button>)}</div></div>
          <div className="shape-art"><span className="shape-graphic" /><span className="shape-word">{activeShape === "orbit" ? "IDEAS" : activeShape === "blob" ? "GROW" : activeShape === "grid" ? "SYSTEM" : "CREATE"}</span><span className="shape-index">0{[{key:"orbit"},{key:"blob"},{key:"grid"},{key:"burst"}].findIndex((shape) => shape.key === activeShape) + 1}</span></div>
        </div>
        <p className="concept-note">The feel: abstract motion graphics, responsive shapes, and a visual identity that changes as people explore.</p>
      </section>
\n
      <section className="concept-section kinetic-concept" id="kinetic-world">
        <div className="concept-heading"><p className="concept-number">CONCEPT 10</p><div><h2>Kinetic World</h2><p>Scroll or tap through a sequence where the visual world changes around the story.</p></div><span className="concept-type">SCROLL / CINEMATIC</span></div>
        <div className={"kinetic-stage scene-" + activeScene}>
          <div className="kinetic-top"><span>SCENE {String(activeScene + 1).padStart(2,"0")} / 03</span><span>KEEP EXPLORING ↓</span></div>
          <div className="kinetic-art"><span className="kinetic-ring" /><span className="kinetic-orb" /><h3>{["MAKE","MOVE","MATTER"][activeScene]}<i>.</i></h3><span className="kinetic-side">{["IDENTITY","EXPERIENCE","DIRECTION"][activeScene]}</span></div>
          <div className="kinetic-bottom"><p>{["Give an idea a feeling people recognise.","Turn that feeling into something people can use.","Make every touchpoint point somewhere meaningful."][activeScene]}</p><div>{[0,1,2].map((n) => <button key={n} className={activeScene===n?"active":""} onClick={()=>setActiveScene(n)} aria-label={"Show scene "+(n+1)}>{String(n+1).padStart(2,"0")}</button>)}</div></div>
        </div>
        <p className="concept-note">Inspired by scroll-led storytelling and motion-led portfolio experiences. The visitor moves through a sequence, not a stack of cards.</p>
      </section>

      <section className="concept-section wordplay-concept" id="word-play">
        <div className="concept-heading"><p className="concept-number">CONCEPT 11</p><div><h2>Word Play</h2><p>Make the typography itself the toy: click, shuffle, and reshape the message.</p></div><span className="concept-type">KINETIC TYPE / PLAY</span></div>
        <div className="wordplay-stage">
          <div className="wordplay-head"><span>PRESS A WORD</span><span>TYPE IS A PLAYGROUND</span></div>
          <div className="wordplay-words">{["PLAY","MAKE","FEEL","SHIFT","BUILD","WOW"].map((word,i)=><button key={word} className={activeWord===word?"selected":""} onClick={()=>setActiveWord(word)}>{word}<span>0{i+1}</span></button>)}</div>
          <div className={"wordplay-hero word-"+activeWord.toLowerCase()}><span>OMO / GIWA STUDIO</span><h3 key={activeWord}>{activeWord.split("").map((letter,i)=><i key={i} style={{"--letter-index":i}}>{letter}</i>)}</h3><p>Ideas with a pulse. Design with a point of view.</p></div>
        </div>
        <p className="concept-note">Inspired by interactive typography experiments: the words are the interface, not just labels above it.</p>
      </section>

      <section className="concept-section brief-concept" id="brief-builder">
        <div className="concept-heading"><p className="concept-number">CONCEPT 12</p><div><h2>The Brief Builder</h2><p>Let visitors choose the challenge, then reveal how your three disciplines can solve it.</p></div><span className="concept-type">PERSONALISED / USEFUL</span></div>
        <div className="brief-stage">
          <div className="brief-intro"><span>LET'S START WITH YOU</span><h3>What are you trying to do?</h3><p>Pick the situation that sounds most like you.</p></div>
          <div className="brief-options">{[{key:"launch",label:"Launch something new",symbol:"✳",answer:"Make a first impression that sticks.",detail:"A recognisable brand, a clear story, and a digital home that is ready for the world."},{key:"refresh",label:"Refresh what exists",symbol:"↻",answer:"Keep the good. Change the feeling.",detail:"Find what's working, sharpen the message, and give the experience a more confident point of view."},{key:"connect",label:"Make things work together",symbol:"⌘",answer:"Turn separate pieces into one system.",detail:"Bring identity, content, and digital touchpoints into a consistent experience."}].map((item)=><button key={item.key} className={activeBrief===item.key?"active":""} onClick={()=>setActiveBrief(item.key)}><span>{item.symbol}</span>{item.label}<b>{activeBrief===item.key?"SELECTED":"CHOOSE →"}</b></button>)}</div>
          {(() => {const item=[{key:"launch",answer:"Make a first impression that sticks.",detail:"A recognisable brand, a clear story, and a digital home that is ready for the world."},{key:"refresh",answer:"Keep the good. Change the feeling.",detail:"Find what's working, sharpen the message, and give the experience a more confident point of view."},{key:"connect",answer:"Turn separate pieces into one system.",detail:"Bring identity, content, and digital touchpoints into a consistent experience."}].find(x=>x.key===activeBrief);return <div className="brief-answer"><span>YOUR CREATIVE ROUTE</span><h4>{item.answer}</h4><p>{item.detail}</p><div><span>BRAND</span><span>WEB</span><span>STRATEGY</span></div></div>})()}
        </div>
        <p className="concept-note">Unlike a generic services list, this begins with the visitor's problem and makes your services the answer.</p>
      </section>

      <section className="concept-section gallery-concept" id="infinite-gallery">
        <div className="concept-heading"><p className="concept-number">CONCEPT 13</p><div><h2>Infinite Gallery</h2><p>A horizontal, tactile strip of visual worlds. Swipe, drag, or tap to move between them.</p></div><span className="concept-type">DRAG / DISCOVER</span></div>
        <div className="gallery-stage">
          <div className="gallery-top"><span>SELECT A WORLD</span><span>{String(activeGallery+1).padStart(2,"0")} / 04</span></div>
          <div className="gallery-track">{[{name:"IDENTITY",word:"FEEL",detail:"Build a world people recognise.",className:"gallery-brand"},{name:"DIGITAL",word:"FLOW",detail:"Make every interaction count.",className:"gallery-web"},{name:"DIRECTION",word:"WHY",detail:"Give every decision a reason.",className:"gallery-strategy"},{name:"EXPERIMENT",word:"WHAT IF",detail:"Leave room for the unexpected.",className:"gallery-experiment"}].map((item,i)=><button key={item.name} className={"gallery-tile "+item.className+(activeGallery===i?" active":"")} onClick={()=>setActiveGallery(i)}><span>{item.name}</span><strong>{item.word}</strong><small>{activeGallery===i?item.detail:"TAP TO EXPLORE"}</small></button>)}</div>
          <div className="gallery-controls"><span>SWIPE THE STRIP ON MOBILE</span><div><button onClick={()=>setActiveGallery((activeGallery+3)%4)} aria-label="Previous gallery item">←</button><button onClick={()=>setActiveGallery((activeGallery+1)%4)} aria-label="Next gallery item">→</button></div></div>
        </div>
        <p className="concept-note">Inspired by horizontal and infinite galleries. It feels more like browsing a collection than reading a service menu.</p>
      </section>

      <section className="concept-section signal-concept" id="signal-room">
        <div className="concept-heading"><p className="concept-number">CONCEPT 14</p><div><h2>Signal Room</h2><p>A reactive field of signals, labels, and connected ideas that responds to each tap.</p></div><span className="concept-type">GENERATIVE / SYSTEM</span></div>
        <div className={"signal-stage signal-"+activeSignal}>
          <div className="signal-head"><span>OMOGIWA / CREATIVE SIGNALS</span><span>LIVE SYSTEM ●</span></div>
          <div className="signal-field" aria-label="Select a creative discipline">{[{label:"IDENTITY",sub:"How it feels",x:"12%",y:"22%"},{label:"STORY",sub:"What it says",x:"60%",y:"12%"},{label:"DIGITAL",sub:"How it works",x:"54%",y:"59%"},{label:"PURPOSE",sub:"Why it matters",x:"8%",y:"68%"},{label:"PEOPLE",sub:"Who it's for",x:"75%",y:"42%"}].map((node,i)=><button key={node.label} className={"signal-node node-"+i+(activeSignal===i?" active":"")} style={{"--x":node.x,"--y":node.y}} onClick={()=>setActiveSignal(i)}><strong>{node.label}</strong><small>{node.sub}</small></button>)}</div>
          <div className="signal-footer"><strong>{["IDENTITY","STORY","DIGITAL","PURPOSE","PEOPLE"][activeSignal]}</strong><p>{["Build a visual world that feels unmistakably yours.","Find the words and ideas worth remembering.","Make the experience intuitive, useful, and expressive.","Connect creative choices to a clear reason.","Design around the people on the other side of the screen."][activeSignal]}</p></div>
        </div>
        <p className="concept-note">Inspired by node-based interfaces and generative systems: every element belongs to a bigger picture.</p>
      </section>

      <section className="concept-section lab-concept" id="creative-lab">
        <div className="concept-heading"><p className="concept-number">CONCEPT 15</p><div><h2>The Creative Lab</h2><p>A mini interactive playground where the visitor switches between experiments in type, motion, and form.</p></div><span className="concept-type">EXPERIMENT / DISCOVERY</span></div>
        <div className={"lab-stage lab-"+activeLab}>
          <div className="lab-menu"><span>EXPERIMENT_0{["type","motion","form"].indexOf(activeLab)+1}</span>{[{key:"type",label:"TYPE"},{key:"motion",label:"MOTION"},{key:"form",label:"FORM"}].map(item=><button key={item.key} className={activeLab===item.key?"active":""} onClick={()=>setActiveLab(item.key)}>{item.label}</button>)}</div>
          <div className="lab-canvas" key={activeLab}>{activeLab==="type"?<><span>WORDS HAVE WEIGHT</span><h3>MAKE<br/><i>WAVES</i></h3><small>01 / TYPOGRAPHY STUDY</small></>:activeLab==="motion"?<><div className="lab-motion-shape"/><h3>IN<br/>MOTION</h3><small>02 / MOVEMENT STUDY</small></>:<><div className="lab-form-shape"/><h3>FORM<br/><i>FOLLOWS</i></h3><small>03 / SHAPE STUDY</small></>}</div>
          <p className="lab-caption">Not every idea needs a predictable layout. Sometimes the interaction is the work.</p>
        </div>
        <p className="concept-note">Inspired by experimental portfolios and creative-code showcases. A section that feels like entering your sketchbook.</p>
      </section>
\n      <section className="decision-section">
        <p className="test-kicker">YOUR CALL</p>
        <h2>Which one feels like <em>OmoGiwa?</em></h2>
        <p>Pick the direction you want me to develop for the real homepage section.</p>
        <div className="decision-buttons">
          <a href="#playground">01 / Playground</a>
          <a href="#network">02 / Network</a>
          <a href="#manifesto">03 / Manifesto</a>
          <a href="#mix-lab">04 / Mix</a>
          <a href="#vibe-machine">05 / Vibe</a>
          <a href="#reveal-deck">06 / Reveal</a>
          <a href="#portal">07 / Portal</a>
          <a href="#choose-path">08 / Path</a>
          <a href="#shape-shifter">09 / Shapes</a>
        </div>
      </section>

      <style jsx>{`
        .concept-test {
          --purple: #401e97;
          --lavender: #b8a2ff;
          --ink: #19151f;
          --muted: #77717f;
          color: var(--ink);
          background: #fbfaff;
          overflow: hidden;
          padding-bottom: 90px;
        }
        .test-intro, .concept-section, .decision-section {
          width: min(1160px, calc(100% - 44px));
          margin-inline: auto;
        }
        .test-intro { padding: clamp(70px, 10vw, 130px) 0 64px; }
        .test-kicker, .concept-number, .concept-type, .stage-topline, .network-overline, .network-instruction, .manifesto-topline {
          font-size: 10px; letter-spacing: .16em; font-weight: 700;
        }
        .test-kicker { color: var(--purple); margin: 0 0 20px; }
        .test-intro h1 { font-size: clamp(58px, 10vw, 120px); line-height: .88; letter-spacing: -.085em; margin: 0; font-weight: 600; }
        .test-intro h1 span { color: var(--purple); font-style: italic; font-weight: 400; }
        .test-lede { max-width: 520px; color: #686270; line-height: 1.7; font-size: 16px; margin: 28px 0 28px; }
        .test-nav { display: flex; flex-wrap: wrap; gap: 10px; }
        .test-nav a, .decision-buttons a { color: var(--purple); text-decoration: none; border: 1px solid #ded6f4; border-radius: 999px; padding: 11px 16px; font-size: 12px; transition: background .2s, color .2s, transform .2s; }
        .test-nav a:hover, .decision-buttons a:hover { color: white; background: var(--purple); transform: translateY(-2px); }
        .concept-section { padding: 44px 0 68px; border-top: 1px solid #e8e3f1; scroll-margin-top: 24px; }
        .concept-heading { display: grid; grid-template-columns: 120px 1fr auto; align-items: start; gap: 20px; margin-bottom: 28px; }
        .concept-number { color: var(--purple); margin: 8px 0 0; }
        .concept-heading h2 { font-size: clamp(28px, 4vw, 46px); line-height: 1; letter-spacing: -.055em; margin: 0 0 9px; font-weight: 550; }
        .concept-heading p:not(.concept-number) { color: var(--muted); margin: 0; line-height: 1.6; font-size: 14px; }
        .concept-type { color: #8b8494; margin-top: 9px; font-size: 9px; white-space: nowrap; }
        .playground-stage { background: #f0eaff; border-radius: 4px; padding: clamp(20px, 4vw, 42px); position: relative; isolation: isolate; overflow: hidden; transition: background .45s; }
        .playground-stage.active-brand { background: #f7e9f1; }
        .playground-stage.active-web { background: #e9f0ff; }
        .stage-topline, .manifesto-topline { display: flex; justify-content: space-between; gap: 12px; color: #746a86; font-size: 9px; }
        .playground-art { min-height: 340px; display: grid; place-items: center; position: relative; overflow: hidden; }
        .playground-art h3 { z-index: 2; white-space: pre-line; text-align: center; font-size: clamp(44px, 8.5vw, 96px); letter-spacing: -.08em; line-height: .9; font-weight: 550; margin: 0; max-width: 760px; animation: text-arrive .45s ease both; }
        .active-brand .playground-art h3 { transform: rotate(-4deg); }
        .active-web .playground-art h3 { transform: rotate(2deg); }
        .orbit { border: 1px solid rgba(64,30,151,.2); border-radius: 50%; position: absolute; width: 250px; height: 250px; animation: orbit-spin 22s linear infinite; }
        .orbit-one { width: 310px; height: 310px; border-style: dashed; }
        .orbit-two { width: 420px; height: 170px; transform: rotate(-25deg); animation-duration: 30s; }
        .floating-word { position: absolute; color: var(--purple); font-size: 10px; font-weight: 700; letter-spacing: .2em; }
        .word-one { top: 17%; left: 12%; transform: rotate(-12deg); }
        .word-two { right: 10%; bottom: 19%; transform: rotate(12deg); }
        .floating-dot { position: absolute; border-radius: 50%; background: var(--purple); animation: bob 3s ease-in-out infinite; }
        .dot-one { width: 12px; height: 12px; top: 24%; right: 20%; }
        .dot-two { width: 7px; height: 7px; bottom: 18%; left: 22%; animation-delay: -.8s; }
        .dot-three { width: 5px; height: 5px; top: 25%; left: 29%; animation-delay: -1.5s; }
        .art-index { position: absolute; right: 0; top: 0; color: rgba(64,30,151,.38); font-size: 11px; letter-spacing: .15em; }
        .playground-bottom { border-top: 1px solid rgba(64,30,151,.18); padding-top: 22px; display: grid; grid-template-columns: .8fr 1.2fr; gap: 34px; }
        .service-switcher { display: flex; flex-direction: column; align-items: stretch; gap: 7px; }
        .service-switcher button { cursor: pointer; border: 1px solid transparent; color: #6b6378; background: transparent; border-radius: 3px; text-align: left; padding: 12px 14px; font: inherit; font-size: 14px; transition: all .2s; }
        .service-switcher button span { margin-right: 8px; color: var(--purple); }
        .service-switcher button.selected { background: var(--purple); color: white; }
        .service-switcher button.selected span { color: white; }
        .service-reveal { padding-top: 5px; }
        .service-reveal p { font-size: 9px; letter-spacing: .12em; font-weight: 700; color: var(--purple); margin: 0 0 9px; }
        .service-reveal > span { color: #5e5867; font-size: 14px; line-height: 1.7; display: block; max-width: 430px; }
        .tag-list, .network-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 16px; }
        .tag-list i, .network-tags span { border: 1px solid #d8cdef; border-radius: 99px; padding: 7px 10px; font-size: 10px; font-style: normal; color: var(--purple); }
        .concept-note { color: #827b8b; font-size: 12px; line-height: 1.7; margin: 14px 0 0; }
        .network-stage { display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 30px; background: #f2eff8; padding: clamp(22px, 4vw, 48px); min-height: 430px; overflow: hidden; }
        .network-overline { color: var(--purple); margin: 0 0 18px; }
        .network-copy h3 { font-size: clamp(34px, 5vw, 57px); line-height: .98; letter-spacing: -.07em; margin: 0 0 17px; font-weight: 550; }
        .network-copy h3 span { color: #9b91aa; font-weight: 400; }
        .network-copy > p:not(.network-overline):not(.network-instruction) { color: #6e6779; line-height: 1.7; font-size: 14px; max-width: 350px; }
        .network-instruction { color: #8e829f; font-size: 9px; margin-top: 30px; }
        .network-visual { position: relative; width: 100%; max-width: 440px; aspect-ratio: 1.15; margin: auto; }
        .network-lines { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .network-path { fill: none; stroke: url(#networkGradient); stroke-width: 1.3; stroke-dasharray: 5 8; animation: dash-flow 15s linear infinite; }
        .path-b { opacity: .5; animation-direction: reverse; }
        .network-ring { fill: none; stroke: #b6a5e6; stroke-width: 1; stroke-dasharray: 2 7; transform-origin: 210px 180px; animation: orbit-spin 35s linear infinite; }
        .ring-two { animation-direction: reverse; }
        .network-node { position: absolute; z-index: 2; border: 1px solid #d4c9ec; border-radius: 999px; background: #fbfaff; color: var(--purple); padding: 12px 15px; font: inherit; font-size: 12px; cursor: pointer; box-shadow: 0 5px 20px rgba(64,30,151,.04); transition: transform .25s, background .25s, color .25s, box-shadow .25s; }
        .network-node span { opacity: .55; font-size: 9px; margin-right: 6px; }
        .network-node:hover { transform: scale(1.06); }
        .network-node.active { background: var(--purple); color: white; box-shadow: 0 8px 30px rgba(64,30,151,.22); transform: scale(1.08); }
        .node-brand { top: 13%; left: 12%; }
        .node-web { top: 11%; right: 8%; }
        .node-strategy { bottom: 13%; right: 12%; }
        .network-core { position: absolute; inset: 31% 27%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 50%; background: radial-gradient(circle, #fff 0%, #f3edff 70%); border: 1px solid #d6c9f4; box-shadow: 0 0 0 10px rgba(255,255,255,.3), 0 15px 40px rgba(64,30,151,.08); }
        .network-core span { color: var(--purple); font-size: 8px; letter-spacing: .2em; font-weight: 700; }
        .network-core b { font-size: clamp(16px, 2vw, 23px); line-height: 1; letter-spacing: -.06em; margin-top: 8px; }
        .manifesto-stage { display: grid; grid-template-columns: 1.05fr .95fr; gap: 32px; background: #211a31; color: #fff; padding: clamp(22px, 4vw, 42px); min-height: 430px; }
        .manifesto-topline { grid-column: 1 / -1; color: #b4a5d0; }
        .manifesto-list { display: flex; flex-direction: column; }
        .manifesto-item { width: 100%; display: grid; grid-template-columns: 28px 1fr 20px; align-items: start; gap: 12px; text-align: left; background: transparent; color: #a9a0b7; border: 0; border-top: 1px solid #4a4059; padding: 20px 0; cursor: pointer; font: inherit; }
        .manifesto-item:last-child { border-bottom: 1px solid #4a4059; }
        .manifesto-index { color: #a28be3; font-size: 10px; padding-top: 5px; }
        .manifesto-text strong { display: block; font-size: clamp(18px, 2.5vw, 27px); letter-spacing: -.045em; line-height: 1.12; font-weight: 450; transition: color .2s; }
        .manifesto-text small { display: block; color: #c1b7d0; font-size: 12px; line-height: 1.6; margin-top: 10px; animation: text-arrive .3s ease both; }
        .manifesto-item.active { color: #fff; }
        .manifesto-item.active strong { color: #fff; }
        .manifesto-plus { color: #b9a5ed; font-size: 20px; line-height: 1; }
        .manifesto-visual { background: #3c2b60; position: relative; min-height: 270px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .manifesto-giant { font-size: clamp(52px, 8vw, 100px); letter-spacing: -.09em; font-weight: 700; color: #c6b4ff; transform: rotate(-8deg); animation: text-arrive .4s ease both; }
        .manifesto-stamp { position: absolute; right: 12px; bottom: 12px; font-size: 8px; letter-spacing: .16em; line-height: 1.5; text-align: right; color: #e7ddff; border: 1px solid #8c73bd; border-radius: 50%; width: 72px; height: 72px; display: grid; place-content: center; transform: rotate(12deg); }
        .manifesto-spark { position: absolute; top: 13%; left: 12%; color: #f4d67b; font-size: 35px; animation: spark-spin 12s linear infinite; }
        .decision-section { padding: 80px 0 20px; border-top: 1px solid #e8e3f1; }
        .decision-section h2 { font-size: clamp(38px, 7vw, 76px); line-height: .95; letter-spacing: -.075em; margin: 0; }
        .decision-section h2 em { color: var(--purple); font-weight: 400; }
        .decision-section > p:not(.test-kicker) { color: var(--muted); font-size: 14px; margin: 20px 0 24px; }
        .decision-buttons { display: flex; flex-wrap: wrap; gap: 9px; }
        .test-nav { max-width:900px; }
        .test-nav a { font-size:11px; }
        @media (max-width: 720px) {
          .brief-options { grid-template-columns:1fr; }
          .brief-options button { min-height:110px; }
          .gallery-track { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .gallery-tile { min-height:210px; }
          .signal-field { min-height:330px; }
          .signal-node { min-width:82px; min-height:82px; padding:9px; }
          .signal-node strong { font-size:8px; }
          .signal-node small { font-size:7px; }
          .signal-footer { grid-template-columns:1fr; gap:8px; }
          .kinetic-art { min-height:280px; }
          .wordplay-hero { min-height:250px; }
          .lab-canvas { min-height:290px; }
          .mix-stage,.portal-stage,.shape-stage { grid-template-columns:1fr; }
          .mix-result { min-height:280px; padding:22px; }
          .reveal-grid { grid-template-columns:1fr; }
          .reveal-card { min-height:220px; }
          .vibe-art { min-height:280px; }
          .vibe-sticker { left:0; top:10%; width:66px; height:66px; font-size:7px; }
          .portal-visual { min-height:280px; }
          .path-choices { grid-template-columns:1fr; }
          .path-choices button { min-height:100px; }
          .shape-art { min-height:300px; }
        }

        .mix-stage { display:grid; grid-template-columns:1fr 1fr; gap:24px; padding:clamp(24px,5vw,60px); background:#211a31; color:#fff; overflow:hidden; }
        .mix-kicker,.mix-result-number,.vibe-controls>span,.vibe-sticker,.portal-copy>span,.path-kicker,.path-answer>span,.shape-copy>span { font-size:9px; letter-spacing:.16em; font-weight:700; }
        .mix-kicker { color:#c6b4ff; }
        .mix-copy h3 { font-size:clamp(36px,6vw,68px); letter-spacing:-.075em; line-height:.96; margin:24px 0; max-width:480px; }
        .mix-copy h3 em { color:#c6b4ff; font-weight:400; }
        .mix-copy>p:not(.mix-kicker) { color:#bdb4cb; font-size:13px; }
        .mix-options { display:flex; flex-wrap:wrap; gap:9px; margin-top:22px; }
        .mix-options button { border:1px solid #645577; background:transparent; color:#eee7ff; border-radius:99px; padding:12px 16px; cursor:pointer; font:inherit; font-size:12px; }
        .mix-options button.chosen { background:#c6b4ff; border-color:#c6b4ff; color:#211a31; }
        .mix-result { display:flex; flex-direction:column; justify-content:center; min-height:330px; background:#332548; padding:28px; position:relative; overflow:hidden; }
        .mix-result-number { color:#c6b4ff; }
        .mix-orbs { position:relative; display:flex; align-items:center; justify-content:center; min-height:150px; margin:10px 0; }
        .mix-orb { display:grid; place-items:center; width:clamp(88px,12vw,140px); aspect-ratio:1; border-radius:50%; background:#b8a2ff; color:#211a31; font-size:11px; font-weight:700; margin-left:-16px; box-shadow:0 12px 40px #170f25aa; animation:orb-arrive .4s ease both; }
        .orb-web { background:#f5d77a; border-radius:28% 72% 60% 40%; }
        .orb-strategy { background:#f8f4ff; border-radius:36% 64% 35% 65%; }
        .mix-result h4 { font-size:clamp(21px,3vw,32px); letter-spacing:-.04em; margin:8px 0; }
        .mix-result>p { color:#c9c0d6; font-size:12px; line-height:1.7; }
        .vibe-stage { padding:clamp(20px,4vw,42px); transition:background .4s,color .4s; background:#401e97; color:#fff; overflow:hidden; }
        .vibe-soft { background:#f4efff; color:#281d3c; }
        .vibe-raw { background:#d7fa70; color:#201d17; }
        .vibe-controls { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .vibe-controls>span { opacity:.7; }
        .vibe-controls>div { display:flex; gap:6px; }
        .vibe-controls button,.shape-options button { cursor:pointer; border:1px solid currentColor; background:transparent; color:inherit; border-radius:99px; padding:9px 13px; font:inherit; font-size:11px; opacity:.7; }
        .vibe-controls button.active,.shape-options button.active { opacity:1; background:currentColor; color:#401e97; }
        .vibe-soft .vibe-controls button.active { color:#fff; background:#401e97; }
        .vibe-raw .vibe-controls button.active { color:#d7fa70; background:#201d17; }
        .vibe-art { min-height:330px; display:grid; place-items:center; position:relative; }
        .vibe-art h3 { position:relative; z-index:2; font-size:clamp(64px,12vw,140px); line-height:.78; letter-spacing:-.1em; text-align:center; margin:0; font-weight:600; }
        .vibe-art h3 i { color:#d7fa70; font-weight:400; }
        .vibe-soft .vibe-art h3 i { color:#8b6ee8; }
        .vibe-raw .vibe-art h3 i { color:#f34d2f; }
        .vibe-sticker { position:absolute; left:4%; top:20%; border:1px solid currentColor; border-radius:50%; width:84px; height:84px; display:grid; place-items:center; text-align:center; padding:10px; transform:rotate(-13deg); font-size:8px; }
        .vibe-shape { position:absolute; width:clamp(150px,28vw,300px); aspect-ratio:1; border:1px solid currentColor; border-radius:50%; opacity:.22; animation:orbit-spin 20s linear infinite; }
        .vibe-caption { border-top:1px solid currentColor; padding-top:17px; font-size:12px; opacity:.75; }
        .reveal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .reveal-card { position:relative; min-height:330px; text-align:left; border:0; padding:24px; display:flex; flex-direction:column; justify-content:space-between; cursor:pointer; color:#fff; background:#401e97; transition:transform .3s,background .3s; overflow:hidden; }
        .reveal-card:hover { transform:translateY(-6px) rotate(-1deg); }
        .reveal-card.card-1 { background:#d8f47b; color:#27221b; }
        .reveal-card.card-2 { background:#211a31; }
        .reveal-card.flipped { background:#f2edff; color:#401e97; transform:rotateY(0deg); }
        .reveal-card-index,.reveal-card-bottom { font-size:9px; letter-spacing:.12em; line-height:1.7; opacity:.75; }
        .reveal-card strong { white-space:pre-line; font-size:clamp(32px,4vw,54px); letter-spacing:-.07em; line-height:.92; font-weight:550; }
        .reveal-card-bottom { max-width:230px; }
        .reveal-card-symbol { position:absolute; right:22px; top:48%; font-size:32px; opacity:.65; }
        .portal-stage { min-height:420px; display:grid; grid-template-columns:1fr 1fr; background:#eee8ff; color:#261b3d; overflow:hidden; transition:background .6s,color .6s; }
        .portal-stage.portal-open { background:#211a31; color:#fff; }
        .portal-copy { padding:clamp(24px,5vw,58px); display:flex; flex-direction:column; align-items:flex-start; justify-content:center; }
        .portal-copy>span { opacity:.65; }
        .portal-copy h3 { font-size:clamp(36px,5vw,62px); letter-spacing:-.07em; line-height:.94; margin:24px 0 14px; }
        .portal-copy p { max-width:370px; opacity:.7; font-size:13px; line-height:1.8; }
        .portal-copy button { border:0; background:#401e97; color:#fff; padding:14px 18px; border-radius:99px; cursor:pointer; margin-top:15px; font:inherit; font-size:10px; letter-spacing:.08em; }
        .portal-open .portal-copy button { background:#c6b4ff; color:#211a31; }
        .portal-visual { display:grid; place-items:center; min-height:360px; position:relative; background:radial-gradient(circle,#d2c1ff 0%,#a58ae9 25%,#401e97 68%); isolation:isolate; }
        .portal-open .portal-visual { background:radial-gradient(circle,#f5d77a 0%,#8c65e8 30%,#211a31 72%); }
        .portal-ring { position:absolute; width:65%; aspect-ratio:1; border:1px solid #fff8; border-radius:50%; animation:portal-pulse 4s ease-in-out infinite alternate; }
        .ring-b { width:85%; animation-delay:-2s; animation-direction:alternate-reverse; }
        .portal-core { z-index:1; width:34%; aspect-ratio:1; display:grid; place-items:center; border-radius:50%; background:#fff; color:#401e97; font-size:clamp(20px,3vw,38px); font-weight:700; letter-spacing:-.08em; box-shadow:0 0 70px #fff9; }
        .portal-orbit-word { position:absolute; bottom:12%; color:#fff; font-size:9px; letter-spacing:.28em; }
        .path-stage { padding:clamp(22px,4vw,44px); background:#f2eff8; }
        .path-kicker { color:#401e97; margin:0 0 24px; }
        .path-choices { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; }
        .path-choices button { min-height:150px; text-align:left; display:flex; flex-direction:column; align-items:flex-start; justify-content:space-between; border:1px solid #d7cceb; background:#fbfaff; color:#401e97; padding:18px; cursor:pointer; font:inherit; font-size:clamp(15px,2vw,20px); transition:background .25s,transform .25s; }
        .path-choices button.active { background:#401e97; color:#fff; transform:translateY(-5px); }
        .path-choices button>span { font-size:26px; }
        .path-choices button b { font-size:8px; letter-spacing:.12em; font-weight:600; }
        .path-answer { padding:30px 0 4px; animation:text-arrive .3s ease both; }
        .path-answer>span { color:#8a79ad; }
        .path-answer h3 { font-size:clamp(30px,5vw,54px); letter-spacing:-.07em; line-height:1; margin:14px 0 8px; }
        .path-answer p { color:#71697d; font-size:13px; }
        .shape-stage { display:grid; grid-template-columns:1fr 1fr; min-height:380px; background:#f1ecff; overflow:hidden; }
        .shape-copy { padding:clamp(24px,5vw,52px); display:flex; flex-direction:column; justify-content:center; align-items:flex-start; }
        .shape-copy>span { color:#401e97; }
        .shape-copy h3 { font-size:clamp(36px,5vw,58px); line-height:.95; letter-spacing:-.07em; margin:20px 0 12px; }
        .shape-copy p { color:#746b82; font-size:13px; line-height:1.7; }
        .shape-options { display:flex; flex-wrap:wrap; gap:6px; margin-top:15px; }
        .shape-options button { color:#401e97; border-color:#cbbbe9; }
        .shape-options button.active { background:#401e97; color:#fff; border-color:#401e97; }
        .shape-art { min-height:340px; display:grid; place-items:center; position:relative; background:#401e97; color:#fff; overflow:hidden; }
        .shape-graphic { width:clamp(160px,26vw,290px); aspect-ratio:1; background:#c6b4ff; transition:all .65s cubic-bezier(.2,.8,.2,1); }
        .shape-orbit .shape-graphic { border-radius:50%; box-shadow:0 0 0 25px #c6b4ff22,0 0 0 50px #c6b4ff11; }
        .shape-blob .shape-graphic { border-radius:35% 65% 66% 34% / 40% 35% 65% 60%; transform:rotate(35deg); background:#f5d77a; }
        .shape-grid .shape-graphic { border-radius:0; background:repeating-linear-gradient(90deg,#c6b4ff 0 2px,transparent 2px 25px),repeating-linear-gradient(0deg,#c6b4ff 0 2px,transparent 2px 25px); transform:rotate(45deg) scale(.9); }
        .shape-burst .shape-graphic { clip-path:polygon(50% 0%,61% 31%,90% 10%,73% 39%,100% 50%,70% 61%,90% 90%,61% 70%,50% 100%,39% 70%,10% 90%,30% 61%,0% 50%,30% 39%,10% 10%,39% 30%); background:#f5d77a; }
        .shape-word { position:absolute; font-size:clamp(28px,4vw,48px); font-weight:700; letter-spacing:-.08em; color:#211a31; mix-blend-mode:multiply; }
        .shape-index { position:absolute; right:20px; top:20px; color:#c6b4ff; font-size:12px; }
        @keyframes orb-arrive { from { opacity:0; transform:scale(.65) rotate(-15deg); } to { opacity:1; transform:scale(1) rotate(0); } }
        @keyframes portal-pulse { from { transform:scale(.85) rotate(0); opacity:.35; } to { transform:scale(1.08) rotate(25deg); opacity:1; } }
\n
        .kinetic-stage { background:#20192d; color:#fff; padding:22px clamp(18px,4vw,44px); overflow:hidden; }
        .kinetic-top,.kinetic-bottom,.gallery-top,.gallery-controls,.signal-head,.lab-menu { display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; font-size:9px; letter-spacing:.12em; opacity:.8; }
        .kinetic-art { min-height:340px; position:relative; display:grid; place-items:center; overflow:hidden; isolation:isolate; }
        .kinetic-art h3 { z-index:2; font-size:clamp(76px,17vw,190px); letter-spacing:-.12em; line-height:.8; margin:0; animation:text-arrive .5s ease both; }
        .kinetic-art h3 i { color:#c6b4ff; font-style:normal; }
        .kinetic-ring { position:absolute; width:clamp(190px,38vw,420px); aspect-ratio:1; border:1px solid #c6b4ff88; border-radius:50%; animation:orbit-spin 18s linear infinite; }
        .kinetic-orb { position:absolute; width:clamp(70px,12vw,130px); aspect-ratio:1; border-radius:30%; background:#d7fa70; filter:blur(.2px); mix-blend-mode:screen; animation:bob 3s ease-in-out infinite; }
        .scene-1 .kinetic-orb { background:#ff806e; border-radius:50%; transform:translate(90px,-40px); }
        .scene-2 .kinetic-orb { background:#c6b4ff; border-radius:0; transform:translate(-100px,40px) rotate(45deg); }
        .kinetic-side { position:absolute; right:0; bottom:15%; writing-mode:vertical-rl; font-size:9px; letter-spacing:.2em; color:#c6b4ff; }
        .kinetic-bottom { border-top:1px solid #ffffff30; padding-top:17px; }
        .kinetic-bottom p { max-width:360px; font-size:12px; letter-spacing:0; line-height:1.7; }
        .kinetic-bottom div { display:flex; gap:6px; }
        .kinetic-bottom button { background:transparent; color:#fff; border:1px solid #ffffff50; border-radius:50%; width:36px; height:36px; cursor:pointer; }
        .kinetic-bottom button.active { background:#c6b4ff; color:#20192d; }
        .wordplay-stage { background:#f3edff; color:#241b35; padding:clamp(20px,4vw,42px); }
        .wordplay-head { display:flex; justify-content:space-between; gap:12px; font-size:9px; letter-spacing:.14em; color:#6e5c8c; }
        .wordplay-words { display:flex; gap:7px; flex-wrap:wrap; margin:24px 0; }
        .wordplay-words button { border:1px solid #cbbbe9; border-radius:99px; padding:10px 14px; background:transparent; color:#401e97; cursor:pointer; font:inherit; font-size:11px; }
        .wordplay-words button.selected { background:#401e97; color:#fff; }
        .wordplay-words button span { font-size:8px; margin-left:9px; opacity:.65; }
        .wordplay-hero { min-height:290px; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#401e97; color:#fff; overflow:hidden; }
        .wordplay-hero>span,.wordplay-hero>p { font-size:9px; letter-spacing:.15em; opacity:.7; }
        .wordplay-hero h3 { font-size:clamp(78px,18vw,190px); letter-spacing:-.12em; line-height:.8; margin:22px 0; }
        .wordplay-hero h3 i { font-style:normal; display:inline-block; animation:letter-pop .42s cubic-bezier(.2,.8,.2,1) both; animation-delay:calc(var(--letter-index)*.055s); }
        .word-make h3 i:nth-child(2n) { color:#d7fa70; transform:rotate(-5deg); }
        .word-feel h3 i { color:#f5d77a; }
        .word-shift h3 i:nth-child(odd) { transform:translateY(-12px) rotate(8deg); }
        .word-wow h3 { letter-spacing:.04em; }
        .brief-stage { background:#211a31; color:#fff; padding:clamp(24px,5vw,52px); }
        .brief-intro>span,.brief-answer>span { color:#c6b4ff; font-size:9px; letter-spacing:.15em; }
        .brief-intro h3 { font-size:clamp(36px,6vw,70px); letter-spacing:-.08em; line-height:.95; max-width:650px; margin:20px 0 10px; }
        .brief-intro p { color:#bfb4ce; font-size:13px; }
        .brief-options { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:28px 0; }
        .brief-options button { text-align:left; min-height:150px; padding:17px; display:flex; flex-direction:column; justify-content:space-between; gap:16px; border:1px solid #5c4b70; background:#30243f; color:#fff; cursor:pointer; font:inherit; font-size:15px; transition:transform .2s,background .2s; }
        .brief-options button.active { background:#c6b4ff; color:#241b35; transform:translateY(-4px); }
        .brief-options button>span { font-size:25px; }
        .brief-options button b { font-size:8px; letter-spacing:.12em; }
        .brief-answer { border-top:1px solid #ffffff30; padding-top:24px; animation:text-arrive .3s ease both; }
        .brief-answer h4 { font-size:clamp(26px,4vw,44px); letter-spacing:-.06em; margin:12px 0; }
        .brief-answer p { color:#c5bbd2; max-width:650px; font-size:13px; line-height:1.8; }
        .brief-answer div { display:flex; gap:7px; flex-wrap:wrap; margin-top:20px; }
        .brief-answer div span { border:1px solid #6a5b7b; border-radius:99px; padding:8px 12px; font-size:8px; letter-spacing:.12em; }
        .gallery-stage { background:#f3edff; color:#241b35; padding:clamp(18px,3vw,32px); overflow:hidden; }
        .gallery-track { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px; margin:22px 0; }
        .gallery-tile { min-height:300px; display:flex; flex-direction:column; justify-content:space-between; text-align:left; border:0; padding:18px; cursor:pointer; transition:transform .3s,filter .3s; overflow:hidden; }
        .gallery-tile:hover,.gallery-tile.active { transform:translateY(-7px) rotate(-1deg); filter:saturate(1.12); }
        .gallery-tile>span,.gallery-tile small { font-size:8px; letter-spacing:.12em; line-height:1.6; }
        .gallery-tile strong { font-size:clamp(28px,4vw,48px); letter-spacing:-.09em; overflow-wrap:anywhere; }
        .gallery-brand { background:#401e97; color:#fff; }
        .gallery-web { background:#d7fa70; color:#211a31; }
        .gallery-strategy { background:#f5d77a; color:#211a31; }
        .gallery-experiment { background:#ff806e; color:#211a31; }
        .gallery-controls { border-top:1px solid #d7cceb; padding-top:15px; color:#6e5c8c; }
        .gallery-controls div { display:flex; gap:7px; }
        .gallery-controls button { width:38px; height:38px; border:1px solid #cbbbe9; background:transparent; color:#401e97; border-radius:50%; cursor:pointer; font-size:18px; }
        .signal-stage { background:#100f17; color:#fff; padding:clamp(18px,3vw,32px); }
        .signal-head { color:#c6b4ff; }
        .signal-field { position:relative; min-height:390px; margin:15px 0; background-image:radial-gradient(#c6b4ff44 1px,transparent 1px); background-size:22px 22px; border:1px solid #ffffff18; overflow:hidden; }
        .signal-field:before,.signal-field:after { content:""; position:absolute; left:14%; top:30%; width:72%; height:1px; background:#8c6de8aa; transform:rotate(17deg); }
        .signal-field:after { transform:rotate(-28deg); }
        .signal-node { position:absolute; left:var(--x); top:var(--y); transform:translate(-10%,-10%); z-index:1; display:flex; flex-direction:column; gap:6px; align-items:flex-start; padding:14px 16px; border:1px solid #7864a0; border-radius:50%; min-width:105px; min-height:105px; justify-content:center; background:#20192d; color:#fff; cursor:pointer; transition:all .25s; }
        .signal-node strong { font-size:10px; letter-spacing:.08em; }
        .signal-node small { font-size:9px; opacity:.65; }
        .signal-node.active { background:#c6b4ff; color:#20192d; border-color:#c6b4ff; transform:translate(-10%,-10%) scale(1.12); box-shadow:0 0 35px #c6b4ff66; }
        .signal-footer { border-top:1px solid #ffffff30; padding-top:18px; display:grid; grid-template-columns:130px 1fr; gap:18px; align-items:start; }
        .signal-footer strong { color:#c6b4ff; font-size:11px; letter-spacing:.1em; }
        .signal-footer p { margin:0; font-size:12px; color:#c5bbd2; line-height:1.7; }
        .lab-stage { background:#f5d77a; color:#211a31; padding:clamp(18px,3vw,32px); }
        .lab-menu button { border:1px solid #211a3166; background:transparent; color:#211a31; padding:9px 12px; cursor:pointer; font:inherit; font-size:9px; letter-spacing:.1em; }
        .lab-menu button.active { background:#211a31; color:#f5d77a; }
        .lab-canvas { position:relative; min-height:350px; display:flex; flex-direction:column; justify-content:center; align-items:center; margin-top:20px; overflow:hidden; background:#401e97; color:#fff; animation:text-arrive .4s ease both; }
        .lab-canvas>span,.lab-canvas>small { font-size:9px; letter-spacing:.15em; z-index:1; }
        .lab-canvas h3 { position:relative; z-index:1; font-size:clamp(65px,13vw,140px); letter-spacing:-.11em; line-height:.76; margin:20px 0; text-align:center; }
        .lab-canvas h3 i { font-style:normal; color:#d7fa70; }
        .lab-motion-shape,.lab-form-shape { position:absolute; width:180px; height:180px; background:#ff806e; border-radius:50%; opacity:.85; animation:lab-float 3s ease-in-out infinite alternate; }
        .lab-motion-shape { border-radius:25%; mix-blend-mode:screen; }
        .lab-form-shape { border-radius:10% 90% 40% 60%; background:#c6b4ff; transform:rotate(35deg); }
        .lab-motion .lab-canvas { background:#191421; }
        .lab-form .lab-canvas { background:#d7fa70; color:#211a31; }
        .lab-form .lab-canvas h3 i { color:#401e97; }
        .lab-caption { font-size:12px; opacity:.7; margin:18px 0 0; }
        @keyframes letter-pop { from { opacity:0; transform:translateY(35px) rotate(12deg) scale(.7); } to { opacity:1; transform:translateY(0) rotate(0) scale(1); } }
        @keyframes lab-float { from { translate:-40px -15px; rotate:-15deg; } to { translate:50px 20px; rotate:35deg; } }
\n        @keyframes orbit-spin { to { rotate: 360deg; } }
        @keyframes bob { 0%,100% { translate: 0 0; } 50% { translate: 0 -9px; } }
        @keyframes dash-flow { to { stroke-dashoffset: -200; } }
        @keyframes spark-spin { to { rotate: 360deg; } }
        @keyframes text-arrive { from { opacity: .25; translate: 0 8px; } to { opacity: 1; translate: 0 0; } }
        @media (max-width: 720px) {
          .test-intro, .concept-section, .decision-section { width: min(100% - 32px, 1160px); }
          .test-intro { padding-top: 64px; }
          .concept-heading { grid-template-columns: 1fr auto; gap: 10px; }
          .concept-number { grid-column: 1 / -1; margin: 0; }
          .concept-heading h2 { font-size: 32px; }
          .concept-type { font-size: 8px; max-width: 95px; white-space: normal; text-align: right; }
          .playground-art { min-height: 300px; }
          .playground-art h3 { font-size: clamp(42px, 12vw, 66px); }
          .orbit-one { width: 240px; height: 240px; }
          .orbit-two { width: 300px; height: 140px; }
          .word-one { left: 2%; top: 20%; }
          .word-two { right: 2%; bottom: 16%; }
          .playground-bottom, .network-stage, .manifesto-stage { grid-template-columns: 1fr; }
          .playground-bottom { gap: 22px; }
          .service-switcher { flex-direction: row; }
          .service-switcher button { flex: 1; padding: 11px 8px; font-size: 12px; }
          .service-switcher button span { margin-right: 3px; }
          .network-stage { gap: 0; padding: 24px 16px; }
          .network-visual { max-width: 390px; margin-top: 10px; }
          .network-core { inset: 31% 27%; }
          .manifesto-stage { gap: 16px; }
          .manifesto-visual { min-height: 240px; }
          .manifesto-giant { font-size: clamp(55px, 16vw, 90px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .concept-test *, .concept-test *::before, .concept-test *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>
    </main>
  );
}
