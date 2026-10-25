import Image from "next/image";
import Link from "next/link";
import "./relationship-between-anatomy-and-design.css";

const siteUrl = "https://omogiwa.com";

const article = {
  title:
    "Anatomy Is More Than Medicine: How My Background Shapes the Way I See Design",

  description:
    "How studying human anatomy changed the way I approach design, from understanding form and function to creating more human-centred digital experiences.",

  url: `${siteUrl}/blogs/relationship-between-anatomy-and-design`,

  image: `${siteUrl}/anatomy-cover.png`,

  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
};

export const metadata = {
  title: article.title,

  description: article.description,

  keywords: [
    "relationship between anatomy and design",
    "anatomy and design",
    "human anatomy in design",
    "anatomy in product design",
    "human-centred design",
    "biomimicry in design",
    "ergonomics and design",
    "multidisciplinary designer",
    "anatomy graduate designer",
    "design and human biology",
  ],

  authors: [
    {
      name: "Omogbolahan Giwa",
      url: siteUrl,
    },
  ],

  creator: "Omogbolahan Giwa",
  publisher: "OmoGiwa.",

  alternates: {
    canonical: article.url,
  },

  openGraph: {
    title: article.title,
    description: article.description,
    url: article.url,
    siteName: "OmoGiwa.",
    locale: "en_NG",
    type: "article",

    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,

    authors: ["Omogbolahan Giwa"],

    images: [
      {
        url: article.image,
        width: 1200,
        height: 900,
        alt: "Anatomy and design — exploring the relationship between the human body, creativity, and design thinking",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,

    images: [
      {
        url: article.image,
        alt: "Anatomy and design — exploring the relationship between the human body, creativity, and design thinking",
      },
    ],

  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const articleSections = [
  {
    heading: "Looking Beyond the Surface",
    content: (
      <>
        <p>
          I have always been interested in how things work. Not just how they
          look, but what happens beneath the surface to make them function.
          That curiosity is one of the things that connects my background in
          human anatomy with my work as a designer.
        </p>

        <p>
          Studying anatomy taught me to look beyond appearances. The human body
          is an incredibly organised system of structures, each with its own
          role, yet all working together to keep us alive. Bones provide
          support, muscles produce movement, nerves transmit information, and
          organs perform specialised functions.
        </p>

        <p>
          The more I understood these relationships, the more I began to
          recognise a similar principle in design: what we see on the surface
          is only part of the story.
        </p>

        <p>
          A well-designed product, website, or visual identity is not simply
          something attractive. It has an underlying structure. Its individual
          parts work together to serve a purpose.
        </p>

        <p>
          That is where anatomy and design begin to meet.
        </p>
      </>
    ),
  },

  {
    heading: "Form and Function: A Lesson From the Human Body",
    content: (
      <>
        <p>
          One of the most interesting things about the human body is how closely
          its structure relates to its function.
        </p>

        <p>
          The shape of a bone affects how it supports weight. The arrangement
          of muscles influences movement. The structure of a joint determines
          the kinds of movement it can perform.
        </p>

        <p>
          These structures are not random. Their forms are closely related to
          what they need to do.
        </p>

        <p>
          Design works in a similar way.
        </p>

        <p>
          A chair should do more than look good in a photograph. It should
          support the person sitting in it. A website should not only have an
          attractive interface; it should help people find information and
          complete tasks without unnecessary frustration.
        </p>

        <p>
          A brand identity should not simply look impressive. It should
          communicate something meaningful about the business behind it.
        </p>

        <p>
          This is why I see design as a balance between form and function.
          Aesthetics matter, but they become much more valuable when they are
          supported by purpose.
        </p>

        <p>
          Studying anatomy gave me another way to understand this relationship.
          It encouraged me to ask not just what something looks like, but why
          it is structured the way it is.
        </p>
      </>
    ),
  },

  {
    heading: "The Human Body as a Design Reference",
    content: (
      <>
        <p>
          The human body can teach us a lot about designing things for people.
          Its proportions, movements, limitations, and abilities provide useful
          reference points for solving practical design problems.
        </p>

        <p>
          In product design, for example, understanding body measurements and
          movement can help determine whether an object is comfortable,
          accessible, and safe to use. This is one of the reasons ergonomics and
          anthropometry are important in designing furniture, clothing, tools,
          and everyday products.
        </p>

        <p>
          A desk that looks beautiful but forces someone into an uncomfortable
          position is not particularly successful design. Neither is a mobile
          interface whose controls are difficult to reach or interact with.
        </p>

        <p>
          The same principle applies to digital experiences. When I approach a
          website, I think about the person on the other side of the screen:
          how they navigate, what they need to understand, and how easily they
          can move from one action to another.
        </p>

        <p>
          We may not be designing bones or muscles, but we are designing
          experiences for the people who have them.
        </p>

        <p>
          Understanding the human body is therefore not limited to medical
          practice. It can also contribute to the way we create products,
          interfaces, environments, and visual experiences.
        </p>
      </>
    ),
  },

  {
    heading: "Why Understanding Anatomy Isn't Enough",
    content: (
      <>
        <p>
          Here is where things become a little more complicated.
        </p>

        <p>
          Knowing how the human body works does not automatically make someone
          a good designer. Anatomy can provide useful insights, but design
          requires more than biological knowledge.
        </p>

        <p>
          It also requires creativity, observation, research, experimentation,
          and an understanding of the problem being solved.
        </p>

        <p>
          The human body can serve as a reference, but it should not become a
          rigid blueprint that every design must follow.
        </p>

        <p>
          A solution that works for one person may not work for another. People
          differ in body proportions, physical abilities, experiences, and
          cultural expectations. Good design needs to recognise these
          differences rather than assume that one solution will suit everyone.
        </p>

        <p>
          This distinction matters to me because design is not about copying
          nature or applying scientific facts without question. It is about
          understanding the problem, identifying useful principles, and
          deciding how to apply them appropriately.
        </p>

        <p>
          Science can help us ask better questions. Design helps us explore
          possible answers.
        </p>
      </>
    ),
  },

  {
    heading: "Learning From Biology, Not Just Copying It",
    content: (
      <>
        <p>
          There is another connection between anatomy and design that I find
          particularly interesting: biomimicry.
        </p>

        <p>
          Biomimicry involves learning from structures, processes, and
          strategies found in nature to develop solutions to human problems.
        </p>

        <p>
          In architecture, designers can study natural structures to explore
          ways of organising space, distributing loads, or improving
          environmental performance. In product development, biological
          principles can inspire new materials, forms, and mechanisms.
        </p>

        <p>
          The important part is not simply making something look like an
          organism. It is understanding what makes a natural system effective
          and exploring whether the underlying principle can solve a design
          problem.
        </p>

        <p>
          This is a useful way to think about creativity. Inspiration does not
          always have to come from another designer, a trend, or an existing
          product. Sometimes, the natural world offers a different way to
          approach a familiar problem.
        </p>

        <p>
          Anatomy gives us one perspective on that world, but biology offers
          many more lessons that designers can explore.
        </p>
      </>
    ),
  },

  {
    heading: "Designing for Real People, Not an Imaginary Average",
    content: (
      <>
        <p>
          One of the biggest lessons I take from studying the human body is
          that human variation matters.
        </p>

        <p>
          People do not share identical proportions, physical abilities, or
          needs. A design based on a narrow idea of the average person can
          unintentionally exclude the people who do not fit that assumption.
        </p>

        <p>
          This is particularly important when designing furniture, clothing,
          medical devices, public spaces, and digital products.
        </p>

        <p>
          Ergonomics and anthropometric research can help designers understand
          the people who will use a product. However, the quality of that
          research matters. Data collected from one population may not
          accurately represent another.
        </p>

        <p>
          For example, using measurements that do not adequately reflect the
          intended users can result in products that fit poorly or create
          unnecessary discomfort. This is one reason locally relevant
          anthropometric data is important, including research that reflects
          African populations.
        </p>

        <p>
          Inclusive design also means considering accessibility, different
          levels of ability, and the circumstances in which a product will
          actually be used.
        </p>

        <p>
          To me, this is where understanding anatomy becomes especially
          valuable: it reminds us that design is ultimately experienced by
          real, diverse human beings.
        </p>
      </>
    ),
  },

  {
    heading: "Where Anatomy Meets Technology",
    content: (
      <>
        <p>
          Technology is creating even more opportunities to bring anatomical
          knowledge into design.
        </p>

        <p>
          Three-dimensional modelling can help researchers and designers
          visualise complex structures. Three-dimensional printing can turn
          digital models into physical objects, including anatomical models
          and components used in medical applications.
        </p>

        <p>
          Digital scanning and modelling can also support the development of
          products that need to account for individual anatomy, while advances
          in prosthetics and assistive devices continue to explore ways of
          improving function and usability.
        </p>

        <p>
          Artificial intelligence introduces further possibilities for
          analysing data, supporting design workflows, and assisting with
          medical imaging and modelling.
        </p>

        <p>
          But technological progress does not remove the need for human
          judgement. Data can be incomplete, models can reproduce biases, and
          a technically impressive result may still fail the people it is
          supposed to serve.
        </p>

        <p>
          Privacy, safety, accessibility, and proper testing remain important,
          particularly when a design affects health or physical wellbeing.
        </p>

        <p>
          Technology gives us new tools. Understanding the people who use those
          tools helps us use them more responsibly.
        </p>
      </>
    ),
  },

  {
    heading: "What This Means for Me as a Designer",
    content: (
      <>
        <p>
          My background in human anatomy has influenced the way I approach
          design, but not because I believe every creative problem needs a
          biological explanation.
        </p>

        <p>
          It has taught me to pay attention to structure, relationships, and
          function. It has encouraged me to look beyond what is immediately
          visible and ask why something works the way it does.
        </p>

        <p>
          Those habits are useful whether I am working on a brand identity, a
          website, a digital experience, or a visual communication project.
        </p>

        <p>
          When developing a brand, I think about how its individual elements
          work together to communicate a consistent identity. When designing a
          website, I consider the relationship between its structure, content,
          visual hierarchy, and usability.
        </p>

        <p>
          Different projects require different methods, of course. But the
          underlying approach remains similar: understand the problem, study
          the relevant relationships, and build a solution with intention.
        </p>

        <p>
          My work sits at the intersection of different disciplines, and I
          consider that a strength. Design does not happen in isolation, and
          some of the most useful ideas emerge when we connect knowledge from
          fields that might initially seem unrelated.
        </p>

        <p>
          Anatomy is one of those fields for me. It has given me another lens
          through which to observe the world, approach problems, and make
          creative decisions.
        </p>
      </>
    ),
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: article.title,
  description: article.description,

  image: [article.image],

  url: article.url,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },

  datePublished: article.datePublished,
  dateModified: article.dateModified,

  author: {
    "@type": "Person",
    name: "Omogbolahan Giwa",
    url: siteUrl,
    jobTitle: "Multidisciplinary Designer & Software Engineer",
  },

  publisher: {
    "@type": "Organization",
    name: "OmoGiwa.",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/omogiwalogo.svg`,
    },
  },

  inLanguage: "en-NG",

  articleSection: [
    "Anatomy",
    "Design",
    "Human-centred design",
    "Technology",
  ],

  keywords: [
    "anatomy and design",
    "human anatomy in design",
    "ergonomics",
    "biomimicry",
    "human-centred design",
  ],
};

export default function AnatomyAndDesignArticle() {
  return (
    <main className="anatomy-article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* Article header */}
      <header className="anatomy-article-header">
        <nav
          className="anatomy-breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>

          <span aria-hidden="true">/</span>

          <Link href="/blogs">Blogs</Link>

          <span aria-hidden="true">/</span>

          <span aria-current="page">
            Anatomy and Design
          </span>
        </nav>

        <p className="anatomy-article-category">
          DESIGN · ANATOMY · PERSPECTIVE
        </p>

        <h1>{article.title}</h1>

        <p className="anatomy-article-subtitle">
          What happens when the science of the human body meets the art of
          creating things?
        </p>

        <div className="anatomy-article-meta">
          <span>
            By{" "}
            <Link href="/about">
              Omogbolahan Giwa
            </Link>
          </span>

          <span aria-hidden="true">·</span>

          <time dateTime={article.datePublished}>
            October 11, 2026
          </time>

          <span aria-hidden="true">·</span>

          <span>8 min read</span>
        </div>
      </header>

      {/* Cover image */}
      <figure className="anatomy-article-cover">
        <Image
          src="/anatomy-cover.png"
          alt="The relationship between human anatomy and design, exploring the human body as inspiration for creative thinking."
          width={1200}
          height={900}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 1200px"
          className="anatomy-article-cover-image"
        />

        <figcaption>
          Understanding the human body can offer a different perspective on
          how we design for people.
        </figcaption>
      </figure>

      {/* Article body */}
      <div className="anatomy-article-layout">
        <article className="anatomy-article-content">
          <div className="anatomy-article-introduction">
            <p>
              I studied human anatomy, and I work as a designer. At first
              glance, those two things might seem like they belong in entirely
              different worlds. One deals with the science of the human body;
              the other deals with creativity, communication, and solving
              problems.
            </p>

            <p>
              But the more I think about it, the more I realise that they have
              something important in common: both require us to understand how
              things work, how their parts relate to one another, and why their
              structure matters.
            </p>

            <p>
              That connection has influenced how I see design. And no, I am
              not suggesting that every designer needs to memorise the bones of
              the human body. Although knowing a few would not hurt.
            </p>
          </div>

          {/* Article contents */}
          <nav
            className="anatomy-article-toc"
            aria-label="Table of contents"
          >
            <h2>In this article</h2>

            <ol>
              {articleSections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>
                    {section.heading}
                  </a>
                </li>
              ))}

              <li>
                <a href="#final-thoughts">
                  Final thoughts
                </a>
              </li>
            </ol>
          </nav>

          {articleSections.map((section, index) => (
            <section
              key={section.heading}
              id={`section-${index + 1}`}
              className="anatomy-article-section"
            >
              <h2>{section.heading}</h2>

              {section.content}
            </section>
          ))}

          {/* Final thoughts */}
          <section
            id="final-thoughts"
            className="anatomy-article-section anatomy-article-conclusion"
          >
            <h2>Final Thoughts: Creativity Doesn't Belong in One Box</h2>

            <p>
              The relationship between anatomy and design is a reminder that
              creative thinking does not have to stay within the boundaries of
              one discipline.
            </p>

            <p>
              Understanding the human body can help us think more carefully
              about form, function, movement, comfort, and the people who
              interact with what we create. When combined with research,
              creativity, and thoughtful problem-solving, that knowledge can
              contribute to better design decisions.
            </p>

            <p>
              But the bigger lesson for me goes beyond anatomy. Knowledge from
              different fields can complement one another in unexpected ways.
              Sometimes, a perspective gained from one discipline helps us see
              a problem in another more clearly.
            </p>

            <p>
              That is one of the reasons I enjoy working across design and
              technology. Each field brings a different way of thinking, and
              connecting them creates room for new possibilities.
            </p>

            <p className="anatomy-article-final-line">
              I don't believe creativity belongs in just one box. And I don't
              think the ideas that shape our best work should have to stay in
              one either.
            </p>
          </section>

          {/* Author information */}
          <aside
            className="anatomy-article-author"
            aria-label="About the author"
          >
            <div className="anatomy-article-author-content">
              <p className="anatomy-article-author-label">
                ABOUT THE AUTHOR
              </p>

              <h2>Omogbolahan Giwa</h2>

              <p>
                I'm a multidisciplinary designer and software engineer
                interested in the intersection of design, technology, and
                human experience. With a background in human anatomy, I bring
                a research-minded perspective to building thoughtful visual
                identities and digital experiences.
              </p>

              <Link href="/about">
                More about my work →
              </Link>
            </div>
          </aside>

          {/* More articles */}
          <nav
            className="anatomy-article-more"
            aria-label="More articles"
          >
            <h2>Enjoyed this article?</h2>

            <p>
              Explore more ideas on design, technology, creativity, and the
              connections between them.
            </p>

            <Link
              href="/blogs"
              className="anatomy-article-more-link"
            >
              Explore all articles →
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}