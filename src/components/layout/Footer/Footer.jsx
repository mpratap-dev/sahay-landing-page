import React from 'react';
import { FOOTER_LINKS } from '../../../data/navigation';
import logoImg from '../../../assets/images/sahay-logo.png';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerRow}`}>
        <a className={styles.footerBrand} href="#top" aria-label="Back to top">
          <img src={logoImg} alt="SAHAY logo" width="105" height="28" />
        </a>
        <div className={styles.tagline}>
          Personalised news, with a longer-term civic vision.
        </div>
        <div className={styles.footerLinks}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
