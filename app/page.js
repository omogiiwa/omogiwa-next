"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orbitTilt, setOrbitTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
const [activeArticle, setActiveArticle] = useState(0);
 const journalArticles = [
   {
     number: "01",
     category: "DESIGN",
     readTime: "5 MIN READ",
     title: "Why good design is more than making things look good.",
     description:
       "Good design isn't decoration. It's about making ideas clearer, more useful and easier to experience.",
   },
   {
     number: "02",
     category: "TECHNOLOGY",
     readTime: "7 MIN READ",
     title: "What I am learning while becoming a software engineer.",
     description:
       "A look at the things I'm learning, breaking, rebuilding and discovering while teaching myself software engineering.",
   },
   {
     number: "03",
     category: "CREATIVITY",
     readTime: "4 MIN READ",
     title: "Building things across different disciplines.",
     description:
       "Why I don't think creativity needs to stay inside one discipline, and how different interests can influence each other.",
   },
   {
     number: "04",
     category: "EXPERIMENTS",
     readTime: "6 MIN READ",
     title: "Making ideas tangible.",
     description:
       "An ongoing collection of experiments, strange ideas and things I'm building just to see what happens.",
   },
 ];
  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}
    


      {/* =========================
          HERO
      ========================== */}
      <section className="hero">

      <div
  className="hero-content"
  style={{
    transform: `translateY(${scrollY * -0.08}px) scale(${Math.max(
      0.94,
      1 - scrollY * 0.00008
    )})`,
    opacity: Math.max(0, 1 - scrollY * 0.0012),
  }}
>

          <p className="eyebrow">HELLO, I'M</p>

          <h1 id="top">
            Omogbolahan <br />
            <span>Giwa.</span>
          </h1>

         <div className="hero-identities">
  <span className="identity identity-one identity-designer">
Multidisciplinary designer
</span>

<span className="identity identity-two identity-engineer">
  Software engineer
</span>

<span className="identity identity-three identity-anatomist">
  Human anatomist
</span>

<span className="identity identity-four identity-sports">
  Sports enthusiast
</span>

<span className="identity identity-five identity-creative">
  Creative
</span>
</div>

         <div
  className="hero-image-wrapper"
  onMouseMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setOrbitTilt({
      x: x * 14,
      y: y * 14,
    });
  }}
  onMouseLeave={() => {
    setOrbitTilt({ x: 0, y: 0 });
  }}
