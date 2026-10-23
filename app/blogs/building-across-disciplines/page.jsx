import Link from "next/link";
import "../journal-article.css";

const articleUrl = "https://omogiwa.com/blogs/building-across-disciplines";

export const metadata = {
  title: "Building Things Across Different Disciplines",
  description: "Why creativity does not need to stay inside one discipline, and how design, technology, anatomy, and curiosity can influence one another.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Building Things Across Different Disciplines",
    description: "A reflection on connecting different interests to make more thoughtful creative work.",
    url: articleUrl, siteName: "OmoGiwa", locale: "en_NG", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Building Things Across Different Disciplines", description: "Why creativity does not need to stay inside one discipline." },
};

export default function BuildingAcrossDisciplinesPage() {
  return (
    <main className="journal-article-page">
      <header className="journal-article-header">
        <nav className="journal-article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blogs">Blogs</Link><span aria-hidden="true">/</span><span aria-current="page">Building Across Disciplines</span>
        </nav>
        <p className="journal-article-category">Creativity · Perspective</p>
        <h1>Building Things Across Different Disciplines</h1>
        <p className="journal-article-subtitle">Why I don't think creativity needs to stay inside one discipline, and how different interests can influence each other.</p>
        <div className="journal-article-meta"><span>By <Link href="/about">Omogbolahan Giwa</Link></span><span aria-hidden="true">·</span><span>4 min read</span></div>
      </header>
      <figure className="journal-article-cover">
        <img src="/blog-creativity.png" alt="Creative ideas and work across different disciplines" />
        <figcaption>Different interests can connect in useful and unexpected ways.</figcaption>
      </figure>
      <article className="journal-article-content">
        <div className="journal-article-intro">
          <p>I have never been particularly good at keeping my interests in separate boxes.</p>
          <p>Design leads me to technology. Technology makes me curious about how people use the things we build. My background in Human Anatomy gives me another way to think about structure, function, and the relationships between individual parts. One interest often gives me a new question to ask in another.</p>
        </div>
        <h2>Curiosity rarely follows a straight line</h2>
        <p>There is value in developing deep knowledge, of course. But learning across fields can reveal connections that are difficult to notice when we look at a problem from only one direction.</p>
        <p>When I work on a visual identity, I think about more than colours and shapes. I consider what the business needs to communicate, who needs to understand that message, and how the identity will behave across different touchpoints. When I build a website, the same curiosity moves between design, content, interaction, and implementation.</p>
        <h2>Different skills can strengthen one another</h2>
        <p>Design helps establish hierarchy and guide attention. Development turns an idea into something people can use. Communication makes the message clearer, while strategy keeps the experience connected to a real goal. These are different disciplines, but the work becomes stronger when their decisions support one another.</p>
        <p>Knowledge from psychology, biology, business, art, or engineering can offer useful perspectives, provided we understand its limits and apply it thoughtfully.</p>
        <blockquote className="journal-article-quote">The point is not to know everything. It is to recognise when another perspective can help you ask a better question.</blockquote>
        <h2>Connection is not the same as doing everything</h2>
        <p>Working across disciplines does not mean pretending to be an expert in every field. It means staying curious, learning what a problem requires, and knowing when to go deeper or collaborate with someone with more specialised knowledge.</p>
        <p>There will always be gaps in what I know. The goal is to keep building a useful foundation, remain open to new information, and avoid treating the boundaries between fields as barriers to thinking.</p>
        <h2>Making room for unexpected ideas</h2>
        <p>Some of the most interesting ideas emerge when something familiar is viewed through a different lens. A principle from one field may not transfer directly into another, but it can inspire a new approach or expose an assumption that deserves to be questioned.</p>
        <p>I do not need every interest to become a separate career. Sometimes, its greatest value is the way it changes how I approach the work I already do.</p>
        <aside className="journal-article-author">
          <p className="journal-article-author-label">ABOUT THE AUTHOR</p><h2>Omogbolahan Giwa</h2>
          <p>Multidisciplinary designer and software engineer interested in how design, technology, and human experience work together.</p>
          <Link href="/about">More about me <span aria-hidden="true">→</span></Link>
        </aside>
        <nav className="journal-article-back" aria-label="Article navigation">
          <Link href="/">← Back to the homepage</Link><Link href="/blogs/making-ideas-tangible">Next article: Making Ideas Tangible →</Link>
        </nav>
      </article>
    </main>
  );
}
