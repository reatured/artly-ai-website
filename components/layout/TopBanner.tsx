"use client";

export function TopBanner() {
  // Static countdown display for now (00 placeholders)
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-fixed text-on-primary-fixed px-4 py-2 flex flex-col md:flex-row justify-center items-center gap-4 text-sm border-b border-primary-container/20">
      <span className="font-label-caps">Last chance to claim your shares until 4/30</span>
      <div className="flex items-center gap-2 font-label-caps">
        {["00 Days", "00 Hrs", "00 Mins", "00 Secs"].map((t) => (
          <span key={t} className="bg-surface/10 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </div>
  );
}
