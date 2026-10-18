import React, { useState } from 'react';
import styles from './FAQ.module.css';

export function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = (e) => {
    setIsOpen(e.currentTarget.open);
  };

  return (
    <details className={styles.faqItem} open={isOpen} onToggle={handleToggle}>
      <summary className={styles.summary}>
        <span>{question}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </summary>
      <p className={styles.answer}>{answer}</p>
    </details>
  );
}

export default FAQItem;
