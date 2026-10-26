"use client";

import { useState } from "react";

const concepts = [
  { id: 1, name: "Bloom Reveal", tag: "CINEMATIC INTRO", note: "A full-screen brand reveal with the logo emerging from a patterned field.", style: "reveal" },
  { id: 2, name: "The Brand Playground", tag: "LIVE BRAND TOGGLES", note: "Switch colour moods and see the identity system transform instantly.", style: "playground" },
  { id: 3, name: "Editorial Magazine", tag: "ART-DIRECTED STORY", note: "Oversized typography, asymmetric layouts, strong image pacing and short editorial captions.", style: "editorial" },
  { id: 4, name: "Pattern Explorer", tag: "HOVER / TAP", note: "Make the five Ododo patterns the main event; hover or tap to change the canvas.", style: "patterns" },
  { id: 5, name: "Identity Switcher", tag: "LOGO SYSTEM", note: "Toggle logo variants and backgrounds as a living identity guideline.", style: "switcher" },
  { id: 6, name: "Scroll Chapters", tag: "STORY JOURNEY", note: "A clear narrative from idea to identity to applications, with a persistent progress marker.", style: "chapters" },
  { id: 7, name: "Exploded Gallery", tag: "INTERACTIVE GRID", note: "A tightly art-directed grid that expands selected assets into a focused full-screen view.", style: "gallery" },
  { id: 8, name: "Digital Touchpoints", tag: "DEVICE SHOWCASE", note: "Show the identity living on phone screens and app icons instead of isolated files.", style: "devices" },
  { id: 9, name: "Colour Lab", tag: "PALETTE PLAY", note: "Choose a brand colour and see how the logo, patterns and typography respond.", style: "colour" },
  { id: 10, name: "Infinite Bloom", tag: "MOTION / PARALLAX", note: "A playful, slow-moving field of brand motifs with layered depth and a bold central mark.", style: "infinite" },
];

const patterns = [
  "ododo-pattern-bloom-ink-on-paper-tile.png",
  "ododo-pattern-chain-ink-on-paper-tile.png",
  "ododo-pattern-garden-ink-on-paper-tile.png",
  "ododo-pattern-orbit-ink-on-paper-tile.png",
  "ododo-pattern-petals-ink-on-paper-tile.png",
];
const colours = [
  { name: "Signal", value: "#ff4b1f" },
  { name: "Paper", value: "#f3efe8" },
  { name: "Ink", value: "#121212" },
  { name: "Garden", value: "#a5b77b" },
];

