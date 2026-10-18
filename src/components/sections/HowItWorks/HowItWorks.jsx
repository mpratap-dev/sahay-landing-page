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
          <h2>Three steps to a more relevant feed.</h2>
          <p>
            You shouldn't have to work hard to stay informed. Start with what
            matters to you and let SAHAY help you catch up.
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
