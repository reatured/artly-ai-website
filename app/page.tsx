import { TopBanner } from "@/components/layout/TopBanner";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { MetricCard } from "@/components/ui/MetricCard";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const BANNER_HLS  = "https://bluehill-website-public.s3.us-west-2.amazonaws.com/artly-ai/compagin/master.m3u8";
const EXPLAINER_HLS = "https://bluehill-website-public.s3.us-west-2.amazonaws.com/artly-ai/explainer/explainer/master.m3u8";
const VIDEO_FALLBACK = "https://bluehill-website-public.s3.us-west-2.amazonaws.com/artly-ai/explainer/video.mp4";

const partners = [
  { name: "MUJI",       src: "/images/partners/muji.webp" },
  { name: "Tesla",      src: "/images/partners/tesla.webp" },
  { name: "Microsoft",  src: "/images/partners/microsoft.webp" },
  { name: "Salesforce", src: "/images/partners/salesforce.webp" },
  { name: "Cisco",      src: "/images/partners/cisco.svg" },
  { name: "Intel",      src: "/images/partners/intel.svg" },
  { name: "Nvidia",     src: "/images/partners/nvidia.png" },
  { name: "McKinsey",   src: "/images/partners/mckinsey.svg" },
  { name: "Workday",    src: "/images/partners/workday.webp" },
];

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col antialiased">
      <TopBanner />
      <NavBar variant="home" />

      <main className="flex-grow pt-[160px] pb-xxl px-gutter max-w-container-max mx-auto w-full cinematic-bg">

        {/* ── Hero ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-xxl">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed" />
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                FUTURISTIC · FLUID · CINEMATIC
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-background">
              The training layer for physical AI{" "}
              <span className="text-primary-fixed">skills.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[520px]">
              Artly&apos;s proprietary AI platform lets robots learn real-world skills in just 30 minutes.
              By learning directly from human demonstrations, our robots perform precise, repeatable
              actions at commercial scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors flex items-center gap-2">
                Invest Now
                <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
              </button>
              <button className="border border-outline-variant text-on-surface-variant px-8 py-3 rounded-full font-label-caps text-label-caps hover:border-primary-fixed hover:text-primary-fixed transition-colors flex items-center gap-2">
                Download Investor Brief
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <GlassPanel glow className="p-lg flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="bg-primary-fixed/10 text-primary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full border border-primary-fixed/20">
                  Live metrics
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">Platform Growth</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MetricCard label="DRINKS SERVED"  value="1M+"         description="drinks served" />
                <MetricCard label="REVENUE"        value="$5M"         description="revenue generated" />
                <MetricCard label="PARTNERSHIPS"   value="Fortune 500" description="Deployed with Fortune 500 partners" />
                <MetricCard label="LEADERSHIP"     value="Amazon Exit" description="Founder with a prior Amazon acquisition" />
              </div>
            </GlassPanel>
          </div>
        </section>

        {/* ── Campaign Video ── */}
        <section className="mb-xxl">
          <div className="relative w-full rounded-xl overflow-hidden border border-outline-variant/20 aspect-video">
            <VideoPlayer
              id="banner-video"
              hlsSrc={BANNER_HLS}
              fallbackSrc={VIDEO_FALLBACK}
              poster="/images/video-banner-poster.jpg"
              showControls={false}
              intersectionThreshold={0.3}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <SectionDivider />

        {/* ── Robot School ── */}
        <section id="robot-school" className="my-xxl flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-fixed" />
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest text-[10px]">FOUNDATION</span>
              </div>
              <h2 className="font-display-lg text-[36px] font-bold text-primary leading-tight">Robot School</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Robot School, powered by Artly&apos;s AGI system, bridges the sim-to-real gap — delivering
                complex manipulation skills with minimal tuning, faster deployment, and reliable
                real-world performance.
              </p>
            </div>
            <GlassPanel glow className="p-lg flex flex-col gap-4">
              <span className="font-label-caps text-label-caps text-primary-fixed">GeekWire · April 2026</span>
              <h3 className="font-headline-sm text-[24px] font-bold text-primary">
                &ldquo;The Breakthrough That Could Change How Robots Learn&rdquo;
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Artly AI&apos;s founder and CEO shares how our foundation world models enable robots to
                learn new skills from a single human demonstration.
              </p>
              <a href="https://www.geekwire.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary-fixed font-label-caps text-label-caps hover:text-primary-fixed-dim transition-colors w-fit mt-2">
                Read more on GeekWire
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </GlassPanel>
          </div>

          {/* Explainer video */}
          <div className="relative w-full rounded-xl overflow-hidden border border-outline-variant/20 aspect-video">
            <VideoPlayer
              id="robot-learning-video"
              hlsSrc={EXPLAINER_HLS}
              fallbackSrc={VIDEO_FALLBACK}
              poster="/images/video-explainer-poster.jpg"
              showControls={true}
              intersectionThreshold={0.3}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <SectionDivider />

        {/* ── Applications ── */}
        <section id="applications" className="my-xxl flex flex-col gap-12">
          <h2 className="font-display-lg text-[36px] font-bold text-primary text-center">Applications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Barista Bot",
                title: "Barista Bot",
                img: "/images/apps-barista-bot.png",
                desc: "Artly's Barista Bot is an AI-powered robotic coffee system that delivers consistent, barista-quality espresso drinks at scale. Designed for high-traffic environments, it automates the entire coffee-making process.",
                comingSoon: false,
              },
              {
                tag: "Bartender Bot",
                title: "Bartender Bot",
                img: "/images/apps-bartender-bot.png",
                desc: "Bartender Bot is an intelligent robotic cocktail system that mixes drinks with speed and precision. Built for hospitality and entertainment venues, it delivers consistent cocktails and reduces waste.",
                comingSoon: false,
              },
              {
                tag: "Coming Soon",
                title: "Teaism Bot",
                img: "/images/apps-tea-bot.png",
                desc: "Teaism Bot is an AI-driven tea-brewing system that precisely controls temperature, steep time, and pouring. Designed for premium tea environments, it ensures consistent flavor at scale.",
                comingSoon: true,
              },
            ].map(({ tag, title, img, desc, comingSoon }) => (
              <div key={title} className="glass-panel rounded-xl border border-outline-variant/30 flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/80 to-transparent" />
                </div>
                <div className="p-lg flex flex-col gap-3 flex-grow">
                  <span className={`font-label-caps text-[10px] ${comingSoon ? "text-on-surface-variant" : "text-primary-fixed"}`}>{tag}</span>
                  <h3 className="font-headline-sm text-[20px] font-bold text-primary">{title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#" className="flex items-center gap-2 border border-primary-fixed px-6 py-2 rounded-full font-label-caps text-label-caps text-primary-fixed hover:bg-primary-fixed/10 transition-colors">
              Case Study: Artly Coffee
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </section>

        <SectionDivider />

        {/* ── Customization ── */}
        <section id="customization" className="my-xxl flex flex-col gap-12">
          <h2 className="font-display-lg text-[36px] font-bold text-primary">Customization</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Labor Crisis",
                img: "/images/customization-labor.svg",
                desc: "Customize robots to fill specific labor gaps—adapting workflows, operating hours, and skill sets to meet local staffing needs and business constraints.",
              },
              {
                title: "The Rise of Robots",
                img: "/images/customization-humanoids.svg",
                desc: "Configure robots for different environments and use cases, enabling flexible deployment across tasks without redesigning spaces or rebuilding systems.",
              },
              {
                title: "Manipulation",
                img: "/images/customization-manipulation.svg",
                desc: "Train robots for task-specific manipulation—customizing motions, tools, and interactions to achieve precise, reliable real-world performance.",
              },
            ].map(({ title, img, desc }) => (
              <div key={title} className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-4 bg-surface-container-low/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={title} className="h-16 w-16 object-contain" />
                <h3 className="font-headline-sm text-[20px] font-bold text-primary">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── Production Traction ── */}
        <section className="my-xxl flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-fixed" />
              <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest text-[10px]">PROOF</span>
            </div>
            <h2 className="font-display-lg text-[36px] font-bold text-primary leading-tight">
              Production traction, not demos
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Evidence the platform works in the wild — throughput, customers, and repeatable operations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "30+",        label: "ROBOTS DEPLOYED",     desc: "Operating in live environments with uptime requirements." },
              { value: "1M+",        label: "CUPS SERVED",         desc: "Real-world repetition creates compounding training data." },
              { value: "Multi-site", label: "ENTERPRISE ROLLOUTS", desc: "Designed for repeatable deployments across locations." },
              { value: "Hours",      label: "TIME TO TRAIN",       desc: "Fast onboarding for new tasks and variations." },
            ].map(({ value, label, desc }) => (
              <div key={label} className="glass-panel p-lg rounded-xl border border-outline-variant/30 flex flex-col gap-3 bg-gradient-to-br from-surface-container-high/80 to-transparent">
                <div className="font-display-lg text-[40px] font-bold text-primary">{value}</div>
                <div className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">{label}</div>
                <div className="font-body-md text-[14px] text-on-surface-variant">{desc}</div>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div className="flex flex-col gap-6">
            <span className="font-label-caps text-[12px] text-on-surface-variant tracking-wider uppercase">
              Robot Currently Deployed With
            </span>
            <div className="flex flex-wrap items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {partners.map(({ name, src }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={name}
                  src={src}
                  alt={`${name} logo`}
                  className="h-7 object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Hardware ── */}
        <section id="hardware" className="my-xxl flex flex-col gap-12">
          <h2 className="font-display-lg text-[36px] font-bold text-primary text-center">Hardwares</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Barista Bot",
                img: "/images/hardware-barista.png",
                desc: "Consistent, Cost-Effective Coffee Automation. AI-powered robotic arm that functions as a barista, making various coffee drinks and pouring latte art.",
              },
              {
                title: "Artly Humanoid Robot Gen1",
                img: "/images/hardware-humanoid.png",
                desc: "Next-Generation Dual-Arm Humanoid Service Robot. Autonomous Mobile Platform + AI Vision + High-Precision Collaborative Arms.",
              },
              {
                title: "Artly AI Arm",
                img: "/images/hardware-arm.png",
                desc: "Robotic Arm with VLA. Combines a 6-DoF arm, vision camera, and adaptive gripper — adaptable to any workstation.",
              },
            ].map(({ title, img, desc }) => (
              <div key={title} className="glass-panel rounded-xl border border-outline-variant/30 flex flex-col overflow-hidden text-center">
                <div className="relative h-56 bg-surface-container-highest/40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-lg flex flex-col gap-2">
                  <h3 className="font-headline-sm text-[20px] font-bold text-primary">{title}</h3>
                  <p className="font-body-md text-[14px] text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* ── Contact ── */}
        <section className="my-xxl max-w-2xl mx-auto w-full">
          <GlassPanel className="p-xl flex flex-col gap-8">
            <h2 className="font-display-lg text-[28px] font-bold text-primary text-center">Contact Artly</h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-info" className="font-label-caps text-label-caps text-on-surface-variant">Information</label>
                <input
                  id="contact-info"
                  type="text"
                  placeholder="Your Name or Email"
                  className="bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-fixed transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="font-label-caps text-label-caps text-on-surface-variant">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="How can we help?"
                  rows={4}
                  className="bg-surface border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-body-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-fixed transition-colors resize-none"
                />
              </div>
              <button type="submit" className="bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors self-center">
                Send Message
              </button>
            </form>
          </GlassPanel>
        </section>

      </main>
      <Footer variant="full" />
    </div>
  );
}
