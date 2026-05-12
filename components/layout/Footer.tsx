interface FooterProps {
  variant?: "full" | "minimal";
}

export function Footer({ variant = "full" }: FooterProps) {
  const footerLinks = [
    { label: "Robot School", href: "#" },
    { label: "Applications", href: "#" },
    { label: "Customizations", href: "#" },
    { label: "Hardwares", href: "#" },
  ];
  const secondaryLinks = [
    { label: "Research", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];
  const legalLinks = [
    { label: "Investor Relations", href: "#" },
    { label: "Technical Brief", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  if (variant === "minimal") {
    return (
      <footer className="w-full py-12 px-gutter flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto bg-surface border-t border-outline-variant mt-xxl">
        <div className="font-display-lg text-headline-sm text-primary mb-6 md:mb-0 font-bold">ARTLY AI</div>
        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          {legalLinks.map((l) => (
            <a key={l.label} href={l.href} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100">
              {l.label}
            </a>
          ))}
        </div>
        <div className="font-body-md text-sm text-on-surface-variant">© 2024 Artly AI. All rights reserved.</div>
      </footer>
    );
  }

  return (
    <>
      <footer className="w-full py-12 px-gutter flex flex-col md:flex-row justify-between items-start md:items-center max-w-container-max mx-auto bg-surface border-t border-outline-variant gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-display-lg text-headline-sm text-primary uppercase font-bold">ARTLY AI</div>
          <div className="font-body-md text-sm text-on-surface-variant">Engineering Physical Intelligence.</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-3">
            {footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {secondaryLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary-fixed transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <span className="font-label-caps text-primary text-[10px]">Be The First to Know</span>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-surface-container border border-outline-variant/50 rounded-lg px-3 py-2 text-sm text-primary w-full focus:outline-none focus:border-primary-fixed" />
              <button className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-lg font-label-caps text-[10px] hover:bg-primary-fixed-dim">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full text-center py-4 bg-surface font-body-md text-sm text-on-surface-variant border-t border-outline-variant/20">
        © 2024 Artly AI. All rights reserved.
      </div>
    </>
  );
}
