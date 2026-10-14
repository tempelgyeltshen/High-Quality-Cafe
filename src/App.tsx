/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { PageNavigator } from './components/PageNavigator';
import { MenuBookPage } from './components/MenuBookPage';
import { Footer } from './components/Footer';
import { MENU_BOOK_PAGES } from './data/menuData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('page-2');

  const handleScrollToPage = (pageId: string) => {
    setActivePage(pageId);
    const element = document.getElementById(pageId);
    if (element) {
      const offset = 95;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#140b07] text-[#f5efe6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#fffdfa]">
      {/* Top Header - Exact match to user's uploaded image.png */}
      <Header onScrollToPage={handleScrollToPage} />

      {/* Sticky Quick Page Navigation Bar */}
      <PageNavigator
        activePage={activePage}
        onSelectPage={handleScrollToPage}
      />

      {/* Main Menu Book Container (Starts directly with the cafe menu pages) */}
      <main className="flex-1 w-full mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-10 sm:space-y-14 flex flex-col items-center">
        {MENU_BOOK_PAGES.map((page) => (
          <MenuBookPage key={page.pageNumber} page={page} />
        ))}
      </main>

      {/* Simple Clean Footer */}
      <Footer />
    </div>
  );
}
