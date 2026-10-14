import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { Asset2Logo } from './CafeLogo';

interface HeaderProps {
  onScrollToPage: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToPage }) => {
  return (
    <header
      className="relative z-40 bg-[#140803] border-b border-[#3b1e10] px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 shadow-lg"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        {/* Exact match to image.png using Asset 2.svg as the official logo */}
        <button
          onClick={() => onScrollToPage('page-1')}
          className="flex flex-col items-center gap-2 sm:gap-3 hover:opacity-95 transition-opacity cursor-pointer"
          title="Scroll to Top of Menu"
        >
          {/* Official 5-Star Logo from Asset 2.svg - Centered at top */}
          <div className="shrink-0 flex items-center justify-center">
            <Asset2Logo width={140} />
          </div>

          {/* HIGH QUALITY CAFÉ - Bold Golden Title - Centered underneath stars */}
          <span
            className="font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] leading-none text-[#f3b432] text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.6), 0 0 12px rgba(243, 180, 50, 0.25)',
            }}
          >
            {RESTAURANT_INFO.name}
          </span>
        </button>
      </div>
    </header>
  );
};
