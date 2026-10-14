import React from 'react';

export const CornerFiligrees: React.FC = () => {
  return (
    <>
      {/* Top Left */}
      <svg
        className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 w-6 h-6 sm:w-8 sm:h-8 text-[#d4af37] opacity-80 pointer-events-none"
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
        className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-x-100"
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
        className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 w-6 h-6 sm:w-8 sm:h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-y-100"
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
        className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 text-[#d4af37] opacity-80 pointer-events-none -scale-x-100 -scale-y-100"
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

export const CategoryPill: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-center my-2.5 sm:my-3.5 md:my-4">
      <div
        className="px-5 sm:px-7 md:px-10 py-1 sm:py-1.5 md:py-2 rounded-full bg-[#000000] text-[#fad468] font-bold text-[10px] sm:text-xs md:text-[13.5px] tracking-[0.22em] sm:tracking-[0.25em] uppercase border-2 border-[#dfb249] shadow-md flex items-center gap-2 sm:gap-2.5 text-center"
        style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
      >
        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#dfb249] shrink-0" />
        <span>{title}</span>
        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#dfb249] shrink-0" />
      </div>
    </div>
  );
};
