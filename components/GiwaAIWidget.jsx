"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import "./GiwaAIWidget.css";

export default function GiwaAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Stops the widget from rendering inside its own iframe
  if (pathname === "/ai") return null;

  return createPortal(
    <div className="giwa-ai-widget">
      {isOpen && (
        <div className="giwa-ai-panel">
          <iframe src="/ai" title="Giwa AI" className="giwa-ai-frame" />
        </div>
      )}

      <button
        type="button"
        className={`giwa-ai-widget-toggle ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close Giwa AI" : "Ask Giwa AI"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="giwa-ai-close-icon">×</span>
        ) : (
          <>
            <img src="/giwa-ai-icon.svg" alt="" />
            <span className="giwa-ai-label"><span className="giwa-ai-label-ask">Ask</span> <span className="giwa-ai-label-name">Giwa AI</span></span>
          </>
        )}
      </button>
    </div>,
    document.body
  );
}
