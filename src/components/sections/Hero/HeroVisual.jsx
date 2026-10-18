import React from 'react';
import sportsImg from '../../../assets/images/news-sports.png';
import styles from './Hero.module.css';

export function HeroVisual() {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.screenFrame}>
        <img
          src={sportsImg}
          alt="Real SAHAY app screenshot showing a concise sports news brief and topic filters"
          width="355"
          height="720"
        />
      </div>
      <div className={`${styles.screenNote} ${styles.noteOne}`}>
        <strong>
          <span className={styles.noteMark}>✳</span>Built around your interests
        </strong>
        <span>Choose the topics you want to follow</span>
      </div>
      <div className={`${styles.screenNote} ${styles.noteTwo}`}>
        <strong>
          <span className={styles.noteMark}>≋</span>Short, useful briefs
        </strong>
        <span>Get the key points at a glance</span>
      </div>
    </div>
  );
}

export default HeroVisual;
