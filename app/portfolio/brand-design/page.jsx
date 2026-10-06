import Link from "next/link";

export const metadata = {
  title: "OmoGiwa Brand Identity Case Study",
  description:
    "Explore the OmoGiwa brand identity system by Omogbolahan Giwa — a multidisciplinary brand identity project spanning visual identity, stationery, digital products, website design, social media, clothing, packaging, presentation systems, motion, photography and physical brand experiences.",
  keywords: [
    "OmoGiwa brand identity",
    "OmoGiwa branding",
    "Omogbolahan Giwa branding",
    "Omogbolahan Giwa brand identity",
    "OmoGiwa visual identity",
    "personal brand identity",
    "brand identity case study",
    "multidisciplinary designer",
    "brand design Nigeria",
    "Nigerian brand designer",
    "visual identity design",
    "personal branding",
    "creative direction",
    "OmoGiwa design system",
  ],
  authors: [
    {
      name: "Omogbolahan Giwa",
      url: "https://omogiwa.com",
    },
  ],
  creator: "Omogbolahan Giwa",
  publisher: "Omogbolahan Giwa",
  alternates: {
    canonical: "/portfolio/brand-design",
  },
  openGraph: {
    type: "article",
    url: "https://omogiwa.com/portfolio/brand-design",
    siteName: "Omogbolahan Giwa",
    locale: "en_NG",
    title: "OmoGiwa Brand Identity Case Study | Omogbolahan Giwa",
    description:
      "A complete look at the OmoGiwa brand identity system — from the core visual identity and stationery to digital products, clothing, websites, social media, motion and physical brand experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmoGiwa Brand Identity Case Study | Omogbolahan Giwa",
    description:
      "A complete look at the OmoGiwa brand identity system by multidisciplinary designer Omogbolahan Giwa.",
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

const brandSections = [
  {
    number: "01",
    id: "core-brand-identity",
    title: "Core Brand Identity",
    description:
      "The foundational visual language of OmoGiwa — the elements that define how the brand looks, feels and is immediately recognized.",
  },
  {
    number: "02",
    id: "personal-stationery",
    title: "Personal Stationery",
    description:
      "The physical communication system that extends the OmoGiwa identity into professional documents and personal correspondence.",
  },
  {
    number: "03",
    id: "clothing-physical-identity",
    title: "Clothing / Physical Identity",
    description:
      "Wearable expressions of the OmoGiwa identity designed to turn the brand into something that can exist in the physical world.",
  },
  {
    number: "04",
    id: "digital-product-ecosystem",
    title: "Digital Product Ecosystem",
    description:
      "Digital interfaces, tools and products designed to operate as extensions of the OmoGiwa brand.",
  },
  {
    number: "05",
    id: "omogiwa-website-system",
    title: "OmoGiwa Website System",
    description:
      "The website and digital experience that bring the wider identity system together into one interactive environment.",
  },
  {
    number: "06",
    id: "social-media-identity",
    title: "Social Media Identity",
    description:
      "A flexible visual system for maintaining a recognizable OmoGiwa presence across social platforms.",
  },
  {
    number: "07",
    id: "portfolio-project-identity",
    title: "Portfolio / Project Identity",
    description:
      "The visual language used to present creative work while keeping individual projects connected to the larger OmoGiwa ecosystem.",
  },
  {
    number: "08",
    id: "science-anatomy-identity",
    title: "Science / Anatomy Identity",
    description:
      "A visual exploration of anatomy and scientific thinking as part of the unusual combination of disciplines behind OmoGiwa.",
  },
  {
    number: "09",
    id: "data-visualization",
    title: "Data Visualization",
    description:
      "Ways information, numbers and complex ideas can be translated into clear and visually engaging OmoGiwa experiences.",
  },
  {
    number: "10",
    id: "packaging",
    title: "Packaging",
    description:
      "Packaging concepts that explore how the OmoGiwa identity could exist around physical products and objects.",
  },
  {
    number: "11",
    id: "environmental-physical-branding",
    title: "Environmental / Physical Branding",
    description:
      "Applications of the identity in physical spaces, environments, objects and real-world experiences.",
  },
  {
    number: "12",
    id: "presentation-system",
    title: "Presentation System",
    description:
      "A structured visual language for presenting ideas, projects, proposals and information with consistency.",
  },
  {
    number: "13",
    id: "motion-identity",
    title: "Motion Identity",
    description:
      "Movement, transitions and animation principles that give the OmoGiwa identity a sense of life and personality.",
  },
  {
    number: "14",
    id: "sound-identity",
    title: "Sound Identity",
    description:
      "An exploration of how sound and audio could become another recognizable layer of the OmoGiwa brand.",
  },
  {
    number: "15",
    id: "photography-personal-image",
    title: "Photography / Personal Image Direction",
    description:
      "The visual direction for portraits, personal photography and imagery used to represent OmoGiwa.",
  },
  {
    number: "16",
    id: "brand-merchandise",
    title: "Brand Merchandise",
    description:
      "Physical merchandise designed to turn the OmoGiwa identity into objects people can interact with, own and wear.",
  },
];

export default function BrandDesignCaseStudy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "OmoGiwa Brand Identity",
    headline: "OmoGiwa Brand Identity Case Study",
    description:
      "A multidisciplinary brand identity system created by Omogbolahan Giwa, spanning visual identity, digital experiences, physical applications, communication systems and creative direction.",
    url: "https://omogiwa.com/portfolio/brand-design",
    creator: {
      "@type": "Person",
      name: "Omogbolahan Giwa",
      url: "https://omogiwa.com",
    },
    creatorOccupation: "Multidisciplinary Designer & Software Engineer",
    genre: "Brand Identity Design",
    inLanguage: "en-NG",
    isPartOf: {
      "@type": "WebSite",
      name: "Omogbolahan Giwa",
      url: "https://omogiwa.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="brand-case-study">

        {/* ========================================
            CASE STUDY HERO
        ======================================== */}

        <section
          id="brand-case-study-hero"
          className="brand-case-study-hero"
        >
          <div className="brand-case-study-orbit brand-orbit-one" />
          <div className="brand-case-study-orbit brand-orbit-two" />
          <div className="brand-case-study-dot brand-dot-one" />
          <div className="brand-case-study-dot brand-dot-two" />

          <div className="brand-case-study-hero-content">
            <p className="section-label purple">
              CASE STUDY / 01
            </p>

            <p className="brand-case-study-eyebrow">
              OmoGiwa
            </p>

            <h1>
              A brand built
              <span> around curiosity.</span>
            </h1>

            <p className="brand-case-study-hero-description">
              OmoGiwa is a personal brand identity system built around
              design, technology, human anatomy, curiosity and the freedom
              to work across disciplines.
            </p>

            <div className="brand-case-study-meta">
              <span>Brand Identity</span>
              <span>Visual System</span>
              <span>Digital Experience</span>
            </div>
          </div>

          <div className="brand-case-study-hero-mark">
            <span>OG</span>
          </div>
        </section>


        {/* ========================================
            INTRODUCTION
        ======================================== */}

        <section
          id="brand-introduction"
          className="brand-introduction"
        >
          <div className="brand-introduction-label">
            <span>01</span>
            <span>THE IDEA</span>
          </div>

          <div className="brand-introduction-content">
            <h2>
              OmoGiwa isn't just a logo.
              <span> It's a system.</span>
            </h2>

            <p>
              The OmoGiwa identity was developed as a flexible visual
              ecosystem rather than a collection of disconnected graphics.
              Every element is designed to work together across digital
              products, physical objects, communication, personal identity
              and creative work.
            </p>

            <p>
              The goal is simple: create an identity that feels
              unmistakably OmoGiwa while remaining flexible enough to
              evolve with the person behind it.
            </p>
          </div>
        </section>


        {/* ========================================
            HERO BRAND IMAGE
        ======================================== */}

        <section
          id="brand-hero-visual"
          className="brand-hero-visual"
        >
          <div className="brand-hero-visual-frame">
            <img
              src="/giwaoverview.png"
              alt="OmoGiwa brand identity overview"
            />
          </div>
        </section>


        {/* ========================================
            01 — CORE BRAND IDENTITY
        ======================================== */}

        <section
          id="core-brand-identity"
          className="brand-system-section"
        >
          <div className="brand-section-number">01</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              FOUNDATION
            </p>

            <h2>Core Brand Identity</h2>

            <p>
              The visual foundation of OmoGiwa. Logo, colour, typography,
              graphic language and the rules that hold the entire system
              together.
            </p>
          </div>

          <div className="brand-image-grid brand-image-grid-large">

            <figure
              id="omogiwa-logo-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa logo and visual identity system"
              />
              <figcaption>Logo System</figcaption>
            </figure>

            <figure
              id="omogiwa-colour-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa brand colour palette"
              />
              <figcaption>Colour System</figcaption>
            </figure>

            <figure
              id="omogiwa-typography-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa typography and type system"
              />
              <figcaption>Typography</figcaption>
            </figure>

            <figure
              id="omogiwa-graphic-language"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa graphic language and visual elements"
              />
              <figcaption>Graphic Language</figcaption>
            </figure>

          </div>
        </section>


        {/* ========================================
            02 — PERSONAL STATIONERY
        ======================================== */}

        <section
          id="personal-stationery"
          className="brand-system-section brand-system-section-soft"
        >
          <div className="brand-section-number">02</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              COMMUNICATION
            </p>

            <h2>Personal Stationery</h2>

            <p>
              Extending the identity into professional and personal
              communication materials.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-business-card"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa business card design"
              />
              <figcaption>Business Card</figcaption>
            </figure>

            <figure
              id="omogiwa-letterhead"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa letterhead design"
              />
              <figcaption>Letterhead</figcaption>
            </figure>

            <figure
              id="omogiwa-email-signature"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa branded email signature"
              />
              <figcaption>Email / Digital Stationery</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            03 — CLOTHING / PHYSICAL IDENTITY
        ======================================== */}

        <section
          id="clothing-physical-identity"
          className="brand-system-section"
        >
          <div className="brand-section-number">03</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              WEARABLE IDENTITY
            </p>

            <h2>Clothing / Physical Identity</h2>

            <p>
              Turning the identity into something physical, wearable and
              immediately recognizable.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-clothing-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa clothing and apparel identity"
              />
              <figcaption>Apparel</figcaption>
            </figure>

            <figure
              id="omogiwa-id-card"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa identification card design"
              />
              <figcaption>ID System</figcaption>
            </figure>

            <figure
              id="omogiwa-wearable-graphics"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa wearable graphic applications"
              />
              <figcaption>Wearable Graphics</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            04 — DIGITAL PRODUCT ECOSYSTEM
        ======================================== */}

        <section
          id="digital-product-ecosystem"
          className="brand-system-section brand-system-section-dark"
        >
          <div className="brand-section-number">04</div>

          <div className="brand-section-heading">
            <p className="section-label">
              DIGITAL
            </p>

            <h2>Digital Product Ecosystem</h2>

            <p>
              Digital tools and products designed as natural extensions of
              the OmoGiwa identity.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-digital-products"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa digital product interface"
              />
              <figcaption>Digital Products</figcaption>
            </figure>

            <figure
              id="omogiwa-tools"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa digital tools"
              />
              <figcaption>Tools</figcaption>
            </figure>

            <figure
              id="omogiwa-app-interface"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa digital interface design"
              />
              <figcaption>Interface System</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            05 — WEBSITE SYSTEM
        ======================================== */}

        <section
          id="omogiwa-website-system"
          className="brand-system-section"
        >
          <div className="brand-section-number">05</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              WEB
            </p>

            <h2>OmoGiwa Website System</h2>

            <p>
              The website is where identity, content, interaction and
              technology come together.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-homepage-system"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa website homepage"
              />
              <figcaption>Website</figcaption>
            </figure>

            <figure
              id="omogiwa-case-study-template"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa portfolio case study template"
              />
              <figcaption>Case Study Template</figcaption>
            </figure>

            <figure
              id="omogiwa-interaction-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa website interaction and digital experience"
              />
              <figcaption>Interaction System</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            06 — SOCIAL MEDIA IDENTITY
        ======================================== */}

        <section
          id="social-media-identity"
          className="brand-system-section brand-system-section-soft"
        >
          <div className="brand-section-number">06</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              SOCIAL
            </p>

            <h2>Social Media Identity</h2>

            <p>
              A recognizable social presence built from the same visual
              language as the wider OmoGiwa ecosystem.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-social-templates"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa social media design templates"
              />
              <figcaption>Social Templates</figcaption>
            </figure>

            <figure
              id="omogiwa-social-grid"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa social media visual grid"
              />
              <figcaption>Social Grid</figcaption>
            </figure>

            <figure
              id="omogiwa-social-campaigns"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa social media campaign graphics"
              />
              <figcaption>Campaign Graphics</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            07 — PORTFOLIO / PROJECT IDENTITY
        ======================================== */}

        <section
          id="portfolio-project-identity"
          className="brand-system-section"
        >
          <div className="brand-section-number">07</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              PRESENTATION
            </p>

            <h2>Portfolio / Project Identity</h2>

            <p>
              A system for presenting individual projects while maintaining
              a clear connection to the OmoGiwa brand.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-project-covers"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa project cover designs"
              />
              <figcaption>Project Covers</figcaption>
            </figure>

            <figure
              id="omogiwa-project-pages"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa portfolio project presentation"
              />
              <figcaption>Project Presentation</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            08 — SCIENCE / ANATOMY IDENTITY
        ======================================== */}

        <section
          id="science-anatomy-identity"
          className="brand-system-section brand-system-section-dark"
        >
          <div className="brand-section-number">08</div>

          <div className="brand-section-heading">
            <p className="section-label">
              SCIENCE × DESIGN
            </p>

            <h2>Science / Anatomy Identity</h2>

            <p>
              Human anatomy is part of what makes the OmoGiwa perspective
              different. This section explores that relationship visually.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-anatomy-graphics"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa human anatomy inspired graphic design"
              />
              <figcaption>Anatomy Graphics</figcaption>
            </figure>

            <figure
              id="omogiwa-scientific-illustration"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa scientific illustration"
              />
              <figcaption>Scientific Illustration</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            09 — DATA VISUALIZATION
        ======================================== */}

        <section
          id="data-visualization"
          className="brand-system-section"
        >
          <div className="brand-section-number">09</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              INFORMATION
            </p>

            <h2>Data Visualization</h2>

            <p>
              Translating information into visual experiences that are
              understandable, useful and visually engaging.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-data-graphics"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa data visualization graphics"
              />
              <figcaption>Data Graphics</figcaption>
            </figure>

            <figure
              id="omogiwa-information-design"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa information design system"
              />
              <figcaption>Information Design</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            10 — PACKAGING
        ======================================== */}

        <section
          id="packaging"
          className="brand-system-section brand-system-section-soft"
        >
          <div className="brand-section-number">10</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              OBJECTS
            </p>

            <h2>Packaging</h2>

            <p>
              Exploring how the OmoGiwa identity can wrap around physical
              products and objects.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-packaging-system"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa packaging identity"
              />
              <figcaption>Packaging System</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            11 — ENVIRONMENTAL / PHYSICAL BRANDING
        ======================================== */}

        <section
          id="environmental-physical-branding"
          className="brand-system-section"
        >
          <div className="brand-section-number">11</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              SPACE
            </p>

            <h2>Environmental / Physical Branding</h2>

            <p>
              Bringing the identity into spaces, installations, objects and
              physical environments.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-environmental-branding"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa environmental branding"
              />
              <figcaption>Environmental Branding</figcaption>
            </figure>

            <figure
              id="omogiwa-physical-installations"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa physical brand installation"
              />
              <figcaption>Physical Applications</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            12 — PRESENTATION SYSTEM
        ======================================== */}

        <section
          id="presentation-system"
          className="brand-system-section brand-system-section-soft"
        >
          <div className="brand-section-number">12</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              COMMUNICATION
            </p>

            <h2>Presentation System</h2>

            <p>
              A consistent system for communicating ideas, proposals,
              projects and information.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-presentation-template"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa presentation design system"
              />
              <figcaption>Presentation System</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            13 — MOTION IDENTITY
        ======================================== */}

        <section
          id="motion-identity"
          className="brand-system-section brand-system-section-dark"
        >
          <div className="brand-section-number">13</div>

          <div className="brand-section-heading">
            <p className="section-label">
              MOVEMENT
            </p>

            <h2>Motion Identity</h2>

            <p>
              Motion principles that make the OmoGiwa identity feel alive
              across digital experiences.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-motion-graphics"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa motion graphics"
              />
              <figcaption>Motion Graphics</figcaption>
            </figure>

            <figure
              id="omogiwa-animation-system"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa animation identity system"
              />
              <figcaption>Animation System</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            14 — SOUND IDENTITY
        ======================================== */}

        <section
          id="sound-identity"
          className="brand-system-section"
        >
          <div className="brand-section-number">14</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              AUDIO
            </p>

            <h2>Sound Identity</h2>

            <p>
              Exploring sound as another layer through which the OmoGiwa
              identity can be recognized.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-sound-system"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa sound identity concept"
              />
              <figcaption>Sound Identity</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            15 — PHOTOGRAPHY / PERSONAL IMAGE
        ======================================== */}

        <section
          id="photography-personal-image"
          className="brand-system-section brand-system-section-soft"
        >
          <div className="brand-section-number">15</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              PERSONAL IMAGE
            </p>

            <h2>Photography / Personal Image Direction</h2>

            <p>
              Defining how Omogbolahan Giwa is visually represented across
              portraits, campaigns, portfolio work and personal content.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-portrait-direction"
              className="brand-image-card"
            >
              <img
                src=""
                alt="Omogbolahan Giwa portrait art direction"
              />
              <figcaption>Portrait Direction</figcaption>
            </figure>

            <figure
              id="omogiwa-personal-photography"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa personal photography direction"
              />
              <figcaption>Photography Direction</figcaption>
            </figure>

            <figure
              id="omogiwa-campaign-imagery"
              className="brand-image-card brand-image-card-wide"
            >
              <img
                src=""
                alt="OmoGiwa campaign photography and imagery"
              />
              <figcaption>Campaign Imagery</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            16 — BRAND MERCHANDISE
        ======================================== */}

        <section
          id="brand-merchandise"
          className="brand-system-section"
        >
          <div className="brand-section-number">16</div>

          <div className="brand-section-heading">
            <p className="section-label purple">
              EXTENSION
            </p>

            <h2>Brand Merchandise</h2>

            <p>
              Objects created to make the OmoGiwa identity tangible and
              allow the brand to exist beyond screens.
            </p>
          </div>

          <div className="brand-image-grid">
            <figure
              id="omogiwa-merchandise"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa brand merchandise"
              />
              <figcaption>Merchandise</figcaption>
            </figure>

            <figure
              id="omogiwa-branded-objects"
              className="brand-image-card"
            >
              <img
                src=""
                alt="OmoGiwa branded physical objects"
              />
              <figcaption>Branded Objects</figcaption>
            </figure>
          </div>
        </section>


        {/* ========================================
            CLOSING
        ======================================== */}

        <section
          id="brand-case-study-conclusion"
          className="brand-case-study-conclusion"
        >
          <div className="brand-conclusion-decoration" />

          <p className="section-label purple">
            THE SYSTEM
          </p>

          <h2>
            One identity.
            <span> Many expressions.</span>
          </h2>

          <p>
            OmoGiwa was designed to be more than a visual identity. It is
            an evolving system that can move between disciplines,
            platforms, environments and ideas without losing its character.
          </p>

          <Link
            href="/portfolio"
            className="brand-case-study-back-link"
          >
            ← Back to portfolio
          </Link>
        </section>

      </main>
    </>
  );
}