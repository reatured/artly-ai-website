import { TopBanner } from "@/components/layout/TopBanner";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MetricCard } from "@/components/ui/MetricCard";

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      <TopBanner />
      <NavBar variant="home" />
      <main className="flex-grow pt-[160px] pb-xxl px-gutter max-w-container-max mx-auto w-full cinematic-bg">

        {/* ── Section 1: Hero ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-xxl">
          {/* Left: copy */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Status tag */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                FUTURISTIC · FLUID · CINEMATIC
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-lg text-display-lg text-on-background">
              The training layer for physical AI{" "}
              <span className="text-primary-fixed">skills.</span>
            </h1>

            {/* Body */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Artly&apos;s proprietary AI platform lets robots learn real-world tasks in
              under 30 minutes — bridging the simulation-to-real gap at production
              scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors flex items-center gap-2">
                Invest Now
                <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
              </button>
              <button className="border border-outline-variant text-on-surface-variant px-8 py-3 rounded-full font-label-caps text-label-caps hover:border-primary-fixed hover:text-primary-fixed transition-colors flex items-center gap-2">
                Download Investor Brief
                <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Right: Live Metrics panel */}
          <div className="lg:col-span-5 lg:col-start-8">
            <GlassPanel glow className="p-lg flex flex-col gap-6">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <span className="bg-primary-fixed/10 text-primary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full border border-primary-fixed/20">
                  Live metrics
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  Platform Growth
                </span>
              </div>

              {/* 2×2 metric grid */}
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  label="DRINKS SERVED"
                  value="1M+"
                  description="drinks served"
                />
                <MetricCard
                  label="REVENUE"
                  value="$5M"
                  description="revenue generated"
                />
                <MetricCard
                  label="PARTNERSHIPS"
                  value="Fortune 500"
                  description="Deployed with Fortune 500 partners"
                />
                <MetricCard
                  label="LEADERSHIP"
                  value="Amazon Exit"
                  description="Founder with a prior Amazon acquisition"
                />
              </div>
            </GlassPanel>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 2: Robot School ── */}
        <section id="robot-school" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-xxl">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Robot School
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Artly&apos;s Robot School is a comprehensive AGI system that bridges the
              sim-to-real gap — enabling robots to acquire complex manipulation
              skills rapidly without costly real-world trial and error. Our
              proprietary VLA (Vision-Language-Action) models translate high-level
              instructions into precise physical actions, reducing training time
              from months to minutes.
            </p>
          </div>

          {/* Right: Press card */}
          <div>
            <GlassPanel glow className="p-lg flex flex-col gap-4">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                GeekWire · April 2026
              </span>
              <h3 className="font-headline-md text-headline-sm text-on-background leading-snug">
                The Breakthrough That Could Change How Robots Learn
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                How Artly AI&apos;s sim-to-real platform is compressing years of robotic
                training into a single afternoon — and why the industry is taking
                notice.
              </p>
              <a
                href="https://www.geekwire.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-fixed font-label-caps text-label-caps hover:underline mt-2 w-fit"
              >
                Read more on GeekWire
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </GlassPanel>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 3: Applications ── */}
        <section id="applications" className="my-xxl flex flex-col gap-12">
          <h2 className="font-headline-md text-headline-md text-on-background text-center">
            Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Barista Bot */}
            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-label-caps text-primary-fixed">Barista Bot</span>
                <h3 className="font-headline-md text-headline-sm text-on-background">Barista Bot</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Artly&apos;s Barista Bot is an AI-powered robotic coffee system that
                brews specialty drinks with barista-level precision — fully
                autonomous, compact, and deployable in any commercial space.
              </p>
            </div>

            {/* Bartender Bot */}
            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-label-caps text-primary-fixed">Bartender Bot</span>
                <h3 className="font-headline-md text-headline-sm text-on-background">Bartender Bot</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Bartender Bot is an intelligent robotic cocktail system that mixes
                and serves craft drinks with consistency and speed — elevating
                hospitality experiences without the overhead of human bartenders.
              </p>
            </div>

            {/* Teaism Bot */}
            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Coming Soon</span>
                <h3 className="font-headline-md text-headline-sm text-on-background">Teaism Bot</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Teaism Bot is an AI-driven tea-brewing system that faithfully
                recreates traditional preparation rituals — bringing artisan-quality
                tea service to modern environments at scale.
              </p>
            </div>
          </div>

          {/* Case study link */}
          <div className="flex justify-center">
            <a
              href="#"
              className="flex items-center gap-2 border border-outline-variant/50 px-8 py-3 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed transition-colors"
            >
              Case Study: Artly Coffee
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 4: Customization ── */}
        <section id="customization" className="my-xxl flex flex-col gap-12">
          <h2 className="font-headline-md text-headline-md text-on-background">
            Customization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <h3 className="font-headline-md text-headline-sm text-on-background">The Labor Crisis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Customize robots to fill specific labor gaps across your
                operation — from front-of-house service to back-of-house
                production — with role-specific training profiles deployed in
                minutes.
              </p>
            </div>

            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <h3 className="font-headline-md text-headline-sm text-on-background">The Rise of Robots</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Configure robots for different environments — retail, hospitality,
                healthcare, and beyond — with adaptive skill sets that evolve as
                your operational needs change.
              </p>
            </div>

            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <h3 className="font-headline-md text-headline-sm text-on-background">Manipulation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Train robots for task-specific manipulation — pick-and-place,
                pour, stir, assemble — using Artly&apos;s VLA models that generalize
                across objects and configurations without retraining from scratch.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 5: Production Traction ── */}
        <section className="my-xxl flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary-fixed">Traction</span>
            <h2 className="font-headline-md text-headline-md text-on-background">
              Production traction, not demos
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Artly robots are live in enterprise environments today — not in
              controlled lab settings. Our fleet handles millions of real-world
              interactions every month.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "30+", label: "ROBOTS DEPLOYED" },
              { value: "1M+", label: "CUPS SERVED" },
              { value: "Multi-site", label: "ENTERPRISE ROLLOUTS" },
              { value: "Hours", label: "TIME TO TRAIN" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-3 relative overflow-hidden bg-gradient-to-br from-surface-container-high/80 to-transparent"
              >
                <div className="font-display-lg text-[36px] font-bold text-primary-fixed leading-none">
                  {value}
                </div>
                <div className="font-label-caps text-label-caps text-on-surface-variant">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Partner pills */}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              Robot Currently Deployed With
            </span>
            <div className="flex flex-wrap gap-3">
              {["MUJI", "Tesla", "Microsoft", "Salesforce", "Enterprise", "+ Partners"].map((name) => (
                <span
                  key={name}
                  className="px-8 py-3 rounded-full border border-outline-variant/40 text-on-surface-variant font-label-caps text-[11px] bg-surface-container-lowest/50"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 6: Hardware ── */}
        <section id="hardware" className="my-xxl flex flex-col gap-12">
          <h2 className="font-headline-md text-headline-md text-on-background text-center">
            Hardwares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <span className="font-label-caps text-label-caps text-primary-fixed">Barista Bot</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Consistent, Cost-Effective Coffee Automation. A compact,
                AI-powered robotic barista purpose-built for high-volume
                commercial deployment with zero downtime.
              </p>
            </div>

            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <span className="font-label-caps text-label-caps text-primary-fixed">Artly Humanoid Robot Gen1</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Next-Generation Dual-Arm Humanoid Service Robot. Designed for
                general-purpose service tasks, our Gen1 humanoid brings
                human-like dexterity to real-world environments.
              </p>
            </div>

            <div className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
              <span className="font-label-caps text-label-caps text-primary-fixed">Artly AI Arm</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Robotic Arm with VLA. A modular robotic arm powered by
                Vision-Language-Action models — adaptable to any workstation
                and trainable in under an hour.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Section 7: Contact Form ── */}
        <section className="my-xxl">
          <div className="max-w-2xl mx-auto">
            <GlassPanel className="p-xl flex flex-col gap-8">
              <h2 className="font-headline-md text-headline-md text-on-background text-center">
                Contact Artly
              </h2>

              <form className="flex flex-col gap-6">
                {/* Name / Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-info" className="font-label-caps text-label-caps text-on-surface-variant">
                    Information
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    placeholder="Your Name or Email"
                    className="bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-fixed transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-label-caps text-label-caps text-on-surface-variant">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="How can we help?"
                    rows={4}
                    className="bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-fixed transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors self-center"
                >
                  Send Message
                </button>
              </form>
            </GlassPanel>
          </div>
        </section>

      </main>
      <Footer variant="full" />
    </div>
  );
}
