import { useCallback, useEffect, useMemo, useState } from 'react';
import Reveal from './Reveal';
import Photo from './Photo';
import Modal from './Modal';
import HiddenHeart from './HiddenHeart';
import { gallery } from '../data/siteData';
import './Gallery.css';

export default function Gallery() {
  // Index 0 is the "favourite memory", then the scrapbook photos
  const all = useMemo(() => [gallery.favourite, ...gallery.items], []);
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir) => setIndex((i) => (i === null ? i : (i + dir + all.length) % all.length)),
    [all.length]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, step]);

  const current = open ? all[index] : null;
  const fav = gallery.favourite;

  return (
    <section id="memories" className="section gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 className="section-title">{gallery.title}</h2>
          <p className="section-sub">{gallery.subtitle}</p>
        </Reveal>

        <Reveal className="fav-wrap">
          <button type="button" className="fav" onClick={() => setIndex(0)}>
            <span className="fav__photo">
              <Photo src={fav.src} alt={fav.caption} label="Your favourite memory photo" />
            </span>
            <span className="fav__text">
              <span className="fav__badge">{fav.badge}</span>
              <span className="fav__caption script">{fav.caption}</span>
              <span className="fav__teaser">{fav.teaser}</span>
              <span className="fav__cta">Tap to open</span>
            </span>
          </button>
        </Reveal>

        <div className="scrapbook">
          {gallery.items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 80}>
              <button
                type="button"
                className={`polaroid polaroid--${item.shape}`}
                style={{ '--tilt': `${item.tilt}deg` }}
                onClick={() => setIndex(i + 1)}
                aria-label={`Open photo: ${item.caption}`}
              >
                <span className="polaroid__img">
                  <Photo src={item.src} alt={item.caption} label="Add a photo" />
                </span>
                <span className="polaroid__cap">{item.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <HiddenHeart id="heart-memories" style={{ bottom: '3%', right: '5%' }} />

      <Modal open={open} onClose={close} label="Photo viewer" wide>
        {current && (
          <div className="lightbox">
            <div className="lightbox__photo">
              <Photo src={current.src} alt={current.caption} label="Add a photo" />
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--prev"
                onClick={() => step(-1)}
                aria-label="Previous photo"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--next"
                onClick={() => step(1)}
                aria-label="Next photo"
              >
                &#8250;
              </button>
            </div>
            <div className="lightbox__info" key={index}>
              <p className="lightbox__count">
                {index + 1} / {all.length}
              </p>
              <h3 className="lightbox__caption script">{current.caption}</h3>
              <p className="lightbox__note">{current.message}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
