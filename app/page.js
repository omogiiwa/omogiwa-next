"use client";

import { useEffect, useState } from "react";
import DeskHero from "../components/DeskHero";
import GiwaAIWidget from "../components/GiwaAIWidget";
import { supabase } from "../lib/supabase";
const whatIDoServices = [
  {
    key: "brand",
    number: "01",
    title: "Brand & Visual Design",
    intro: "Build a distinctive visual presence that makes your business recognizable, credible and memorable.",
    items: [
      { title: "Brand Identity", description: "Create a consistent identity that helps people recognize and trust your brand.", href: "/portfolio/brand-design", link: "See examples →" },
      { title: "Art Direction", description: "Give your brand a clear visual direction across campaigns, platforms and experiences.", href: "/portfolio/brand-design", link: "See examples →" },
      { title: "Graphic Design", description: "Communicate ideas clearly through visuals designed to capture attention and drive engagement.", href: "/portfolio/brand-design", link: "See examples →" },
      { title: "Illustration", description: "Add distinctive visual storytelling that helps your brand stand apart.", href: "/portfolio/brand-design" },
      { title: "Visual Systems", description: "Create reusable visual rules that keep your brand consistent wherever it appears.", href: "/portfolio/brand-design", link: "See examples →" },
      { title: "Campaign & Marketing Design", description: "Turn campaigns into attention-grabbing visuals that support your marketing goals.", href: "/portfolio/brand-design", link: "See examples →" },
      { title: "Presentation Design", description: "Turn information into polished presentations that communicate ideas and opportunities effectively.", href: "/portfolio/brand-design" },
      { title: "Social Media Design", description: "Create scroll-stopping visuals that make your online presence more consistent and recognizable.", href: "/portfolio/brand-design", link: "See examples →" }
    ]
  },
  {
    key: "web",
    number: "02",
    title: "Web & Digital Design",
    intro: "Design digital experiences that look great, feel intuitive and help businesses turn attention into action.",
    items: [
      { title: "Web Design", description: "Create websites that communicate your value clearly and make a strong first impression.", href: "/portfolio/web", link: "See examples →" },
      { title: "UI/UX Design", description: "Make digital products easier and more enjoyable for people to understand and use.", href: "/portfolio/web#ui", link: "See examples →" },
      { title: "Interaction Design", description: "Add purposeful interactions that make digital experiences feel engaging and intuitive.", href: "/portfolio/web" },
      { title: "Design Systems", description: "Build scalable visual systems that keep digital products consistent as they grow.", href: "/portfolio" },
      { title: "Creative Development", description: "Turn creative concepts into functional digital experiences that actually work.", href: "/portfolio" },
      { title: "Interactive Experiences", description: "Create memorable digital experiences that encourage people to explore and engage.", href: "/portfolio" },
      { title: "Landing Pages", description: "Design focused pages that communicate an offer quickly and guide visitors toward action.", href: "/portfolio/web#landing" },
      { title: "Digital Products & Tools", description: "Design useful digital tools that solve problems and create practical value for users.", href: "/portfolio", link: "See examples →" }
    ]
  },
  {
    key: "strategy",
    number: "03",
    title: "Digital Strategy",
    intro: "Your brand looking good is not enough, you have to get it to the right audience and make it easier for them to find you",
    items: [
      { title: "Digital Presence Strategy", description: "Build a clearer digital presence so your business knows what to communicate and where.", href: "/portfolio/digital", link: "See examples →" },
      { title: "Brand & Digital Positioning", description: "Clarify how your brand should be perceived and differentiated in the digital space.", href: "/portfolio/digital" },
      { title: "Content Strategy", description: "Create a clearer content direction that keeps your audience interested and your communication purposeful.", href: "#work" },
      { title: "SEO", description: "Improve how your digital presence is discovered by people actively searching for what you offer.", href: "/portfolio/digital" },
      { title: "User Experience Strategy", description: "Identify how people interact with your digital experience and remove unnecessary friction.", href: "/portfolio" },
      { title: "Digital Product Strategy", description: "Connect business goals and user needs before investing time into building a digital product.", href: "/portfolio" },
      { title: "Creative Direction", description: "Keep different creative outputs aligned around one clear idea, message and visual direction.", href: "/portfolio" },
      { title: "Audience & Communication Strategy", description: "Understand who you are speaking to and shape your message around what matters to them." }
    ]
  }
];


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedServices, setSelectedServices] = useState(["brand"]);
  const [expandedServiceItems, setExpandedServiceItems] = useState([]);
  const [introVisible, setIntroVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeAboutLens, setActiveAboutLens] = useState("anatomy");
  const projects = [

  {
    title: "Logo collection",
    image: "/some-logos.png",
    description:
      "Some logos and icons I have made",
      category: "Graphic Design",
    
  },
  {
    title: "Busiess card for Mings",
    image: "/mings-show.png",
    description:
      "Clean business card for Mings",
    category: "Graphic Design",
    
  },
    {
    title: "Letterhead Collection for Giwa",
    image: "/stationery mock-up .png",
    description:
      "Letterhead, business card and envelope cover for OmoGiwa.",
    category: "Graphics Design",
    
    href: "portfolio/brand-design",
  },
];
const [email, setEmail] = useState("");
const [newsletterStatus, setNewsletterStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim()) return;

  setIsSubmitting(true);
  setNewsletterStatus("");

  const { error } = await supabase
    .from("subscribers")
    .insert([{ email: email.trim().toLowerCase() }]);

  if (error) {
    if (error.code === "23505") {

    setNewsletterStatus("You're already subscribed.");

  } else {

    setNewsletterStatus("Something went wrong. Please try again.");

 }
  } else {
    setNewsletterStatus("You're in. Thanks for subscribing!");
    setEmail("");
  }

  setIsSubmitting(false);
};
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

