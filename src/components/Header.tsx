"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-xl bg-midnight-900/80 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg shadow-gold-500/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-midnight-900">
              <path
                d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-shimmer tracking-wide">
              تصويت
            </h1>
            <p className="text-[10px] text-gold-500/60 font-body -mt-1 tracking-widest">
              القرآن الكريم
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#hero" className="text-gold-500/70 hover:text-gold-400 transition-colors duration-300">
            الرئيسية
          </a>
          <a href="#voting" className="text-gold-500/70 hover:text-gold-400 transition-colors duration-300">
            التصويت
          </a>
          <a href="#leaderboard" className="text-gold-500/70 hover:text-gold-400 transition-colors duration-300">
            الترتيب
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold-500/70 hover:text-gold-400 transition-colors"
          aria-label="فتح القائمة"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gold-500/10 bg-midnight-900/95 backdrop-blur-xl animate-slide-up">
          <nav className="flex flex-col gap-4 px-6 py-6 font-body text-sm">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="text-gold-500/70 hover:text-gold-400 transition-colors">
              الرئيسية
            </a>
            <a href="#voting" onClick={() => setMenuOpen(false)} className="text-gold-500/70 hover:text-gold-400 transition-colors">
              التصويت
            </a>
            <a href="#leaderboard" onClick={() => setMenuOpen(false)} className="text-gold-500/70 hover:text-gold-400 transition-colors">
              الترتيب
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
