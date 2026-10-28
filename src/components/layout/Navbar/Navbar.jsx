import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import { NAV_LINKS, toHomeHash } from '../../../data/navigation';
import logoImg from '../../../assets/images/sahay-logo.png';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.navShell}>
      <div className="wrap">
        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={styles.brand} to="/" aria-label="SAHAYY home" onClick={closeMenu}>
            <img src={logoImg} alt="SAHAYY logo" width="155" height="42" />
          </Link>

          <div
            className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
            id="navLinks"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={toHomeHash(link.href)} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>
            <Button
              variant="secondary"
              href={toHomeHash('#see-it')}
              className={styles.desktopBtn}
              onClick={closeMenu}
            >
              See the app ↗
            </Button>
            <button
              className={styles.menuToggle}
              id="menuToggle"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {isOpen ? '×' : '☰'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