useEffect(() => {
  const section = document.querySelector(".about-hybrid");
  if (!section) return;
  const elements = section.querySelectorAll(".about-reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -5% 0px" });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}, []);
const [activeArticle, setActiveArticle] = useState(0);
const [homepageArticles, setHomepageArticles] = useState(null);
 const journalArticles = [
  { number:"01", category:"ANATOMY AND DESIGN", readTime:"8 MIN READ", title:"What is the correlation between Anatomy and Design", description:"What does a degree in Human Anatomy have to do with design? More than you might think. I explore how understanding the human body shapes the way I think about form, function, creativity, and the things we create for people.", href:"/blogs/relationship-between-anatomy-and-design", image:"/anatomy-cover.png", imageAlt:"Exploring the relationship between human anatomy and design." },
  { number:"02", category:"PERSONAL NOTES", readTime:"5 MIN READ", title:"From Ododo Arts and Design to Giwa", description:"The story behind the transition from Ododo Arts and Design to Giwa, and how my work grew beyond graphic design.", href:"/journal/from-ododo-to-giwa", image:"/blog-software-engineering.png", imageAlt:"Software engineering, code, and digital development." },
  { number:"03", category:"CREATIVITY", readTime:"4 MIN READ", title:"Building things across different disciplines.", description:"Why I don't think creativity needs to stay inside one discipline, and how different interests can influence each other.", href:"/blogs/building-across-disciplines", image:"/blog-creativity.png", imageAlt:"Creative ideas and work across different disciplines." },
  { number:"04", category:"EXPERIMENTS", readTime:"6 MIN READ", title:"Making ideas tangible.", description:"An ongoing collection of experiments, strange ideas and things I'm building just to see what happens.", href:"/blogs/making-ideas-tangible", image:"/blog-experiments.png", imageAlt:"Experiments and ideas brought to life through design and technology." },
];
useEffect(() => {
  let cancelled = false;
  async function loadPublishedArticles() {
    const { data, error } = await supabase.from("content").select("title,slug,excerpt,body,featured_image_path").eq("content_type", "blog").eq("status", "published");
    if (cancelled || error || !data?.length) return;
    const mixed = [...journalArticles];
    data.forEach((item, i) => {
      const meta = item.body?.metadata || {};
      const article = { number:String(i+5).padStart(2,"0"), category:meta.category||"ARTICLE", readTime:"NEW ARTICLE", title:item.title, description:item.excerpt||"", href:"/articles/"+item.slug, image:item.featured_image_path||"/blog-creativity.png", imageAlt:meta.alt||item.title };
      mixed.splice(Math.floor(Math.random()*(mixed.length+1)),0,article);
    });
    setHomepageArticles(mixed);
  }
  loadPublishedArticles();
  return () => { cancelled = true; };
}, []);
const displayArticles = homepageArticles || journalArticles;



  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}
    


      

{/* =========================
THE DESK HERO
========================== */}

<section className="desk-hero">
  <div className="desk-hero-intro">
    <span>WELCOME TO MY DESK</span>

    <p>
      A little look at the things I design,
      build and experiment with. Click on any to see more details
    </p>
  </div>

  <DeskHero />
