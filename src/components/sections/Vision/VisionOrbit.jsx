import React from 'react';
import styles from './Vision.module.css';

export function VisionOrbit() {
  return (
    <div className={styles.visionVisual} aria-hidden="true">
      <div className={styles.orbit}>
        <div className={styles.orbitCore}>✦</div>
        <span className={`${styles.orbitTag} ${styles.tagA}`}>Authenticity</span>
        <span className={`${styles.orbitTag} ${styles.tagB}`}>Clarity</span>
        <span className={`${styles.orbitTag} ${styles.tagC}`}>Accessibility</span>
      </div>
    </div>
  );
}

export default VisionOrbit;
