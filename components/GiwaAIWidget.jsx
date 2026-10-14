"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./GiwaAIWidget.css";

export default function GiwaAIWidget() {
const [isOpen, setIsOpen] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

if (!mounted) return null;

return createPortal(
{isOpen && (
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
        <span>Ask Giwa AI</span>
      </>
    )}
  </button>
</div>,
document.body

);
}