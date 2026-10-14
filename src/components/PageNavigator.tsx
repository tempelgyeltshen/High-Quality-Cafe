import React from 'react';

interface PageNavigatorProps {
  activePage: string;
  onSelectPage: (pageId: string) => void;
}

export const PageNavigator: React.FC<PageNavigatorProps> = ({
  activePage,
  onSelectPage,
}) => {
  const pages = [
    { id: 'page-2', label: 'Starter' },
    { id: 'page-3', label: 'Main Course 1' },
    { id: 'page-4', label: 'Main Course 2' },
    { id: 'page-5', label: 'Hot & Cold' },
    { id: 'page-6', label: 'Beverages' },
    { id: 'page-7', label: 'Cocktails' },
  ];

  return (
    <div
      className="sticky top-[49px] z-30 bg-[#160b06]/90 backdrop-blur-md border-b border-[#341b10] py-2 px-3 shadow-md"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      <div className="max-w-xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
        {pages.map((p) => {
          const isActive = activePage === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPage(p.id)}
              className={`px-3.5 py-1 rounded-full text-[12px] sm:text-[13px] font-bold tracking-wider whitespace-nowrap transition-colors shrink-0 ${
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
