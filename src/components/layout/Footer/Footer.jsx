import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, toHomeHash } from '../../../data/navigation';
import logoImg from '../../../assets/images/sahay-logo.png';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerRow}`}>
        <Link className={styles.footerBrand} to="/" aria-label="SAHAYY home">
          <img src={logoImg} alt="SAHAYY logo" width="105" height="28" />
        </Link>
        <div className={styles.tagline}>
          Personalised news, with a longer-term civic vision.
        </div>
        <div className={styles.footerLinks}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={toHomeHash(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
