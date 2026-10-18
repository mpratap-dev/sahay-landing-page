import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import WhySahay from './components/sections/WhySahay/WhySahay';
import AppShowcase from './components/sections/AppShowcase/AppShowcase';
import HowItWorks from './components/sections/HowItWorks/HowItWorks';
import Vision from './components/sections/Vision/Vision';
import FAQ from './components/sections/FAQ/FAQ';
import ClosingCTA from './components/sections/ClosingCTA/ClosingCTA';
import './App.css';

export function App() {
  return (
    <div className="appRoot">
      <Navbar />
      <main id="top">
        <Hero />
        <WhySahay />
        <AppShowcase />
        <HowItWorks />
        <Vision />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
