import { useEffect, useState } from 'react';
import Icon from './Icon';
import Modal from './Modal';
import { useHearts } from '../context/HeartsContext';
import { fireConfetti } from '../utils/confetti';
import { site } from '../data/siteData';
import './HeartCounter.css';

export default function HeartCounter() {
  const { count, total, allFound } = useHearts();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (allFound) fireConfetti({ count: 220, origin: { x: 0.5, y: 0.5 } });
  }, [allFound]);

  const { title, paragraphs } = site.heartsHunt;

  return (
    <>
      <button
        type="button"
        className={`heart-counter ${allFound ? 'is-complete' : ''}`}
        onClick={() => allFound && setDismissed(false)}
        aria-label={`Hidden hearts found: ${count} of ${total}`}
      >
        <Icon name="heart" size={16} />
        <span key={count} className="heart-counter__num">
          {count}/{total}
        </span>
      </button>

      <Modal open={allFound && !dismissed} onClose={() => setDismissed(true)} label={title}>
        <article className="letter-paper">
          <p className="letter-paper__eyebrow">Hidden hearts hunt</p>
          <h3 className="letter-paper__title">{title}</h3>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <p className="letter-paper__sign">{site.fromName}</p>
        </article>
      </Modal>
    </>
  );
}
