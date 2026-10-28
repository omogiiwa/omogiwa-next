"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./navbar.css";

export default function Navbar() {
  const menuRef = useRef(null);

  useEffect(() => {
    function closeMenuOnOutsidePointer(event) {
      const menu = menuRef.current;
      if (menu?.open && !menu.contains(event.target)) {
        menu.open = false;
      }
    }

    document.addEventListener("pointerdown", closeMenuOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeMenuOnOutsidePointer);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="/" className="logo">
          <Image
            src="/omogiwalogo.svg"
            alt="OmoGiwa. logo"
            priority
            style={{

    
  }}
          />
        </a>

        <details className="menu" ref={menuRef}>
<summary className="menu-button">
  <Image
    src="/menubar.svg"
    alt="Menu bar"
    width={30}
    height={30}
  />
</summary>

  <div className="menu-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/contact">Contact</a>
    <a href="/tools">Tools</a>
    <a href="/blogs">Blogs</a>
  </div>
</details>
      </nav>
      
    </header>
  );
}