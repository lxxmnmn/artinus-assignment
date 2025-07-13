'use client';

import { ArrowUpFromLine } from 'lucide-react';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex flex-col items-center justify-center space-y-1 text-neutral-300 hover:text-neutral-400 transition-colors cursor-pointer"
    >
      <ArrowUpFromLine className="w-6 h-6" />
    </button>
  );
}
