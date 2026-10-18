import React from 'react';
import styles from './Eyebrow.module.css';

export function Eyebrow({ children, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? styles.center : '';
  return (
    <div className={`${styles.eyebrow} ${alignClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Eyebrow;
