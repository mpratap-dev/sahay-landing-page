import React from 'react';
import styles from './AppShowcase.module.css';

export function CarouselControls({
  totalSlides,
  activeSlide,
  onPrev,
  onNext,
  onGoTo,
}) {
  return (
    <div className={styles.carouselControls}>
      <button
        className={styles.carouselArrow}
        type="button"
        aria-label="Previous screenshot"
        onClick={onPrev}
      >
        ‹
      </button>

      <div
        className={styles.carouselDots}
        role="group"
        aria-label="Choose screenshot"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${
              index === activeSlide ? styles.dotActive : ''
            }`}
            type="button"
            aria-label={`Screenshot ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => onGoTo(index)}
          />
        ))}
      </div>

      <button
        className={styles.carouselArrow}
        type="button"
        aria-label="Next screenshot"
        onClick={onNext}
      >
        ›
      </button>
    </div>
  );
}

export default CarouselControls;
