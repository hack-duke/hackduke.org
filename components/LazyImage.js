import React from 'react';

function LazyImage({ src, alt }) {
  return <img className="rounded-2xl" src={src} alt={alt} />;
}

export default LazyImage;