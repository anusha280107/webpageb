import { useState } from 'react';
import Icon from './Icon';

export default function Photo({ src, alt, label = 'Your photo goes here', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
        <Icon name="heart" size={30} />
        <span>{label}</span>
      </div>
    );
  }

  return (
    <img
      className={`photo photo--img ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
