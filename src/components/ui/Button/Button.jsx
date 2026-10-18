import React from 'react';
import styles from './Button.module.css';

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const variantClass = variant === 'secondary' ? styles.secondary : styles.primary;
  const combinedClasses = `${styles.btn} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
