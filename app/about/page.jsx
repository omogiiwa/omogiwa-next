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
        url: "https://omogiwa.com/logo.svg",
        width: 400,
        height: 400,
        alt: "Omogbolahan Giwa logo",
      },
    ],
  },
};
export default function AboutPage() {
  return (
  <main className="omg-about-page">
    {/* HERO */}
    <section className="omg-about-hero">
      <div className="omg-about-hero-content">
        <div className="omg-about-hero-text">
          <p className="omg-about-eyebrow">About</p>
          <h1 className="omg-about-title">
            Omogbolahan Giwa
          </h1>
          <p className="omg-about-intro">
            Multidisciplinary designer and software engineer
            helping businesses turn ideas into thoughtful
            visual identities, digital experiences, and
            practical creative solutions.
          </p>
        </div>
        <div className="omg-about-profile-wrap">
          <img
            src="/profile1.png"
            alt="Omogbolahan Giwa"
            className="omg-about-profile-image"
          />
        </div>
      </div>
    </section>
    {/* PHILOSOPHY */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          Philosophy
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            Good design is not just about making things look
            good. It is about making the right things clear,
            memorable, and useful.
          </p>
          <p>
            I believe creativity works best when it has a
            purpose. A beautiful identity means little if
            people cannot recognise the brand behind it.
            A website is not doing its job if it looks
            impressive but leaves visitors wondering what to
            do next.
          </p>
          <p>
            That is why I approach design as more than
            decoration. I consider the message, the audience,
            the experience, and the bigger picture before
            worrying about which shade of purple looks best.
            Although, admittedly, the shade of purple still
            matters.
          </p>
          <p>
            My goal is to create work that looks considered,
            communicates clearly, and serves a real purpose
            for the people and businesses behind it.
          </p>
        </div>
      </details>
    </section>
    {/* BACKGROUND AND EXPERTISE */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          Background & Expertise
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            My work sits at the intersection of design,
            technology, and problem-solving.
          </p>
          <p>
            I hold a bachelor's degree in Human Anatomy from
            Gregory University Uturu, and I am a self-taught
            software engineer. My path into design grew from
            a natural interest in visual communication into
            consistent practice in branding, graphic design,
            illustration, and digital design.
          </p>
          <p>
            I also design and build websites, which allows
            me to think beyond how a digital product looks
            and consider how it actually works. Layout,
            usability, responsiveness, performance, and the
            experience a visitor has all matter.
          </p>
          <p>
            I do not see these disciplines as separate
            boxes. They give me different ways to approach
            a problem, and that range helps me connect the
            visual side of a project with its practical
            requirements.
          </p>
          <p>
            I am also exploring AI development and the
            possibilities it creates for building useful
            digital products. There is plenty to learn,
            but that has never been a particularly good
            reason to avoid learning something.
          </p>
        </div>
      </details>
    </section>
    {/* WHAT I CAN DO */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          What Can I Do for You?
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            I help businesses communicate better through
            thoughtful branding, digital experiences, and
            visual design.
          </p>
          <p>
            Whether you are launching a new business,
            improving an existing brand, or building a
            digital presence, I can help you bring the
            different pieces together.
          </p>
          <div className="omg-about-service-list">
            <article className="omg-about-service">
              <h2>Brand & Visual Design</h2>
              <p>
                I create visual identities that give
                businesses a recognisable and consistent
                presence. From logos and typography to
                colour systems and supporting graphics,
                every element should feel like it belongs
                to the same brand.
              </p>
            </article>
            <article className="omg-about-service">
              <h2>Web & Digital Design</h2>
              <p>
                I design and develop websites that combine
                visual appeal with usability and purpose.
                The aim is to help visitors understand
                what you offer, navigate with ease, and
                take the next step.
              </p>
            </article>
            <article className="omg-about-service">
              <h2>Digital Strategy</h2>
              <p>
                I help connect your brand's visual
                communication and digital presence to
                your business goals. That means thinking
                about what you need to communicate,
                who needs to hear it, and how the
                experience should support your objectives.
              </p>
            </article>
          </div>
        </div>
      </details>
    </section>
    {/* HOW I WORK */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          How I Work
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            I do not believe in designing first and asking
            questions later. That is a very efficient way
            to create something nobody asked for.
          </p>
          <h2>01. Understand the problem</h2>
          <p>
            Before getting into visuals or development,
            I want to understand what you are trying to
            achieve, who you are trying to reach, and
            what the project actually needs. The brief
            matters because good execution cannot rescue
            a misunderstood problem.
          </p>
          <h2>02. Find the right direction</h2>
          <p>
            I translate the project's goals into a clear
            creative direction. This is where I consider
            the message, visual language, structure, and
            experience that make the most sense for your
            business rather than simply following whatever
            happens to be trending.
          </p>
          <h2>03. Design and build with intention</h2>
          <p>
            I develop the solution with attention to
            detail, consistency, and functionality.
            Every choice should contribute to the bigger
            picture, whether I am working on a visual
            identity, a website, or a wider digital
            experience.
          </p>
          <h2>04. Refine the details</h2>
          <p>
            I review the work, address issues, and refine
            the details that affect the final result.
            Alignment, spacing, responsiveness, clarity,
            and those seemingly tiny decisions all add up.
          </p>
          <h2>05. Deliver work with a purpose</h2>
          <p>
            The final result should do more than look
            finished. It should give you something useful:
            a clearer brand, a more effective digital
            presence, or a practical solution that helps
            you move forward.
          </p>
        </div>
      </details>
    </section>
    {/* WHAT MAKES ME DIFFERENT */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          What Makes My Approach Different?
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            I bring design and technology into the same
            conversation instead of treating them as
            strangers who happen to work in the same office.
          </p>
          <p>
            My background across visual design and software
            engineering allows me to consider both how
            something should look and how it should work.
            I can think about the identity, the interface,
            and the experience as connected parts of a
            larger system.
          </p>
          <p>
            I also care about the reasoning behind the
            work. I want to understand why a direction
            makes sense, what it communicates, and how
            it serves the business. A design decision
            should have a reason beyond "it looks cool,"
            even when it does look very cool.
          </p>
          <p>
            I value clarity over unnecessary complexity,
            consistency over disconnected visuals, and
            thoughtful execution over doing things just
            to make them look busy.
          </p>
          <p>
            Most importantly, I approach each project
            as its own problem to solve. Your business
            does not need a copy of somebody else's
            identity or website. It needs a solution
            that makes sense for what you are building.
          </p>
        </div>
      </details>
    </section>
    {/* HOW I CAN HELP YOUR BRAND */}
    <section className="omg-about-section">
      <details className="omg-about-details">
        <summary className="omg-about-summary">
          How I Can Help Your Brand
          <span className="omg-about-summary-icon">+</span>
        </summary>
        <div className="omg-about-content">
          <p className="omg-about-lead">
            Your brand does not need to do everything.
            It needs to communicate the right things to
            the right people.
          </p>
          <p>
            If you are starting a business, I can help
            establish a visual identity and digital
            presence that give people a clear first
            impression of what you do.
          </p>
          <p>
            If your business is already running, I can
            help you improve how it presents itself,
            communicate its value more clearly, and
            create a more consistent experience across
            its visual and digital touchpoints.
          </p>
          <p>
            And if you have an idea that is still
            difficult to explain, that is fine too.
            You do not have to arrive with every detail
            figured out. Part of the process is working
            through the idea and finding the right way
            to bring it to life.
          </p>
          <p>
            The objective is simple: create thoughtful,
            practical work that helps your business
            present itself with greater clarity and
            confidence.
          </p>
        </div>
      </details>
    </section>
  </main>
);
}