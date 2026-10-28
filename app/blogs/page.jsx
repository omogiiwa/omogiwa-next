import Link from "next/link";
import "./blogs.css";

export const metadata = {
  title: "Blogs & Journal | OmoGiwa.",
  description: "Ideas, reflections, experiments, and personal stories from Omogbolahan Giwa on design, technology, creativity, anatomy, and life.",
  alternates: { canonical: "https://omogiwa.com/blogs" },
  openGraph: { title: "Blogs & Journal | OmoGiwa.", description: "Ideas, reflections, experiments, and personal stories from Omogbolahan Giwa.", url: "https://omogiwa.com/blogs", siteName: "OmoGiwa.", type: "website" },
};

const articles = [
  { n: "01", category: "ANATOMY & DESIGN", read: "FEATURED", title: "Anatomy Is More Than Medicine", desc: "How studying human anatomy changed the way I approach design — from understanding form and function to creating more human-centred digital experiences.", href: "/blogs/relationship-between-anatomy-and-design", style: "anatomy" },
  { n: "02", category: "CREATIVITY", read: "4 MIN READ", title: "Building Things Across Different Disciplines", desc: "Why creativity does not need to stay inside one discipline, and how design, technology, anatomy, and curiosity can influence one another.", href: "/blogs/building-across-disciplines", style: "disciplines", cover: "/blog-covers/disciplines.svg" },
  { n: "03", category: "EXPERIMENTS", read: "6 MIN READ", title: "Making Ideas Tangible", desc: "A reflection on prototypes, experiments, and building small things to discover what works and what might be possible.", href: "/blogs/making-ideas-tangible", style: "experiments", cover: "/blog-covers/ideas-tangible.svg" },
  { n: "04", category: "PERSONAL NOTES", read: "5 MIN READ", title: "From Ododo Arts and Design to Giwa", desc: "The story behind a change in direction, and how a practice that started with graphic design grew into something broader.", href: "/journal/from-ododo-to-giwa", style: "journey", cover: "/blog-covers/ododo-to-giwa.svg" },
  { n: "05", category: "EDUCATION & FAMILY", read: "A PERSONAL APPEAL", title: "Help My Sister Become the Doctor She Has Always Dreamed of Being", desc: "A brother's appeal to help his sister continue her medical education, with transparent ways for supporters to learn more and contribute.", href: "/blogs/help-my-sister-become-a-doctor", style: "family", cover: "/blog-covers/medical-dream.svg" },
];

export default function BlogsPage() {
  const [featured, ...rest] = articles;
  return <main className="og-blogs-page">
    <section className="og-blogs-hero"><div className="og-blogs-mark" aria-hidden="true">O.</div><div className="og-blogs-hero-copy"><p className="og-blogs-eyebrow"><span/> NOTES FROM A CURIOUS MIND</p><h1>Ideas worth<br/><em>thinking about.</em></h1><p className="og-blogs-lead">Writing about design, technology, anatomy, creativity, experiments, and whatever else deserves a closer look. No single niche. Just things worth exploring.</p><a href="#articles" className="og-blogs-scroll">EXPLORE THE WRITING <span>↓</span></a></div><div className="og-blogs-hero-foot"><span>INDEPENDENT THOUGHTS</span><span>01 — 05</span></div></section>
    <section className="og-blogs-list" id="articles"><header className="og-blogs-heading"><div><p className="og-blogs-kicker">THE JOURNAL / 01</p><h2>Read something.</h2></div><p>Some things are learned by making. Others become clearer when you sit down and write about them.</p></header>
      <article className="og-blog-feature"><Link href={featured.href} className={`og-blog-art og-art-${featured.style}`} aria-label={`Read ${featured.title}`} style={{ backgroundImage: "url(/anatomy-cover.png)", backgroundSize: "cover", backgroundPosition: "center" }}><span>01</span></Link><div className="og-blog-feature-copy"><p className="og-blog-meta">{featured.category} <span>·</span> {featured.read}</p><p className="og-blog-feature-label">FEATURED ARTICLE</p><h3><Link href={featured.href}>{featured.title}</Link></h3><p>{featured.desc}</p><Link className="og-blog-read" href={featured.href}>Read the article <span>→</span></Link></div></article>
      <div className="og-blogs-subhead"><h3>More to explore</h3><span>04 ARTICLES</span></div><div className="og-blogs-grid">{rest.map(a=><article className="og-blog-card" key={a.href}><Link href={a.href} className={`og-blog-art og-art-${a.style}`} aria-label={`Read ${a.title}`} style={{ backgroundImage: `url(${a.cover})`, backgroundSize: "cover", backgroundPosition: "center" }}><span>{a.n}</span><b>{a.category}</b></Link><div className="og-blog-card-copy"><p className="og-blog-meta">{a.category} <span>·</span> {a.read}</p><h3><Link href={a.href}>{a.title}</Link></h3><p>{a.desc}</p><Link className="og-blog-read" href={a.href}>Read article <span>→</span></Link></div></article>)}</div>
    </section><section className="og-blogs-end"><p className="og-blogs-kicker">THAT'S NOT ALL</p><h2>Curiosity doesn't<br/><em>stay in one place.</em></h2><p>For interactive experiments and practical things I've built, explore the tools collection.</p><Link href="/tools">Explore OmoGiwa Tools <span>→</span></Link></section>
  </main>;
}
