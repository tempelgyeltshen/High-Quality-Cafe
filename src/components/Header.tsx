import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { FacetedFiveStars } from './CafeLogo';

interface HeaderProps {
  onScrollToPage: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToPage }) => {
  return (
    <header
      className="sticky top-0 z-40 bg-[#140803] border-b border-[#3b1e10] px-4 sm:px-6 py-3.5 shadow-lg"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      <div className="max-w-xl mx-auto flex items-center justify-center sm:justify-start">
        {/* Exactly matching image.png: [5 Faceted Gold Stars] [HIGH QUALITY CAFÉ] on one line */}
        <button
          onClick={() => onScrollToPage('page-2')}
          className="flex items-center gap-3 sm:gap-4 hover:opacity-95 transition-opacity text-left cursor-pointer"
        >
          {/* 5 Faceted Gold Stars */}
          <div className="shrink-0 flex items-center">
            <FacetedFiveStars scale={0.78} />
          </div>

          {/* HIGH QUALITY CAFÉ - Bold Golden Title */}
          <span
            className="font-extrabold uppercase tracking-[0.16em] leading-none text-[#f3b432] text-lg sm:text-xl md:text-2xl whitespace-nowrap"
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
