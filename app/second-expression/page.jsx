import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
  display: "swap",
});
const fashionImage =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=85";

export default function SecondExpressionPage() {
  return (
    <main className="second-expression">
      <section className="se-stage" id="collection">
  <img
    className="se-stage-models"
    src="/se-model.png"
    alt="Two models wearing Second Expression black hoodie and cropped jacket"
    fetchPriority="high"
  />
  <div className="se-stage-fade" aria-hidden="true" />

  <header className="se-stage-bar">
    <nav className="se-stage-nav" aria-label="Main navigation">
      <a href="/second-expression">Home</a>
      <a href="#about">About</a>
      <a href="#collection">Shop</a>
      <a href="#contact">Support</a>
      <a href="/refund-policy">Refund Policy</a>
    </nav>

    <a className="se-stage-bag" href="#collection" aria-label="Shopping bag, 0 items">
      <svg viewBox="0 0 40 48" width="40" height="48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        <path d="M8 14h24l3 30H5L8 14Z" />
        <path d="M14 18V11a6 6 0 0 1 12 0v7" />
      </svg>
    </a>
  </header>

  <div className="se-stage-copy">
    <h1 className={exo.className}>
      SECOND
      <br />
      EXPRESSION
    </h1>
    <p>Dare to be different.</p>
    <a className="se-stage-cta" href="#about">
      Shop Now
    </a>
  </div>
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
