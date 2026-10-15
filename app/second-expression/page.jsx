const fashionImage =
"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=85";

export default function SecondExpressionPage() {
return (
SECONDEXPRESSION
    <nav className="se-nav">
      <a href="/second-expression/shop">Shop</a>
      <a href="/second-expression/about">About</a>
      <a href="/second-expression/contact">Contact</a>
    </nav>
    <a href="/second-expression/shop" className="se-bag">
      BAG <span>0</span>
    </a>
  </header>
  <section className="se-hero">
    <img
      className="se-hero-image"
      src={fashionImage}
      alt="Editorial fashion campaign featuring contemporary clothing"
    />
    <div className="se-hero-overlay" />
    <div className="se-hero-content">
      <p className="se-eyebrow">A DIFFERENT WAY TO DRESS</p>
      <h1>
        SECOND
        <br />
        EXPRESSION<span>.</span>
      </h1>
      <div className="se-hero-bottom">
        <p>
          Less noise.
          <br />
          More expression.
        </p>
        <a href="/second-expression/shop" className="se-button">
          EXPLORE THE COLLECTION
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
    <span className="se-hero-index">01 / EXPRESSION</span>
  </section>
  <section className="se-statement">
    <p className="se-eyebrow">THE SECOND EXPRESSION PHILOSOPHY</p>
    <h2>
      Two colours.
      <br />
      <span>Endless ways to wear them.</span>
    </h2>
    <a href="/second-expression/shop">
      DISCOVER THE COLLECTION <span aria-hidden="true">↗</span>
    </a>
  </section>
</main>

);
}