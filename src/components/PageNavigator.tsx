import React from 'react';
import { NAVIGATOR_PAGES } from '../data/menuData';

interface PageNavigatorProps {
  activePage: string;
  onSelectPage: (pageId: string) => void;
}

export const PageNavigator: React.FC<PageNavigatorProps> = ({
  activePage,
  onSelectPage,
}) => {
  const pages = NAVIGATOR_PAGES;

  return (
    <div
      className="bg-[#160b06]/95 backdrop-blur-md border-b border-[#341b10] py-1 sm:py-1.5 px-1.5 shadow-md"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      <div
        className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 rounded-md"
        style={{
          overflow: 'hidden',
          width: '100%',
          maxWidth: 'calc(100vw - 16px)',
        }}
      >
        {pages.map((p) => {
          const isActive = activePage === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPage(p.id)}
              className={`flex-1 min-w-0 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-tight sm:tracking-normal uppercase truncate px-1 sm:px-1.5 md:px-2 py-1 rounded-full transition-colors duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#c59b27] via-[#fae08c] to-[#c59b27] text-[#120803] shadow'
                  : 'bg-[#22120a] text-[#cbb9aa] hover:text-[#fad468] hover:bg-[#2f180e] border border-[#3e2114]'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
