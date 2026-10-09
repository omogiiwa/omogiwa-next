import "./brand-design.css";

export const metadata = {
  title: "Brand Identity",
  description:
    "Brand identity project by Omogbolahan Giwa.",
  keywords: [
    "Mings brand identity",
    "Mings branding",
    "brand identity design",
    "visual identity",
    "brand design",
    "Omogbolahan Giwa",
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
    title: " Brand Identity | Omogbolahan Giwa",
    description:
      "Brans identity project by Omogbolahan Giwa.",
  },
};

const images = [
  {
    src: "/mings-show.png",
    alt: "Mings brand identity presentation",
    className: "mings-feature",
  },
  {
    src: "/mings-logo.png",
    alt: "Mings logo",
    className: "mings-logo",
  },
  {
    src: "/app-mockup.png",
    alt: "Mings app logo",
    className: "mings-watch",
  },
  {
    src: "/shirt-mockup.png",
    alt: "Mings shirt mockup",
    className: "mings-shirt",
  },
  {
    src: "/mings-building.png",
    alt: "Mings building branding",
    className: "mings-building",
  },
  {
    src: "/mings-watch.png",
    alt: "Mings watch branding",
    className: "mings-watch",
  },
  {
    src: "/mings-board.png",
    alt: "Mings brand board",
    className: "mings-board",
  },
  {
    src: "/mings-stationery.png",
    alt: "Mings stationery",
    className: "mings-stationery",
  },
  {
    src: "/mings-truck.png",
    alt: "Mings truck branding",
    className: "mings-truck",
  },
  {
    src: "/mings-jacket.png",
    alt: "Mings jacket branding",
    className: "mings-jacket",
  },
  {
    src: "/mings-boards.png",
    alt: "Mings outdoor boards",
    className: "mings-boards",
  },
];

export default function BrandDesignPage() {
  return (
    <main className="mings-page">
      <header className="mings-header">
        <div>
          <p className="mings-kicker">BRAND IDENTITY</p>
          <h1>Mings</h1>
          <h2> Mings is a logistics company that focuses on delivery, shipping, private rental services and many more. </h2>
        </div>

        <p className="mings-year">2026</p>
      </header>

      <section className="mings-gallery" aria-label="Mings brand identity gallery">
        {images.map((image, index) => (
          <a
            key={image.src}
            href={`#mings-image-${index}`}
            className={`mings-gallery-item ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </a>
        ))}
      </section>

      {images.map((image, index) => (
        <div
          key={`lightbox-${image.src}`}
          id={`mings-image-${index}`}
          className="mings-lightbox"
        >
          <a
            href="#"
            className="mings-lightbox-backdrop"
            aria-label="Close image"
          />

          <div className="mings-lightbox-content">
            <a
              href="#"
              className="mings-lightbox-close"
              aria-label="Close image"
            >
              ×
            </a>

            <img src={image.src} alt={image.alt} />
          </div>
        </div>
      ))}
    </main>
  );
}