import "./footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* Main footer */}
      <div className="footer-container">

        {/* Brand section */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            OmoGiwa<span>.</span>
          </a>

          <p className="footer-description">
            Omnidesigner and software engineer. I stand at the center of bringing creative ideas to visual concepts
          </p>

          <a href="/contact" className="footer-cta">
            Let's work together
            <span>↗</span>
          </a>
        </div>


        {/* Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>

          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/work">Work</a>
            <a href="/tools">Tools</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>


        {/* Socials */}
        <div className="footer-column">
          <h3>Connect</h3>

          <div className="footer-socials">

            {/* Twitter / X */}
            <a
              href="https://twitter.com/omo_giiwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>

              <span>@omo_giiwa</span>
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/decliint"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                />
                <circle cx="12" cy="12" r="4.2" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="instagram-dot"
                />
              </svg>

              <span>@decliint</span>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/omogbolahan-giwa-a9b25a345?trk=contact-info"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.04 3.5a2.04 2.04 0 1 1 0 4.08 2.04 2.04 0 0 1 0-4.08ZM3.25 8.92h3.58V20.5H3.25V8.92Zm5.82 0h3.43v1.58h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52v6.35h-3.58v-5.63c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.72H9.07V8.92Z" />
              </svg>

              <span>LinkedIn</span>
            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/2347041189806"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.83 11.83 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.88 11.88 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.23-6.17-3.45-8.43ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              <span>WhatsApp</span>
            </a>

          </div>
        </div>

      </div>


      {/* Bottom section */}
      <div className="footer-bottom">

        <p>
          © {currentYear} OmoGiwa. All rights reserved.
        </p>

        <p className="footer-location">
          Designed & built by Omogbolahan Giwa
        </p>
        <p className="footer-location" id="tyy">
          CR7
          </p>
        <a href="#top" className="back-to-top">
          Back to top
          <span>↑</span>
        </a>

      </div>

    </footer>
  );
}