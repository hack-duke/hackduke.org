import React from 'react';
// import { ReactSVG } from 'react-svg';

function LazyComponent(props) {
  return <img className={props.extraClasses} src={props.src} alt={props.alt} />;
}

export default LazyComponent;