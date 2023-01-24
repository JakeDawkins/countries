import React from 'react';
import type { BaseIconProps } from '../types';

function ArrowRight({
  size = 32,
  color = '#000000',
  accessibilityLabel,
}: BaseIconProps) {
  return (
    <svg
      aria-label={accessibilityLabel}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowRight;
