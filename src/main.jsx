import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import OpenInApp from './pages/OpenInApp/OpenInApp';
import PrivacyPolicy from './pages/LegalPolicy/LegalPolicy';
import DeleteAccount from './pages/DeleteAccount/DeleteAccount';
import Contact from './pages/Contact/Contact';
import './styles/global.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/feed/:id" element={<OpenInApp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
