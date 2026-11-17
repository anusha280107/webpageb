import { useCallback, useEffect, useState } from 'react';

// Types out `text` a few letters at a time once `active` is true.
export default function useTyping(text, active, speed = 26, step = 2) {
  const [count, setCount] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? text.length
      : 0
  );

  useEffect(() => {
    if (!active || count >= text.length) return undefined;
    const id = setTimeout(() => setCount((c) => Math.min(c + step, text.length)), speed);
    return () => clearTimeout(id);
  }, [active, count, text, speed, step]);

  const skip = useCallback(() => setCount(text.length), [text]);

  return { typed: text.slice(0, count), done: count >= text.length, skip };
}
