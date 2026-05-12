<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Artly AI Website — Agent Progress Board

Multi-agent build log. Each task shows owner, status, and outcome.

---

## Phase 1 · Project Setup

- [x] **T1 · Initialize Next.js project** — `engineer-setup`
  - Next.js 16.2.6, TypeScript, Tailwind v4, App Router
  - `tailwind.config.ts` + `app/globals.css` with all design tokens
  - Google Fonts + Material Symbols in `app/layout.tsx`
  - `components/layout/`, `components/ui/`, `components/sections/` scaffolded
  - `npm run build` ✅

---

## Phase 2 · Shared Components

- [x] **T2 · Build shared layout components** — `designer-engineer`
  - `TopBanner` — fixed yellow announcement bar with countdown
  - `NavBar` — glass pill nav, `home` / `inner` variants, active link highlighting
  - `Footer` — `full` (with email subscribe) and `minimal` variants
  - `GlassPanel` — reusable glassmorphism wrapper with optional glow
  - `MetricCard` — stat card with dot, headline value, description
  - `SectionDivider` — full-width gradient divider
  - `VideoPlayer` — HLS client component with IntersectionObserver autoplay
  - `npm run build` ✅

---

## Phase 3 · Pages (parallel)

- [x] **T3 · Homepage** (`app/page.tsx`) — `engineer-homepage`
  - Hero, Robot School, Applications, Customization, Production Traction, Hardware, Contact
  - Campaign video (HLS autoplay) + Explainer video (HLS with controls)
  - Real images downloaded to `public/images/`
  - Partner logos (MUJI, Tesla, Microsoft, Salesforce, Cisco, Intel, Nvidia, McKinsey, Workday)

- [x] **T4 · Proof & Traction page** (`app/proof/page.tsx`) — `engineer-proof`
  - 4-metric bento grid with pulsing dots + Material Symbols icons
  - Partner logos row (grayscale hover effect)
  - Case study bento (image + momentum bar + stat row)

- [x] **T5 · Growth Roadmap page** (`app/roadmap/page.tsx`) — `engineer-roadmap`
  - 4-phase timeline (2024 → 2030) with KPI chips (Fleet + Revenue)
  - Vertical connecting line with dot indicators
  - Footer insight block

---

## Phase 4 · Review & QA

- [x] **T6 · Design fidelity & code review** — `reviewer`
  - Fixed NavBar `top-0` on inner pages (was `top-[48px]` for all)
  - Fixed MetricCard value color (`text-primary-fixed` not `text-primary`)
  - Added `htmlFor` / `id` pairs to contact form labels
  - Fixed TypeScript `Phase` interface on roadmap
  - Fixed roadmap `pt-[120px]` padding consistency

- [x] **T7 · Build verification** — `tester`
  - All 3 routes static: `/`, `/proof`, `/roadmap`
  - `npm run build` ✅ zero errors

---

## Phase 5 · Deployment

- [x] **T8 · GitHub repo + GitHub Pages** — `devops`
  - Repo: https://github.com/reatured/artly-ai-website (public)
  - `output: "export"` + `trailingSlash: true` for static export
  - GitHub Actions workflow: `.github/workflows/deploy.yml`
  - Live URL: https://reatured.github.io/artly-ai-website/

---

## Phase 6 · Polish & Assets

- [x] Fix hero body text wrapping (`max-w-lg` → `max-w-[520px]`, Tailwind v4 spacing conflict)
- [x] Fix roadmap timeline layout (rebuilt flex-gap approach, was broken with absolute `pl-12`)
- [x] Add real images from artly.ai (downloaded to `public/images/`)
- [x] Switch all image references to local `/images/` paths
- [x] Add HLS video player (`components/ui/VideoPlayer.tsx`, `hls.js`)
  - Campaign video: `artly-ai/compagin/master.m3u8` (hero section, autoplay muted loop)
  - Explainer video: `artly-ai/explainer/explainer/master.m3u8` (Robot School, controls)
- [x] Google Analytics (`app/layout.tsx` via `next/script afterInteractive`)
  - `GT-PJNQ8LQG` — Google tag
  - `AW-465362743` — Google Ads conversion tracking

---

## Pending / Backlog

- [ ] Migrate Google Fonts `<link>` to `next/font/google` (zero-CLS performance win)
- [x] Mobile hamburger menu for NavBar — animated 3-bar → X toggle, glass dropdown with all nav links
- [ ] Wire up contact form (needs server action or API route — currently static)
- [ ] Add live countdown timer to TopBanner (currently shows "00" placeholders)
- [ ] SEO meta tags: `og:image`, `og:description`, Twitter card
- [ ] Push latest changes (videos, GA, images) to GitHub + trigger redeploy
- [ ] Verify live GitHub Pages URL reflects latest build

---

## Team

| Role | Agent | Responsibilities |
|---|---|---|
| Team Lead | Claude (main) | Planning, coordination, review, fixes |
| Setup Engineer | `engineer-setup` | Project init, design tokens |
| Designer/Engineer | `designer-engineer` | Shared components |
| Engineer (Homepage) | `engineer-homepage` | `/` page |
| Engineer (Proof) | `engineer-proof` | `/proof` page |
| Engineer (Roadmap) | `engineer-roadmap` | `/roadmap` page |
| Reviewer | `reviewer` | Design fidelity, code quality |
| Tester | `tester` | Build verification |
| DevOps | `devops` | GitHub repo, CI/CD, Pages deployment |
