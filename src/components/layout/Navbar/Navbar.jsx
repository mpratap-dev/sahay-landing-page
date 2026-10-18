import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import { NAV_LINKS } from '../../../data/navigation';
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
          <a className={styles.brand} href="#top" aria-label="SAHAY home" onClick={closeMenu}>
            <img src={logoImg} alt="SAHAY logo" width="155" height="42" />
          </a>

          <div
            className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
            id="navLinks"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.navActions}>
            <Button
              variant="secondary"
              href="#see-it"
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
