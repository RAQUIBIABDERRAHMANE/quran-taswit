export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/10 bg-midnight-900/90">
      {/* Decorative top border */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-midnight-900">
                  <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-shimmer">تصويت</span>
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              منصة تفاعلية لتكريم أصوات حملة القرآن الكريم. شاركنا في اختيار أجمل
              تلاوة تلمس قلبك.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold text-gold-500/80 mb-4">روابط سريعة</h4>
            <nav className="flex flex-col gap-3">
              <a href="#hero" className="font-body text-sm text-white/40 hover:text-gold-400 transition-colors">
                الرئيسية
              </a>
              <a href="#voting" className="font-body text-sm text-white/40 hover:text-gold-400 transition-colors">
                التصويت
              </a>
              <a href="#leaderboard" className="font-body text-sm text-white/40 hover:text-gold-400 transition-colors">
                ترتيب القرّاء
              </a>
            </nav>
          </div>

          {/* Verse */}
          <div>
            <h4 className="font-display text-sm font-bold text-gold-500/80 mb-4">من القرآن الكريم</h4>
            <blockquote className="font-display text-base text-white/50 leading-loose border-r-2 border-gold-500/30 pr-4">
              &ldquo;وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا&rdquo;
            </blockquote>
            <p className="font-body text-xs text-white/30 mt-2">سورة المزّمّل - الآية ٤</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} تصويت - جميع الحقوق محفوظة
          </p>
          <p className="font-body text-xs text-white/20">
            صُنع بإتقان لخدمة كتاب الله
          </p>
        </div>
      </div>
    </footer>
  );
}
