import React from 'react';
import OpenInApp from '../../../views/OpenInApp/OpenInApp';

export const metadata = {
  title: 'Open in SAHAYY',
  description: 'Open this story in the SAHAYY app.',
};

export function generateStaticParams() {
  return [{ id: 'app' }];
}

export default function FeedDeepLinkPage() {
  return <OpenInApp />;
}
