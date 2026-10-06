import Link from "next/link";

export const metadata = {
  title: "Portfolio — Brand, Web & Digital Design",
  description:
    "Explore the design portfolio of Omogbolahan Giwa, a multidisciplinary designer and software engineer working across brand and visual design, web and digital design, and digital strategy.",
  keywords: [
    "Omogbolahan Giwa portfolio",
    "design portfolio",
    "brand design portfolio",
    "visual design portfolio",
    "graphic design portfolio",
    "web design portfolio",
    "digital design portfolio",
    "digital strategy portfolio",
    "brand identity designer",
    "web designer",
    "multidisciplinary designer",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio — Omogbolahan Giwa",
    description:
      "A selection of work across brand and visual design, web and digital design, and digital strategy by Omogbolahan Giwa.",
    url: "https://omogiwa.com/portfolio",
    siteName: "Omogbolahan Giwa",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Omogbolahan Giwa",
    description:
      "Explore Omogbolahan Giwa's work across brand and visual design, web and digital design, and digital strategy.",
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

const portfolioCategories = [
  {
    number: "01",
    title: "Brand & Visual Design",
    description:
      "Visual identities, graphic systems and creative work built to make brands recognizable, distinctive and memorable.",
    href: "/portfolio/brand-design",
    className: "portfolio-brand",
  },
  {
    number: "02",
    title: "Web & Digital Design",
    description:
      "Websites and digital experiences designed to look sharp, communicate clearly and make interaction feel natural.",
    href: "/portfolio/web-design",
    className: "portfolio-web",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Creative and digital thinking that connects your brand, audience, content and online presence with a clear purpose.",
    href: "/portfolio/digital-strategy",
    className: "portfolio-strategy",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-section">
        <div className="portfolio-intro">
          <p className="section-label purple">PORTFOLIO</p>

          <h1>
            Work that
            <span> speaks.</span>
          </h1>

          <p className="portfolio-intro-text">
            A selection of work across design, technology and digital
            thinking.
          </p>
        </div>

        <div className="portfolio-list">
          {portfolioCategories.map((category) => (
            <Link
              href={category.href}
              className={`portfolio-card ${category.className}`}
              key={category.title}
            >
              <div className="portfolio-card-image" />

              <div className="portfolio-card-content">
                <span className="portfolio-number">{category.number}</span>

                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <span className="portfolio-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}