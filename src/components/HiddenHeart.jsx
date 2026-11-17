import Icon from './Icon';
import { useHearts } from '../context/HeartsContext';
import './HiddenHeart.css';

/*
  Place inside any section that has `position: relative`.
  Give each heart a UNIQUE id, and position it with `style`, e.g.
  <HiddenHeart id="heart-cake" style={{ top: '12%', right: '6%' }} />
*/
export default function HiddenHeart({ id, style, className = '' }) {
  const { found, findHeart } = useHearts();
  const isFound = found.includes(id);

  return (
    <button
      type="button"
      className={`hidden-heart ${isFound ? 'is-found' : ''} ${className}`}
      style={style}
      onClick={() => findHeart(id)}
      disabled={isFound}
      aria-label={isFound ? 'Heart already found' : 'A hidden heart. Click to collect it.'}
    >
      <Icon name="heart" size={24} />
    </button>
  );
}
