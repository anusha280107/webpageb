import { useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import HiddenHeart from './HiddenHeart';
import { reasons } from '../data/siteData';
import './Reasons.css';

function FlipCard({ item, number, tone }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip flip--${tone} ${item.wide ? 'flip--wide' : ''} ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`Reason ${number}: ${item.topic}. Tap to flip.`}
    >
      <span className="flip__inner">
        <span className="flip__face flip__front">
          <span className="flip__num">{String(number).padStart(2, '0')}</span>
          <span className="flip__topic">{item.topic}</span>
          <span className="flip__hint">
            <Icon name="heart" size={13} /> tap to flip
          </span>
        </span>
        <span className="flip__face flip__back">
          <span className="flip__reason">{item.reason}</span>
        </span>
      </span>
    </button>
  );
}

export default function Reasons() {
  return (
    <section id="reasons" className="section reasons">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{reasons.eyebrow}</p>
          <h2 className="section-title">{reasons.title}</h2>
          <p className="section-sub">{reasons.subtitle}</p>
        </Reveal>

        <div className="reasons__grid">
          {reasons.items.map((item, i) => (
            <Reveal key={item.topic + i} delay={(i % 4) * 90} className={item.wide ? 'reasons__cell--wide' : ''}>
              <FlipCard item={item} number={i + 1} tone={i % 2 === 0 ? 'pink' : 'green'} />
            </Reveal>
          ))}
        </div>
      </div>

      <HiddenHeart id="heart-reasons" style={{ top: '4%', right: '6%' }} />
    </section>
  );
}
