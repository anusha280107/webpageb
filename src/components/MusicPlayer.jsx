import { useState } from 'react';
import Icon from './Icon';
import { useMusic } from '../context/MusicContext';
import { site } from '../data/siteData';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const { isPlaying, toggle, volume, setVolume, error } = useMusic();
  const [showVolume, setShowVolume] = useState(false);
  const { title, artist } = site.music;

  return (
    <div className={`player ${isPlaying ? 'is-playing' : ''}`}>
      {error && (
        <p className="player__error" role="status">
          {error}
        </p>
      )}

      {showVolume && (
        <div className="player__volume">
          <Icon name="volume" size={16} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
          />
        </div>
      )}

      <div className="player__pill">
        <button
          type="button"
          className="player__play"
          onClick={toggle}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <Icon name={isPlaying ? 'pause' : 'play'} size={20} />
        </button>

        <div className="player__info">
          <span className="player__title">
            <Icon name="music" size={13} /> {title}
          </span>
          <span className="player__artist">{artist}</span>
        </div>

        <span className="player__bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <button
          type="button"
          className="player__vol-btn"
          onClick={() => setShowVolume((v) => !v)}
          aria-label="Show volume control"
          aria-expanded={showVolume}
        >
          <Icon name="volume" size={17} />
        </button>
      </div>
    </div>
  );
}
