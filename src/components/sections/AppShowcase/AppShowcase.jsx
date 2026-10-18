import React, { useState, useRef, useCallback } from 'react';
import SectionHead from '../../ui/SectionHead/SectionHead';
import CarouselCard from './CarouselCard';
import CarouselControls from './CarouselControls';
import { SCREENSHOTS } from '../../../data/screenshots';
import { useAutoPlay } from '../../../hooks/useAutoPlay';
import styles from './AppShowcase.module.css';

export function AppShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const touchStartXRef = useRef(0);
  const totalSlides = SCREENSHOTS.length;

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const showSlide = useCallback(
    (next) => {
      setActiveSlide((next + totalSlides) % totalSlides);
      setResetKey((prev) => prev + 1);
    },
    [totalSlides]
  );

  const { isPaused, containerProps, setIsInteracting } = useAutoPlay({
    activeSlide,
    totalSlides,
    interval: 5000,
    onAdvance: handleNext,
    resetKey,
  });

  const handleTouchStart = (event) => {
    setIsInteracting(true);
    touchStartXRef.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    setIsInteracting(false);
    const delta = event.changedTouches[0].screenX - touchStartXRef.current;
    if (Math.abs(delta) > 45) {
      showSlide(activeSlide + (delta < 0 ? 1 : -1));
    }
  };

  const currentSlide = SCREENSHOTS[activeSlide];
  const formattedIndex = String(activeSlide + 1).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');

  return (
    <section className={styles.section} id="see-it">
      <div className="wrap">
        <SectionHead
          eyebrow="See SAHAY in action"
          title="Real screens. Real product."
          description="These are actual screenshots from the SAHAY app, showing the news-card format and the topic filters that help shape your feed."
        />

        <div
          className={styles.productCarousel}
          aria-label="SAHAY app screenshot carousel"
          {...containerProps}
        >
          <div
            className={styles.carouselStage}
            id="productCarousel"
            aria-live="polite"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {SCREENSHOTS.map((slide, index) => (
              <CarouselCard
                key={slide.id}
                slide={slide}
                index={index}
                activeSlide={activeSlide}
                totalSlides={totalSlides}
                onSelect={showSlide}
              />
            ))}
          </div>

          <CarouselControls
            totalSlides={totalSlides}
            activeSlide={activeSlide}
            onPrev={() => showSlide(activeSlide - 1)}
            onNext={() => showSlide(activeSlide + 1)}
            onGoTo={showSlide}
          />

          <div className={styles.carouselStatus} id="carouselStatus">
            {formattedIndex} / {formattedTotal} · {currentSlide.label}
          </div>
        </div>

        <p className={styles.galleryFootnote}>
          Real screenshots from the current app. Civic assistance is a future
          direction, not a live feature.
        </p>
      </div>
    </section>
  );
}

export default AppShowcase;
