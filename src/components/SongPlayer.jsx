import Icon from './Icon';
import { useMusic } from '../context/MusicContext';
import { site, secret } from '../data/siteData';

export default function SongPlayer() {
  const { isPlaying, toggle, volume, setVolume, error } = useMusic();

  return (
    <div className="s-card s-card--song">
      <p className="eyebrow">Our song</p>
      <h3 className="s-card__title">{secret.song.title}</h3>
      <p className="s-card__sub">{secret.song.subtitle}</p>

      <div className="song">
        <div className={`vinyl ${isPlaying ? 'is-spinning' : ''}`} aria-hidden="true" />
        <div className="song__side">
          <p className="song__title">
            <Icon name="music" size={15} /> {site.music.title}
          </p>
          <p className="song__artist">{site.music.artist}</p>

          <div className="song__controls">
            <button
              type="button"
              className="song__btn"
              onClick={toggle}
              aria-label={isPlaying ? 'Pause our song' : 'Play our song'}
            >
              <Icon name={isPlaying ? 'pause' : 'play'} size={24} />
            </button>
            <label className="song__vol">
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
            </label>
          </div>
        </div>
      </div>

      {error && <p className="s-card__error">{error}</p>}
    </div>
  );
}
