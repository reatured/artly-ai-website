import { NavBar, Footer } from "@/components/layout";

const phases = [
  {
    year: "2024",
    yearColor: "text-primary-fixed",
    phase: "Wedge",
    tagline: "Coffee proved the platform",
    focus: "Hardware deployments, onboarding services, coffee & beverage service expansion.",
    fleet: "30",
    revenue: "$2M",
    dotClass: "bg-primary-fixed shadow-[0_0_12px_rgba(222,237,46,0.5)]",
    active: true,
    revenueGlow: false,
  },
  {
    year: "2025",
    yearColor: "text-primary-fixed",
    phase: "Repeatability",
    tagline: "Scale deployments, grow recurring",
    focus: "Standard packages, skill training, food prep expansion (acai, cocktails).",
    fleet: "70",
    revenue: "$3M",
    dotClass: "bg-surface-container border-2 border-primary-fixed",
    active: false,
    revenueGlow: false,
  },
  {
    year: "2026",
    yearColor: "text-secondary-fixed-dim",
    phase: "Expansion",
    tagline: "Enterprise rollouts across verticals",
    focus: "Enterprise SLAs, performance analytics, retail & hospitality deployments.",
    fleet: "300",
    revenue: "$12M",
    dotClass: "bg-surface-container border-2 border-outline-variant",
    active: false,
    revenueGlow: false,
  },
  {
    year: "2030",
    yearColor: "text-secondary-fixed-dim",
    phase: "Scale",
    tagline: "Platform at industry scale",
    focus: "High-margin subscriptions, ecosystem partnerships, multi-industry adoption globally.",
    fleet: "10K",
    revenue: "$3B+",
    dotClass: "bg-surface-container border-2 border-outline-variant",
    active: false,
    revenueGlow: true,
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased">
      <NavBar variant="inner" activeLink="Roadmap" />

      <main className="flex-grow pt-[120px] pb-xxl px-gutter max-w-container-max mx-auto w-full">

        {/* Hero */}
        <div className="mb-xl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Roadmap: Business + Market Expansion{" "}
            <span className="text-surface-variant">(</span>
            <span className="text-primary-fixed">with KPIs</span>
            <span className="text-surface-variant">)</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            A CEO-friendly view of how Artly scales — showing what we sell, where we expand,
            and the corresponding fleet + revenue milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {phases.map((p, i) => (
            <div key={p.year} className="flex gap-6">

              {/* Left: dot + line */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mt-6 shrink-0 ${p.dotClass}`} />
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-0 bg-gradient-to-b from-outline-variant/60 to-outline-variant/20" />
                )}
              </div>

              {/* Right: content */}
              <div className="flex-1 pb-12">
                {/* Year + phase label */}
                <div className="pt-4 mb-4">
                  <span className={`font-data-point text-data-point ${p.yearColor}`}>{p.year}</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary mt-1">{p.phase}</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 italic">
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                </div>

                {/* Detail card */}
                <div className="glass-card rounded-xl p-6 flex flex-col lg:flex-row gap-8">
                  {/* Strategic Focus */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-caps text-label-caps text-outline mb-3 uppercase tracking-wider">
                      Strategic Focus
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface">{p.focus}</p>
                  </div>

                  {/* KPI chips */}
                  <div className="flex gap-4 shrink-0">
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-4 min-w-[110px]">
                      <div className="font-label-caps text-label-caps text-outline mb-2 text-[10px]">Fleet</div>
                      <div className="font-data-point text-xl text-primary">
                        {p.fleet} <span className="text-on-surface-variant text-sm">Robots</span>
                      </div>
                    </div>
                    <div className={`rounded-lg p-4 min-w-[110px] relative overflow-hidden ${p.revenueGlow ? "border border-primary-fixed/40 bg-surface-container-lowest" : "border border-outline-variant/50 bg-surface-container-lowest"}`}>
                      {p.revenueGlow && <div className="absolute inset-0 bg-primary-fixed/5" />}
                      <div className="font-label-caps text-label-caps text-outline mb-2 text-[10px] relative">Revenue</div>
                      <div className="font-data-point text-xl text-primary-fixed relative">{p.revenue}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer insight */}
        <div className="mt-xl border-t border-outline-variant/30 pt-8 flex items-start gap-4 max-w-4xl">
          <span className="material-symbols-outlined text-primary-fixed mt-1 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            lightbulb
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <span className="text-primary font-medium">Artly scales through a repeatable deployment playbook</span>{" "}
            and compounding platform economics as software attaches to every robot in the field.
          </p>
        </div>

      </main>

      <Footer variant="minimal" />
    </div>
  );
}
