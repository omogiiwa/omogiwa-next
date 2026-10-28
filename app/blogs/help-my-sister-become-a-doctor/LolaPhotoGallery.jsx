"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "/lola1.jpg", alt: "Lola, photograph one", note: "A little piece of Lola's story" },
  { src: "/lola2.jpg", alt: "Lola, photograph two", note: "The person behind the dream" },
  { src: "/lola3.jpg", alt: "Lola, photograph three", note: "A future still worth believing in" },
];

export default function LolaPhotoGallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((current) => (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setSelected((current) => (current + photos.length - 1) % photos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section className="lola-album" aria-labelledby="lola-album-title">
      <div className="lola-album-intro">
        <span className="lola-album-overline"><span /> A FEW PAGES FROM LOLA'S LIFE</span>
        <h2 id="lola-album-title">Meet Lola, <em>beyond the dream.</em></h2>
        <p>Before she is a medical student, she is a daughter, a sister, and a person with a whole life ahead of her. Here are a few moments from her story.</p>
      </div>

      <div className="lola-album-spread">
        <div className="lola-album-paper">
          <div className="lola-album-tape" aria-hidden="true" />
          <button className="lola-album-photo lola-album-photo-one" onClick={() => setSelected(0)} type="button" aria-label="View Lola's first photo">
            <span className="lola-album-photo-frame"><img src={photos[0].src} alt={photos[0].alt} loading="lazy" /></span>
            <span className="lola-album-handwritten">A little piece of Lola</span>
          </button>
          <div className="lola-album-stamp" aria-hidden="true"><span>WITH</span><strong>LOVE</strong><span>ALWAYS</span><i>✳</i></div>
          <button className="lola-album-photo lola-album-photo-two" onClick={() => setSelected(1)} type="button" aria-label="View Lola's second photo">
            <span className="lola-album-photo-frame"><img src={photos[1].src} alt={photos[1].alt} loading="lazy" /></span>
            <span className="lola-album-photo-note">The person behind the dream</span>
          </button>
          <span className="lola-album-doodle lola-album-doodle-one" aria-hidden="true">♡</span>
          <span className="lola-album-doodle lola-album-doodle-two" aria-hidden="true">✳</span>
        </div>
        <div className="lola-album-side">
          <span className="lola-album-page-number">A PERSONAL PHOTO ALBUM · 03 MOMENTS</span>
          <button className="lola-album-photo lola-album-photo-three" onClick={() => setSelected(2)} type="button" aria-label="View Lola's third photo">
            <span className="lola-album-photo-frame"><img src={photos[2].src} alt={photos[2].alt} loading="lazy" /></span>
            <span className="lola-album-photo-note">A future still worth believing in</span>
          </button>
          <p className="lola-album-side-note">Her story is still being written.</p>
          <span className="lola-album-side-rule" />
          <span className="lola-album-side-caption">Help her turn the page.</span>
        </div>
      </div>
      <div className="lola-album-bottom"><span>KEPT WITH LOVE, SHARED WITH HOPE</span><button type="button" onClick={() => setSelected(0)}>Open the album <span aria-hidden="true">↗</span></button></div>

      {selected !== null && (
        <div className="lola-album-viewer" role="dialog" aria-modal="true" aria-label="Lola's photo album" onClick={() => setSelected(null)}>
          <button className="lola-album-viewer-close" type="button" aria-label="Close album" onClick={() => setSelected(null)}>×</button>
          <button className="lola-album-viewer-arrow" type="button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); setSelected((selected + photos.length - 1) % photos.length); }}>‹</button>
          <figure className="lola-album-viewer-photo" onClick={(event) => event.stopPropagation()}>
            <div><img src={photos[selected].src} alt={photos[selected].alt} /></div>
            <figcaption><span>MEMORY {String(selected + 1).padStart(2, "0")} / 03</span>{photos[selected].note}</figcaption>
          </figure>
          <button className="lola-album-viewer-arrow" type="button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); setSelected((selected + 1) % photos.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
