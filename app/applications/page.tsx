import { NavBar, Footer } from "@/components/layout";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { asset } from "@/lib/asset";

const applications = [
  {
    tag: "Flagship Product",
    title: "Barista Bot",
    img: "/images/apps-barista-bot.png",
    intro:
      "Artly's flagship AI-powered robotic coffee system, built to deliver barista-quality espresso beverages with absolute consistency — at scale.",
    body:
      "Barista Bot replicates the craftsmanship of professional baristas: grinding, tamping, steaming, pouring, and finishing every drink with latte art. It is trained on motion-capture from world-class baristas — including U.S. Barista and Latte Art Champion Joe Yang — and runs on Artly's proprietary AGI platform to perform with millimeter-level precision.",
    features: [
      "Bionic hand · 20 degrees of freedom + tactile sensors",
      "Trained by award-winning baristas via motion capture",
      "Vision-language-action model adapts to each store",
      "Deployed across MUJI, Microsoft, Jump Trading, Nvidia",
    ],
    ctaLabel: "Read the case study",
    ctaHref: "/proof",
    comingSoon: false,
  },
  {
    tag: "Hospitality + Entertainment",
    title: "Bartender Bot",
    img: "/images/apps-bartender-bot.png",
    intro:
      "Precision, speed, and spectacle for modern beverage service — engineered for bars, lounges, hotels, and cruise ships.",
    body:
      "Bartender Bot brings AI-driven motion planning and recipe intelligence to cocktail service. It mixes, pours, and presents drinks with theatrical consistency across every venue, minimizing waste while maximizing throughput in high-volume hospitality environments.",
    features: [
      "AI-driven motion planning per recipe",
      "Consistent pours across every venue",
      "Designed for high-throughput bars + cruise ships",
      "Waste minimization at scale",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "#contact",
    comingSoon: false,
  },
  {
    tag: "Coming Soon",
    title: "Teaism Bot",
    img: "/images/apps-tea-bot.png",
    intro:
      "An AI-driven tea-brewing robot that precisely controls temperature, steep time, and pour — preserving traditional craft at scale.",
    body:
      "Teaism Bot is designed for premium tea environments where every variable matters. It maintains the artistry of traditional tea preparation while ensuring consistent flavor across every cup, every shift, every location.",
    features: [
      "Precision temperature + steep-time control",
      "Designed for premium tea environments",
      "Consistent flavor at scale",
      "Built on the same AGI platform",
    ],
    ctaLabel: "Join the waitlist",
    ctaHref: "#contact",
    comingSoon: true,
  },
];

export default function ApplicationsPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased">
      <NavBar variant="inner" activeLink="Applications" />

      <main className="flex-grow pt-[120px] pb-xxl px-gutter max-w-container-max mx-auto w-full">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mt-xl mb-xxl">
          <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary-fixed bg-primary-fixed/10 border border-primary-fixed/20 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse" />
            APPLICATIONS
          </span>
          <h1 className="font-display-lg text-display-lg text-primary">
            Robots that ship product, not demos
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Three production-grade systems built on the same AGI platform — each tuned for a specific
            high-volume service environment.
          </p>
        </section>

        {/* Stack of detailed product cards */}
        <section className="flex flex-col gap-10">
          {applications.map((app, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={app.title}
                className="glass-card rounded-2xl border border-outline-variant/30 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                <div
                  className={`relative h-72 lg:h-auto min-h-[320px] bg-surface-container-lowest flex items-center justify-center p-6 overflow-hidden ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(app.img)}
                    alt={app.title}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-lg lg:p-xl flex flex-col gap-4 justify-center">
                  <span
                    className={`font-label-caps text-label-caps w-fit px-3 py-1 rounded-full border ${
                      app.comingSoon
                        ? "text-on-surface-variant border-outline-variant/50 bg-surface-variant/30"
                        : "text-primary-fixed border-primary-fixed/30 bg-primary-fixed/10"
                    }`}
                  >
                    {app.tag}
                  </span>
                  <h2 className="font-display-lg text-[32px] lg:text-[40px] font-bold text-primary leading-tight">
                    {app.title}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface text-[17px] leading-relaxed">
                    {app.intro}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {app.body}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {app.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-primary-fixed text-[18px] mt-0.5 shrink-0">
                          check_circle
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={app.ctaHref}
                      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label-caps text-label-caps transition-colors ${
                        app.comingSoon
                          ? "border border-outline-variant text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed"
                          : "bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim"
                      }`}
                    >
                      {app.ctaLabel}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_right_alt
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Closing CTA */}
        <section className="mt-xxl">
          <GlassPanel className="p-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-headline-sm text-[24px] font-bold text-primary">
                Have a different service in mind?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Every Artly application runs on the same training layer. Bring us your workflow.
              </p>
            </div>
            <a
              href="/#contact"
              className="bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors flex items-center gap-2 shrink-0"
            >
              Contact Artly
              <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
            </a>
          </GlassPanel>
        </section>
      </main>

      <Footer variant="minimal" />
    </div>
  );
}
