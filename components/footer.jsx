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
  href="x.com/omo_giiwa"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/xicon.png" alt="" />
</a>

          <a
  href="instagram.com/decliint"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/igicon.png" alt=" "/>
</a>

         <a
  href="wa.me/2347041189806"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/waicon.png" alt="" />
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