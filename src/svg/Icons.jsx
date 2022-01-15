import React from 'react';
import IconsSVG from './icons.svg';

export default function Icons({name, color, width, height}) {

  return(
    <svg fill={color} stroke={color} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

