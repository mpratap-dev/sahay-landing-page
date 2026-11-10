const DEFAULT_ANALYTICS_PROCESSOR_NAME = 'PostHog';

/** A blank or missing env value keeps the current analytics processor. */
export function analyticsProcessorName(
  raw = import.meta.env.VITE_ANALYTICS_PROCESSOR_NAME,
) {
  const trimmed = typeof raw === 'string' ? raw.trim() : '';
  return trimmed.length > 0 ? trimmed : DEFAULT_ANALYTICS_PROCESSOR_NAME;
}
