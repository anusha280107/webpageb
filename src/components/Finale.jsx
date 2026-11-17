import { useEffect, useState } from 'react';
import Photo from './Photo';
import Icon from './Icon';
import { fireConfetti } from '../utils/confetti';
import { finale } from '../data/siteData';
import './Finale.css';

const rand = (min, max) => Math.random() * (max - min) + min;

export default function Finale({ open, onClose }) {
  const [run, setRun] = useState(0);
  const [hearts] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: rand(2, 96),
      size: rand(14, 34),
      dur: rand(8, 16),
      delay: -rand(0, 14),
      drift: rand(-40, 40),
    }))
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return undefined;
    fireConfetti({ count: 220, origin: { x: 0.5, y: 0.5 } });
    const id = setTimeout(() => fireConfetti({ count: 160, origin: { x: 0.5, y: 0.4 } }), 5200);
    return () => clearTimeout(id);
  }, [open, run]);

  if (!open) return null;

  const lineDelay = (i) => 1.6 + i * 1.7;
  const signDelay = lineDelay(finale.lines.length) + 0.4;

  return (
    <div className="finale" role="dialog" aria-modal="true" aria-label="The final secret">
      <div className="finale__hearts" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            style={{
              left: `${h.left}%`,
              '--size': `${h.size}px`,
              '--dur': `${h.dur}s`,
              '--delay': `${h.delay}s`,
              '--drift': `${h.drift}px`,
            }}
          >
            <Icon name="heart" size={h.size} />
          </span>
        ))}
      </div>

      <button type="button" className="finale__close" onClick={onClose} aria-label="Close">
        <Icon name="close" size={20} />
      </button>

      <div className="finale__content" key={run}>
        <div className="finale__photo">
          <Photo src={finale.photo} alt={finale.photoAlt} label={finale.photoLabel} />
        </div>

        <p className="finale__eyebrow">{finale.eyebrow}</p>
        <h2 className="finale__title script">{finale.title}</h2>

        <div className="finale__lines">
          {finale.lines.map((line, i) => (
            <p key={i} style={{ animationDelay: `${lineDelay(i)}s` }}>
              {line}
            </p>
          ))}
        </div>

        <p className="finale__sign script" style={{ animationDelay: `${signDelay}s` }}>
          {finale.signOff}
        </p>

        <div className="finale__actions" style={{ animationDelay: `${signDelay + 1}s` }}>
          <button type="button" className="btn btn--ghost finale__btn" onClick={() => setRun((n) => n + 1)}>
            {finale.replayLabel}
          </button>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            {finale.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
