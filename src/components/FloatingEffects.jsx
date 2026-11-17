import { useState } from 'react';
import Icon from './Icon';
import './FloatingEffects.css';

const rand = (min, max) => Math.random() * (max - min) + min;

function build(count, kind, { minSize, maxSize, minDur, maxDur }) {
  return Array.from({ length: count }, (_, i) => {
    const duration = rand(minDur, maxDur);
    return {
      id: `${kind}-${i}`,
      kind,
      left: rand(0, 100),
      top: rand(0, 100),
      size: rand(minSize, maxSize),
      duration,
      delay: -rand(0, duration), // negative delay = already mid-animation on load
      drift: rand(-50, 50),
    };
  });
}

export default function FloatingEffects() {
  // Generated once, so nothing re-randomises on re-render
  const [items] = useState(() => [
    ...build(9, 'heart', { minSize: 12, maxSize: 26, minDur: 14, maxDur: 24 }),
    ...build(12, 'petal', { minSize: 10, maxSize: 18, minDur: 12, maxDur: 22 }),
    ...build(14, 'sparkle', { minSize: 6, maxSize: 14, minDur: 3, maxDur: 7 }),
  ]);

  return (
    <div className="fx" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className={`fx__item fx__${it.kind}`}
          style={{
            left: `${it.left}%`,
            ...(it.kind === 'sparkle' ? { top: `${it.top}%` } : {}),
            '--size': `${it.size}px`,
            '--dur': `${it.duration}s`,
            '--delay': `${it.delay}s`,
            '--drift': `${it.drift}px`,
          }}
        >
          {it.kind === 'heart' && <Icon name="heart" size={it.size} />}
        </span>
      ))}
    </div>
  );
}
