"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orbitTilt, setOrbitTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [introVisible, setIntroVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const projects = [
  {
    title: "Project One",
    image: "/IMG_0298.jpg",
    description:
      "A creative digital project combining design, technology and visual communication.",
    category: "Web Design / Development",
    readTime: "5 min read",
  },
  {
    title: "Project Two",
    image: "/IMG_0288.jpg",
    description:
      "A visual identity project focused on creating a distinctive and memorable brand.",
    category: "Brand Identity",
    readTime: "4 min read",
  },
  {
    title: "Project Three",
    image: "/IMG_0295.jpg",
    description:
      "A graphic design project exploring visual storytelling, composition and communication.",
    category: "Graphic Design",
    readTime: "3 min read",
  },
];
const changeProject = (direction) => {
  setActiveProject((current) => {
    return (
      (current + direction + projects.length) %
      projects.length
    );
  });
};
  useEffect(() => {
    const handleScroll = () => {
  const y = window.scrollY;

  setScrollY(y);

  const intro = document.querySelector(".intro-section");

  if (intro) {
    const rect = intro.getBoundingClientRect();
    setIntroVisible(rect.top < window.innerHeight * 0.8);
  }
};

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
  const work = document.querySelector(".work-section");

  if (!work) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setWorkVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.05,
    }
  );

  observer.observe(work);

  return () => {
    observer.disconnect();
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
      <section className={`intro-section ${introVisible ? "intro-visible" : ""}`}>

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
  <div className="work-carousel">
    <button
      type="button"
      className="carousel-arrow carousel-arrow-left"
      aria-label="Previous project"
      onClick={() => changeProject(-1)}
    >
      ←
    </button>
    <div className="carousel-stage">

  {projects.map((project, index) => {
    const previousIndex =
      (activeProject - 1 + projects.length) % projects.length;

    const nextIndex =
      (activeProject + 1) % projects.length;

    let position = "carousel-card-hidden";

    if (index === activeProject) {
      position = "carousel-card-active";
    } else if (index === previousIndex) {
      position = "carousel-card-prev";
    } else if (index === nextIndex) {
      position = "carousel-card-next";
    }

    return (
      <article
        key={project.title}
        className={`carousel-card ${position}`}
        onClick={() => setActiveProject(index)}
      >
        <div
          className="carousel-card-image"
          style={{
            backgroundImage: `url('${project.image}')`,
          }}
        />

        {index === activeProject && (
          <>
            <div className="carousel-card-title">
              {project.title}
            </div>

            <div className="carousel-card-overlay">
              <div className="carousel-card-details">

                <p className="carousel-card-description">
                  {project.description}
                </p>

                <div className="carousel-card-meta">
                  <span>{project.category}</span>
                  <span>{project.readTime}</span>
                </div>

              </div>
            </div>
          </>
        )}
      </article>
    );
  })}

</div>

    <button
      type="button"
      className="carousel-arrow carousel-arrow-right"
      aria-label="Next project"
      onClick={() => changeProject(1)}
    >
      →
    </button>
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


     <div className={`services-grid services-active-${activeService}`>

  <article
  className={`service-card ${
    activeService === 0 ? "service-card-active" : ""
  }`}
  onMouseEnter={() => setActiveService(0)}
  onClick={() => setActiveService(0)}
>
    <span className="service-number">01</span>

    <h3>Brand &amp; Visual Design</h3>

    <p className="service-card-intro">
      Build a distinctive visual presence that makes your business
      recognizable, credible and memorable.
    </p>

    <div className="service-list">

      <div className="service-item">
        <h4>Brand Identity</h4>
        <p>
          Create a consistent identity that helps people recognize and
          trust your brand.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Art Direction</h4>
        <p>
          Give your brand a clear visual direction across campaigns,
          platforms and experiences.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Graphic Design</h4>
        <p>
          Communicate ideas clearly through visuals designed to capture
          attention and drive engagement.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Illustration</h4>
        <p>
          Add distinctive visual storytelling that helps your brand stand
          apart.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Visual Systems</h4>
        <p>
          Create reusable visual rules that keep your brand consistent
          wherever it appears.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Campaign &amp; Marketing Design</h4>
        <p>
          Turn campaigns into attention-grabbing visuals that support
          your marketing goals.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Presentation Design</h4>
        <p>
          Turn information into polished presentations that communicate
          ideas and opportunities effectively.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Social Media Design</h4>
        <p>
          Create scroll-stopping visuals that make your online presence
          more consistent and recognizable.
        </p>
        <a href="#work">See examples →</a>
      </div>

    </div>
  </article>


  <article
  className={`service-card ${
    activeService === 1 ? "service-card-active" : ""
  }`}
  onMouseEnter={() => setActiveService(1)}
  onClick={() => setActiveService(1)}
>
    <span className="service-number">02</span>

    <h3>Web &amp; Digital Design</h3>

    <p className="service-card-intro">
      Design digital experiences that look great, feel intuitive and
      help businesses turn attention into action.
    </p>

    <div className="service-list">

      <div className="service-item">
        <h4>Web Design</h4>
        <p>
          Create websites that communicate your value clearly and make
          a strong first impression.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>UI/UX Design</h4>
        <p>
          Make digital products easier and more enjoyable for people
          to understand and use.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Interaction Design</h4>
        <p>
          Add purposeful interactions that make digital experiences
          feel engaging and intuitive.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Design Systems</h4>
        <p>
          Build scalable visual systems that keep digital products
          consistent as they grow.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Creative Development</h4>
        <p>
          Turn creative concepts into functional digital experiences
          that actually work.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Interactive Experiences</h4>
        <p>
          Create memorable digital experiences that encourage people
          to explore and engage.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Landing Pages</h4>
        <p>
          Design focused pages that communicate an offer quickly and
          guide visitors toward action.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Digital Products &amp; Tools</h4>
        <p>
          Design useful digital tools that solve problems and create
          practical value for users.
        </p>
        <a href="#work">See examples →</a>
      </div>

    </div>
  </article>


  <article
  className={`service-card ${
    activeService === 2 ? "service-card-active" : ""
  }`}
  onMouseEnter={() => setActiveService(2)}
  onClick={() => setActiveService(2)}
>
    <span className="service-number">03</span>

    <h3>Digital Strategy</h3>

    <p className="service-card-intro">
      Connect your brand, content and digital presence with a clearer
      strategy built around your goals and audience.
    </p>

    <div className="service-list">

      <div className="service-item">
        <h4>Digital Presence Strategy</h4>
        <p>
          Build a clearer digital presence so your business knows what
          to communicate and where.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Brand &amp; Digital Positioning</h4>
        <p>
          Clarify how your brand should be perceived and differentiated
          in the digital space.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Content Strategy</h4>
        <p>
          Create a clearer content direction that keeps your audience
          interested and your communication purposeful.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>SEO</h4>
        <p>
          Improve how your digital presence is discovered by people
          actively searching for what you offer.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>User Experience Strategy</h4>
        <p>
          Identify how people interact with your digital experience
          and remove unnecessary friction.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Digital Product Strategy</h4>
        <p>
          Connect business goals and user needs before investing time
          into building a digital product.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Creative Direction</h4>
        <p>
          Keep different creative outputs aligned around one clear
          idea, message and visual direction.
        </p>
        <a href="#work">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Audience &amp; Communication Strategy</h4>
        <p>
          Understand who you are speaking to and shape your message
          around what matters to them.
        </p>
        <a href="#work">See examples →</a>
      </div>

    </div>
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
     