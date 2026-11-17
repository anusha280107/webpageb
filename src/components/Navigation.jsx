import { useEffect, useState } from 'react';
import Icon from './Icon';
import { site } from '../data/siteData';
import './Navigation.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('welcome');

  // Highlight the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    site.nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = site.nav.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        className={`nav__link ${active === id ? 'is-active' : ''}`}
        onClick={(e) => go(e, id)}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className="nav">
      <div className="nav__bar">
        <a href="#welcome" className="nav__brand" onClick={(e) => go(e, 'welcome')}>
          <Icon name="heart" size={18} />
          {site.navBrand}
        </a>

        <ul className="nav__links">{links}</ul>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {open && <ul className="nav__menu">{links}</ul>}
    </header>
  );
}
