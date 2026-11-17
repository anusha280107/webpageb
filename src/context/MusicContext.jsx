import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { site } from '../data/siteData';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.6);
  const [error, setError] = useState('');

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setError('');
    } catch (err) {
      if (err && err.name === 'AbortError') return;
      setIsPlaying(false);
      setError('Song not found yet. Add your mp3 to public/media/ (see siteData.js).');
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
  }, []);

  const toggle = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) pause();
    else play();
  }, [play, pause]);

  const setVolume = useCallback((v) => setVolumeState(v), []);

  const value = useMemo(
    () => ({ isPlaying, volume, error, play, pause, toggle, setVolume }),
    [isPlaying, volume, error, play, pause, toggle, setVolume]
  );

  return (
    <MusicContext.Provider value={value}>
      {children}
      {/* Never autoplays: playback only starts after he taps something */}
      <audio
        ref={audioRef}
        src={site.music.src}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used inside <MusicProvider>');
  return ctx;
}
