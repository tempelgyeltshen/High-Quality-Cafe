import React from 'react';
import { MenuBookPageData } from '../data/menuData';
import {
  CornerFiligrees,
  PageHeaderLockup,
  CategoryPill,
} from './MenuBookDecorations';
import { FacetedFiveStars } from './CafeLogo';

interface MenuBookPageProps {
  page: MenuBookPageData;
}

export const MenuBookPage: React.FC<MenuBookPageProps> = ({ page }) => {
  return (
    <div
      id={`page-${page.pageNumber}`}
      className="relative w-full max-w-[430px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-menu-pattern border-2 border-[#d4af37]/60 text-[#f5efe6] p-3 sm:p-4 pb-6 transition-all duration-300"
      style={{ fontFamily: '"Times New Roman", Times, "Liberation Serif", serif' }}
    >
      {/* Outer Gold Margin Inset */}
      <div className="absolute inset-2 rounded-2xl border border-[#d4af37]/35 pointer-events-none" />

      {/* 4 Corner Filigrees */}
      <CornerFiligrees />

      {/* Top Header Lockup with 5 Faceted 3D Stars & Prominent Plaque */}
      <PageHeaderLockup />

      {/* The Central Golden Arched Card (Exact replica of the golden arch from the PDF) */}
      <div className="relative mx-1.5 sm:mx-2 mt-1 rounded-t-[36px] rounded-b-2xl overflow-hidden shadow-2xl border border-[#78510a] bg-gradient-to-b from-[#d9aa38] via-[#eed27d] via-[#dcae3a] to-[#ba8a21] text-[#120903] p-4 sm:p-5 pt-3">
        {/* Subtle decorative arch rim highlight */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Main Category Banner Pill */}
        {page.categoryTitle && (
          <CategoryPill title={page.categoryTitle} />
        )}

        {/* Single Section Items (Pages 2, 3, 4, 6) */}
        {page.items && (
          <div className="space-y-4 my-2">
            {page.items.map((item, idx) => (
              <div key={idx} className="group">
                {/* Dish Name (Starts with bullet •, bold uppercase, Times New Roman, no prices) */}
                <h3 className="font-bold text-[14px] sm:text-[15px] tracking-wide text-[#0f0703] flex items-baseline gap-1.5 leading-snug">
                  <span className="text-[#0f0703] text-sm select-none shrink-0">•</span>
                  <span>{item.name}</span>
                </h3>

                {/* Subtitle (e.g. for Pizza: Bacon, Chicken & Cheese Pizza) */}
                {item.subtitle && (
                  <p className="text-[12px] sm:text-[13px] font-semibold text-[#2c1809] pl-3.5 mt-0.5 italic">
                    {item.subtitle}
                  </p>
                )}

                {/* Description (Underneath, clean Times New Roman serif, no leftover gaps) */}
                {item.description && (
                  <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#1a0e05]/90 pl-3.5 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Sub-Category Sections (Page 5: HOT DRINKS & COLD DRINKS, Page 7: COCKTAILS AND MOCKTAILS) */}
        {page.subCategories && (
          <div className="space-y-5 my-2">
            {page.subCategories.map((sub, sIdx) => (
              <div key={sIdx}>
                {/* Subcategory Header */}
                {/* On Page 5, show individual pills for HOT DRINKS & COLD DRINKS */}
                {/* On Page 7, show clean sub-heading under main COCKTAILS AND MOCKTAILS pill */}
                {page.pageNumber === 5 ? (
                  <CategoryPill title={sub.title} />
                ) : (
                  <div className="text-center my-3">
                    <span className="inline-block px-4 py-1 rounded-md bg-[#120803]/10 font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#120803] border-b border-[#78510a]/40">
                      • {sub.title} •
                    </span>
                  </div>
                )}

                {/* Items List (Bullet + Name, clean Times New Roman) */}
                <div className="space-y-2 sm:space-y-2.5 my-2">
                  {sub.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 font-bold text-[13.5px] sm:text-[14.5px] text-[#0f0703] tracking-wide"
                    >
                      <span className="text-[#0f0703] text-sm select-none shrink-0">•</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle small logo accent between subcategories */}
                {sIdx < (page.subCategories?.length || 0) - 1 && (
                  <div className="flex justify-center my-3 opacity-60">
                    <FacetedFiveStars scale={0.4} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Inner Card Bottom Arch Accent with small logo stars and prominent High Quality Café */}
        <div className="mt-4 pt-2.5 border-t border-[#8e6518]/30 flex items-center justify-center gap-2">
          <FacetedFiveStars scale={0.35} />
          <span className="text-[10.5px] sm:text-[11.5px] font-extrabold tracking-widest text-[#4d3204] uppercase">
            HIGH QUALITY CAFÉ
          </span>
          <FacetedFiveStars scale={0.35} />
        </div>
      </div>

      {/* Page Number Marker */}
      <div className="mt-3 text-center text-[10px] tracking-widest text-[#d4af37]/80 font-bold">
        PAGE {page.pageNumber}
      </div>
    </div>
  );
};
