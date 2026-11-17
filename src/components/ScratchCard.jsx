import { useCallback, useEffect, useRef, useState } from 'react';
import { fireConfetti } from '../utils/confetti';
import './ScratchCard.css';

const BRUSH = 38;

export default function ScratchCard({ prompt, eyebrow, message, skipLabel, onReveal }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const last = useRef(null);
  const lastCheck = useRef(0);
  const revealedRef = useRef(false);
  const [revealed, setRevealed] = useState(false);

  // Paint the silver-pink cover
  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const { width, height } = wrap.getBoundingClientRect();
    if (!width || !height) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';

    const g = ctx.createLinearGradient(0, 0, width, height);
    g.addColorStop(0, '#e6bccb');
    g.addColorStop(0.5, '#f7e9ec');
    g.addColorStop(1, '#b9d5be');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    for (let i = 0; i < 70; i += 1) {
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2.4 + 0.8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#a85d77';
    ctx.font = '600 28px "Dancing Script", cursive';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(prompt, width / 2, height / 2);
  }, [prompt]);

  useEffect(() => {
    paintCover();
    const onResize = () => {
      if (!revealedRef.current) paintCover();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [paintCover]);

  const reveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setRevealed(true);
    fireConfetti({ count: 130, origin: { x: 0.5, y: 0.5 } });
    if (onReveal) onReveal();
  }, [onReveal]);

  // Count how much of the cover has been scratched away
  const checkProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;
    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    let total = 0;
    for (let i = 3; i < data.length; i += 32) {
      total += 1;
      if (data[i] < 128) cleared += 1;
    }
    if (total && cleared / total > 0.5) reveal();
  }, [reveal]);

  const getPoint = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const scratch = (from, to) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = BRUSH;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(to.x, to.y, BRUSH / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const onDown = (e) => {
    if (revealedRef.current) return;
    drawing.current = true;
    if (canvasRef.current.setPointerCapture) canvasRef.current.setPointerCapture(e.pointerId);
    last.current = getPoint(e);
    scratch(last.current, last.current);
  };

  const onMove = (e) => {
    if (!drawing.current || revealedRef.current) return;
    const point = getPoint(e);
    scratch(last.current, point);
    last.current = point;
    const now = performance.now();
    if (now - lastCheck.current > 180) {
      lastCheck.current = now;
      checkProgress();
    }
  };

  const onUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    checkProgress();
  };

  return (
    <div className="scratch-wrap">
      <div className="scratch" ref={wrapRef}>
        <div className="scratch__prize">
          <p className="scratch__eyebrow">{eyebrow}</p>
          <p className="scratch__message">{message}</p>
        </div>
        <canvas
          ref={canvasRef}
          className={`scratch__canvas ${revealed ? 'is-revealed' : ''}`}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          aria-label="Scratch card. Drag to scratch."
        />
      </div>
      {!revealed && (
        <button type="button" className="scratch__skip" onClick={reveal}>
          {skipLabel}
        </button>
      )}
    </div>
  );
}
