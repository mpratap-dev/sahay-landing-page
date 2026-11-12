import React from 'react';
import Eyebrow from '../../ui/Eyebrow/Eyebrow';
import Button from '../../ui/Button/Button';
import styles from './ClosingCTA.module.css';
import { PLAY_STORE_URL } from '../../../data/store';

export function ClosingCTA() {
  return (
    <section className={styles.closing}>
      <div className="wrap">
        <div className={styles.closingInner}>
          <Eyebrow align="center">For every citizen</Eyebrow>
          <h2 className={styles.title}>Stay informed. Find the right help.</h2>
          <p className={styles.description}>
            Authentic government updates. Clear summaries. Guidance to the right
            authority — when you need it most.
          </p>
          <Button
            variant="primary"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on Google Play ↗
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ClosingCTA;
