"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "/lola1.jpg", alt: "Lola — photograph 1", number: "01", caption: "The person behind the dream", shape: "feature" },
  { src: "/lola2.jpg", alt: "Lola — photograph 2", number: "02", caption: "A future still worth believing in", shape: "side-top" },
  { src: "/lola3.jpg", alt: "Lola — photograph 3", number: "03", caption: "Help her keep moving forward", shape: "side-bottom" },
];

export default function LolaPhotoGallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setActive((current) => (current + photos.length - 1) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section className="lola-gallery" aria-labelledby="lola-gallery-title">
      <div className="lola-gallery-heading">
        <div>
          <p className="lola-gallery-kicker">BEYOND THE APPEAL · MEET LOLA</p>
          <h2 id="lola-gallery-title">A dream belongs to a real person.</h2>
        </div>
        <p>Not just a student number or a school invoice. Lola is a sister, a daughter, and a young woman working towards a future in medicine.</p>
      </div>

      <div className="lola-gallery-grid">
        {photos.map((photo, index) => (
          <button
            className={`lola-photo-card lola-photo-${photo.shape}`}
            type="button"
            key={photo.src}
            onClick={() => setActive(index)}
            aria-label={`Open photograph ${index + 1}: ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} loading={index === 0 ? "eager" : "lazy"} />
            <span className="lola-photo-shade" />
            <span className="lola-photo-number">{photo.number} <span>/ 03</span></span>
            <span className="lola-photo-caption">{photo.caption}</span>
            <span className="lola-photo-expand" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <div className="lola-gallery-footer">
        <span>THREE PHOTOGRAPHS · ONE FUTURE TO PROTECT</span>
        <span>Select a photograph to view it full-screen</span>
      </div>

      {active !== null && (
        <div className="lola-lightbox" role="dialog" aria-modal="true" aria-label="Lola photo viewer" onClick={() => setActive(null)}>
          <button className="lola-lightbox-close" type="button" aria-label="Close photo viewer" onClick={() => setActive(null)}>×</button>
          <button className="lola-lightbox-arrow lola-lightbox-prev" type="button" aria-label="Previous photograph" onClick={(event) => { event.stopPropagation(); setActive((active + photos.length - 1) % photos.length); }}>‹</button>
          <figure className="lola-lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].alt} />
            <figcaption><span>{photos[active].number} / 03</span>{photos[active].caption}</figcaption>
          </figure>
          <button className="lola-lightbox-arrow lola-lightbox-next" type="button" aria-label="Next photograph" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % photos.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
