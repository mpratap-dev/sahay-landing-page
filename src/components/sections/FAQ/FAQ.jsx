import React from 'react';
import SectionHead from '../../ui/SectionHead/SectionHead';
import FAQItem from './FAQItem';
import { FAQS } from '../../../data/faq';
import styles from './FAQ.module.css';

export function FAQ() {
  return (
    <section className={styles.section} id="faq">
      <div className="wrap">
        <SectionHead eyebrow="A few useful answers" title="Good to know." />
        <div className={styles.faqGrid}>
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
