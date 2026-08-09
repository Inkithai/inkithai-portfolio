# Inkithai Meiyalagan — Portfolio Website

A production-ready portfolio for a Full Stack & AI Engineer, built with Next.js 16, TypeScript, and Tailwind CSS v4. Designed around one principle: **the engineer — not the interface — is the product.** Optimized for scanning first, exploration second.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first design tokens)
- **Typography:** Inter + JetBrains Mono (self-hosted variable fonts, zero external requests)
- **Icons:** Lucide React + custom SVG brand icons
- **Deployment:** Vercel-ready

## 🎨 Design System

Direction: **Minimal Professional** — refined midnight blue, dark engineering aesthetic, restrained accent use.

| Token | Value | Role |
| --- | --- | --- |
| `--color-bg` | `#070A0F` | Background |
| `--color-bg-surface` | `#0D121A` | Card surface |
| `--color-bg-elevated` | `#111925` | Elevated surface |
| `--color-accent` | `#5B8CFF` | Interaction + emphasis only |
| `--color-text-secondary` | `#A8B1C2` | Supporting text |
| `--color-text-muted` | `#77829A` | Muted text (≥ 4.5:1 contrast) |
| `--color-border-subtle` | `#202A39` | Borders do more work than shadows |

System rules (enforced in `src/app/globals.css`):

- 4px-based spacing scale · section rhythm of 96/128px
- Four radius levels (6 / 10 / 14 / 20) + pill
- Exactly three button variants: primary (filled), ghost (outlined), link (text)
- Cards are containers: 1px border + surface + spacing — no nested dashboards
- No meaningful UI text below 12px
- Blue reserved for actions and key emphasis, never decoration
- Visible focus states, 44px touch targets, `prefers-reduced-motion` support

## 📁 Project Structure

```
portfolio/
├── public/                          # Static assets (resume PDF, portrait, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css              # Design system: tokens, type scale, components
│   │   ├── layout.tsx               # Root layout, fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx                 # Home: hero → work → experience → skills → recognition → about → contact
│   │   ├── work/page.tsx            # All projects with category filters + build journeys
│   │   ├── certifications/page.tsx  # Full certifications list with filters
│   │   └── sitemap.ts               # SEO sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx           # 72px minimal nav with primary CTA + mobile menu
│   │   │   └── footer.tsx           # Minimal brand + socials footer
│   │   ├── sections/
│   │   │   ├── hero.tsx             # Identity → value → CTA with editorial portrait
│   │   │   ├── selected-work.tsx    # Featured project centerpiece + secondary work
│   │   │   ├── experience.tsx       # Vertical timeline (roles + education)
│   │   │   ├── engineering-expertise.tsx  # Capability taxonomy
│   │   │   ├── recognition.tsx      # Research, awards, seed funding, certifications
│   │   │   ├── about.tsx            # Short editorial bio + engineering philosophy
│   │   │   └── final-cta.tsx        # Contact CTA
│   │   └── ui/
│   │       ├── icons.tsx            # GitHub / LinkedIn / Medium SVG icons
│   │       └── copy-button.tsx      # Copy-to-clipboard with feedback
│   ├── data/
│   │   └── content.ts               # 📝 Single source of truth for all content
│   └── lib/
│       └── utils.ts                 # cn() utility
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## 🛠 Setup & Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 📝 Customizing Content

All portfolio content is centralized in `src/data/content.ts`. Edit this single file to update:

- **Personal info:** name, title, email, social links, resume URL
- **Hero:** role label, description, stack line
- **Projects:** descriptions, outcomes, challenges, decisions, learnings
- **Experience:** roles, periods, summaries, achievements (max 3 shown per role)
- **Skills:** capability categories and technology lists
- **Education:** degree, institution, period, grade
- **Recognition:** publication, entrepreneurship stories, certifications

### Example: Adding a New Project

```typescript
// In src/data/content.ts → projects array
{
  title: "My New Project",
  shortTitle: "NewProject",
  description: "A brief one-line description.",
  longDescription: "Longer description for the work page.",
  technologies: ["React", "Node.js", "PostgreSQL"],
  categories: ["Full Stack"],
  githubUrl: "https://github.com/Inkithai/project-name",
  liveUrl: null,
  featured: true,               // shows in the featured grid on /work
  isSelectedWork: true,         // eligible for the home page
  outcome: "The measurable result of the project.",
  challenges: ["..."],
  decisions: ["..."],
  learnings: ["..."],
  imageGradient: "from-blue-600 via-cyan-600 to-teal-600",
}
```

### Adding a Resume

Place your PDF resume in `public/` and update `resumeUrl` in `content.ts`.

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Deploy (no extra configuration needed)

Or via CLI: `npx vercel`

## ✅ Features

- **Dark, minimal-professional design** tuned for recruiter scanning
- **Featured-first project hierarchy** with progressive disclosure (build journeys)
- **Vertical experience timeline** with education folded in
- **Capability-based skills taxonomy** instead of a technology inventory
- **Editorial recognition section** — IEEE publication, seed funding, awards
- **Self-hosted variable fonts** — no external font requests
- **Accessible** — semantic headings, ARIA labels, focus states, 44px targets, WCAG AA contrast, reduced-motion support
- **SEO optimized** — metadata, Open Graph, Twitter cards, robots.txt, sitemap.xml, JSON-LD
- **Copy email to clipboard** with visual feedback

## 🎨 Design Philosophy

Remove elements rather than add them. Technical credibility comes from the projects and experience themselves — not from decorative terminal UI, badge walls, or dashboard-style cards. The result: a portfolio that says *"here is an engineer who builds valuable software"* instead of *"look what my UI can display."*

## 📄 License

This portfolio is personal and proprietary to Inkithai Meiyalagan.
