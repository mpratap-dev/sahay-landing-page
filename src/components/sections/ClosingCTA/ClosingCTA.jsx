import React from 'react';
import Eyebrow from '../../ui/Eyebrow/Eyebrow';
import Button from '../../ui/Button/Button';
import styles from './ClosingCTA.module.css';

export function ClosingCTA() {
  return (
    <section className={styles.closing}>
      <div className="wrap">
        <div className={styles.closingInner}>
          <Eyebrow align="center">Make room for what matters</Eyebrow>
          <h2 className={styles.title}>A little more clarity in your day.</h2>
          <p className={styles.description}>
            Follow your interests. Catch up on the key points. Spend less time
            sorting through noise.
          </p>
          <Button variant="primary" href="#see-it">
            Take a look inside SAHAYY ↗
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ClosingCTA;
