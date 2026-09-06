import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const isLight = variant === 'light';
  
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
  };

  return (
    <a href="#" className={`flex items-center gap-2.5 group select-none ${className}`} id="forgex-logo-brand">
      {/* Precision Geometric Industrial Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-blue-600/20 rounded-lg blur-[6px] group-hover:bg-blue-500/30 transition-all"></div>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer precision hex-ring hints */}
          <rect x="2" y="2" width="32" height="32" rx="7" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
          {/* Tech crossed chevrons forming the X */}
          <path
            d="M9 10L15 18L9 26H13.5L17.5 20.5L21.5 26H26L20 18L26 10H21.5L17.5 15.5L13.5 10H9Z"
            fill="url(#forgex-gradient)"
          />
          <circle cx="17.5" cy="18" r="2" fill="#38bdf8" />
          <defs>
            <linearGradient id="forgex-gradient" x1="9" y1="10" x2="26" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#2563eb" />
              <stop offset="1" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight font-['Space_Grotesk',sans-serif] ${textSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors`}>
          FORGEX
        </span>
        <span className={`font-semibold tracking-[0.28em] ${subSizes[size]} ${isLight ? 'text-slate-400' : 'text-slate-500'} uppercase mt-0.5`}>
          MANUFACTURING
        </span>
      </div>
    </a>
  );
};
