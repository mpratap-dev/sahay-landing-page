import React from 'react';
import Eyebrow from '../../ui/Eyebrow/Eyebrow';
import styles from './DownloadApp.module.css';
import { PLAY_STORE_URL } from '../../../data/store';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Curated briefs',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Your interests',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    label: 'Trusted sources',
  },
];

function PlayStoreBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.badge}
      aria-label="Get it on Google Play"
    >
      <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.18 23.76c.3.17.65.18.97.05l13.54-7.82-2.9-2.91-11.61 10.68z" fill="#EA4335"/>
        <path d="M22.47 10.28 19.2 8.4l-3.27 3.27 3.27 3.27 3.3-1.9a1.69 1.69 0 0 0 0-2.76z" fill="#FBBC04"/>
        <path d="M3.18.24A1.69 1.69 0 0 0 2.5 1.6v20.8c0 .57.3 1.07.68 1.36L15.93 11.67 3.18.24z" fill="#4285F4"/>
        <path d="M4.15.19 17.69 8l-2.9 2.9L3.18.24A1.37 1.37 0 0 1 4.15.19z" fill="#34A853"/>
      </svg>
      <div className={styles.badgeText}>
        <span className={styles.badgeEyebrow}>GET IT ON</span>
        <span className={styles.badgeStore}>Google Play</span>
      </div>
    </a>
  );
}

export function DownloadApp() {
  return (
    <section className={styles.section} id="download">
      <div className="wrap">
        <div className={styles.inner}>
          {/* Background glow orbs */}
          <div className={styles.glowBlue} aria-hidden="true" />
          <div className={styles.glowTeal} aria-hidden="true" />

          <div className={styles.content}>
            <Eyebrow align="center">Now available on Android</Eyebrow>

            <h2 className={styles.title}>
              Make room for news{' '}
              <span className={styles.serif}>that</span>{' '}
              <span className={styles.serif}>matters.</span>
            </h2>

            <p className={styles.description}>
              Your interests. Your news. Your SAHAYY.{' '}
              Get concise, curated news briefs designed around what matters to you — free to download.
            </p>

            <PlayStoreBadge />

            <p className={styles.meta}>Free to download · Android</p>

            <div className={styles.pills}>
              {features.map((f) => (
                <div key={f.label} className={styles.pill}>
                  <span className={styles.pillIcon}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;

