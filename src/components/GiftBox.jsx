import { useState } from 'react';
import Icon from './Icon';
import { useProgress } from '../context/ProgressContext';
import { fireConfetti } from '../utils/confetti';
import { secret } from '../data/siteData';

export default function GiftBox() {
  const { complete } = useProgress();
  const [open, setOpen] = useState(false);
  const g = secret.gift;

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    complete('gift');
    fireConfetti({ count: 170, origin: { x: 0.5, y: 0.65 } });
  };

  return (
    <div className="s-card s-card--gift">
      <p className="eyebrow">Hidden gift</p>
      <h3 className="s-card__title">{g.title}</h3>
      {!open && <p className="s-card__sub">{g.hint}</p>}

      <button
        type="button"
        className={`gift ${open ? 'is-open' : ''}`}
        onClick={handleOpen}
        aria-label={open ? 'The gift box is open' : 'Open the gift box'}
      >
        <span className="gift__burst" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="gift__heart">
              <Icon name="heart" size={22} />
            </span>
          ))}
        </span>
        <span className="gift__body" />
        <span className="gift__lid" />
        <span className="gift__bow" />
      </button>

      {open && (
        <div className="gift__message">
          <h4 className="gift__message-title">{g.openedTitle}</h4>
          {g.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {g.signOff && <p className="gift__sign">{g.signOff}</p>}
        </div>
      )}
    </div>
  );
}
