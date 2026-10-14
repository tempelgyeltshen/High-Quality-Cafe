import React from 'react';
import { MenuBookPageData } from '../data/menuData';
import {
  CornerFiligrees,
  PageHeaderLockup,
  CategoryPill,
} from './MenuBookDecorations';
import { Asset2Logo } from './CafeLogo';

interface MenuBookPageProps {
  page: MenuBookPageData;
}

export const MenuBookPage: React.FC<MenuBookPageProps> = ({ page }) => {
  return (
    <div
      id={`page-${page.pageNumber}`}
      className="relative w-full max-w-[380px] sm:max-w-[430px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-menu-pattern border-2 border-[#d4af37]/60 text-[#f5efe6] p-2 sm:p-3 md:p-4 pb-4 sm:pb-6 transition-all duration-300"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      {/* Outer Gold Margin Inset */}
      <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl border border-[#d4af37]/35 pointer-events-none" />

      {/* 4 Corner Filigrees */}
      <CornerFiligrees />

      {/* Top Header Lockup with Asset 2 Logo & Plaque */}
      <PageHeaderLockup />

      {/* The Central Golden Arched Card (Exact replica of the golden arch from the PDF) */}
      <div className="relative mx-1 sm:mx-1.5 md:mx-2 mt-1 rounded-t-[28px] sm:rounded-t-[36px] rounded-b-xl sm:rounded-b-2xl overflow-hidden shadow-2xl border border-[#78510a] bg-gradient-to-b from-[#d9aa38] via-[#eed27d] via-[#dcae3a] to-[#ba8a21] text-[#120903] p-3 sm:p-4 md:p-5 pt-2 sm:pt-3">
        {/* Subtle decorative arch rim highlight */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Main Category Banner Pill */}
        {page.categoryTitle && (
          <CategoryPill title={page.categoryTitle} />
        )}

        {/* Single Section Items (Pages 2, 3, 4, 6) */}
        {page.items && (
          <div className="space-y-3 sm:space-y-4 my-2">
            {page.items.map((item, idx) => (
              <div key={idx} className="group">
                {/* Dish Name (Starts with bullet •, bold uppercase, Times New Roman, no prices) */}
                <h3 className="font-bold text-[13px] sm:text-[14px] md:text-[15px] tracking-wide text-[#0f0703] flex items-baseline gap-1 sm:gap-1.5 leading-snug">
                  <span className="text-[#0f0703] text-xs sm:text-sm select-none shrink-0">•</span>
                  <span>{item.name}</span>
                </h3>

                {/* Subtitle (e.g. for Pizza: Bacon, Chicken & Cheese Pizza) */}
                {item.subtitle && (
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold text-[#2c1809] pl-3 sm:pl-3.5 mt-0.5 italic">
                    {item.subtitle}
                  </p>
                )}

                {/* Description (Underneath, clean Times New Roman serif, no leftover gaps) */}
                {item.description && (
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-[#1a0e05]/90 pl-3 sm:pl-3.5 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Sub-Category Sections (Page 5: HOT DRINKS & COLD DRINKS, Page 7: COCKTAILS AND MOCKTAILS) */}
        {page.subCategories && (
          <div className="space-y-4 sm:space-y-5 my-2">
            {page.subCategories.map((sub, sIdx) => (
              <div key={sIdx}>
                {/* Subcategory Header */}
                {page.pageNumber === 5 ? (
                  <CategoryPill title={sub.title} />
                ) : (
                  <div className="text-center my-2 sm:my-3">
                    <span className="inline-block px-3 sm:px-4 py-1 rounded-md bg-[#120803]/10 font-bold text-[10px] sm:text-xs md:text-[13px] tracking-[0.2em] uppercase text-[#120803] border-b border-[#78510a]/40">
                      • {sub.title} •
                    </span>
                  </div>
                )}

                {/* Items List (Bullet + Name, clean Times New Roman) */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 my-2">
                  {sub.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 sm:gap-1.5 font-bold text-[12px] sm:text-[13.5px] md:text-[14.5px] text-[#0f0703] tracking-wide"
                    >
                      <span className="text-[#0f0703] text-xs sm:text-sm select-none shrink-0">•</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Logo Accent between subcategories using Asset2Logo only */}
                {sIdx < (page.subCategories?.length || 0) - 1 && (
                  <div className="flex justify-center my-2 sm:my-3 opacity-75">
                    <Asset2Logo width={60} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Inner Card Bottom Arch Accent with Asset2Logo only */}
        <div className="mt-3 sm:mt-4 pt-2 sm:pt-2.5 border-t border-[#8e6518]/30 flex items-center justify-center gap-1.5 sm:gap-2.5">
          <Asset2Logo width={45} />
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-extrabold tracking-widest text-[#4d3204] uppercase">
            HIGH QUALITY CAFÉ
          </span>
          <Asset2Logo width={45} />
        </div>
      </div>

      {/* Page Number Marker */}
      <div className="mt-2 sm:mt-3 text-center text-[9px] sm:text-[10px] tracking-widest text-[#d4af37]/80 font-bold">
        PAGE {page.pageNumber}
      </div>
    </div>
  );
};
