"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavBarProps {
  variant?: "home" | "inner";
  activeLink?: string;
}

export function NavBar({ variant = "home", activeLink }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (variant !== "home") return;

    const sectionMap: Record<string, string> = {
      "robot-school": "Robot School",
      applications: "Applications",
      customization: "Customizations",
      hardware: "Hardwares",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollActive(sectionMap[entry.target.id]);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    Object.keys(sectionMap).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [variant]);

  const effectiveActive = scrollActive ?? activeLink;

  const homeLinks = [
    { label: "Robot School", href: "#robot-school" },
    { label: "Applications", href: "#applications" },
    { label: "Customizations", href: "#customization" },
    { label: "Hardwares", href: "#hardware" },
  ];
  const innerLinks = [
    { label: "Applications", href: "/applications" },
    { label: "Proof", href: "/proof" },
    { label: "Roadmap", href: "/roadmap" },
  ];
  const links = variant === "inner" ? innerLinks : homeLinks;

  // nav: top-[48px] mt-6(24px) + height(66px) + 8px gap = 146px for home
  // nav: top-0   mt-6(24px) + height(66px) + 8px gap = 98px for inner
  const navTop = variant === "home" ? "top-[48px]" : "top-0";
  const dropTop = variant === "home" ? "146px" : "98px";

  return (
    <>
      {/* Full-screen backdrop — closes menu on outside tap */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Nav pill */}
      <nav
        className={`fixed ${navTop} left-0 right-0 z-50 flex items-center justify-between px-6 py-3 max-w-5xl mx-auto rounded-full mt-6 bg-background/80 backdrop-blur-xl border border-outline-variant shadow-md`}
      >
        <Link href="/" className="relative inline-block h-7 shrink-0" aria-label="Artly AI">
          {/* White text + swoosh (base) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/artly-logo.png"
            alt="Artly AI"
            className="block h-full w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          {/* Original yellow swoosh overlay — right ~22% of the logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/artly-logo.png"
            alt=""
            aria-hidden
            className="absolute inset-0 block h-full w-auto pointer-events-none"
            style={{ clipPath: "inset(0 0 0 70%)" }}
          />
        </Link>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Desktop links — visible on tablet and up */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((link) => {
              const isActive = effectiveActive === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-label-caps text-label-caps transition-colors duration-300 ${
                    isActive
                      ? "text-primary-fixed font-bold border-b-2 border-primary-fixed pb-1"
                      : "text-on-surface-variant hover:text-primary-fixed"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full border border-outline-variant bg-surface-variant/60 shrink-0 touch-manipulation relative z-[55]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-4 h-[2px] bg-on-surface transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[2px] bg-on-surface transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-[2px] bg-on-surface transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — separate fixed element, positioned below nav pill */}
      {menuOpen && (
        <div
          className="fixed left-4 right-4 z-50 max-w-5xl mx-auto"
          style={{ top: dropTop }}
        >
          <div className="bg-background/95 backdrop-blur-xl border border-outline-variant rounded-2xl shadow-xl overflow-hidden">
            {links.map((link, i) => {
              const isActive = effectiveActive === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-6 py-4 font-label-caps text-label-caps transition-colors duration-200 ${
                    i > 0 ? "border-t border-outline-variant/30" : ""
                  } ${
                    isActive
                      ? "text-primary-fixed bg-surface-variant/50"
                      : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/30"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                      arrow_right_alt
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
