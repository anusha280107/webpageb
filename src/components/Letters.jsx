import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import Envelope from './Envelope';
import { useProgress } from '../context/ProgressContext';
import { letters } from '../data/siteData';
import './Letters.css';

export default function Letters() {
  const { complete } = useProgress();
  const [opened, setOpened] = useState([]);
  const total = letters.items.length;

  const handleOpened = (id) =>
    setOpened((prev) => (prev.includes(id) ? prev : [...prev, id]));

  useEffect(() => {
    if (opened.length >= total) complete('letters');
  }, [opened, total, complete]);

  return (
    <section id="letters" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{letters.eyebrow}</p>
          <h2 className="section-title">{letters.title}</h2>
          <p className="section-sub">{letters.subtitle}</p>
        </Reveal>

        <div className="letters__grid">
          {letters.items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 120}
              className={`letters__item ${item.special ? 'letters__item--special' : ''}`}
            >
              {item.special && <span className="letters__badge">Special</span>}
              <div className="letters__env">
                <Envelope
                  label={item.label}
                  tone={item.tone}
                  letter={item.letter}
                  onOpened={() => handleOpened(item.id)}
                />
              </div>
              <p className="letters__note">{item.note}</p>
            </Reveal>
          ))}
        </div>

        <p className="letters__progress">
          {opened.length} of {total} letters opened
        </p>
      </div>
    </section>
  );
}
