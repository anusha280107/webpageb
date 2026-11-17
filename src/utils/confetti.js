
// Lightweight confetti burst drawn on a temporary canvas.
// Usage: fireConfetti({ count: 160, origin: { x: 0.5, y: 0.6 } })

const COLORS = ['#f4b6c2', '#e8a5b8', '#c97b92', '#b7d3b0', '#9dc4a3', '#dcefe2', '#f7e3c8', '#fffaf6'];

export function fireConfetti({ count = 140, duration = 3200, origin = { x: 0.5, y: 0.6 } } = {}) {
  if (typeof window === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;

  const canvas = document.createElement('canvas');
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const pieces = Array.from({ length: count }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3;
    const speed = 6 + Math.random() * 10;
    return {
      x: origin.x * w,
      y: origin.y * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 6 + Math.random() * 7,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      round: Math.random() < 0.3,
    };
  });

  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    ctx.clearRect(0, 0, w, h);

    const fade = elapsed > duration * 0.7 ? 1 - (elapsed - duration * 0.7) / (duration * 0.3) : 1;
    ctx.globalAlpha = Math.max(fade, 0);

    for (const p of pieces) {
      p.vy += 0.25; // gravity
      p.vx *= 0.99; // air drag
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.round) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      }
      ctx.restore();
    }

    if (elapsed < duration) {
      requestAnimationFrame(frame);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(frame);
}
