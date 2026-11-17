import { useState } from 'react';
import Reveal from './Reveal';
import VoiceMessage from './VoiceMessage';
import SongPlayer from './SongPlayer';
import GiftBox from './GiftBox';
import HeartsHunt from './HeartsHunt';
import Finale from './Finale';
import Icon from './Icon';
import { useProgress } from '../context/ProgressContext';
import { secret } from '../data/siteData';
import './SecretEnding.css';

export default function SecretEnding() {
  const { done } = useProgress();
  const [finaleOpen, setFinaleOpen] = useState(false);

  const steps = secret.requiredSteps;
  const doneCount = steps.filter((s) => done[s.key]).length;
  const unlocked = secret.skipUnlockCheck || doneCount === steps.length;

  return (
    <section id="secret" className="section secret">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{secret.eyebrow}</p>
          <h2 className="section-title">{secret.title}</h2>
          <p className="section-sub">{secret.subtitle}</p>
        </Reveal>

        <div className="secret__grid">
          <Reveal className="secret__cell secret__cell--6">
            <VoiceMessage />
          </Reveal>
          <Reveal className="secret__cell secret__cell--6" delay={100}>
            <SongPlayer />
          </Reveal>
          <Reveal className="secret__cell secret__cell--6">
            <GiftBox />
          </Reveal>
          <Reveal className="secret__cell secret__cell--6" delay={100}>
            <HeartsHunt />
          </Reveal>
        </div>

        <Reveal className="final-panel">
          <p className="eyebrow">{secret.eyebrow}</p>
          <h3 className="final-panel__title">{secret.unlockTitle}</h3>

          {!secret.skipUnlockCheck && (
            <>
              <p className="final-panel__hint">{secret.unlockHint}</p>
              <ul className="steps">
                {steps.map((s) => (
                  <li key={s.key} className={done[s.key] ? 'is-done' : ''}>
                    {s.label}
                  </li>
                ))}
              </ul>
            </>
          )}

          <button
            type="button"
            className="btn btn--primary final-panel__btn"
            onClick={() => setFinaleOpen(true)}
            disabled={!unlocked}
          >
            <Icon name="heart" size={18} />
            {unlocked ? secret.finaleButton : `${secret.lockedButton} (${doneCount}/${steps.length})`}
          </button>
        </Reveal>
      </div>

      <Finale open={finaleOpen} onClose={() => setFinaleOpen(false)} />
    </section>
  );
}
