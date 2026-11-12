'use client';

import React, { useEffect, useState } from 'react';
import SiteLayout from '../components/layout/SiteLayout/SiteLayout';
import Button from '../components/ui/Button/Button';
import Eyebrow from '../components/ui/Eyebrow/Eyebrow';
import OpenInApp from '../views/OpenInApp/OpenInApp';

export default function NotFound() {
  const [isFeedRoute, setIsFeedRoute] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/feed/')) {
      setIsFeedRoute(true);
    }
  }, []);

  if (isFeedRoute) {
    return <OpenInApp />;
  }

  return (
    <SiteLayout>
      <section style={{ padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="wrap">
          <Eyebrow align="center">404</Eyebrow>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', margin: '24px 0 16px', color: 'var(--text)' }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 32px' }}>
            The page you are looking for doesn&apos;t exist or has moved.
          </p>
          <Button variant="primary" href="/">
            Back to SAHAYY
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
