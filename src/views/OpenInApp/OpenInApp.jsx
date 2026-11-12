import React from 'react';
import Button from '../../components/ui/Button/Button';
import Eyebrow from '../../components/ui/Eyebrow/Eyebrow';
import SiteLayout from '../../components/layout/SiteLayout/SiteLayout';
import { PLAY_STORE_URL } from '../../data/store';
import styles from './OpenInApp.module.css';

export function OpenInApp() {
  return (
    <SiteLayout>
      <section className={styles.page}>
        <div className="wrap">
          <div className={styles.panel}>
            <Eyebrow align="center">Open in SAHAYY</Eyebrow>
            <h1 className={styles.title}>This story is in the app.</h1>
            <p className={styles.description}>
              Get SAHAYY on Google Play to read this brief on your phone. If the
              app is already installed, this link should open it directly.
            </p>
            <div className={styles.actions}>
              <Button
                variant="primary"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play <span aria-hidden="true">↗</span>
              </Button>
              <Button variant="secondary" href="/">
                Back to SAHAYY
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default OpenInApp;
