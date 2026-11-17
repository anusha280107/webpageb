import { useEffect, useMemo, useState } from 'react';

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

// Returns the time left until the target date, updated every second.
export default function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (Number.isNaN(target)) return { valid: false, done: false, ...ZERO };

  const diff = target - now;
  if (diff <= 0) return { valid: true, done: true, ...ZERO };

  const total = Math.floor(diff / 1000);
  return {
    valid: true,
    done: false,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
