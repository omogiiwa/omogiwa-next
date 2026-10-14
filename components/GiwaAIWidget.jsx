"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./GiwaAIWidget.css";

export default function GiwaAIWidget() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isOpen = pathname === "/ai";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="giwa-ai-widget">
      <Link
        href={isOpen ? "/" : "/ai"}
        className={`giwa-ai-widget-toggle ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Close Giwa AI" : "Ask Giwa AI"}
      >
        {isOpen ? (
          <span className="giwa-ai-close-icon">×</span>
        ) : (
          <>
            <img src="/giwa-ai-icon.svg" alt="" />
            <span>Ask Giwa AI</span>
          </>
        )}
      </Link>
    </div>,
    document.body
  );
}
