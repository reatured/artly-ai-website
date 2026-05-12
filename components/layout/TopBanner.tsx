"use client";

export function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-12 bg-primary-fixed text-on-primary-fixed px-4 flex items-center justify-center gap-3 border-b border-primary-container/20">
      <span className="font-label-caps text-xs sm:text-sm whitespace-nowrap uppercase tracking-wide">
        <span className="hidden sm:inline">Round closing soon · Own a piece of physical AI</span>
        <span className="sm:hidden">Round closing soon</span>
      </span>
      <a
        href="https://invest.artly.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-on-primary-fixed text-primary-fixed font-label-caps text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full hover:bg-on-primary-fixed/85 active:scale-95 transition flex items-center gap-1 whitespace-nowrap"
      >
        Buy Shares
        <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
      </a>
    </div>
  );
}
