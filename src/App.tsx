/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { PageNavigator } from './components/PageNavigator';
import { MenuBookPage } from './components/MenuBookPage';
import { Footer } from './components/Footer';
import { MENU_BOOK_PAGES } from './data/menuData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('page-1');

  const handleScrollToPage = (pageId: string) => {
    setActivePage(pageId);
    const element = document.getElementById(pageId);
    if (element) {
      const offset = window.innerWidth < 640 ? 130 : window.innerWidth < 768 ? 140 : 150;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll-spy: keep the navigator's active page in sync with scroll position
  useEffect(() => {
    const pageElements = MENU_BOOK_PAGES
      .map((p) => document.getElementById(`page-${p.pageNumber}`))
      .filter((el): el is HTMLElement => el !== null);

    let ticking = false;
    const updateActive = () => {
      const offset = window.innerWidth < 640 ? 130 : window.innerWidth < 768 ? 140 : 150;
      let current = pageElements.length > 0 ? pageElements[0].id : 'page-1';
      for (const el of pageElements) {
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = el.id;
        } else {
          break;
        }
      }
      // When the page is scrolled to the very bottom, the last menu page may not be
      // able to reach the trigger offset (not enough content below it). Highlight it
      // anyway, otherwise the last navigator pill can never stay active.
      if (
        pageElements.length > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      ) {
        current = pageElements[pageElements.length - 1].id;
      }
      setActivePage(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#140b07] text-[#f5efe6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#fffdfa]">
      {/* Sticky top block: Header + Quick Page Navigation stay visible while scrolling */}
      <div className="sticky top-0 z-40">
        {/* Top Header - Exact match to user's uploaded image.png */}
        <Header onScrollToPage={handleScrollToPage} />

        {/* Sticky Quick Page Navigation Bar */}
        <PageNavigator
          activePage={activePage}
          onSelectPage={handleScrollToPage}
        />
      </div>

      {/* Main Menu Book Container (Starts directly with the cafe menu pages) */}
      <main className="flex-1 w-full mx-auto px-2 sm:px-3 md:px-4 lg:px-6 py-4 sm:py-6 md:py-8 space-y-5 sm:space-y-8 md:space-y-10 lg:space-y-14 flex flex-col items-center">
        {MENU_BOOK_PAGES.map((page) => (
          <MenuBookPage key={page.pageNumber} page={page} />
        ))}
      </main>

      {/* Simple Clean Footer */}
      <Footer />
    </div>
  );
}
