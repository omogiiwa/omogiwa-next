import Link from "next/link";
import "./tools.css";

export const metadata = {
  title: "Creative Tools | OmoGiwa.",
  description: "Explore practical browser-based tools from OmoGiwa, including a video frame picker and an SVG-to-PNG editor.",
  alternates: { canonical: "https://omogiwa.com/tools" },
  openGraph: { title: "Creative Tools | OmoGiwa.", description: "Small, practical tools for creative work.", url: "https://omogiwa.com/tools", siteName: "OmoGiwa.", type: "website" },
};

const tools = [
  { n: "01", type: "VIDEO WORKFLOW", title: "Frame Picker", desc: "Move through a video frame by frame, select the moments you need, and export your chosen frames as images.", format: "VIDEO → FRAMES", href: "/tools/frame-picker", action: "Open Frame Picker", visual: "frames", features: ["Inspect video frames", "Select frames to export", "Work directly in your browser"] },
  { n: "02", type: "VECTOR WORKFLOW", title: "SVG to PNG", desc: "Open SVG artwork in an interactive editor, refine the visible artwork, and export it as a PNG image.", format: "SVG → PNG", href: "/tools/svg-to-png", action: "Open SVG to PNG", visual: "vector", features: ["Work with SVG artwork", "Adjust and refine the artwork", "Export a PNG"] },
];

export default function ToolsPage() {
  return <main className="og-tools-page">
    <section className="og-tools-hero">
      <p className="og-tools-eyebrow"><span /> THE OG TOOLBOX</p>
      <h1>Useful things.<br/><em>Made simple.</em></h1>
      <p className="og-tools-lead">A growing collection of practical little tools for creative work. Made to solve a specific problem, get out of your way, and let you get back to making.</p>
      <div className="og-tools-tags"><span>INDEPENDENTLY BUILT</span><span>FOR THE WEB</span><span>CREATIVE WORKFLOWS</span></div>
      <div className="og-tools-orbit" aria-hidden="true">OG.</div>
    </section>
    <section className="og-tools-list">
      <header className="og-tools-heading"><div><p className="og-tools-kicker">THE COLLECTION / 01</p><h2>Pick a tool.</h2></div><p>Useful controls, clear workflows, and no unnecessary fuss.</p></header>
      <div className="og-tools-grid">{tools.map(t => <article className={`og-tool-card og-tool-${t.visual}`} key={t.href}>
        <div className="og-tool-top"><span>{t.n}</span><small>{t.type}</small></div>
        <div className="og-tool-art" aria-hidden="true">{t.visual === "frames" ? <div className="og-frame-stack"><i/><i/><i/><b>▶</b></div> : <div className="og-vector-stack"><b>SVG</b><i>PNG</i></div>}</div>
        <p className="og-tool-format">{t.format}</p><h3>{t.title}</h3><p className="og-tool-desc">{t.desc}</p>
        <ul>{t.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul>
        <Link href={t.href} className="og-tool-link">{t.action}<span aria-hidden="true">→</span></Link>
      </article>)}</div>
      <p className="og-tools-note">More tools will be added as new problems worth solving turn up.</p>
    </section>
    <section className="og-tools-end"><p className="og-tools-kicker">HAVE AN IDEA?</p><h2>What should we<br/><em>make next?</em></h2><p>Suggest a small tool that would make your work easier.</p><Link href="/contact">Suggest a tool <span>→</span></Link></section>
  </main>;
}
