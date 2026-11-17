import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Modal from './Modal';
import './Envelope.css';

/*
  Props:
  - label:  text printed on the envelope
  - tone:   'blush' | 'sage' | 'cream'
  - letter: { eyebrow, title, paragraphs: [], signOff }
  - onOpened: optional function called when opened
*/
export default function Envelope({ label, tone = 'blush', letter, onOpened }) {
  const [flapOpen, setFlapOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const open = () => {
    if (flapOpen) return;
    setFlapOpen(true);
    timer.current = setTimeout(() => setShowLetter(true), 800);
    if (onOpened) onOpened();
  };

  const close = () => {
    setShowLetter(false);
    setFlapOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`envelope envelope--${tone} ${flapOpen ? 'is-open' : ''}`}
        onClick={open}
        aria-label={`Open envelope: ${label}`}
      >
        <span className="envelope__back" />
        <span className="envelope__paper" />
        <span className="envelope__front" />
        <span className="envelope__flap" />
        <span className="envelope__seal">
          <Icon name="heart" size={16} />
        </span>
        <span className="envelope__label">{label}</span>
      </button>

      <Modal open={showLetter} onClose={close} label={letter.title}>
        <article className="letter-paper">
          <p className="letter-paper__eyebrow">{letter.eyebrow}</p>
          <h3 className="letter-paper__title">{letter.title}</h3>
          {letter.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {letter.signOff && <p className="letter-paper__sign">{letter.signOff}</p>}
        </article>
      </Modal>
    </>
  );
}
