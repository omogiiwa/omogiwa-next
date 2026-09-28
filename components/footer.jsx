export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-text">
          <p>© All rights reserved</p>
          <p>Designed and built by Giwa 2026</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://twitter.com/omo_giiwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            Twitter
          </a>

          <a
            href="https://instagram.com/decliint"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/2347041189806"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <a
          href="mailto:official@omogiwa.com"
          className="footer-email"
        >
          official@omogiwa.com
        </a>

      </div>
    </footer>
  );
}