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
          <Eyebrow>Keeping citizens informed and empowered</Eyebrow>
          <h1 className={styles.title}>
            Government information,{' '}
            <span className={styles.gradient}>made accessible.</span>
          </h1>
          <p className={styles.heroCopy}>
            SAHAY bridges the gap between citizens and the government — bringing
            you authentic updates, AI-generated summaries, and guidance to help
            you find the right authority when you need help.
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
            Authentic sources. No sensationalism. No noise.
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
