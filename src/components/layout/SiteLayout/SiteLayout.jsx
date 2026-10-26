import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../../App.css';

export function SiteLayout({ children, mainId }) {
  return (
    <div className="appRoot">
      <Navbar />
      <main id={mainId}>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
