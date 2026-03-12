"use client";

import { useState } from "react";

interface Reader {
  id: number;
  name: string;
  country: string;
  votes: number;
  style: string;
  initials: string;
}

const initialReaders: Reader[] = [
  { id: 1, name: "عبد الباسط عبد الصمد", country: "مصر", votes: 2847, style: "تجويد ومجوّد", initials: "ع.ب" },
  { id: 2, name: "مشاري راشد العفاسي", country: "الكويت", votes: 3521, style: "حدر وترتيل", initials: "م.ع" },
  { id: 3, name: "عبد الرحمن السديس", country: "السعودية", votes: 3102, style: "ترتيل", initials: "ع.س" },
  { id: 4, name: "ماهر المعيقلي", country: "السعودية", votes: 2956, style: "ترتيل", initials: "م.م" },
  { id: 5, name: "سعد الغامدي", country: "السعودية", votes: 1890, style: "ترتيل", initials: "س.غ" },
  { id: 6, name: "أحمد بن علي العجمي", country: "السعودية", votes: 1654, style: "ترتيل وحدر", initials: "أ.ع" },
  { id: 7, name: "ياسر الدوسري", country: "السعودية", votes: 2234, style: "ترتيل", initials: "ي.د" },
  { id: 8, name: "هزاع البلوشي", country: "الإمارات", votes: 1432, style: "ترتيل", initials: "ه.ب" },
  { id: 9, name: "خالد الجليل", country: "السعودية", votes: 1876, style: "ترتيل", initials: "خ.ج" },
  { id: 10, name: "ناصر القطامي", country: "السعودية", votes: 1567, style: "ترتيل", initials: "ن.ق" },
  { id: 11, name: "إدريس أبكر", country: "السودان", votes: 1345, style: "ترتيل", initials: "إ.أ" },
  { id: 12, name: "محمود خليل الحصري", country: "مصر", votes: 2678, style: "تجويد ومعلّم", initials: "م.ح" },
];

const gradients = [
  "from-amber-600/20 to-orange-700/20",
  "from-emerald-600/20 to-teal-700/20",
  "from-sky-600/20 to-blue-700/20",
  "from-rose-600/20 to-pink-700/20",
  "from-violet-600/20 to-purple-700/20",
  "from-lime-600/20 to-green-700/20",
  "from-cyan-600/20 to-teal-700/20",
  "from-fuchsia-600/20 to-pink-700/20",
  "from-amber-600/20 to-yellow-700/20",
  "from-indigo-600/20 to-blue-700/20",
  "from-emerald-600/20 to-green-700/20",
  "from-rose-600/20 to-red-700/20",
];

const avatarColors = [
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-sky-500 to-blue-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-lime-500 to-green-600",
  "from-cyan-500 to-teal-600",
  "from-fuchsia-500 to-pink-600",
  "from-amber-500 to-yellow-600",
  "from-indigo-500 to-blue-600",
  "from-emerald-500 to-green-600",
  "from-rose-500 to-red-600",
];

export default function VotingSection() {
  const [readers, setReaders] = useState<Reader[]>(initialReaders);
  const [votedIds, setVotedIds] = useState<Set<number>>(new Set());
  const [animatingId, setAnimatingId] = useState<number | null>(null);

  const totalVotes = readers.reduce((sum, r) => sum + r.votes, 0);

  const handleVote = (id: number) => {
    if (votedIds.has(id)) return;

    setAnimatingId(id);
    setReaders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, votes: r.votes + 1 } : r))
    );
    setVotedIds((prev) => new Set(prev).add(id));

    setTimeout(() => setAnimatingId(null), 600);
  };

  return (
    <section id="voting" className="relative py-24 px-6 geometric-pattern">
      {/* Section header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-display text-gold-500/60 text-sm tracking-widest mb-3">
          ✦ اختر قارئك المفضّل ✦
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 mb-4">
          التصويت لأفضل <span className="text-shimmer">قارئ</span>
        </h2>
        <p className="font-body text-white/40 max-w-xl mx-auto">
          اضغط على زر التصويت بجانب القارئ الذي تفضّل صوته. يمكنك التصويت لأكثر من قارئ.
        </p>
        <div className="section-divider max-w-xs mx-auto mt-8" />
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
        {readers.map((reader, index) => {
          const voted = votedIds.has(reader.id);
          const isAnimating = animatingId === reader.id;
          const percentage = totalVotes > 0 ? ((reader.votes / totalVotes) * 100).toFixed(1) : "0";

          return (
            <div
              key={reader.id}
              className={`card-glow rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} border border-white/5 backdrop-blur-sm p-5 flex flex-col transition-all duration-500 ${
                isAnimating ? "scale-[1.02]" : ""
              }`}
            >
              {/* Reader avatar & info */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-display text-lg font-bold shadow-lg flex-shrink-0`}>
                  {reader.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-bold text-white/90 truncate">
                    {reader.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-white/40 font-body">{reader.country}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-xs text-gold-500/60 font-body">{reader.style}</span>
                  </div>
                </div>
              </div>

              {/* Vote count & progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-sm text-white/50">الأصوات</span>
                  <span className="font-display text-lg font-bold text-gold-400">
                    {reader.votes.toLocaleString("ar-SA")}
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="progress-fill h-full rounded-full bg-gradient-to-l from-gold-400 via-gold-500 to-emerald-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-[10px] text-white/30 mt-1 font-body text-left" dir="ltr">
                  {percentage}%
                </p>
              </div>

              {/* Vote button */}
              <button
                onClick={() => handleVote(reader.id)}
                disabled={voted}
                className={`vote-btn w-full py-3 rounded-xl font-body font-bold text-sm transition-all duration-400 ${
                  voted
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                    : "bg-gradient-to-l from-gold-600 to-gold-500 text-midnight-900 hover:shadow-[0_0_25px_rgba(212,168,83,0.25)] active:scale-95"
                }`}
              >
                {voted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    تم التصويت
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    صوّت الآن
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
