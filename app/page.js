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
    colour: "purple",
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
    colour: "coral",
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
    colour: "lavender",
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
  const [selectedServices, setSelectedServices] = useState(["brand", "web"]);
  const [expandedServiceItems, setExpandedServiceItems] = useState([]);
  const [introVisible, setIntroVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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
const [activeArticle, setActiveArticle] = useState(0);
const [homepageArticles, setHomepageArticles] = useState(null);
 const journalArticles = [
  { number:"01", category:"ANATOMY AND DESIGN", readTime:"8 MIN READ", title:"What is the correlation between Anatomy and Design", description:"What does a degree in Human Anatomy have to do with design? More than you might think. I explore how understanding the human body shapes the way I think about form, function, creativity, and the things we create for people.", href:"/blogs/relationship-between-anatomy-and-design", image:"/anatomy-cover.png", imageAlt:"Exploring the relationship between human anatomy and design." },
  { number:"02", category:"PERSONAL NOTES", readTime:"5 MIN READ", title:"From Ododo Arts and Design to Giwa", description:"The story behind the transition from Ododo Arts and Design to Giwa, and how my work grew beyond graphic design.", href:"/journal/from-ododo-to-giwa", image:"/blog-software-engineering.png", imageAlt:"Software engineering, code, and digital development." },
  { number:"03", category:"CREATIVITY", readTime:"4 MIN READ", title:"Building things across different disciplines.", description:"Why I don't think creativity needs to stay inside one disci
      <section className="services-section services-mix-section" id="services">
        <div className="services-intro">
          <p className="section-label">03 / WHAT I DO</p>
          <h2>
            Different disciplines.
            <br />
            <span>One creative mind.</span>
          </h2>
        </div>

        <div className="mix-explorer">
          <div className="mix-orbit-scene" aria-hidden="true">
            <div className="mix-orbit mix-orbit-one" />
            <div className="mix-orbit mix-orbit-two" />
            <div className="mix-orbit mix-orbit-three" />
            <div className="mix-particle mix-particle-one" />
            <div className="mix-particle mix-particle-two" />
            <div className="mix-particle mix-particle-three" />
            <div className="mix-core">
              <span>OMOGIWA</span>
              <strong>{selectedServices.length === 3 ? "ALL IN" : selectedServices.length === 2 ? "IN SYNC" : selectedServices.length === 1 ? "IN FOCUS" : "POSSIBILITY"}</strong>
            </div>
            {whatIDoServices.map((service, index) => (
              <div
                key={service.key}
                className={`mix-orbit-node mix-node-${service.key} ${selectedServices.includes(service.key) ? "is-selected" : ""}`}
              >
                <span>{service.number}</span>
              </div>
            ))}
          </div>

          <div className="mix-controls">
            <div className="mix-controls-heading">
              {whatIDoServices.map((service) => (
                <button
                  type="button"
                  key={service.key}
                  className={`mix-toggle mix-toggle-${service.key} ${selectedServices.includes(service.key) ? "is-selected" : ""}`}
                  aria-pressed={selectedServices.includes(service.key)}
                  onClick={() => setSelectedServices((current) => current.includes(service.key) ? current.filter((key) => key !== service.key) : [...current, service.key])}
                >
                  <span className="mix-toggle-symbol">{selectedServices.includes(service.key) ? "−" : "+"}</span>
                  <span className="mix-toggle-number">{service.number}</span>
                  <span className="mix-toggle-title">{service.title}</span>
                  <span className="mix-toggle-state">{selectedServices.includes(service.key) ? "Selected" : "Select"}</span>
                </button>
              ))}
            </div>

            <div className="mix-selected-count" aria-live="polite">
              <span>{String(selectedServices.length).padStart(2, "0")} / 03</span>
              <div className="mix-count-track"><span style={{ width: `${(selectedServices.length / 3) * 100}%` }} /></div>
            </div>

            <div className="mix-service-details">
              {whatIDoServices.filter((service) => selectedServices.includes(service.key)).map((service) => (
                <article className={`mix-detail mix-detail-${service.key}`} key={service.key}>
                  <div className="mix-detail-heading">
                    <span className="mix-detail-number">{service.number} /</span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.intro}</p>
                    </div>
                  </div>
                  <div className="mix-detail-items">
                    {service.items.map((item, index) => {
                      const itemKey = `${service.key}-${index}`;
                      const expanded = expandedServiceItems.includes(itemKey);
                      return (
                        <div className={`mix-detail-item ${expanded ? "is-expanded" : ""}`} key={item.title}>
                          <button
                            type="button"
                            aria-expanded={expanded}
                            onClick={() => setExpandedServiceItems((current) => current.includes(itemKey) ? current.filter((key) => key !== itemKey) : [...current, itemKey])}
                          >
                            <span>{item.title}</span>
                            <span className="mix-item-plus">{expanded ? "−" : "+"}</span>
                          </button>
                          <div className="mix-item-content">
                            <p>{item.description}</p>
                            {item.link && item.href && <a href={item.href}>{item.link}</a>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
              {selectedServices.length === 0 && (
                <div className="mix-empty-state" aria-hidden="true">
                  <span>+</span>
                  <div className="mix-empty-orbit" />
                  <div className="mix-empty-orbit mix-empty-orbit-two" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>/p>
        <a href="/portfolio/brand-design">See examples →</a>
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
      Design digital experiences that look great, feel intuitive and help businesses turn attention into action.
    </p>

    <div className="service-list">

      <div className="service-item">
        <h4>Web Design</h4>
        <p>
          Create websites that communicate your value clearly and make a strong first impression.
        </p>
        <a href="/portfolio/web">See examples →</a>
      </div>

      <div className="service-item">
        <h4>UI/UX Design</h4>
        <p>
          Make digital products easier and more enjoyable for people to understand and use.
        </p>
        <a href="/portfolio/web#ui">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Interaction Design</h4>
        <p>
          Add purposeful interactions that make digital experiences feel engaging and intuitive.
        </p>
        <a href="/portfolio/web"></a>
      </div>

      <div className="service-item">
        <h4>Design Systems</h4>
        <p>
          Build scalable visual systems that keep digital products consistent as they grow.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Creative Development</h4>
        <p>
          Turn creative concepts into functional digital experiences that actually work.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Interactive Experiences</h4>
        <p>
          Create memorable digital experiences that encourage people to explore and engage.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Landing Pages</h4>
        <p>
          Design focused pages that communicate an offer quickly and guide visitors toward action.
        </p>
        <a href="/portfolio/web#landing"></a>
      </div>

      <div className="service-item">
        <h4>Digital Products &amp; Tools</h4>
        <p>
          Design useful digital tools that solve problems and create practical value for users.
        </p>
        <a href="/portfolio">See examples →</a>
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
      Your brand looking good is not enough, you have to get it to the right audience and make it easier for them to find you
    </p>

    <div className="service-list">

      <div className="service-item">
        <h4>Digital Presence Strategy</h4>
        <p>
          Build a clearer digital presence so your business knows what to communicate and where.
        </p>
        <a href="/portfolio/digital">See examples →</a>
      </div>

      <div className="service-item">
        <h4>Brand &amp; Digital Positioning</h4>
        <p>
          Clarify how your brand should be perceived and differentiated in the digital space.
        </p>
        <a href="/portfolio/digital"></a>
      </div>

      <div className="service-item">
        <h4>Content Strategy</h4>
        <p>
          Create a clearer content direction that keeps your audience interested and your communication purposeful.
        </p>
        <a href="#work"></a>
      </div>

      <div className="service-item">
        <h4>SEO</h4>
        <p>
          Improve how your digital presence is discovered by people actively searching for what you offer.
        </p>
        <a href="/portfolio/digital"></a>
      </div>

      <div className="service-item">
        <h4>User Experience Strategy</h4>
        <p>
          Identify how people interact with your digital experience and remove unnecessary friction.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Digital Product Strategy</h4>
        <p>
          Connect business goals and user needs before investing time into building a digital product.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Creative Direction</h4>
        <p>
          Keep different creative outputs aligned around one clear idea, message and visual direction.
        </p>
        <a href="/portfolio"></a>
      </div>

      <div className="service-item">
        <h4>Audience &amp; Communication Strategy</h4>
        <p>
          Understand who you are speaking to and shape your message around what matters to them.
        </p>
      </div>

    </div>
  </article>

</div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section className="about-section" id="about">

        

        <div className="about-content">

          <p className="section-label purple">04 / ABOUT</p>

          <h2>
            More than one
            <br />
            <span>definition.</span>
          </h2>

          <p>
            You may not know this, but there is a clear difference between simply doing a task and actually thinking about what the work is supposed to achieve.
          </p>
          <p> This is where I stand </p>
          
          <p>
            I’m a multidisciplinary designer, software engineer, and human anatomist. I don’t look at design, branding, websites, graphics, and digital experiences as isolated pieces. I look at the whole picture: how it fits, how it works, how people experience it, and whether it actually delivers results. 
          
          </p>
        <p> I’m naturally curious, obsessive about details, highly adaptive, and comfortable learning whatever I need to solve a problem. I want to understand your vision, challenge weak ideas when necessary, and turn the good ones into something genuinely remarkable. </p>
          <p>
            Having experience across different fields — and being particularly obsessed with design — makes the impact of every decision I make more exciting. Knowledge from one discipline can completely change how I approach another.
          </p>
        <p> 
          Imagine an SEO expert who also understands graphic design. They may be two completely different fields, but that SEO knowledge can influence how they design a social media campaign, structure its content, or position it for greater reach and engagement.
          </p>
          <p>
            That is how I think.
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
            <p className="section-label purple">06 / JOURNAL</p>

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
      <GiwaAIWidget />
</main>
);
}
     