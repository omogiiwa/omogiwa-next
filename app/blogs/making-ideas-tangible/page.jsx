import Link from "next/link";
import "../journal-article.css";

const articleUrl = "https://omogiwa.com/blogs/making-ideas-tangible";

export const metadata = {
  title: "Making Ideas Tangible",
  description: "An ongoing collection of experiments, strange ideas, and things I'm building to discover what works, what fails, and what might be possible.",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "Making Ideas Tangible",
    description: "Why experimenting and building small things can turn abstract ideas into practical learning.",
    url: articleUrl, siteName: "OmoGiwa", locale: "en_NG", type: "article",
  },
  twitter: { card: "summary_large_image", title: "Making Ideas Tangible", description: "A reflection on experiments, prototypes, and learning by making." },
};

export default function MakingIdeasTangiblePage() {
  return (
    <main className="journal-article-page">
      <header className="journal-article-header">
        <nav className="journal-article-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blogs">Blogs</Link><span aria-hidden="true">/</span><span aria-current="page">Making Ideas Tangible</span>
        </nav>
        <p className="journal-article-category">Experiments · Process</p>
        <h1>Making Ideas Tangible</h1>
        <p className="journal-article-subtitle">An ongoing collection of experiments, strange ideas, and things I'm building just to see what happens.</p>
        <div className="journal-article-meta"><span>By <Link href="/about">Omogbolahan Giwa</Link></span><span aria-hidden="true">·</span><span>6 min read</span></div>
      </header>
      <figure className="journal-article-cover">
        <img src="/blog-experiments.png" alt="Experiments and ideas brought to life through design and technology" />
        <figcaption>An idea becomes easier to understand when you can interact with it, test it, and improve it.</figcaption>
      </figure>
      <article className="journal-article-content">
        <div className="journal-article-intro">
          <p>An idea can feel complete in your head long before it has survived contact with reality.</p>
          <p>I have learned that the quickest way to understand an idea is often to make a small version of it. A rough interface, a visual test, a short script, or a simple prototype can reveal questions that thinking alone will not answer.</p>
        </div>
        <h2>Start before everything feels perfect</h2>
        <p>It is tempting to wait until a plan is detailed, the tools are familiar, and the final result feels obvious. But uncertainty is often the reason to start experimenting. A small first version gives you something concrete to react to, rather than a growing list of assumptions.</p>
        <p>That first version does not need to be polished. It needs to be clear enough to test the central idea. Once it exists, you can see what works, what feels awkward, and what you had not considered.</p>
        <h2>Experiments turn assumptions into questions</h2>
        <p>When an idea is still abstract, it is easy to imagine that every part will work exactly as intended. Building exposes the details: how pieces connect, where someone gets stuck, what takes longer than expected, and which features are actually useful.</p>
        <p>For design, that might mean testing a few visual directions before committing to a full identity. For a website, it could mean making a small interactive prototype before building the complete experience. In software, it may mean trying the simplest working implementation to learn where the difficult parts are.</p>
        <blockquote className="journal-article-quote">A prototype is not a promise that the idea is finished. It is a way to ask the idea better questions.</blockquote>
        <h2>Let the result teach you</h2>
        <p>An experiment can fail and still be useful. A result that does not match your expectation gives you information about the method, the assumptions, or the problem itself. The important thing is to notice what happened and use it to make the next decision.</p>
        <p>A useful experiment has a question behind it: what are you trying to learn, and what would change your mind? Keeping that question small makes the result easier to interpret.</p>
        <h2>Keep the loop small</h2>
        <p>My preferred rhythm is simple: choose a question, make a small version, observe the result, and refine it. Sometimes the experiment grows into a real project. Sometimes it teaches me enough to stop. Both outcomes are worthwhile because both replace guesswork with experience.</p>
        <p>Small experiments also make learning more active. Instead of collecting tutorials and waiting until I feel ready, I can apply one new concept to something real, discover the gaps in my understanding, and return to the learning with a clearer purpose.</p>
        <h2>Build to discover what is possible</h2>
        <p>Not every idea needs to become a product, a portfolio piece, or a business. Some are worth exploring simply because the process reveals something new. That freedom makes it easier to try unfamiliar tools, combine interests, and follow a question without demanding an immediate payoff.</p>
        <p>For me, making ideas tangible is less about producing something impressive every time and more about creating a reliable way to learn. Build a little, pay attention, and let the next step be informed by what you discover.</p>
        <aside className="journal-article-author">
          <p className="journal-article-author-label">ABOUT THE AUTHOR</p><h2>Omogbolahan Giwa</h2>
          <p>Multidisciplinary designer and software engineer exploring ideas through design, technology, and hands-on experiments.</p>
          <Link href="/about">More about me <span aria-hidden="true">→</span></Link>
        </aside>
        <nav className="journal-article-back" aria-label="Article navigation">
          <Link href="/blogs/building-across-disciplines">← Previous article: Building Across Disciplines</Link><Link href="/">Back to the homepage →</Link>
        </nav>
      </article>
    </main>
  );
}
