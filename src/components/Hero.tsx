"use client";

import { useEffect, useState } from "react";

function Star({ style }: { style: React.CSSProperties }) {
  return <div className="star" style={style} aria-hidden="true" />;
}

export default function Hero() {
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 40 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-midnight-600/30 rounded-full blur-[150px]" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0" aria-hidden="true">
        {stars.map((style, i) => (
          <Star key={i} style={style} />
        ))}
      </div>

      {/* Decorative Islamic pattern ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04]" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-[spin_120s_linear_infinite]">
          <circle cx="200" cy="200" r="180" stroke="url(#gold-grad)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="160" stroke="url(#gold-grad)" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="140" stroke="url(#gold-grad)" strokeWidth="0.5" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="20"
              x2="200"
              y2="380"
              stroke="url(#gold-grad)"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={`r-${i}`}
              x="150"
              y="150"
              width="100"
              height="100"
              stroke="url(#gold-grad)"
              strokeWidth="0.3"
              fill="none"
              transform={`rotate(${i * 22.5} 200 200)`}
            />
          ))}
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a853" />
              <stop offset="50%" stopColor="#f5b726" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Bismillah */}
        <p className="font-display text-gold-500/50 text-lg mb-6 animate-fade-in">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* Main heading */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-shimmer">صوّت لأفضل</span>
          <br />
          <span className="text-white/90">قارئ للقرآن الكريم</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          شارك في اختيار أجمل صوت يتلو كتاب الله. صوّتك يُحدث فرقاً في تكريم
          حملة القرآن الكريم وأصواتهم الملائكية.
        </p>

        {/* CTA Button */}
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#voting"
            className="vote-btn inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-l from-gold-600 via-gold-500 to-gold-600 text-midnight-900 font-body font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] transition-all duration-500"
          >
            <span>ابدأ التصويت</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-180">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 md:gap-16 mt-16 opacity-0 animate-slide-up"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gold-400">+٥٠</p>
            <p className="font-body text-xs text-white/40 mt-1">قارئ مشارك</p>
          </div>
          <div className="w-px h-12 bg-gold-500/20" />
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-emerald-400">+١٠K</p>
            <p className="font-body text-xs text-white/40 mt-1">صوت مسجّل</p>
          </div>
          <div className="w-px h-12 bg-gold-500/20" />
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-gold-400">+٢٠</p>
            <p className="font-body text-xs text-white/40 mt-1">دولة مشاركة</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-900 to-transparent" />
    </section>
  );
}