>
  <div
    className="hero-orbit"
    aria-hidden="true"
    style={{
      transform: `translate(${orbitTilt.x}px, ${orbitTilt.y}px) rotate(${orbitTilt.x * 0.35}deg)`,
    }}
  >
    <span className="orbit-ring orbit-ring-one"></span>
    <span className="orbit-ring orbit-ring-two"></span>
    <span className="orbit-dot orbit-dot-one"></span>
    <span className="orbit-dot orbit-dot-two"></span>
  </div>

            <img
              src="/profile.png"
              alt="Omogbolahan Giwa"
              className="hero-image"
            />
          </div>

          <div className="hero-description">
            <p>
              I am a multidisciplinary designer and software engineer focused
              on turning ideas into functional and visually distinctive digital
              experiences.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="/about" className="button button-light">
              See more about me
            </a>

            <a href="#work" className="button button-dark">
              View my works
            </a>

            <a href="#contact" className="button button-purple">
              Let&apos;s work together
            </a>
          </div>

        </div>

        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>
        <div className="hero-decoration hero-decoration-three"></div>

      </section>


      {/* =========================
          INTRO / STATEMENT
      ========================== */}
      <section className="intro-section">

        <p className="section-label">01 / INTRODUCTION</p>

        <h2>
          I don't believe creativity belongs in just one box.
        </h2>

        <p className="large-text">
          I work across design, technology, branding and visual communication
          to create things that are not only visually compelling, but useful,
          functional and memorable.
        </p>

      </section>


      {/* =========================
          SELECTED WORK
      ========================== */}
      <section className="work-section" id="work">

        <div className="section-heading">
          <div>
            <p className="section-label purple">02 / SELECTED WORK</p>

            <h2>
              Things I&apos;ve <span>created.</span>
            </h2>
          </div>

          <p>
            A selection of projects across design, branding, development and
            visual communication.
          </p>
        </div>


        <div className="projects-grid">

          <article className="project-card project-large">
            <div className="project-image">
              <img src="/project-1.jpg" alt="Project one" />
            </div>

            <div className="project-info">
              <p>Web Design / Development</p>
              <h3>Project One</h3>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <img src="/project-2.jpg" alt="Project two" />
            </div>

            <div className="project-info">
              <p>Brand Identity</p>
              <h3>Project Two</h3>
            </div>
          </article>


          <article className="project-card">
            <div className="project-image">
              <img src="/project-3.jpg" alt="Project three" />
            </div>

            <div className="project-info">
              <p>Graphic Design</p>
              <h3>Project Three</h3>
            </div>
          </article>

        </div>

        <a href="#contact" className="text-link">
          View all projects →
        </a>

      </section>


      {/* =========================
          WHAT I DO
      ========================== */}
      <section className="services-section" id="services">

        <div className="services-intro">
          <p className="section-label">03 / WHAT I DO</p>

          <h2>
            Different disciplines.
            <br />
            <span>One creative mind.</span>
          </h2>
        </div>


        <div className="services-grid">

          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Web Design</h3>
            <p>
              Do you think this website is amazing? I can make yours even better.
            </p>
          </article>


          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Development</h3>
            <p>
              Turning designs and ideas into responsive, functional websites
              and digital products.
            </p>
          </article>


          <article className="service-card">
            <span className="service-number">03</span>
            <h3>Brand Identity</h3>
            <p>
              I make visual identities that give businesses and brands a distinctive presence
            </p>
          </article>


          <article className="service-card">
            <span className="service-number">04</span>
            <h3>Graphic Design</h3>
            <p>
              Posters, social graphics, campaigns and visual communication
              designed to capture attention.
            </p>
          </article>


          <article className="service-card">
            <span className="service-number">05</span>
            <h3>Illustration</h3>
            <p>
              Creating distinctive visual artwork and illustrations for
              identities, campaigns and digital experiences.
            </p>
          </article>


          <article className="service-card">
            <span className="service-number">06</span>
            <h3>Creative Direction</h3>
            <p>
              Connecting ideas, visuals and execution into a coherent creative
              direction.
            </p>
          </article>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section className="about-section" id="about">

        <div className="about-image">
          <img src="/profile2.png" alt="Omogbolahan Giwa" />
        </div>

        <div className="about-content">

          <p className="section-label purple">04 / ABOUT</p>

          <h2>
            More than one
            <br />
            <span>definition.</span>
          </h2>

          <p>
            Hello, I&apos;m Omogbolahan Giwa, a designer and scientist.
          </p>

          <p>
            I studied Human Anatomy, taught myself software engineering, and I’m currently teaching myself a bunchof other things.  
            I’m deeply into graphic design, illustration, branding, and turning ideas into things people can actually see and understand.
          </p>

          <p>
            My goal is simple: to make ideas tangible, useful and visually distinctive.
            Whether you're a brand owner, business person or a media personell, this makes your identity stand out for itself and easier to reach.
          </p>

          <a href="/about" className="button button-dark">
            Read more about me →
          </a>

        </div>

      </section>


      {/* =========================
          PROCESS
      ========================== */}
      <section className="process-section">

        <div className="process-heading">

          <p className="section-label">05 / PROCESS</p>

          <h2>
            From idea
            <br />
            <span>to execution.</span>
          </h2>

        </div>


        <div className="process-list">

          <div className="process-item">
            <span>01</span>
            <div>
              <h3>Understand</h3>
              <p>
                Understand the idea, problem, audience and desired outcome.
              </p>
            </div>
          </div>


          <div className="process-item">
            <span>02</span>
            <div>
              <h3>Explore</h3>
              <p>
                Research, experiment and explore possible creative directions.
              </p>
            </div>
          </div>


          <div className="process-item">
            <span>03</span>
            <div>
              <h3>Create</h3>
              <p>
                Turn the strongest direction into a carefully crafted solution.
              </p>
            </div>
          </div>


          <div className="process-item">
            <span>04</span>
            <div>
              <h3>Refine</h3>
              <p>
                Test, improve and polish every important detail.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* =========================
          BLOG
      ========================== */}
      <section className="blog-section" id="blog">

        <div className="section-heading">

          <div>
            <p className="section-label purple">06 / JOURNAL</p>

            <h2>
              Thoughts,
              <br />
              <span>ideas &amp; experiments.</span>
            </h2>
          </div>

          <p>
            I write a lot. I also don't limit myself to one niche, I write about anything as the spirit leads
          </p>

        </div>


        <div className="journal-feature">

  <div className="journal-feature-main">
    <div className="journal-feature-visual">
      <span className="journal-feature-number">
        {journalArticles[activeArticle].number}
      </span>

      <span className="journal-feature-category">
        {journalArticles[activeArticle].category}
      </span>

      <div className="journal-feature-shape"></div>
    </div>

    <div className="journal-feature-content">
      <p>
        {journalArticles[activeArticle].category} · {journalArticles[activeArticle].readTime}
      </p>

      <h3>{journalArticles[activeArticle].title}</h3>

      <span>{journalArticles[activeArticle].description}</span>

      <a href="#">
        Read article →
      </a>
    </div>
  </div>

  <div className="journal-feature-list">
    {journalArticles.map((article, index) => (
      <button
        key={article.number}
        type="button"
        className={`journal-feature-item ${
          index === 0 ? "active" : ""
        }`}
        onMouseEnter={() => setActiveArticle(index)}

  onFocus={() => setActiveArticle(index)}

  onClick={() => setActiveArticle(index)}
      >
        <span>{article.number}</span>

        <div>
          <small>{article.category}</small>
          <strong>{article.title}</strong>
        </div>

        <span className="journal-feature-arrow">↗</span>
      </button>
    ))}
  </div>

</div>

         
      </section>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="newsletter-section">

        <div className="newsletter-inner">

          <p className="section-label">07 / NEWSLETTER</p>

          <h2>
            Be the first to know.
            <br />
            <span>Get quick updates</span>
          </h2>

          <p>
            Join the newsletter to getupdates about new projects,
            experiments and useful things I discover.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />

            <button type="submit">
              Subscribe →
            </button>

          </form>

          <small>
            No spam. Just the good stuff.
          </small>

        </div>

      </section>


      {/* =========================
          CONTACT CTA
      ========================== */}
      <section className="contact-section" id="contact">

        <p className="section-label">08 / CONTACT</p>

        <h2>
          Do you have an idea?
          <br />
          <span>Let&apos;s make it real.</span>
        </h2>

        <p>
          Whether you need a website, identity, visual design or simply want
          to discuss an idea, I&apos;d love to hear from you.
        </p>

        <a href="mailto:hello@omogiwa.com" className="contact-button">
          hello@omogiwa.com →
        </a>

      </section>
</main>
);
}
     