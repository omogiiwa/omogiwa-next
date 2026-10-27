"use client";

export default function OdodoPresentation() {
  return (
    <section
      className="ododo-reference-embed"
      aria-label="Ododo brand identity case study"
      style={{ width: "100%", marginTop: 36, background: "#121212" }}
    >
      <iframe
        src="https://agent.omogiwa.com/ododo-case-study.html"
        title="Ododo — Brand identity case study by OmoGiwa"
        loading="lazy"
        style={{
          display: "block",
          width: "100%",
          height: "100svh",
          minHeight: 680,
          border: 0,
          background: "#121212",
        }}
        allow="fullscreen"
      />
    </section>
  );
}