export default function OdodoLab() {
  const [selected, setSelected] = useState(1);
  const [mood, setMood] = useState(0);
  const [pattern, setPattern] = useState(0);
  const [colour, setColour] = useState(0);
  const [logo, setLogo] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const concept = concepts.find((item) => item.id === selected) || concepts[0];
  const dark = mood === 1;
  const logoFiles = ["ododo-logo-full-colour.png", "ododo-logo-black.png", "ododo-logo-reversed.png"];
  const logoLabels = ["Full colour", "Black", "Reversed"];
  const asset = (file) => `/ododo/${file}`;

  const preview = () => {
    switch (concept.style) {
      case "reveal":
        return <div style={{ ...styles.preview, background: "#ff4b1f", color: "#121212", minHeight: 340 }}><div style={{ fontSize: 10, letterSpacing: ".2em" }}>ODODO BLOOM / BRAND STORY</div><img src={asset("ododo-pattern-bloom-ink-on-signal-tile.png")} style={styles.patternHero} alt="" /><img src={asset("ododo-logo-full-colour.png")} style={{ ...styles.heroLogo, mixBlendMode: "multiply" }} alt="Ododo Bloom" /><div style={styles.heroFooter}><span>ONE NAME, MANY BLOOMS</span><span>SCROLL TO EXPLORE ↓</span></div></div>;
      case "playground":
        return <div style={{ ...styles.preview, background: dark ? "#121212" : "#f3efe8", color: dark ? "#f3efe8" : "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>MAKE IT YOURS</b><span>MOOD 0{mood + 1} / 03</span></div><img src={asset("ododo-logo-full-colour.png")} style={{ ...styles.heroLogo, maxWidth: 420 }} alt="Ododo Bloom" /><p style={styles.bigLine}>{["A little more playful.", "A little more refined."][mood]}</p><div style={styles.controlRow}>{["Playful", "Classic"].map((v, i) => <button key={v} onClick={() => setMood(i)} style={styles.pill(dark === (i === 1))}>{v}</button>)}<button onClick={() => setMood((mood + 1) % 2)} style={styles.pill(false)}>Try another ↗</button></div></div>;
      case "editorial":
        return <div style={{ ...styles.preview, background: "#f3efe8", color: "#121212", minHeight: 340 }}><div style={styles.editorialGrid}><div><small>01 / THE IDENTITY</small><h2 style={styles.editorialTitle}>One name,<br /><i>many blooms.</i></h2><p style={styles.muted}>A flexible creative identity for fashion, design, app and film.</p><img src={asset("ododo-logo-full-colour.png")} style={{ width: "82%", marginTop: 25 }} alt="Ododo logo" /></div><img src={asset(patterns[2])} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 250 }} alt="Ododo pattern" /></div></div>;
      case "patterns":
        return <div style={{ ...styles.preview, background: colours[colour % 3].value, color: colour === 2 ? "#f3efe8" : "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>PATTERN LIBRARY</b><span>0{pattern + 1} / 05</span></div><div style={styles.patternExplorer}><button onClick={() => setPattern((pattern + 4) % 5)} style={styles.roundButton}>←</button><img src={asset(patterns[pattern])} alt="Selected Ododo pattern" /><button onClick={() => setPattern((pattern + 1) % 5)} style={styles.roundButton}>→</button></div><div style={styles.patternDots}>{patterns.map((p, i) => <button key={p} aria-label={`Pattern ${i + 1}`} onClick={() => setPattern(i)} style={{ ...styles.dot, background: pattern === i ? "#ff4b1f" : "#a9a197" }} />)}</div></div>;
      case "switcher":
        return <div style={{ ...styles.preview, background: logo === 2 ? "#121212" : "#f3efe8", color: logo === 2 ? "#f3efe8" : "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>THE MARK, YOUR WAY</b><span>LOGO VARIATIONS</span></div><div style={styles.logoStage}><img src={asset(logoFiles[logo])} alt={logoLabels[logo]} /></div><div style={styles.controlRow}>{logoLabels.map((v, i) => <button key={v} onClick={() => setLogo(i)} style={styles.pill(logo === i)}>{v}</button>)}</div></div>;
      case "chapters":
        return <div style={{ ...styles.preview, background: "#121212", color: "#f3efe8", minHeight: 340 }}><div style={styles.previewTop}><b>THE ODODO STORY</b><span>CHAPTER 0{mood + 1} / 03</span></div><div style={styles.chapterRow}><div><small style={{ color: "#ff4b1f" }}>0{mood + 1} — {["THE IDEA", "THE SYSTEM", "THE WORLD"][mood]}</small><h2 style={styles.chapterTitle}>{["An identity with room to grow.", "Built from a flexible visual language.", "Made to live beyond the logo."][mood]}</h2><p style={{ color: "#b7afa4" }}>Tap through the story to explore the system.</p></div><img src={asset([ "ododo-logo-full-colour.png", patterns[0], "ododo-icon-ink-1024.png" ][mood])} alt="" /></div><div style={styles.controlRow}><button onClick={() => setMood((mood + 1) % 3)} style={styles.pill(false)}>Next chapter →</button></div></div>;
      case "gallery":
        return <div style={{ ...styles.preview, background: "#e8e1d7", color: "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>THE ASSET WALL</b><span>TAP TO FOCUS</span></div><div style={styles.assetGrid}>{[ "ododo-logo-full-colour.png", patterns[0], patterns[2], "ododo-icon-signal-1024.png", patterns[4], "ododo-monogram-full-colour.png" ].map((file, i) => <button key={file} onClick={() => { setPattern(i % patterns.length); setExpanded(true); }} style={styles.assetTile}><img src={asset(file)} alt="" /></button>)}</div>{expanded && <div style={styles.inlineNotice} onClick={() => setExpanded(false)}>Selected: {patterns[pattern].replace("ododo-pattern-", "").replace("-ink-on-paper-tile.png", "")} pattern · tap to close</div>}</div>;
      case "devices":
        return <div style={{ ...styles.preview, background: "#f3efe8", color: "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>ODODO IN YOUR POCKET</b><span>DIGITAL TOUCHPOINTS</span></div><div style={styles.deviceRow}><div style={styles.phone}><div style={styles.phoneNotch} /><img src={asset("ododo-icon-signal-1024.png")} alt="Ododo app icon" /><b>Ododo</b><small>One name, many blooms.</small></div><div style={styles.phone}><div style={styles.phoneNotch} /><img src={asset("ododo-icon-paper-1024.png")} alt="Ododo app icon" /><b>Ododo Studio</b><small>Ideas take shape here.</small></div><div style={styles.phone}><div style={styles.phoneNotch} /><img src={asset("ododo-icon-ink-1024.png")} alt="Ododo app icon" /><b>Ododo World</b><small>Explore the system.</small></div></div></div>;
      case "colour":
        return <div style={{ ...styles.preview, background: colours[colour].value, color: colour === 2 ? "#f3efe8" : "#121212", minHeight: 340 }}><div style={styles.previewTop}><b>COLOUR HAS A MOOD</b><span>{colours[colour].name.toUpperCase()}</span></div><img src={asset("ododo-logo-full-colour.png")} style={{ ...styles.heroLogo, maxWidth: 400, mixBlendMode: colour === 2 ? "screen" : "multiply" }} alt="Ododo logo" /><h2 style={{ ...styles.chapterTitle, marginTop: 20 }}>Bloom in every colour.</h2><div style={styles.swatches}>{colours.map((c, i) => <button key={c.name} onClick={() => setColour(i)} title={c.name} style={{ ...styles.swatch, background: c.value, outline: colour === i ? "3px solid #ff4b1f" : "1px solid #777" }} />)}</div></div>;
      case "infinite":
        return <div style={{ ...styles.preview, background: "#121212", color: "#f3efe8", minHeight: 340, overflow: "hidden", position: "relative" }}><img src={asset(patterns[(pattern + 2) % 5])} style={styles.infinitePattern} alt="" /><div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "65px 15px" }}><div style={{ fontSize: 10, letterSpacing: ".2em" }}>A CREATIVE UNIVERSE</div><img src={asset("ododo-logo-reversed.png")} style={{ width: "min(80%, 450px)", margin: "28px auto" }} alt="Ododo Bloom" /><p style={{ fontSize: 22 }}>One name. Many worlds.</p><button onClick={() => setPattern((pattern + 1) % 5)} style={styles.pill(false)}>Shift the pattern ↻</button></div></div>;
      default: return null;
    }
  };

  return <main style={styles.page}>
    <header style={styles.header}>
      <div><span style={styles.eyebrow}>OMOGIWA / DESIGN LAB / TEMPORARY</span><h1 style={styles.pageTitle}>Ododo, <i>reimagined.</i></h1><p style={styles.intro}>10 interactive directions for presenting the Ododo Bloom identity. Choose a concept to preview it, then tell me which direction to develop into the real case study.</p></div>
      <a href="/portfolio/brand-design" style={styles.backLink}>← Current Brand Design page</a>
    </header>
    <div style={styles.layout}>
      <nav style={styles.rail} aria-label="Choose a presentation concept">{concepts.map((item) => <button key={item.id} onClick={() => { setSelected(item.id); setExpanded(false); }} style={{ ...styles.choice, ...(selected === item.id ? styles.choiceActive : {}) }}><span style={styles.choiceNumber}>{String(item.id).padStart(2,"0")}</span><span><b>{item.name}</b><small>{item.tag}</small></span><span style={styles.choiceArrow}>↗</span></button>)}</nav>
      <section style={styles.demo}>
        <div style={styles.demoHeader}><div><span style={styles.eyebrow}>CONCEPT {String(selected).padStart(2,"0")} / 10</span><h2 style={styles.demoTitle}>{concept.name}</h2></div><span style={styles.demoTag}>{concept.tag}</span></div>
        {preview()}
        <div style={styles.description}><p>{concept.note}</p><button onClick={() => { const next = selected === 10 ? 1 : selected + 1; setSelected(next); setExpanded(false); }} style={styles.nextButton}>Next concept <span>→</span></button></div>
      </section>
    </div>
    <section style={styles.references}><span style={styles.eyebrow}>REAL-WORLD INSPIRATION</span><h2>Ideas worth borrowing from.</h2><div style={styles.referenceGrid}>
      {[
        ["Smollan / monopo","A flexible identity playground with mood toggles and a story you explore.", "https://monopo.co.jp/work/smollan/"],
        ["THIRD / monopo","A paintbrush interaction that makes the visitor part of the identity.", "https://monopo.london/work/we-are-third-website/"],
        ["Exo Ape","Magazine-like case studies, scrollable visual sequences and subtle transitions.", "https://www.awwwards.com/exo-ape-wins-site-of-the-month-may-2022.html"],
        ["Arox / Riot Design","Brand identity and packaging connected through purposeful scroll motion.", "https://riot.design/en/projects/arox"],
        ["Mat Voyce / Awwwards","Kinetic typography and distinct layouts tailored to different project types.", "https://www.awwwards.com/case-study-mat-voyce-designing-a-digital-home-for-a-kinetic-creative.html"],
        ["Inkwell / Awwwards","A cinematic three-act scroll narrative with strong pacing.", "https://www.awwwards.com/inkwell-a-scroll-driven-narrative-for-ais-most-stealth-player.html"],
        ["Phoenix Creative Studio","Playful navigation, draggable project browsing and hidden surprises.", "https://www.commarts.com/project/26037/phoenix-the-creative-studio"],
        ["SKY Studio","An immersive environment where case studies feel like places to discover.", "https://www.erwancompes.com/cases/sky"],
        ["Robot / Awwwards","Bold editorial layouts, playful hover reveals and vivid transitions.", "https://www.awwwards.com/case-study-robot-visionary-mavericks-in-motion.html"],
        ["Igloo Inc / Bureaux","A striking intro and interactive visual system built around a short story.", "https://www.awwwards.com/igloo-inc-case-study.html"],
      ].map(([name, description, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" style={styles.referenceCard}><b>{name}</b><p>{description}</p><span>Explore reference ↗</span></a>)}
    </div></section>
    <footer style={styles.footer}><span>THIS IS A TEMPORARY CONCEPT SELECTOR — THE LIVE CASE STUDY IS UNCHANGED BY YOUR CHOICE HERE.</span><a href="/portfolio/brand-design">Return to Brand Design →</a></footer>
  </main>;
}

const styles = {
  page: { minHeight: "100vh", padding: "clamp(20px,4vw,58px)", background: "#f3efe8", color: "#171512", fontFamily: "Arial, Helvetica, sans-serif" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", maxWidth: 1500, margin: "0 auto 38px" },
  eyebrow: { fontSize: 10, letterSpacing: ".17em", fontWeight: 700, color: "#655c52" },
  pageTitle: { fontSize: "clamp(48px,8vw,104px)", lineHeight: .92, letterSpacing: "-.075em", margin: "18px 0" },
  intro: { maxWidth: 590, color: "#655c52", lineHeight: 1.65, fontSize: 15 },
  backLink: { color: "#171512", fontSize: 12, textDecoration: "none", borderBottom: "1px solid #ff4b1f", paddingBottom: 5 },
  layout: { display: "grid", gridTemplateColumns: "minmax(220px,300px) minmax(0,1fr)", gap: 24, maxWidth: 1500, margin: "0 auto" },
  rail: { display: "flex", flexDirection: "column", gap: 5 },
  choice: { border: "1px solid transparent", padding: "13px 11px", background: "transparent", display: "grid", gridTemplateColumns: "27px 1fr 15px", gap: 9, textAlign: "left", alignItems: "center", cursor: "pointer", color: "#171512" },
  choiceActive: { borderColor: "#171512", background: "#fffaf2" },
  choiceNumber: { fontSize: 11, color: "#ff4b1f", fontWeight: 700 },
  choiceArrow: { fontSize: 12 },
  demo: { minWidth: 0 },
  demoHeader: { display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, marginBottom: 18, flexWrap: "wrap" },
  demoTitle: { fontSize: "clamp(26px,4vw,46px)", letterSpacing: "-.06em", margin: "7px 0 0" },
  demoTag: { fontSize: 10, letterSpacing: ".12em", color: "#655c52" },
  preview: { position: "relative", padding: "clamp(20px,4vw,46px)", overflow: "hidden", border: "1px solid rgba(0,0,0,.08)", transition: "background .25s ease", boxSizing: "border-box" },
  previewTop: { display: "flex", justifyContent: "space-between", gap: 10, fontSize: 10, letterSpacing: ".12em", alignItems: "center", marginBottom: 28 },
  patternHero: { position: "absolute", width: "52%", height: "100%", right: 0, top: 0, objectFit: "cover", opacity: .9 },
  heroLogo: { position: "relative", zIndex: 1, display: "block", width: "min(85%,540px)", margin: "40px 0 28px" },
  heroFooter: { display: "flex", justifyContent: "space-between", gap: 10, position: "relative", zIndex: 1, fontSize: 9, letterSpacing: ".13em", marginTop: 45 },
  bigLine: { fontSize: "clamp(24px,4vw,48px)", letterSpacing: "-.06em", margin: "20px 0 30px" },
  controlRow: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" },
  pill: (active) => ({ border: "1px solid currentColor", background: active ? "#ff4b1f" : "transparent", color: "inherit", padding: "10px 14px", fontSize: 11, cursor: "pointer" }),
  editorialGrid: { display: "grid", gridTemplateColumns: "1fr .75fr", gap: 22, minHeight: 270 },
  editorialTitle: { fontSize: "clamp(38px,6vw,78px)", lineHeight: .91, letterSpacing: "-.08em", margin: "35px 0 16px" },
  muted: { color: "#655c52", lineHeight: 1.5, fontSize: 13, maxWidth: 300 },
  patternExplorer: { display: "grid", gridTemplateColumns: "40px minmax(0,1fr) 40px", alignItems: "center", gap: 14 },
  patternExplorerImg: { width: "100%" },
  patternDots: { display: "flex", justifyContent: "center", gap: 8, marginTop: 18 },
  dot: { width: 9, height: 9, border: 0, borderRadius: "50%", cursor: "pointer" },
  roundButton: { width: 38, height: 38, border: "1px solid currentColor", borderRadius: "50%", background: "transparent", color: "inherit", cursor: "pointer" },
  logoStage: { minHeight: 205, display: "grid", placeItems: "center", padding: "10px 0 25px" },
  swatches: { display: "flex", gap: 10, marginTop: 28 },
  swatch: { width: 42, height: 42, border: 0, borderRadius: "50%", cursor: "pointer" },
  chapterRow: { display: "grid", gridTemplateColumns: "1.1fr .8fr", gap: 28, alignItems: "center", margin: "40px 0" },
  chapterTitle: { fontSize: "clamp(28px,4.6vw,58px)", letterSpacing: "-.07em", lineHeight: .98, margin: "16px 0" },
  assetGrid: { display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 },
  assetTile: { border: 0, minHeight: 95, padding: 14, background: "#f3efe8", cursor: "pointer", display: "grid", placeItems: "center" },
  inlineNotice: { marginTop: 12, fontSize: 11, cursor: "pointer", textDecoration: "underline" },
  deviceRow: { display: "flex", gap: 14, justifyContent: "center", alignItems: "center", flexWrap: "wrap", paddingTop: 8 },
  phone: { width: "min(27%,150px)", minWidth: 100, minHeight: 210, padding: "20px 10px 15px", boxSizing: "border-box", border: "5px solid #171512", borderRadius: 24, background: "#fffaf2", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 9, fontSize: 11 },
  phoneNotch: { width: 38, height: 5, background: "#171512", borderRadius: 5, marginBottom: 7 },
  phoneIcon: { width: 85 },
  infinitePattern: { position: "absolute", inset: "-20%", width: "140%", height: "140%", objectFit: "cover", opacity: .22, animation: "ododoLabDrift 24s linear infinite" },
  description: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, padding: "18px 0", flexWrap: "wrap", borderBottom: "1px solid #d9d1c6" },
  nextButton: { border: 0, background: "#171512", color: "#f3efe8", padding: "13px 17px", cursor: "pointer", fontSize: 12 },
  references: { maxWidth: 1500, margin: "78px auto 0" },
  referenceGrid: { display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: 10, marginTop: 24 },
  referenceCard: { color: "#171512", textDecoration: "none", borderTop: "1px solid #171512", padding: "16px 0", minHeight: 145 },
  footer: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, maxWidth: 1500, margin: "45px auto 0", paddingTop: 18, borderTop: "1px solid #d9d1c6", fontSize: 9, letterSpacing: ".08em", color: "#655c52" },
};
