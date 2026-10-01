"use client";

import { useEffect, useState } from "react";
import "./omogiwa-experience.css";

export default function OmoGiwaExperience({
  duration = 60000,
  onComplete,
}) {
  const [stage, setStage] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 8000),
      setTimeout(() => setStage(2), 18000),
      setTimeout(() => setStage(3), 30000),
      setTimeout(() => setStage(4), 42000),
      setTimeout(() => setStage(5), 52000),
      setTimeout(() => {
        onComplete?.();
      }, duration),
    ];

    return () => timers.forEach(clearTimeout);
  }, [duration, onComplete]);

  if (closed) return null;

  return (
    <aside
      className={`omogiwa-experience omogiwa-stage-${stage}`}
      aria-label="OmoGiwa.com"
    >
      <button
        className="omogiwa-experience__close"
        onClick={() => setClosed(true)}
        aria-label="Close"
      >
        ×
      </button>

      <div className="omogiwa-experience__canvas">

        {/* Stage 0 — Mark */}
        <div className="omogiwa-experience__mark">
          <span>✦</span>
        </div>

        {/* Stage 1 — Brand */}
        <div className="omogiwa-experience__brand">
          OMOGIWA
        </div>

        {/* Stage 2 — Browser */}
        <div className="omogiwa-experience__browser">
          <div className="omogiwa-experience__browser-bar">
            <i />
            <i />
            <i />
          </div>

          <div className="omogiwa-experience__browser-content">
            <strong>OMOGIWA</strong>
            <span>DESIGN × DEVELOPMENT</span>
          </div>
        </div>

        {/* Stage 3 — Statement */}
        <div className="omogiwa-experience__statement">
          <span>DESIGN</span>
          <b>×</b>
          <span>DEVELOPMENT</span>
          <b>×</b>
          <span>MOTION</span>
        </div>

        {/* Stage 4 — Detail */}
        <div className="omogiwa-experience__detail">
          <div className="omogiwa-experience__detail-box">
            <span />
            <span />
            <span />
          </div>

          <p className="omogiwa-experience__message">
            Every detail matters.
          </p>
        </div>

        {/* Stage 5 — CTA */}
        <div className="omogiwa-experience__cta">
          <p>I build creative websites.</p>

          <h3>Need one?</h3>

          <a href="/contact">
            LET&apos;S BUILD
            <span>→</span>
          </a>
        </div>

      </div>
    </aside>
  );
}