import React from 'react';
import SectionHead from '../../ui/SectionHead/SectionHead';
import FeatureCard from './FeatureCard';
import { FEATURES } from '../../../data/features';
import styles from './WhySahay.module.css';

export function WhySahay() {
  return (
    <section className={styles.section} id="why-sahay">
      <div className="wrap">
        <SectionHead
          eyebrow="Less noise, more signal"
          title={
            <>
              Stay in the loop.
              <br />
              On your own terms.
            </>
          }
          description="SAHAYY is designed to make catching up feel simple, relevant and respectful of your time."
        />
        <div className={styles.features}>
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySahay;
