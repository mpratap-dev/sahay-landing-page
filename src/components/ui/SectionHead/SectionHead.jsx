import React from 'react';
import Eyebrow from '../Eyebrow/Eyebrow';
import styles from './SectionHead.module.css';

export function SectionHead({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`${styles.sectionHead} ${className}`.trim()}>
      {eyebrow && <Eyebrow align="center">{eyebrow}</Eyebrow>}
      {title && (typeof title === 'string' ? <h2 className={styles.title}>{title}</h2> : <h2 className={styles.title}>{title}</h2>)}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionHead;
