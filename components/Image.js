import React, { lazy, Suspense } from 'react';

// Define a lazy-loaded version of the <img> component
const LazyImage = lazy(() => import('./LazyImage'));

function Image({ src, alt }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyImage src={src} alt={alt} />
    </Suspense>
  );
}

export default Image;