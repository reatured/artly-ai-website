import { NavBar, Footer } from "@/components/layout";

interface Phase {
  year: string;
  yearColor: string;
  phase: string;
  tagline: string;
  focus: string;
  fleet: string;
  revenue: string;
  dotStyle: string;
  glassReflection: boolean;
  revenueChipExtra: string;
  revenueGlow?: boolean;
}

const phases: Phase[] = [
  {
    year: "2024",
    yearColor: "text-primary-fixed",
    phase: "Wedge",
    tagline: "Coffee proved the platform",
    focus:
      "Hardware deployments, onboarding services, coffee & beverage service expansion.",
    fleet: "30",
    revenue: "$2M",
    dotStyle:
      "bg-primary-fixed shadow-[0_0_12px_rgba(222,237,46,0.5)]",
    glassReflection: false,
    revenueChipExtra: "",
  },
  {
    year: "2025",
    yearColor: "text-primary-fixed",
    phase: "Repeatability",
    tagline: "Scale deployments, grow recurring",
    focus:
      "Standard packages, skill training, food prep expansion (acai, cocktails).",
    fleet: "70",
    revenue: "$3M",
    dotStyle:
      "bg-surface-container border border-primary-fixed group-hover:bg-primary-fixed/30",
    glassReflection: true,
    revenueChipExtra: "",
  },
  {
    year: "2026",
    yearColor: "text-secondary-fixed-dim",
    phase: "Expansion",
    tagline: "Enterprise rollouts across verticals",
    focus:
      "Enterprise SLAs, performance analytics, retail & hospitality deployments.",
    fleet: "300",
    revenue: "$12M",
    dotStyle: "bg-surface-container border border-outline-variant",
    glassReflection: false,
    revenueChipExtra: "",
  },
  {
    year: "2030",
    yearColor: "text-secondary-fixed-dim",
    phase: "Scale",
    tagline: "Platform at industry scale",
    focus:
      "High-margin subscriptions, ecosystem partnerships, multi-industry adoption globally.",
    fleet: "10K",
    revenue: "$3B+",
    dotStyle: "bg-surface-container border border-outline-variant",
    glassReflection: false,
    revenueChipExtra: "relative overflow-hidden border-primary-fixed/30",
    revenueGlow: true,
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden">
      <NavBar variant="inner" activeLink="Roadmap" />

      <main className="flex-grow pt-[120px] pb-xxl px-gutter max-w-container-max mx-auto w-full">

        {/* Section 1: Hero Header */}
        <div className="mb-xl max-w-3xl">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Roadmap: Business + Market Expansion{" "}
            <span className="text-surface-variant">(</span>
            <span className="text-primary-fixed">with KPIs</span>
            <span className="text-surface-variant">)</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            A CEO-friendly view of how Artly scales — showing what we sell,
            where we expand, and the corresponding fleet + revenue milestones.
          </p>
        </div>

        {/* Section 2: Timeline */}
        <div className="relative pl-4 md:pl-12 py-8">
          {/* Vertical connecting line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary-fixed via-outline-variant to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {phases.map((p) => (
              <div
                key={p.year}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
              >
                {/* Status dot */}
                <div
                  className={`absolute left-0 -translate-x-1/2 top-6 w-3 h-3 rounded-full ${p.dotStyle} z-10 transition-colors duration-300`}
                />

                {/* Year / Label column */}
                <div className="md:w-1/4 pt-4 shrink-0">
                  <div className={`font-data-point text-data-point ${p.yearColor} mb-1`}>
                    {p.year}
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    {p.phase}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 italic">
                    &ldquo;{p.tagline}&rdquo;
                  </p>
                </div>

                {/* Details card */}
                <div className="glass-card rounded-xl p-6 md:w-3/4 flex flex-col lg:flex-row gap-8 relative overflow-hidden">
                  {/* Glass reflection for Repeatability phase */}
                  {p.glassReflection && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/5 blur-[40px] rounded-full pointer-events-none" />
                  )}

                  {/* Strategic Focus */}
                  <div className="flex-grow">
                    <h3 className="font-label-caps text-label-caps text-outline mb-sm uppercase tracking-wider">
                      Strategic Focus
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface">
                      {p.focus}
                    </p>
                  </div>

                  {/* KPI chips */}
                  <div className="shrink-0 flex gap-4">
                    {/* Fleet chip */}
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-4 min-w-[120px]">
                      <div className="font-label-caps text-label-caps text-outline mb-2">
                        Fleet
                      </div>
                      <div className="font-data-point text-data-point text-primary text-xl">
                        {p.fleet}{" "}
                        <span className="text-on-surface-variant text-sm">
                          Robots
                        </span>
                      </div>
                    </div>

                    {/* Revenue chip */}
                    <div
                      className={`bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-4 min-w-[120px] ${p.revenueChipExtra}`}
                    >
                      {p.revenueGlow && (
                        <div className="absolute inset-0 bg-primary-fixed/5" />
                      )}
                      <div className="font-label-caps text-label-caps text-outline mb-2 relative">
                        Revenue
                      </div>
                      <div className="font-data-point text-data-point text-primary-fixed text-xl relative">
                        {p.revenue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Footer Insight */}
        <div className="mt-xl border-t border-outline-variant/30 pt-8 flex items-start gap-4 max-w-4xl">
          <span
            className="material-symbols-outlined text-primary-fixed mt-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <span className="text-primary font-medium">
              Artly scales through a repeatable deployment playbook
            </span>{" "}
            and compounding platform economics as software attaches to every
            robot in the field.
          </p>
        </div>
      </main>

      <Footer variant="minimal" />
    </div>
  );
}
