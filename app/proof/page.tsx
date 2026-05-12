import { NavBar } from "@/components/layout";
import { Footer } from "@/components/layout";

const metrics = [
  {
    icon: "precision_manufacturing",
    value: "30+",
    label: "Robots Deployed",
    desc: "Operating in live environments with uptime requirements.",
  },
  {
    icon: "local_cafe",
    value: "1M+",
    label: "Cups Served",
    desc: "Real-world repetition creates compounding training data.",
  },
  {
    icon: "domain",
    value: "Multi-site",
    label: "Enterprise Rollouts",
    desc: "Designed for repeatable deployments across locations.",
  },
  {
    icon: "timer",
    value: "Hours",
    label: "Time to Train",
    desc: "Fast onboarding for new tasks and variations.",
  },
];

const partners = [
  { name: "MUJI", tracking: "tracking-widest" },
  { name: "Tesla", tracking: "tracking-tight" },
  { name: "Microsoft", tracking: "tracking-normal" },
  { name: "Salesforce", tracking: "tracking-wide" },
  { name: "Enterprise", tracking: "tracking-widest" },
];

export default function ProofPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      <NavBar variant="inner" activeLink="Proof" />

      <main className="flex-grow pt-[120px] pb-xxl px-gutter max-w-container-max mx-auto w-full">

        {/* Section 1: Hero Header */}
        <section className="text-center max-w-3xl mx-auto mt-xl mb-xxl">
          <h1 className="font-display-lg text-display-lg text-primary">
            Production traction, not demos
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Evidence the platform works in the wild — throughput, customers, and repeatable operations.
          </p>
        </section>

        {/* Section 2: Key Metrics Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xxl">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-card p-lg rounded-xl flex flex-col relative overflow-hidden group hover:bg-surface-variant transition-colors duration-300"
            >
              {/* Pulsing dot */}
              <div className="absolute top-sm right-sm w-xs h-xs rounded-full bg-primary-fixed animate-pulse shadow-[0_0_8px_rgba(222,237,46,0.3)]" />

              {/* Icon */}
              <span
                className="material-symbols-outlined text-on-surface-variant mb-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {metric.icon}
              </span>

              {/* Value */}
              <h3 className="font-headline-md text-headline-md text-primary-fixed mb-xs">
                {metric.value}
              </h3>

              {/* Label */}
              <p className="font-label-caps text-label-caps text-on-surface mb-sm">
                {metric.label}
              </p>

              {/* Description */}
              <p className="font-data-point text-data-point text-on-surface-variant mt-auto border-t border-outline-variant/30 pt-sm">
                {metric.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Section 3: Partner Logos */}
        <section className="mb-xxl">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant/50 pb-sm mb-lg">
            Robot Currently Deployed With
          </h2>
          <div className="flex flex-wrap justify-between items-center gap-lg opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className={`font-headline-sm text-headline-sm text-primary font-bold uppercase ${partner.tracking}`}
              >
                {partner.name}
              </span>
            ))}
            <span className="font-label-caps text-on-surface-variant bg-surface-variant px-md py-sm rounded-DEFAULT">
              + Partners
            </span>
          </div>
        </section>

        {/* Section 4: Case Study Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Header */}
          <div className="md:col-span-3 mb-md">
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Case snapshot: repeatable deployments
            </h2>
          </div>

          {/* Item 1: Image card */}
          <div className="glass-card rounded-xl h-64 relative overflow-hidden group md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfE_7AlBOOLQGnVxonFXlIkm14LZQ3zGUyKkLgFgqPV73KCUmVucDCqHkvZFwbIzB3b72XxAjcJ9XktgubZFrileBw7GaG0tGE_s9hBMvT_OY6Spifb3xV7bVtwNbXs4z46vaAOc__-NMsSYNIGq8W8b7zbOIvHw5kkcpm7ZKVcXf2ZVOa2pvhXV4rngPHNFY-t9gtknhF5gM9hLw9K9NgNxjEEypd26BR204eoa2BJbvXJfxBA8dUSjGiDiEfW4AdwyWTDl-Zod3B"
              alt="Robotic arm in dark industrial facility"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity"
            />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-background to-transparent">
              <p className="font-label-caps text-label-caps text-primary-fixed mb-xs">
                Deployment Telemetry
              </p>
              <div className="h-unit w-full momentum-bar-bg rounded-full overflow-hidden mt-sm">
                <div className="h-full momentum-bar-fill w-[85%] rounded-full" />
              </div>
            </div>
          </div>

          {/* Item 2: What's Unique card */}
          <div className="glass-card p-lg rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="font-label-caps text-label-caps text-primary-fixed mb-sm">
                What&apos;s Unique
              </h4>
              <p className="font-body-md text-body-md text-on-surface">
                Compounding skill library
              </p>
            </div>
            <div className="border-t border-outline-variant/30 pt-md">
              <h4 className="font-label-caps text-label-caps text-primary-fixed mb-sm">
                Why It Matters
              </h4>
              <p className="font-data-point text-data-point text-on-surface-variant">
                Lower marginal cost per deployment.
              </p>
            </div>
          </div>

          {/* Item 3: Three-column status row */}
          <div className="glass-card p-lg rounded-xl grid grid-cols-3 gap-lg border-t border-outline-variant/20 md:col-span-3">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">
                Training Phase
              </p>
              <p className="font-data-point text-data-point text-primary">
                <span className="text-primary-fixed mr-xs">●</span>
                Simulated Validation
              </p>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">
                Monitoring
              </p>
              <p className="font-data-point text-data-point text-primary">
                <span className="text-primary-fixed mr-xs">●</span>
                24/7 Telemetry Stream
              </p>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">
                Maintenance
              </p>
              <p className="font-data-point text-data-point text-primary">
                <span className="text-primary-fixed mr-xs">●</span>
                Predictive Diagnostics
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer variant="minimal" />
    </div>
  );
}
