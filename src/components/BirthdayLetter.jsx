import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import ScratchCard from './ScratchCard';
import HiddenHeart from './HiddenHeart';
import useTyping from '../hooks/useTyping';
import { useProgress } from '../context/ProgressContext';
import { site, birthdayLetter } from '../data/siteData';
import './BirthdayLetter.css';

export default function BirthdayLetter() {
  const { complete } = useProgress();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const full = birthdayLetter.paragraphs.join('\n\n');
  const { typed, done, skip } = useTyping(full, active);

  // Start typing when the letter scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const s = birthdayLetter.scratch;

  return (
    <section id="letter" className="section letter-section">
      <div className="container">
        <div className="paper" ref={ref}>
          <span className="paper__tape paper__tape--left" />
          <span className="paper__tape paper__tape--right" />

          <p className="eyebrow paper__eyebrow">{birthdayLetter.eyebrow}</p>
          <h2 className="paper__greeting script">
            {birthdayLetter.greeting} {site.nickname},
          </h2>

          {/* The hidden "ghost" copy reserves the final height so nothing jumps while typing */}
          <div className="paper__text">
            <p className="paper__ghost" aria-hidden="true">
              {full}
            </p>
            <p className="paper__live" aria-live="off">
              {typed}
              {!done && <span className="paper__caret" />}
            </p>
          </div>

          {!done && active && (
            <button type="button" className="paper__skip" onClick={skip}>
              {birthdayLetter.skipLabel}
            </button>
          )}

          {done && (
            <div className="paper__end">
              <p className="paper__closing">{birthdayLetter.closing}</p>
              <p className="paper__sign script">
                {birthdayLetter.signOff}
                <br />
                {site.fromName}
              </p>

              <div className="paper__scratch">
                <p className="eyebrow">{s.eyebrow}</p>
                <h3 className="paper__scratch-title">{s.title}</h3>
                <p className="paper__scratch-hint">{s.hint}</p>
                <ScratchCard
                  prompt={s.prompt}
                  eyebrow={s.prizeEyebrow}
                  message={s.message}
                  skipLabel={s.skipLabel}
                  onReveal={() => complete('scratch')}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <HiddenHeart id="heart-letter" style={{ bottom: '4%', left: '4%' }} />
    </section>
  );
}
