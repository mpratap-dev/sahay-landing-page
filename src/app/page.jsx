import React from 'react';
import SiteLayout from '../components/layout/SiteLayout/SiteLayout';
import Hero from '../components/sections/Hero/Hero';
import WhySahay from '../components/sections/WhySahay/WhySahay';
import AppShowcase from '../components/sections/AppShowcase/AppShowcase';
import HowItWorks from '../components/sections/HowItWorks/HowItWorks';
import Vision from '../components/sections/Vision/Vision';
import FAQ from '../components/sections/FAQ/FAQ';
import DownloadApp from '../components/sections/DownloadApp/DownloadApp';
import ClosingCTA from '../components/sections/ClosingCTA/ClosingCTA';

export default function HomePage() {
  return (
    <SiteLayout mainId="top">
      <Hero />
      <WhySahay />
      <AppShowcase />
      <HowItWorks />
      <Vision />
      <FAQ />
      <DownloadApp />
    </SiteLayout>
  );
}

