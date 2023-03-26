import React, { lazy, Suspense } from 'react';

// Define a lazy-loaded version of the <img> component
const LazyComponent = lazy(() => import('./LazyComponent'));

function Image(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent src={props.src} alt={props.alt} extraClasses={props.extraClasses} isSvg={props.isSvg} />
    </Suspense>
  );
}

export default Image;