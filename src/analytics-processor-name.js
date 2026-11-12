const DEFAULT_ANALYTICS_PROCESSOR_NAME = 'PostHog';

/** A blank or missing env value keeps the current analytics processor. */
export function analyticsProcessorName(
  raw = process.env.NEXT_PUBLIC_ANALYTICS_PROCESSOR_NAME,
) {
  const trimmed = typeof raw === 'string' ? raw.trim() : '';
  return trimmed.length > 0 ? trimmed : DEFAULT_ANALYTICS_PROCESSOR_NAME;
}
