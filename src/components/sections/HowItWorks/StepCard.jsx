import React from 'react';
import styles from './HowItWorks.module.css';

export function StepCard({ num, title, description }) {
  return (
    <article className={styles.step}>
      <div className={styles.stepNum}>{num}</div>
      <div>
        <h3 className={styles.stepTitle}>{title}</h3>
        <p className={styles.stepDesc}>{description}</p>
      </div>
    </article>
  );
}

export default StepCard;
