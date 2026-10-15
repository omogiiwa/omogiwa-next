
const fashionImage =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=85";

export default function SecondExpressionPage() {
  return (
    <main className="second-expression">
      <header className="se-header">
        <a className="se-logo" href="/second-expression">
          SECOND<span>EXPRESSION</span>
        </a>

        <nav className="se-nav" aria-label="Main navigation">
          <a href="#collection">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="se-bag" href="#collection" aria-label="Shopping bag">
          BAG <span>0</span>
        </a>
      </header>

      <section className="se-hero" id="collection">
        <img
          className="se-hero-image"
          src={fashionImage}
          alt="Fashion editorial showcasing contemporary style"
          fetchPriority="high"
        />

        <div className="se-hero-overlay" />

        <div className="se-hero-content">
          <p className="se-eyebrow">A DIFFERENT WAY TO DRESS</p>

          <h1>
            SECOND
            <br />
            <span>EXPRESSION.</span>
          </h1>

          <div className="se-hero-bottom">
            <p>
              Less noise.
              <br />
              More expression.
            </p>

            <a className="se-button" href="#about">
              EXPLORE THE COLLECTION
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="se-hero-index">01 / EXPRESSION</div>
      </section>

      <section className="se-statement" id="about">
        <p className="se-eyebrow">
          THE SECOND EXPRESSION PHILOSOPHY
        </p>

        <h2>
          Two colours.
          <br />
          <span>Endless ways to wear them.</span>
        </h2>

        <a href="#contact">
          DISCOVER THE COLLECTION
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer
        id="contact"
        style={{
          padding: "28px 6%",
          borderTop: "1px solid #eeeeee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          fontSize: "11px",
          letterSpacing: "1px",
        }}
      >
        <span>SECOND EXPRESSION</span>
        <span>LESS NOISE. MORE EXPRESSION.</span>
      </footer>
    </main>
  );
}
