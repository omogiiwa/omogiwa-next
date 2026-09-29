import Image from "next/image";
import "./navbar.module.css";
export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="/" className="logo">
          <Image
            src="/logo1.png"
            alt="OmoGiwa logo"
            priority
            style={{

    
  }}
          />
        </a>

        <details className="menu">
<summary className="menu-button">
  <Image
    src="/menubar.png"
    alt="Menu bar"
    width={30}
    height={30}
  />
</summary>

  <div className="menu-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/work">Work</a>
    <a href="/contact">Contact</a>
    <a href="/tools">Tools</a>
  </div>
</details>
      </nav>
    </header>
  );
}