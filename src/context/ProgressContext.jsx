import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [done, setDone] = useState({});

  const complete = useCallback((key) => {
    setDone((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }, []);

  const value = useMemo(() => ({ done, complete }), [done, complete]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
