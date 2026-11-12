import React from 'react';
import VisionOrbit from './VisionOrbit';
import styles from './Vision.module.css';

export function Vision() {
  return (
    <section className={styles.vision} id="our-vision">
      <div className="wrap">
        <div className={styles.visionCard}>
          <div>
            <span className={styles.futureLabel}>
              Our approach · What we stand for
            </span>
            <h2 className={styles.title}>
              Built on authenticity, clarity and accessibility.
            </h2>
            <p>
              SAHAY is built around three principles: <strong>Authenticity</strong> — information
              sourced directly from official and credible government sources.{' '}
              <strong>Clarity</strong> — simple, concise explanations without
              sensationalism. <strong>Accessibility</strong> — making government
              information and public services easier to discover and understand.
            </p>
            <p>
              Ultimately, SAHAY aims to make citizens more informed, aware and
              empowered through information and assistance sourced from the appropriate authorities.
            </p>
          </div>

          <VisionOrbit />
        </div>
      </div>
    </section>
  );
}

export default Vision;
