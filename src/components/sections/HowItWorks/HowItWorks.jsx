import React from 'react';
import Eyebrow from '../../ui/Eyebrow/Eyebrow';
import StepCard from './StepCard';
import { STEPS } from '../../../data/steps';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={`wrap ${styles.howGrid}`}>
        <div className={styles.howCopy}>
          <Eyebrow>Simple by design</Eyebrow>
          <h2>How SAHAY helps you.</h2>
          <p>
            From discovering what the government is doing to finding the right
            authority for your civic issues — SAHAY is built to help you every step of the way.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <StepCard
              key={step.num}
              num={step.num}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
