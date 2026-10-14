"use client";

import { useState } from "react";
import "./GiwaAIWidget.css";

export default function GiwaAIWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="giwa-ai-widget">
      {isOpen && (
        <div className="giwa-ai-widget-panel">
          <iframe
            src="/ai"
            title="Giwa AI Assistant"
            className="giwa-ai-widget-frame"
          />
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
      <span>Ask Giwa AI</span>
    </>
  )}
</button>
    </div>
  );
}