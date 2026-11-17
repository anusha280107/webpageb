
import useCountdown from '../hooks/useCountdown';
import { site } from '../data/siteData';
import './Countdown.css';

export default function Countdown() {
  const t = useCountdown(site.birthdayDate);
  const { countdownLabel, countdownDone } = site.hero;

  if (!t.valid) {
    return (
      <p className="countdown__note">
        Set a valid birthday date in src/data/siteData.js (format: 2026-11-18)
      </p>
    );
  }

  if (t.done) {
    return (
      <div className="countdown">
        <p className="countdown__done script">{countdownDone}</p>
      </div>
    );
  }

  const units = [
    ['Days', t.days],
    ['Hours', t.hours],
    ['Minutes', t.minutes],
    ['Seconds', t.seconds],
  ];

  return (
    <div className="countdown" role="timer" aria-label={countdownLabel}>
      <span className="countdown__label">{countdownLabel}</span>
      <div className="countdown__grid">
        {units.map(([label, value]) => (
          <div className="countdown__unit" key={label}>
            <span className="countdown__num">{String(value).padStart(2, '0')}</span>
            <span className="countdown__text">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
