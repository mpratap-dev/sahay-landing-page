export const NAV_LINKS = [
  { label: 'Why SAHAYY', href: '#why-sahay' },
  { label: 'The app', href: '#see-it' },
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's next", href: '#our-vision' },
];

export const FOOTER_LINKS = [
  { label: 'Why SAHAYY', href: '#why-sahay' },
  { label: 'The app', href: '#see-it' },
  { label: 'Our vision', href: '#our-vision' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy', absolute: true },
];

/** Hash anchors live on the marketing home; prefix so they work from /feed/:id. */
export function toHomeHash(href) {
  if (href.startsWith('#')) {
    return `/${href}`;
  }
  return href;
}
