"use client";

interface LeaderEntry {
  rank: number;
  name: string;
  country: string;
  votes: number;
  initials: string;
}

const leaderboardData: LeaderEntry[] = [
  { rank: 1, name: "مشاري راشد العفاسي", country: "الكويت", votes: 3521, initials: "م.ع" },
  { rank: 2, name: "عبد الرحمن السديس", country: "السعودية", votes: 3102, initials: "ع.س" },
  { rank: 3, name: "ماهر المعيقلي", country: "السعودية", votes: 2956, initials: "م.م" },
  { rank: 4, name: "عبد الباسط عبد الصمد", country: "مصر", votes: 2847, initials: "ع.ب" },
  { rank: 5, name: "محمود خليل الحصري", country: "مصر", votes: 2678, initials: "م.ح" },
];

const rankStyles: Record<number, { badge: string; glow: string; accent: string }> = {
  1: {
    badge: "from-yellow-400 to-amber-500",
    glow: "shadow-yellow-500/20",
    accent: "text-yellow-400",
  },
  2: {
    badge: "from-slate-300 to-slate-400",
    glow: "shadow-slate-400/10",
    accent: "text-slate-300",
  },
  3: {
    badge: "from-amber-600 to-amber-700",
    glow: "shadow-amber-600/10",
    accent: "text-amber-500",
  },
};

export default function Leaderboard() {
  const maxVotes = leaderboardData[0]?.votes || 1;

  return (
    <section id="leaderboard" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-emerald-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold-500/60 text-sm tracking-widest mb-3">
            ✦ لوحة الشرف ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 mb-4">
            ترتيب <span className="text-shimmer">القرّاء</span>
          </h2>
          <p className="font-body text-white/40 max-w-lg mx-auto">
            أفضل خمسة قرّاء بحسب أصوات المستمعين
          </p>
          <div className="section-divider max-w-xs mx-auto mt-8" />
        </div>

        {/* Top 3 podium for large screens */}
        <div className="hidden md:flex items-end justify-center gap-4 mb-16 stagger-children">
          {/* 2nd place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-400/20 to-slate-500/20 border border-slate-400/20 flex items-center justify-center mb-3 shadow-lg shadow-slate-400/5">
              <span className="font-display text-xl font-bold text-slate-300">{leaderboardData[1].initials}</span>
            </div>
            <p className="font-display text-sm font-bold text-white/80 mb-1">{leaderboardData[1].name}</p>
            <p className="text-[10px] text-white/40 font-body mb-2">{leaderboardData[1].country}</p>
            <div className="w-28 bg-gradient-to-t from-slate-500/20 to-slate-400/10 rounded-t-xl border border-slate-400/10 border-b-0 flex flex-col items-center justify-end py-6" style={{ height: "140px" }}>
              <span className="font-display text-3xl font-bold text-slate-300">٢</span>
              <span className="font-body text-xs text-slate-400 mt-1">{leaderboardData[1].votes.toLocaleString("ar-SA")}</span>
            </div>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center -mt-8">
            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
                  <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400/25 to-amber-500/25 border border-yellow-400/30 flex items-center justify-center mb-3 shadow-xl shadow-yellow-500/10">
                <span className="font-display text-2xl font-bold text-yellow-400">{leaderboardData[0].initials}</span>
              </div>
            </div>
            <p className="font-display text-base font-bold text-yellow-400 mb-1">{leaderboardData[0].name}</p>
            <p className="text-[10px] text-white/40 font-body mb-2">{leaderboardData[0].country}</p>
            <div className="w-28 bg-gradient-to-t from-yellow-500/15 to-yellow-400/5 rounded-t-xl border border-yellow-400/15 border-b-0 flex flex-col items-center justify-end py-6" style={{ height: "180px" }}>
              <span className="font-display text-4xl font-bold text-yellow-400 animate-pulse-glow">١</span>
              <span className="font-body text-xs text-yellow-500 mt-1">{leaderboardData[0].votes.toLocaleString("ar-SA")}</span>
            </div>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-600/20 flex items-center justify-center mb-3 shadow-lg shadow-amber-600/5">
              <span className="font-display text-xl font-bold text-amber-500">{leaderboardData[2].initials}</span>
            </div>
            <p className="font-display text-sm font-bold text-white/80 mb-1">{leaderboardData[2].name}</p>
            <p className="text-[10px] text-white/40 font-body mb-2">{leaderboardData[2].country}</p>
            <div className="w-28 bg-gradient-to-t from-amber-600/15 to-amber-500/5 rounded-t-xl border border-amber-600/10 border-b-0 flex flex-col items-center justify-end py-6" style={{ height: "110px" }}>
              <span className="font-display text-3xl font-bold text-amber-500">٣</span>
              <span className="font-body text-xs text-amber-600 mt-1">{leaderboardData[2].votes.toLocaleString("ar-SA")}</span>
            </div>
          </div>
        </div>

        {/* Full list */}
        <div className="space-y-3 stagger-children">
          {leaderboardData.map((entry) => {
            const style = rankStyles[entry.rank];
            const barWidth = (entry.votes / maxVotes) * 100;

            return (
              <div
                key={entry.rank}
                className={`relative rounded-xl border border-white/5 bg-midnight-800/60 backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 hover:border-gold-500/20 hover:bg-midnight-700/40 ${
                  style ? `shadow-lg ${style.glow}` : ""
                }`}
              >
                {/* Rank */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-lg flex-shrink-0 ${
                    style
                      ? `bg-gradient-to-br ${style.badge} text-midnight-900`
                      : "bg-midnight-700 text-white/50"
                  }`}
                >
                  {entry.rank}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-display font-bold truncate ${style ? style.accent : "text-white/80"}`}>
                      {entry.name}
                    </h3>
                    <span className="text-xs text-white/30 font-body flex-shrink-0">{entry.country}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`progress-fill h-full rounded-full ${
                        entry.rank === 1
                          ? "bg-gradient-to-l from-yellow-400 to-amber-500"
                          : entry.rank === 2
                          ? "bg-gradient-to-l from-slate-300 to-slate-400"
                          : entry.rank === 3
                          ? "bg-gradient-to-l from-amber-500 to-amber-600"
                          : "bg-gradient-to-l from-gold-500/60 to-gold-600/60"
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>

                {/* Votes */}
                <div className="text-left flex-shrink-0">
                  <p className={`font-display text-lg font-bold ${style ? style.accent : "text-white/60"}`}>
                    {entry.votes.toLocaleString("ar-SA")}
                  </p>
                  <p className="text-[10px] text-white/30 font-body">صوت</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
