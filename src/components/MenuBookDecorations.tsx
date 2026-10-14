import React from 'react';
import { FacetedFiveStars } from './CafeLogo';

export const CornerFiligrees: React.FC = () => {
  return (
    <>
      {/* Top Left */}
      <svg
        className="absolute top-2.5 left-2.5 w-8 h-8 text-[#d4af37] opacity-80 pointer-events-none"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path d="M2 34 L2 2 L34 2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 28 L5 5 L28 5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M2 2 C12 2, 20 10, 20 20 C20 12, 28 4, 36 4" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>

      {/* Top Right */}
      <svg
        className="absolute top-2.5 right-2.5 w-8 h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-x-100"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path d="M2 34 L2 2 L34 2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 28 L5 5 L28 5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M2 2 C12 2, 20 10, 20 20 C20 12, 28 4, 36 4" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom Left */}
      <svg
        className="absolute bottom-2.5 left-2.5 w-8 h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-y-100"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path d="M2 34 L2 2 L34 2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 28 L5 5 L28 5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M2 2 C12 2, 20 10, 20 20 C20 12, 28 4, 36 4" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute bottom-2.5 right-2.5 w-8 h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-x-100 -scale-y-100"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path d="M2 34 L2 2 L34 2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 28 L5 5 L28 5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M2 2 C12 2, 20 10, 20 20 C20 12, 28 4, 36 4" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </>
  );
};

export const PageHeaderLockup: React.FC = () => {
  return (
    <div className="text-center pt-4 pb-2 px-4 relative z-10">
      {/* 5 Faceted Gold Stars from User's Logo */}
      <div className="flex justify-center mb-1 drop-shadow-sm">
        <FacetedFiveStars scale={0.75} />
      </div>

      {/* Top Symmetrical Flourish Bracket with Spire */}
      <div className="flex justify-center items-center my-0.5 text-[#d4af37] opacity-85">
        <svg width="150" height="20" viewBox="0 0 150 20" fill="none">
          <path
            d="M5 15 C35 15, 55 18, 75 5 C95 18, 115 15, 145 15"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path d="M75 1 L75 12" stroke="currentColor" strokeWidth="1.2" />
          <path d="M71 7 L75 1 L79 7" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="75" cy="14" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Cartouche Plaque: HIGH QUALITY CAFÉ */}
      <div className="inline-block relative my-1">
        <div
          className="px-7 sm:px-9 py-1.5 rounded-sm bg-gradient-to-r from-[#b38421] via-[#fae08c] to-[#b38421] text-[#120803] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase shadow-md border border-[#946914] relative"
          style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
        >
          HIGH QUALITY CAFÉ
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#b38421] rounded-l-sm" />
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#b38421] rounded-r-sm" />
        </div>
      </div>

      {/* Bottom Symmetrical Flourish Bracket */}
      <div className="flex justify-center items-center my-0.5 text-[#d4af37] opacity-85">
        <svg width="150" height="20" viewBox="0 0 150 20" fill="none">
          <path
            d="M5 5 C35 5, 55 2, 75 15 C95 2, 115 5, 145 5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path d="M75 19 L75 8" stroke="currentColor" strokeWidth="1.2" />
          <path d="M71 13 L75 19 L79 13" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="75" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export const CategoryPill: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-center my-3.5 sm:my-4">
      <div
        className="px-7 sm:px-10 py-1.5 sm:py-2 rounded-full bg-[#000000] text-[#fad468] font-bold text-xs sm:text-[13.5px] tracking-[0.25em] uppercase border-2 border-[#dfb249] shadow-md flex items-center gap-2.5 text-center"
        style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#dfb249] shrink-0" />
        <span>{title}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#dfb249] shrink-0" />
      </div>
    </div>
  );
};
