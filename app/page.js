"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="site-header">
        <a href="#" className="logo">
          <img src="/logo1.png" alt="OmoGiwa.com" />
        </a>

        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">What I Do</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>


      {/* =========================
          HERO
      ========================== */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Omogbolahan <br />
            <span>Giwa.</span>
          </h1>

          <p className="hero-title">
            Multidisciplinary designer <span>|</span> Software Engineer{" "}
            <span>|</span> Human Anatomist <span>|</span> Sports enthusiast
          </p>

          <div className="hero-image-wrapper">
            <div className="hero-image-shape"></div>

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
              Do you tink this website is amazing? Wait till i do yours.
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
          <img src="/profile1.png" alt="Omogbolahan Giwa" />
        </div>

        <div className="about-content">

          <p className="section-label purple">04 / ABOUT</p>

          <h2>
            More than one
            <br />
            <span>definition.</span>
          </h2>

          <p>
            Hello, I&apos;m Omogbolahan Giwa, a multidisciplinary designer and
            software engineer.
          </p>

          <p>
            I enjoy working at the intersection of creativity, technology and
            problem solving. Rather than limiting myself to a single discipline,
            I explore different fields and bring what I learn from each into
            the things I create. I like to call myself master of many trades
          </p>

          <p>
            My goal is simple: to make ideas tangible, useful and visually
            distinctive.
          </p>

          <a href="/about" className="button button-dark">
            Read my full story →
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


        <div className="blog-grid">

          <article className="blog-card">
            <div className="blog-image">
              <img src="/project-1.jpg" alt="" />
            </div>

            <p>DESIGN · 5 MIN READ</p>
            <h3>Why good design is more than making things look good.</h3>
            <a href="#">Read article →</a>
          </article>


          <article className="blog-card">
            <div className="blog-image">
              <img src="/project-2.jpg" alt="" />
            </div>

            <p>TECHNOLOGY · 7 MIN READ</p>
            <h3>What I am learning while becoming a software engineer.</h3>
            <a href="#">Read article →</a>
          </article>


          <article className="blog-card">
            <div className="blog-image">
              <img src="/project-3.jpg" alt="" />
            </div>

            <p>CREATIVITY · 4 MIN READ</p>
            <h3>Building things across different disciplines.</h3>
            <a href="#">Read article →</a>
          </article>

        </div>

      </section>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="newsletter-section">

        <div className="newsletter-inner">

          <p className="section-label">07 / NEWSLETTER</p>

          <h2>
            Occasionally,
            <br />
            <span>send me something worth reading.</span>
          </h2>

          <p>
            Join the newsletter to get updated abou new projects,
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
          Have an idea?
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


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="site-footer">

        <div>
          <img src="/logo1.png" alt="OmoGiwa.com" />
          <p>Design × Development × Ideas</p>
        </div>

        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="/about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>


      </footer>

    </main>
  );
}