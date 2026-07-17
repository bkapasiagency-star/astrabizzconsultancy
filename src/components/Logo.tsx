import React from 'react';
import { useTheme } from '../ThemeContext';
import astrabizzIcon from '../assets/astrabizz-icon.png';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean;
}

export default function Logo({ className = '', iconOnly = false, dark }: LogoProps) {
  const { theme } = useTheme();
  const isDark = dark !== undefined ? dark : (theme === 'dark');

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="astrabizz-logo">
      {/* Official Astrabizz Logo Mark */}
      <img
        src={astrabizzIcon}
        alt="Astrabizz Consultancy"
        className="w-11 h-auto object-contain transition-transform duration-500 hover:rotate-6"
      />

      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-display text-xl font-bold tracking-tight leading-none ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Astrabizz
          </span>
          <span
            className={`font-sans text-[10px] uppercase font-bold tracking-[0.18em] mt-0.5 ${
              dark ? 'text-brand-primary' : 'text-brand-dark'
            }`}
          >
            Consultancy
          </span>
        </div>
      )}
    </div>
  );
}
