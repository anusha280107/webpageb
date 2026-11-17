import { useRef, useState } from 'react';
import Icon from './Icon';
import { useMusic } from '../context/MusicContext';
import { secret } from '../data/siteData';

export default function VoiceMessage() {
  const audioRef = useRef(null);
  const { pause: pauseMusic } = useMusic();
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const v = secret.voice;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      pauseMusic(); // so the song does not talk over your voice
      try {
        await audio.play();
        setError('');
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        setError(v.missing);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <div className="s-card s-card--voice">
      <p className="eyebrow">Voice message</p>
      <h3 className="s-card__title">{v.title}</h3>
      <p className="s-card__sub">{v.subtitle}</p>

      <div className={`voice ${playing ? 'is-playing' : ''}`}>
        <button
          type="button"
          className="voice__btn"
          onClick={toggle}
          aria-label={playing ? 'Pause voice message' : 'Play voice message'}
        >
          <Icon name={playing ? 'pause' : 'play'} size={26} />
        </button>
        <div className="voice__side">
          <span className="voice__wave" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${(i % 7) * 0.12}s` }} />
            ))}
          </span>
          <span className="voice__bar" aria-hidden="true">
            <span style={{ width: `${progress * 100}%` }} />
          </span>
        </div>
      </div>

      {error && <p className="s-card__error">{error}</p>}

      <audio
        ref={audioRef}
        src={v.src}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
        onTimeUpdate={(e) => {
          const a = e.currentTarget;
          setProgress(a.duration ? a.currentTime / a.duration : 0);
        }}
        onError={() => setError(v.missing)}
      />
    </div>
  );
}
