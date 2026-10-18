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
              Our longer-term vision · In development
            </span>
            <h2 className={styles.title}>
              From staying informed to finding the right help.
            </h2>
            <p>
              We believe understanding what's happening is only one part of being
              an informed citizen. Over time, SAHAY aims to make civic information
              easier to navigate, helping people discover relevant public services
              and understand where to turn for support.
            </p>
            <p>
              <strong>
                This is a future direction, not a feature available in the app today.
              </strong>{' '}
              We're focused on building the news experience first and learning
              from real users.
            </p>
          </div>

          <VisionOrbit />
        </div>
      </div>
    </section>
  );
}

export default Vision;
