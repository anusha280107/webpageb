import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import HiddenHeart from './HiddenHeart';
import { useProgress } from '../context/ProgressContext';
import { fireConfetti } from '../utils/confetti';
import { celebration } from '../data/siteData';
import './Celebration.css';

const rand = (min, max) => Math.random() * (max - min) + min;
const COLORS = ['pink', 'green', 'cream', 'rose', 'mint'];

function makeBalloons() {
  return Array.from({ length: 9 }, (_, i) => ({
    id: i,
    left: 4 + i * 11 + rand(-3, 3),
    color: COLORS[i % COLORS.length],
    size: rand(54, 78),
    dur: rand(16, 26),
    delay: -rand(0, 20),
    sway: rand(-40, 40),
  }));
}

function Paper({ data }) {
  return (
    <article className="letter-paper">
      <p className="letter-paper__eyebrow">{data.eyebrow}</p>
      <h3 className="letter-paper__title">{data.title}</h3>
      {data.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {data.signOff && <p className="letter-paper__sign">{data.signOff}</p>}
    </article>
  );
}

export default function Celebration() {
  const { complete } = useProgress();
  const count = Math.min(Math.max(celebration.candleCount, 1), 9);

  const [lit, setLit] = useState(() => Array(count).fill(true));
  const [balloons] = useState(makeBalloons);
  const [wishOpen, setWishOpen] = useState(false);
  const [cakeOpen, setCakeOpen] = useState(false);

  const allOut = lit.every((v) => !v);

  useEffect(() => {
    if (allOut) {
      fireConfetti({ count: 200, origin: { x: 0.5, y: 0.55 } });
      complete('cake');
    }
  }, [allOut, complete]);

  const blow = (index) => setLit((prev) => prev.map((v, i) => (i === index ? false : v)));
  const relight = () => setLit(Array(count).fill(true));

  const closeWish = () => {
    setWishOpen(false);
    fireConfetti({ count: 60, origin: { x: 0.5, y: 0.5 } });
  };

  return (
    <section id="celebrate" className="section celebrate">
      <div className="celebrate__balloons" aria-hidden="true">
        {balloons.map((b) => (
          <span
            key={b.id}
            className={`balloon balloon--${b.color}`}
            style={{
              '--left': `${b.left}%`,
              '--size': `${b.size}px`,
              '--dur': `${b.dur}s`,
              '--delay': `${b.delay}s`,
              '--sway': `${b.sway}px`,
            }}
          />
        ))}
      </div>

      <div className="bunting" aria-hidden="true">
        {Array.from({ length: 16 }, (_, i) => (
          <i key={i} />
        ))}
      </div>

      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{celebration.eyebrow}</p>
          <h2 className="section-title">{celebration.title}</h2>
          <p className="section-sub">{celebration.subtitle}</p>
        </Reveal>

        <Reveal className="celebrate__stage">
          <div className="cake">
            <div className="cake__candles">
              {lit.map((isLit, i) => (
                <button
                  key={i}
                  type="button"
                  className={`candle ${isLit ? '' : 'is-out'}`}
                  onClick={() => blow(i)}
                  disabled={!isLit}
                  aria-label={isLit ? `Blow out candle ${i + 1}` : `Candle ${i + 1} is out`}
                >
                  <span className="candle__flame" />
                  <span className="candle__smoke" />
                  <span className="candle__stick" />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="cake__body"
              onClick={() => setCakeOpen(true)}
              aria-label="Tap the cake for a surprise"
            >
              <span className="cake__tier cake__tier--top" />
              <span className="cake__tier cake__tier--bottom" />
            </button>
            <span className="cake__plate" />
          </div>

          <p className="celebrate__hint">
            {allOut ? 'Every candle is out. Your wish is on its way.' : celebration.candleHint}
          </p>

          <div className="celebrate__actions">
            <button type="button" className="btn btn--primary" onClick={() => setWishOpen(true)}>
              {celebration.wishButton}
            </button>
            <button
              type="button"
              className="btn btn--sage"
              onClick={() => fireConfetti({ count: 160, origin: { x: 0.5, y: 0.7 } })}
            >
              {celebration.confettiButton}
            </button>
            {allOut && (
              <button type="button" className="btn btn--ghost" onClick={relight}>
                {celebration.relightButton}
              </button>
            )}
          </div>
        </Reveal>

        {allOut && (
          <div className="celebrate__wish">
            <Paper data={celebration.afterBlow} />
          </div>
        )}
      </div>

      <HiddenHeart id="heart-celebrate" style={{ bottom: '5%', left: '5%' }} />

      <Modal open={wishOpen} onClose={closeWish} label="Make a wish">
        <article className="letter-paper">
          <p className="letter-paper__eyebrow">{celebration.wishPrompt.eyebrow}</p>
          <h3 className="letter-paper__title">{celebration.wishPrompt.title}</h3>
          {celebration.wishPrompt.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <div className="celebrate__modal-action">
            <button type="button" className="btn btn--primary" onClick={closeWish}>
              {celebration.wishPrompt.doneButton}
            </button>
          </div>
        </article>
      </Modal>

      <Modal open={cakeOpen} onClose={() => setCakeOpen(false)} label={celebration.cakeSurprise.title}>
        <Paper data={celebration.cakeSurprise} />
      </Modal>
    </section>
  );
}
