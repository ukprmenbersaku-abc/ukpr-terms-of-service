import React from 'react';
import { LucideProps } from 'lucide-react';

export const PixMorphIcon = ({ size = 24, className = "", ...props }: LucideProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="pixmorph-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#a855f7"/>
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#pixmorph-gradient)"/>
    <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(12 12) scale(0.65) translate(-12 -12)">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </g>
  </svg>
);

export default PixMorphIcon;