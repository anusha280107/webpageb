import { useState } from 'react';
import { useMusic } from '../context/MusicContext';
import { secret } from '../data/siteData';

export default function VideoMessage() {
  const { pause: pauseMusic } = useMusic();
  const [failed, setFailed] = useState(false);
  const v = secret.video;

  return (
    <div className="s-card s-card--video">
      <p className="eyebrow">Personal video</p>
      <h3 className="s-card__title">{v.title}</h3>
      <p className="s-card__sub">{v.subtitle}</p>

      <div className="video-frame">
        {failed ? (
          <div className="video-frame__missing">
            <p>{v.missing}</p>
          </div>
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            poster={v.poster || undefined}
            src={v.src}
            onPlay={pauseMusic}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
