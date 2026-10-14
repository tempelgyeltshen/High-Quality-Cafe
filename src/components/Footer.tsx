import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { Asset2Logo } from './CafeLogo';

export const Footer: React.FC = () => {
  return (
    <footer
      className="mt-12 sm:mt-16 border-t border-[#341b10] bg-[#120a06] text-[#bcaaa0] pt-8 sm:pt-10 pb-12 sm:pb-16 px-3 sm:px-4 text-center"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      <div className="max-w-md mx-auto space-y-3 sm:space-y-4">
        {/* Official 5-Star Logo (Asset 2.svg only) */}
        <div className="flex justify-center">
          <Asset2Logo width={90} />
        </div>

        <div className="text-lg sm:text-xl font-bold text-white tracking-[0.14em] sm:tracking-[0.16em] uppercase">
          {RESTAURANT_INFO.name}
        </div>
        <p className="text-[11px] sm:text-xs text-[#9d8977] leading-relaxed">
          Where quality meets taste.
        </p>

        <div className="pt-4 sm:pt-6 border-t border-[#26140b] text-[10px] sm:text-[11px] text-[#716155]">
          © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
