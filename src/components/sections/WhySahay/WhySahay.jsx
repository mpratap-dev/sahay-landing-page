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
          eyebrow="Two pillars, one platform"
          title={
            <>
              Informed citizens.
              <br />
              Empowered action.
            </>
          }
          description="SAHAY helps you understand what the government is doing and guides you to the right authority when you need help."
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
