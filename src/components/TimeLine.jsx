import Reveal from './Reveal';
import Photo from './Photo';
import Icon from './Icon';
import { timeline } from '../data/siteData';
import './TimeLine.css';

export default function Timeline() {
  return (
    <section id="story" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{timeline.eyebrow}</p>
          <h2 className="section-title">{timeline.title}</h2>
          <p className="section-sub">{timeline.subtitle}</p>
        </Reveal>

        <ol className="timeline">
          {timeline.items.map((item) => (
            <li className="timeline__item" key={item.id}>
              <span className="timeline__dot" aria-hidden="true">
                <Icon name="heart" size={14} />
              </span>
              <Reveal className="timeline__wrap">
                <article className="timeline__card">
                  {item.kind && <p className="timeline__kind">{item.kind}</p>}
                  {item.date && <p className="timeline__date script">{item.date}</p>}
                  <h3 className="timeline__title">{item.title}</h3>
                  <div className="timeline__photo">
                    <Photo src={item.photo} alt={item.title} label={item.photoLabel} />
                  </div>
                  <p className="timeline__message">{item.message}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
