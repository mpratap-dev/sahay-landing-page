import React from 'react';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import '../styles/global.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'SAHAYY — News that fits your world',
  description:
    'SAHAYY helps you stay informed with concise news shaped around your interests, without the noise.',
  icons: {
    icon: '/assets/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#070F21',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}

