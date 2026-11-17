import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const HeartsContext = createContext(null);

export function HeartsProvider({ total, children }) {
  const [found, setFound] = useState([]);

  const findHeart = useCallback((id) => {
    setFound((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const value = useMemo(
    () => ({
      found,
      count: found.length,
      total,
      allFound: found.length >= total,
      findHeart,
    }),
    [found, total, findHeart]
  );

  return <HeartsContext.Provider value={value}>{children}</HeartsContext.Provider>;
}

export function useHearts() {
  const ctx = useContext(HeartsContext);
  if (!ctx) throw new Error('useHearts must be used inside <HeartsProvider>');
  return ctx;
}
