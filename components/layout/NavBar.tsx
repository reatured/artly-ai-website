import Link from "next/link";

interface NavBarProps {
  variant?: "home" | "inner";
  activeLink?: string;
}

export function NavBar({ variant = "home", activeLink }: NavBarProps) {
  const homeLinks = [
    { label: "Robot School", href: "#robot-school" },
    { label: "Applications", href: "#applications" },
    { label: "Customizations", href: "#customization" },
    { label: "Hardwares", href: "#hardware" },
  ];
  const innerLinks = [
    { label: "Proof", href: "/proof" },
    { label: "Growth", href: "/" },
    { label: "Roadmap", href: "/roadmap" },
  ];
  const links = variant === "inner" ? innerLinks : homeLinks;

  // On the homepage the TopBanner is 48px tall, so the nav must clear it.
  // On inner pages there is no TopBanner, so the nav sits flush at top-0.
  const topOffset = variant === "home" ? "top-[48px]" : "top-0";

  return (
    <nav className={`fixed ${topOffset} left-0 right-0 z-50 flex items-center justify-between px-6 py-3 max-w-5xl mx-auto rounded-full mt-6 bg-background/80 backdrop-blur-xl border border-outline-variant shadow-md`}>
      <Link href="/" className="font-display-lg text-[20px] font-bold tracking-tighter text-primary uppercase">ARTLY AI</Link>
      <div className="hidden lg:flex items-center gap-6">
        {links.map((link) => {
          const isActive = activeLink === link.label;
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
      <button className="bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full font-label-caps text-label-caps scale-95 active:scale-90 transition-transform flex items-center gap-2 hover:bg-primary-fixed-dim">
        Invest Now
        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
      </button>
    </nav>
  );
}
