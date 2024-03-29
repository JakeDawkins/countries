import React from 'react';
import type { BaseIconProps } from '../types';

function ArrowLeft({
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
        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 12H3.67004"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeft;
