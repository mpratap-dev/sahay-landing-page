import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook to manage auto-play for carousels.
 *
 * Features:
 * - Advances slide every `interval` ms (defaults to 5000ms / 5s).
 * - Automatic timer reset on slide changes or manual triggers.
 * - Pauses on hover (mouse over carousel).
 * - Pauses on keyboard focus (accessible navigation).
 * - Pauses during active touch swipe gestures.
 * - Pauses when tab is hidden (Page Visibility API).
 * - Pauses if user prefers reduced motion (WCAG a11y).
 * - Proper cleanup on unmount to prevent memory leaks or dangling intervals.
 */
export function useAutoPlay({
  activeSlide,
  totalSlides,
  interval = 5000,
  onAdvance,
  resetKey = 0,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(() =>
    typeof document !== 'undefined' ? !document.hidden : true
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const onAdvanceRef = useRef(onAdvance);
  useEffect(() => {
    onAdvanceRef.current = onAdvance;
  }, [onAdvance]);

  // Listen to tab visibility changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Listen to prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener?.('change', handleMotionChange);
    return () => {
      mediaQuery.removeEventListener?.('change', handleMotionChange);
    };
  }, []);

  const isPaused =
    isHovered ||
    isFocused ||
    isInteracting ||
    !isTabVisible ||
    prefersReducedMotion;

  // Set up 5-second interval timer
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timerId = setInterval(() => {
      if (onAdvanceRef.current) {
        onAdvanceRef.current();
      }
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [activeSlide, resetKey, isPaused, interval, totalSlides]);

  const containerProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocusCapture: () => setIsFocused(true),
    onBlurCapture: () => setIsFocused(false),
  };

  return {
    isPaused,
    containerProps,
    setIsInteracting,
  };
}

export default useAutoPlay;
