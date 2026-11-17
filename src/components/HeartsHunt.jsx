import Icon from './Icon';
import { useHearts } from '../context/HeartsContext';
import { site, secret } from '../data/siteData';

export default function HeartsHunt() {
  const { count, total, allFound } = useHearts();
  const { title, paragraphs } = site.heartsHunt;

  return (
    <div className="s-card s-card--hunt">
      <p className="eyebrow">Treasure hunt</p>
      <h3 className="s-card__title">{secret.hunt.title}</h3>
      <p className="s-card__sub">{secret.hunt.hint}</p>

      <div className="hunt" role="status" aria-label={`${count} of ${total} hearts found`}>
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`hunt__heart ${i < count ? 'is-found' : ''}`}>
            <Icon name="heart" size={34} />
          </span>
        ))}
      </div>
      <p className="hunt__count">
        {count} of {total} found
      </p>

      {allFound && (
        <div className="hunt__reward">
          <h4 className="gift__message-title">{title}</h4>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <p className="gift__sign">{site.fromName}</p>
        </div>
      )}
    </div>
  );
}
