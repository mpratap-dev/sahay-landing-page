import React from 'react';
import styles from './AppShowcase.module.css';

export function CarouselCard({
  slide,
  index,
  activeSlide,
  totalSlides,
  onSelect,
}) {
  const offset = (index - activeSlide + totalSlides) % totalSlides;

  let stateClass = styles.isHidden;
  let isInteractive = false;

  if (offset === 0) {
    stateClass = styles.isActive;
    isInteractive = true;
  } else if (offset === 1) {
    stateClass = styles.isNext;
    isInteractive = true;
  } else if (offset === totalSlides - 1) {
    stateClass = styles.isPrev;
    isInteractive = true;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(index);
    }
  };

  return (
    <figure
      className={`${styles.carouselCard} ${stateClass}`}
      data-slide={index}
      tabIndex={isInteractive ? 0 : -1}
      role="button"
      aria-label={slide.actionLabel || `Show slide ${index + 1}`}
      aria-pressed={offset === 0}
      onClick={() => {
        if (offset !== 0) onSelect(index);
      }}
      onKeyDown={handleKeyDown}
    >
      <img
        src={slide.image}
        alt={slide.alt}
        loading={index === 0 ? 'eager' : 'lazy'}
        width="290"
        height="580"
      />
      <figcaption className={styles.cardCaption}>
        <strong>{slide.title}</strong>
        <span>{slide.subtitle}</span>
      </figcaption>
    </figure>
  );
}

export default CarouselCard;
