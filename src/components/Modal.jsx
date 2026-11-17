import { useEffect } from 'react';
import Icon from './Icon';
import './Modal.css';

export default function Modal({ open, onClose, label, wide = false, children }) {
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

  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div
        className={`modal__panel ${wide ? 'modal__panel--wide' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
