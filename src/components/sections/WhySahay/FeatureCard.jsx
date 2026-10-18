import React from 'react';
import styles from './WhySahay.module.css';

export function FeatureCard({ icon, title, description }) {
  return (
    <article className={styles.feature}>
      <div className={styles.featureIcon} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </article>
  );
}

export default FeatureCard;
