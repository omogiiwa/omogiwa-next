import Image from "next/image";

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

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
          <a href="/admtools">Tools</a>
        </div>
      </nav>
    </header>
  );
}