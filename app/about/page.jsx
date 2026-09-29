import "./about.css";
export const metadata = {
  title: "About — Omogbolahan Giwa",
  description:
    "Learn more about Omogbolahan Giwa — a multidisciplinary designer, software engineer, scientist, and creative exploring the intersection of art, design, technology, and human potential.",
  keywords: [
    "Omogbolahan Giwa",
    "Omogbolahan",
    "multidisciplinary designer",
    "software engineer",
    "web designer",
    "graphic designer",
    "brand identity designer",
    "illustrator",
    "AI developer",
    "Human Anatomy",
    "creative designer Nigeria",
    "Nigerian designer",
  ],
  alternates: {
    canonical: "https://omogiwa.com/about",
  },
  openGraph: {
    title: "About — Omogbolahan Giwa",
    description:
      "A multidisciplinary designer, software engineer, scientist and creative exploring the intersection of art, design and technology.",
    url: "https://omogiwa.com/about",
    siteName: "Omogbolahan Giwa",
    type: "profile",
    images: [
      {
        url: "https://omogiwa.com/icon2.png",
        width: 400,
        height: 400,
        alt: "Omogbolahan Giwa logo",
      },
    ],
  },
};
export default function AboutPage() {
  return (
    <main className="omg-about-page" id="omg-about-page">
      {/* HERO */}
      <section
        className="omg-about-hero"
        id="omg-about-introduction"
        aria-labelledby="omg-about-title"
      >
        <div className="omg-about-hero-content">
          <div className="omg-about-hero-text">
            <p className="omg-about-eyebrow">About</p>
            <h1 className="omg-about-title" id="omg-about-title">
              Hello, I am Omogbolahan Giwa.
            </h1>
            <p className="omg-about-intro">
              A multidisciplinary designer and software engineer.
            </p>
          </div>
          <div className="omg-about-profile-wrap">
            <img
              src="/profile.png"
              alt="Portrait of Omogbolahan Giwa"
              className="omg-about-profile-image"
            />
          </div>
        </div>
      </section>
      {/* PHILOSOPHY */}
      <section className="omg-about-section" id="omg-about-philosophy">
        <details className="omg-about-details" open>
          <summary className="omg-about-summary">
            <span>Philosophy</span>
            <span className="omg-about-summary-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="omg-about-content">
            <p>
              I believe the human body does not have limits; we are not meant
              to be confined to a single definition of what we can become.
              One of my many missions in life is to substantiate this
              statement by succeeding in as many fields as possible while
              giving each of them my all.
            </p>
            <p>
              This is not a challenge, nor am I trying to just insert as much
              as possible into my CV, and no, these fields are not random
              either. They are the total embodiment of what I — Omogbolahan
              Giwa — have always dreamed of for years as a kid, despite facing
              the resource constraints shared by millions of young Nigerians
              from similar backgrounds.
            </p>
            <p>
              There were many things I wanted to become, and instead of
              choosing one and abandoning the others, I’m trying to build the
              ability to pursue all of them.
            </p>
            <p>
              Whenever I get asked my dream or what I want to be, I never have
              a definite answer like others because there are too many.
            </p>
          </div>
        </details>
      </section>
      {/* SKILLS */}
      <section className="omg-about-section" id="omg-about-skills">
        <details className="omg-about-details">
          <summary className="omg-about-summary">
            <span>Skills</span>
            <span className="omg-about-summary-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="omg-about-content">
            <p>
              For a start, I am fascinated by how the human body works, so I
              studied Human Anatomy at Gregory University Uturu, where I earned
              my bachelor’s degree, so I am a scientist.
            </p>
            <p>
              I am also a self-taught software engineer. This website is the
              evidence of that — I designed every bit of it independently.
            </p>
            <p>
              I am also in the process of learning AI development. Who knows,
              maybe my AI company can rival OpenAI and Anthropic in the future.
              I know you laughed, or at least chuckled, a bit, but people also
              laughed when the Wright brothers claimed they were going to
              build a technology that allowed flight transport over hundreds
              of miles, and yet here we are.
            </p>
            <p>
              Everybody who knows me personally knows I am a creative and
              artistic person. It only makes sense that I learn graphic
              design. I didn’t even need to learn it; I just had to know how
              the buttons work. The skills have always been there. All I had to
              do was put them on screen.
            </p>
            <p>
              Over time, the zeal developed into serious and consistent
              practice in graphic design, illustration, and branding.
            </p>
          </div>
        </details>
      </section>
      {/* WHAT I CAN DO */}
      <section className="omg-about-section" id="omg-about-services">
        <details className="omg-about-details">
          <summary className="omg-about-summary">
            <span>What Can I Do for You?</span>
            <span className="omg-about-summary-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="omg-about-content">
            <p className="omg-about-lead">
              I turn ideas into visual identities, digital experiences and
              creative systems that make brands easier to recognize,
              understand and remember.
            </p>
            <div className="omg-about-service-list">
              <article
                className="omg-about-service"
                id="omg-about-brand-identity"
              >
                <h2>Brand Identity</h2>
                <p>
                  I help brands build a distinct visual identity — from logos
                  and color systems to typography, graphics and the overall
                  visual language that makes a brand stand out.
                </p>
              </article>
              <article
                className="omg-about-service"
                id="omg-about-web-design-development"
              >
                <h2>Web Design &amp; Development</h2>
                <p>
                  I design and build websites that don’t just look good, but
                  communicate clearly and work properly. I focus mainly on how
                  they interact with your potential clients or anybody that
                  visits your page. You can judge that yourself from this
                  site.
                </p>
              </article>
              <article
                className="omg-about-service"
                id="omg-about-illustration"
              >
                <h2>Illustration</h2>
                <p>
                  I create custom illustrations and visual concepts. Whenever
                  you have an idea or business that you just can’t put down, I
                  am the right person to call. Talk to me and I’ll bring it to
                  life.
                </p>
              </article>
            </div>
          </div>
        </details>
      </section>
      {/* HOW I CAN HELP */}
      <section className="omg-about-section" id="omg-about-brand-help">
        <details className="omg-about-details">
          <summary className="omg-about-summary">
            <span>How I Can Help Your Brand</span>
            <span className="omg-about-summary-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="omg-about-content">
            <p>
              Your brand doesn’t need to do everything. It needs to communicate
              the right things to the right people.
            </p>
            <p>
              Whether you’re starting from scratch, rebuilding an existing
              identity or simply need better visual communication, I can help
              turn your ideas into something people can actually see,
              understand and remember.
            </p>
            <p>
              I approach every project as more than a collection of individual
              designs. The goal is to create something intentional, consistent
              and unmistakably yours.
            </p>
            <p>
              I enjoy working at the intersection of art, design and
              technology, turning ideas into visual identities.
            </p>
          </div>
        </details>
      </section>
      {/* OUTSIDE THE WORK */}
      <section className="omg-about-section" id="omg-about-outside-work">
        <details className="omg-about-details">
          <summary className="omg-about-summary">
            <span>Outside the Work</span>
            <span className="omg-about-summary-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="omg-about-content">
            <h2>And when I’m not designing?</h2>
            <p>
              I play volleyball, a lot. In fact, I — along with my teammates
              at Gregory University Titans — won the silver medal at 2025
              ASTESF, making us the second-best volleyball team in Abia State!
            </p>
            <p>
              I’m naturally curious, which is probably why I have a habit of
              picking up completely different things and trying to understand
              how they work. One day I might be learning something about AI or
              software; the following day I’m learning about the French
              Revolution or the Kiriji War.
            </p>
            <p>
              I am a man of many interests and very competitive, which is why
              I’m always at a sport or another. My interests span across:
            </p>
            <ul className="omg-about-interests">
              <li>Volleyball</li>
              <li>Politics</li>
              <li>History</li>
              <li>Fashion</li>
              <li>Football</li>
              <li>Basketball</li>
              <li>Anime</li>
              <li>Chess</li>
            </ul>
          </div>
        </details>
      </section>
    </main>
  );
}