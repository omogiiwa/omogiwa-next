
"use client";

import { useState } from "react";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
  display: "swap",
});

export default function SecondExpressionPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [bagCount, setBagCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    { name: "Boxy Tee", category: "tops", price: "$38", description: "Black, heavyweight cotton", style: "t2", tag: "New" },
    { name: "Wide Leg Trousers", category: "bottoms", price: "$96", description: "White, relaxed fit", style: "t1" },
    { name: "Padded Overshirt", category: "outer", price: "$148", description: "Black, quilted", style: "t4", tag: "New" },
    { name: "Longline Shirt", category: "tops", price: "$72", description: "White, cotton poplin", style: "t3" },
    { name: "Cargo Pants", category: "bottoms", price: "$110", description: "Black, utility pockets", style: "t4" },
    { name: "Zip Hoodie", category: "tops", price: "$88", description: "White, brushed fleece", style: "t1", tag: "New" },
    { name: "Trench Coat", category: "outer", price: "$210", description: "Black, water resistant", style: "t2" },
    { name: "Pleated Shorts", category: "bottoms", price: "$64", description: "White, linen blend", style: "t3" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="second-expression">
      {/* CINEMATIC HERO */}
      <section className="se-hero" id="top">
        <img
          className="se-hero-image"
          src="/se-model.png"
          alt="Second Expression fashion campaign featuring black streetwear"
          fetchPriority="high"
        />

        <div className="se-hero-shade" aria-hidden="true" />
        <div className="se-hero-grain" aria-hidden="true" />

        <header className="se-hero-header">
          <a
            className={`se-hero-logo ${exo.className}`}
            href="#top"
            aria-label="Second Expression home"
          >
            SECOND
            <br />
            EXPRESSION<span>.</span>
          </a>

          <nav className="se-hero-nav" aria-label="Main navigation">
            <a href="#collection">COLLECTION</a>
            <a href="#about">PHILOSOPHY</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <div className="se-hero-actions">
            <a
              href="#collection"
              className="se-hero-bag"
              aria-label={`Shopping bag, ${bagCount} items`}
            >
              <svg
                viewBox="0 0 40 48"
                width="25"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M8 14h24l3 30H5L8 14Z" />
                <path d="M14 18V11a6 6 0 0 1 12 0v7" />
              </svg>
              <span>{bagCount}</span>
            </a>

            <button
              type="button"
              className={`se-hero-menu-toggle ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </header>

        <div className={`se-hero-mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#collection" onClick={closeMenu}>COLLECTION</a>
          <a href="#about" onClick={closeMenu}>PHILOSOPHY</a>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </div>

        <div className="se-hero-content">
          <p className="se-hero-eyebrow">
            THE SECOND EXPRESSION PHILOSOPHY
          </p>

          <h1 className={exo.className}>
            SECOND
            <br />
            EXPRESSION<span>.</span>
          </h1>

          <p className="se-hero-tagline">
            Two colours.
            <br />
            Endless ways to wear them.
          </p>

          <a className="se-hero-cta" href="#collection">
            <span>SHOP NOW</span>
            <span className="se-hero-cta-line" aria-hidden="true" />
          </a>
        </div>

        <nav className="se-hero-pagination" aria-label="Explore page sections">
          <a href="#top" aria-label="Hero section" className="is-active" />
          <a href="#about" aria-label="Our philosophy" />
          <a href="#collection" aria-label="The collection" />
          <a href="#se-footer" aria-label="Footer" />
        </nav>

        <a className="se-hero-scroll" href="#about">
          <span className="se-hero-scroll-line" aria-hidden="true" />
          <span>SCROLL</span>
          <svg
            viewBox="0 0 16 16"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m3 6 5 5 5-5" />
          </svg>
        </a>

        <span className="se-hero-index" aria-hidden="true">
          SE. / 001
        </span>
      </section>

      {/* PHILOSOPHY */}
      <section className="se-statement" id="about">
        <p className="se-eyebrow">
          THE SECOND EXPRESSION PHILOSOPHY
        </p>

        <h2>
          Two colours.
          <br />
          <span>Endless ways to wear them.</span>
        </h2>

        <a href="#collection">
          DISCOVER THE COLLECTION
        </a>
      </section>

      {/* COLLECTION */}
      <section className="se-store" id="collection">
        <div className="se-wrap">
          <div className="se-store-head">
            <h2>The collection</h2>

            <div className="se-tabs">
              {[
                ["all", "All"],
                ["tops", "Tops"],
                ["bottoms", "Bottoms"],
                ["outer", "Outerwear"],
              ].map(([filter, label]) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="se-collection-preview">
            <div className="se-grid">
              {products
                .filter(
                  (product) =>
                    activeFilter === "all" ||
                    product.category === activeFilter
                )
                .map((product) => (
                  <article className="se-card" key={product.name}>
                    <div className={`se-shot ${product.style}`}>
                      {product.tag && <b>{product.tag}</b>}
                      <span>Product photo</span>

                      <button
                        type="button"
                        onClick={() =>
                          setBagCount((count) => count + 1)
                        }
                      >
                        Add to bag
                      </button>
                    </div>

                    <div className="se-meta">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </div>

                    <div className="se-sub">
                      {product.description}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </div>

        <div className="se-shop-cta" id="shop">
          <a href="#shop" className="se-shop-button">
            GO TO SHOP
          </a>
          <p>There's more to discover.</p>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="se-band">
        <p>Two colors. Endless ways to wear them.</p>
      </section>

      {/* FOOTER */}
      <footer className="se-footer" id="se-footer">
        <div className="se-footer-top">
          <div className="se-footer-top-copy">
            <span className="se-footer-eyebrow">
              THE ART OF BEING YOURSELF
            </span>

            <h2>
              MAKE ROOM
              <br />
              FOR <span>EXPRESSION.</span>
            </h2>

            <p>Style is personal. Make it yours.</p>
          </div>

          <a href="#collection" className="se-footer-cta">
            <span>EXPLORE THE COLLECTION</span>
          </a>

          <span className="se-footer-watermark" aria-hidden="true">
            SE.
          </span>
        </div>

        <div className="se-footer-main">
          <div className="se-footer-brand">
            <a href="#top" className="se-footer-logo">
              SECOND
              <br />
              EXPRESSION<span>.</span>
            </a>

            <p>
              Less noise. More expression.
              <br />
              A different way to dress.
            </p>
          </div>

          <div className="se-footer-column">
            <span className="se-footer-label">DISCOVER</span>
            <a href="#collection">The Collection</a>
            <a href="#about">Our Philosophy</a>
            <a href="#contact">Get In Touch</a>
          </div>

          <div className="se-footer-column">
            <span className="se-footer-label">FOLLOW ALONG</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>

          <div className="se-footer-column se-footer-contact" id="contact">
            <span className="se-footer-label">STAY CONNECTED</span>
            <p>
              For enquiries, collaborations
              <br />
              and everything in between.
            </p>
            <a href="mailto:hello@secondexpression.com" className="se-footer-contact-link">
              LET'S TALK
            </a>
          </div>
        </div>

        <div className="se-footer-bottom">
          <span>© {new Date().getFullYear()} SECOND EXPRESSION</span>
          <span className="se-footer-bottom-note">
            MADE FOR YOUR OWN EXPRESSION.
          </span>
        </div>
      </footer>
    </main>
  );
}
