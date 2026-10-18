import React from 'react';
import styles from './Vision.module.css';

export function VisionOrbit() {
  return (
    <div className={styles.visionVisual} aria-hidden="true">
      <div className={styles.orbit}>
        <div className={styles.orbitCore}>✦</div>
        <span className={`${styles.orbitTag} ${styles.tagA}`}>Understand</span>
        <span className={`${styles.orbitTag} ${styles.tagB}`}>Find guidance</span>
        <span className={`${styles.orbitTag} ${styles.tagC}`}>Take action</span>
      </div>
    </div>
  );
}

export default VisionOrbit;
