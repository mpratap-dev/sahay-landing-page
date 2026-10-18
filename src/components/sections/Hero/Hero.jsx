import React from 'react';
import Eyebrow from '../../ui/Eyebrow/Eyebrow';
import Button from '../../ui/Button/Button';
import HeroVisual from './HeroVisual';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`wrap ${styles.heroGrid}`}>
        <div>
          <Eyebrow>A more personal way to stay informed</Eyebrow>
          <h1 className={styles.title}>
            News for your world. <span className={styles.gradient}>Not more noise.</span>
          </h1>
          <p className={styles.heroCopy}>
            Choose the topics you care about. SAHAY brings you concise,
            curated news briefs, so you can keep up with what matters to you
            without an endless, overwhelming feed.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" href="#how-it-works">
              Discover how it works <span aria-hidden="true">↗</span>
            </Button>
            <Button variant="secondary" href="#see-it">
              Explore real app screens
            </Button>
          </div>
          <div className={styles.quietProof}>
            <span className={styles.dot} />
            Your interests shape your feed. You stay in control.
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
