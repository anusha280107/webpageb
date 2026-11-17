import Reveal from './Reveal';
import Photo from './Photo';
import Countdown from './Countdown';
import Envelope from './Envelope';
import HiddenHeart from './HiddenHeart';
import Icon from './Icon';
import { useMusic } from '../context/MusicContext';
import { site } from '../data/siteData';
import './Hero.css';

export default function Hero() {
  const { play } = useMusic();
  const { hero, secretEnvelope, music } = site;

  const handleOpen = () => {
    // The tap counts as an interaction, so the browser allows music now
    if (music.startOnOpen) play();
    const next = document.getElementById('celebrate');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="welcome" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="hero__title">{site.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero__tagline script">{site.tagline}</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero__hello">
              {hero.greeting} <span className="script">{site.nickname}</span>
            </p>
            <p className="hero__lead">{hero.message}</p>
          </Reveal>
          <Reveal delay={400}>
            <Countdown />
          </Reveal>
          <Reveal delay={500} className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={handleOpen}>
              <Icon name="heart" size={18} />
              {hero.openButton}
            </button>
          </Reveal>
          <Reveal delay={600}>
            <p className="hero__hint">{hero.heartsHint}</p>
          </Reveal>
        </div>

        <div className="hero__visual">
          <Reveal delay={200}>
            <div className="hero__frame">
              <div className="hero__photo">
                <Photo src={hero.photo} alt={hero.photoAlt} label={hero.photoLabel} />
              </div>
              <span className="hero__ribbon script">{hero.ribbon}</span>
              <HiddenHeart id="heart-welcome" style={{ top: '6%', left: '-14px' }} />
            </div>
          </Reveal>

          <Reveal delay={400} className="hero__envelope">
            <Envelope label={secretEnvelope.label} tone="sage" letter={secretEnvelope.letter} />
            <p className="hero__envelope-hint">{hero.envelopeHint}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
