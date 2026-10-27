"use client";

import { useEffect, useRef } from "react";

export default function OdodoPresentation() {
  const frameRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== "ododo-case-study-height") return;
      if (frameRef.current) {
        frameRef.current.style.height = `${Math.max(900, Number(event.data.height) || 0)}px`;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="ododo-reference-embed" aria-label="Ododo brand identity case study">
      <iframe
        ref={frameRef}
        src="/ododo-case-study-embed.html"
        title="Ododo — Brand identity case study by OmoGiwa"
        loading="lazy"
        scrolling="no"
        style={{
          display: "block",
          width: "100%",
          height: "100svh",
          minHeight: 900,
          border: 0,
          background: "#F3EFE8",
          overflow: "hidden",
        }}
        allow="fullscreen"
      />
    </section>
  );
}