</section>

      {/* =========================
          INTRO / STATEMENT
      ========================== */}
      <section className={`intro-section ${introVisible ? "intro-visible" : ""}`}>

        

        <h2>
          I don't believe creativity belongs in just one box.
        </h2>

        <p className="large-text">
          I work across design, technology, branding and visual communication.
          Putting all these together gives your business a boost
        </p>

      </section>


      {/* =========================
          SELECTED WORK
      ========================== */}
  <section className="work-section" id="work">
  <div className="section-heading">
    <div>
      
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
  <a href="/portfolio" className="text-link">
    View all projects →
  </a>
</section>


      {/* =========================
          WHAT I DO
      ========================== */}
      <section className="services-section services-mix-section" id="services">
        <div className="services-intro">
          
          <h2>
            Different disciplines.
            <br />
            <span>One creative mind.</span>
          </h2>
        </div>

        <div className="mix-workspace">
          <div className="mix-visual" aria-hidden="true">
            <div className="mix-visual-ring mix-visual-ring-a" />
            <div className="mix-visual-ring mix-visual-ring-b" />
            <div className="mix-visual-ring mix-visual-ring-c" />
            <div className="mix-visual-dash mix-visual-dash-a" />
            <div className="mix-visual-dash mix-visual-dash-b" />
            <div className="mix-visual-particle mix-visual-particle-a" />
            <div className="mix-visual-particle mix-visual-particle-b" />
            <div className="mix-visual-particle mix-visual-particle-c" />
            <div className={`mix-visual-core mix-core-count-${selectedServices.length}`}>
              <span>OMOGIWA</span>
              <strong key={selectedServices.join("-")}>{selectedServices.length === 3 ? "ALL THREE" : selectedServices.length === 2 ? "IN SYNC" : selectedServices.length === 1 ? whatIDoServices.find((service) => service.key === selectedServices[0])?.number : " "}</strong>
            </div>
            {whatIDoServices.map((service) => (
              <div key={service.key} className={`mix-visual-node mix-visual-node-${service.key} ${selectedServices.includes(service.key) ? "is-active" : ""}`}>
                {service.number}
              </div>
            ))}
          </div>

          <div className="mix-content">
            <div className="mix-service-switches" aria-label="Choose services">
              {whatIDoServices.map((service) => {
                const selected = selectedServices.includes(service.key);
                return (
                  <button
                    type="button"
                    key={service.key}
                    className={`mix-service-switch mix-switch-${service.key} ${selected ? "is-active" : ""}`}
                    aria-pressed={selected}
                    onClick={() => setSelectedServices((current) => selected ? current.filter((key) => key !== service.key) : [...current, service.key])}
                  >
                    <span className="mix-switch-mark">{selected ? "−" : "+"}</span>
                    <span className="mix-switch-number">{service.number}</span>
                    <span className="mix-switch-name">{service.title}</span>
                    <span className="mix-switch-indicator"><span /></span>
                  </button>
                );
              })}
            </div>

            <div className="mix-progress" aria-live="polite">
              <span>{String(selectedServices.length).padStart(2, "0")} / 03</span>
              <div className="mix-progress-track"><span style={{ width: `${selectedServices.length / 3 * 100}%` }} /></div>
            </div>

            <div className="mix-details">
              {whatIDoServices.filter((service) => selectedServices.includes(service.key)).map((service) => (
                <article key={service.key} className={`mix-detail-card mix-card-${service.key}`}>
                  <div className="mix-detail-topline">
                    <span>{service.number} /</span>
                    <span className="mix-detail-line" />
                  </div>
                  <h3>{service.title}</h3>
                  <p className="mix-detail-intro">{service.intro}</p>
                  <div className="mix-accordion">
                    {service.items.map((item, index) => {
                      const itemKey = `${service.key}-${index}`;
                      const expanded = expandedServiceItems.includes(itemKey);
                      return (
                        <div key={item.title} className={`mix-accordion-item ${expanded ? "is-open" : ""}`}>
                          <button
                            type="button"
                            aria-expanded={expanded}
                            onClick={() => setExpandedServiceItems((current) => expanded ? current.filter((key) => key !== itemKey) : [...current, itemKey])}
                          >
                            <span>{item.title}</span>
                            <span className="mix-accordion-icon">{expanded ? "−" : "+"}</span>
                          </button>
                          <div className="mix-accordion-panel">
                            <div>
                              <p>{item.description}</p>
                              {item.link && <a href={item.href}>{item.link}</a>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
              {selectedServices.length === 0 && (
                <div className="mix-empty-state">
                  <div className="mix-empty-orbit mix-empty-orbit-a" />
                  <div className="mix-empty-orbit mix-empty-orbit-b" />
                  <span>+</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section className="about-section about-hybrid" id="about">
        <div className="about-hybrid-bg" aria-hidden="true">
          <img src="/og-mark.svg" alt="" className="about-hybrid-logo about-hybrid-logo-a" />
          <img src="/og-mark.svg" alt="" className="about-hybrid-logo about-hybrid-logo-b" />
          <span className="about-hybrid-orbit about-hybrid-orbit-a" />
          <span className="about-hybrid-orbit about-hybrid-orbit-b" />
        </div>

        <div className="about-hybrid-inner">
          <div className="about-hybrid-top">
            <p className="about-hybrid-eyebrow">A little about how I think</p>
            <span className="about-hybrid-coordinate">DESIGN × TECHNOLOGY × PEOPLE</span>
          </div>

          <div className="about-hybrid-intro about-reveal">
            <h2>More than one<br /><em>definition.</em></h2>
            <p className="about-hybrid-deck">I don't believe creativity belongs in just one box. The interesting things happen when different ways of thinking meet.</p>
          </div>

          <div className="about-hybrid-story">
            <div className="about-hybrid-story-rail" aria-hidden="true">
              <span className="about-hybrid-rail-dot" />
              <span className="about-hybrid-rail-line" />
              <span className="about-hybrid-rail-label">THE WAY I SEE IT</span>
            </div>
            <div className="about-hybrid-paragraphs">
              <p className="about-reveal"><span className="about-hybrid-drop">01</span> You can do a task and still miss what the work is supposed to achieve. I care about the thinking behind the execution: what needs to change, who it is for, and how we will know it works.</p>
              <p className="about-reveal"><span className="about-hybrid-drop">02</span> I'm a multidisciplinary designer, software engineer, and human anatomist. I don't see branding, websites, graphics, and digital experiences as isolated pieces. I look at the whole picture: how it fits, how it works, and how people experience it.</p>
              <p className="about-reveal"><span className="about-hybrid-drop">03</span> I'm naturally curious, attentive to detail, adaptive, and comfortable learning what a problem requires. I'll understand your vision, challenge weak ideas when needed, and help turn the strong ones into something genuinely remarkable.</p>
              <p className="about-reveal"><span className="about-hybrid-drop">04</span> Knowledge travels. An understanding of SEO can influence how a designer structures a campaign; design can make a strategy clearer; technology can turn a good idea into something people can actually use.</p>
            </div>
          </div>

          <div className="about-hybrid-connection">
            <div className="about-hybrid-connection-copy about-reveal">
              <p className="about-hybrid-eyebrow">Different lenses. One connected mind.</p>
              <h3>Click a node.<br /><em>See the connection.</em></h3>
              <p>My background gives me more than one way into a problem. Each discipline brings a different strength to the same creative process.</p>
            </div>

            <div className="about-hybrid-node-map">
              <svg viewBox="0 0 520 400" className="about-hybrid-lines" aria-hidden="true">
                <defs><linearGradient id="home-about-node-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#411f96" /><stop offset="100%" stopColor="#ac5fe6" /></linearGradient></defs>
                <path d="M260 78 C160 110 95 155 100 230 S180 310 260 320" />
                <path d="M260 78 C360 110 425 155 420 230 S340 310 260 320" />
                <path d="M100 230 C190 195 330 195 420 230" />
              </svg>
              <button type="button" className={`about-hybrid-node about-hybrid-node-anatomy ${activeAboutLens === "anatomy" ? "is-active" : ""}`} onClick={() => setActiveAboutLens("anatomy")} aria-pressed={activeAboutLens === "anatomy"}>
                <span>01</span><b>◎</b><strong>Anatomy</strong><small>Observe</small>
              </button>
              <button type="button" className={`about-hybrid-node about-hybrid-node-design ${activeAboutLens === "design" ? "is-active" : ""}`} onClick={() => setActiveAboutLens("design")} aria-pressed={activeAboutLens === "design"}>
                <span>02</span><b>✳</b><strong>Design</strong><small>Communicate</small>
              </button>
              <button type="button" className={`about-hybrid-node about-hybrid-node-tech ${activeAboutLens === "technology" ? "is-active" : ""}`} onClick={() => setActiveAboutLens("technology")} aria-pressed={activeAboutLens === "technology"}>
                <span>03</span><b>⌘</b><strong>Technology</strong><small>Build</small>
              </button>
              <div className="about-hybrid-node-core"><img src="/og-mark.svg" alt="" /><span>ONE CONNECTED PRACTICE</span></div>
            </div>
            <div className="about-hybrid-node-detail about-reveal" aria-live="polite" key={activeAboutLens}>
              {activeAboutLens === "anatomy" && <><span>01 / HUMAN ANATOMY</span><h4>Understand the system.</h4><p>Studying the human body trained me to notice structure, relationships, and how individual parts affect the whole.</p></>}
              {activeAboutLens === "design" && <><span>02 / DESIGN</span><h4>Make meaning visible.</h4><p>Visual communication turns ideas into identities and experiences people can recognise, understand, and remember.</p></>}
              {activeAboutLens === "technology" && <><span>03 / TECHNOLOGY</span><h4>Make the idea work.</h4><p>Software engineering helps me think beyond appearance: usability, responsiveness, structure, performance, and real-world usefulness.</p></>}
            </div>
          </div>

          <div className="about-hybrid-end about-reveal">
            <div><p className="about-hybrid-eyebrow">That is how I think.</p><h3>Different perspectives.<br /><em>Better possibilities.</em></h3></div>
            <div><p>I bring the pieces together to create thoughtful visual identities, digital experiences, and practical creative solutions.</p><a href="/about" className="button button-dark">Read more about me <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>


      {/* =========================
          PROCESS
      ========================== */}
      <section className="process-section">

        <div className="process-heading">

          

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
                Identify the idea, problem, audience and desired outcome.
              </p>
            </div>
          </div>


          <div className="process-item">
            <span>02</span>
            <div>
              <h3>Explore</h3>
              <p>
                Research, experiment and explore possible creative directions to solve this problem.
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
            

            <h2>
              Thoughts,
              <br />
              <span>ideas &amp; experiments.</span>
            </h2>
          </div>

          <p>
            I write a lot. I also don't limit myself to one niche, I write about anything.
          </p>

        </div>


        <div className="journal-feature">

  <div className="journal-feature-main">
    <div className="journal-feature-visual">
  <a
    href={displayArticles[activeArticle].href}
    className="journal-feature-image-link"
    aria-label={`Read ${displayArticles[activeArticle].title}`}
  >
    <img
      src={displayArticles[activeArticle].image}
      alt={displayArticles[activeArticle].imageAlt}
      className="journal-feature-image"
      loading="lazy"
    />
  </a>
  <span className="journal-feature-number">
    {displayArticles[activeArticle].number}
  </span>
  <span className="journal-feature-category">
    {displayArticles[activeArticle].category}
  </span>
</div>

    <div className="journal-feature-content">
  <p>
    {displayArticles[activeArticle].category} ·{" "}
    {displayArticles[activeArticle].readTime}
  </p>
  <h3>
    <a href={displayArticles[activeArticle].href}>
      {displayArticles[activeArticle].title}
    </a>
  </h3>
  <span>
    {displayArticles[activeArticle].description}
  </span>
  <a
    href={displayArticles[activeArticle].href}
    className="journal-feature-read-link"
  >
    Read article →
  </a>
</div>
  </div>

  <div className="journal-feature-list">
    {displayArticles.map((article, index) => (
      <a
        key={article.number}
        href={article.href}
        className={`journal-feature-item ${
          index === activeArticle ? "active" : ""
        }`}
        onMouseEnter={() => setActiveArticle(index)}
        onFocus={() => setActiveArticle(index)}
        aria-label={`Read article: ${article.title}`}
      >
        <span>{article.number}</span>

        <div>
          <small>{article.category}</small>
          <strong>{article.title}</strong>
        </div>

        <span className="journal-feature-arrow" aria-hidden="true">↗</span>
      </a>
    ))}
  </div>

</div>

         
      </section>


      {/* =========================
          NEWSLETTER
      ========================== */}
      <section className="newsletter-section">

        <div className="newsletter-inner">

          

          <h2>
            Be the first to know.
            <br />
            <span>Get quick updates</span>
          </h2>

          <p>
            Join the newsletter to get updates about new projects,
            experiments and useful things I discover.
          </p>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>

            <input
  type="email"
  placeholder="Your email address"
  aria-label="Your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

            <button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Subscribing..." : "Subscribe →"}
</button>

          </form>
{newsletterStatus && (
  <p className="newsletter-status">{newsletterStatus}</p>
)}
          <small>
            No spam. Just the good stuff.
          </small>

        </div>

      </section>


      {/* =========================
          CONTACT CTA
      ========================== */}
      <section className="contact-section" id="contact">

        

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
      <GiwaAIWidget />
</main>
);
}
     