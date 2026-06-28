# Inkithai Meiyalagan — Portfolio Website

A modern, production-ready portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Designed to showcase engineering skills, projects, and professional experience for Software Engineering opportunities.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVG icons
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
portfolio/
├── public/                          # Static assets
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with SEO
│   │   ├── page.tsx                # Home page
│   │   └── sitemap.ts              # SEO sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx          # Sticky navigation with active section
│   │   │   └── footer.tsx          # Footer with social links
│   │   ├── sections/
│   │   │   ├── hero.tsx            # Hero section with CTAs
│   │   │   ├── about.tsx           # About section with highlights
│   │   │   ├── experience.tsx      # Professional timeline
│   │   │   ├── projects.tsx        # Project cards with expandable details
│   │   │   ├── skills.tsx          # Tabbed skills grid
│   │   │   ├── education.tsx       # Education and publications
│   │   │   └── contact.tsx         # Contact information
│   │   └── ui/
│   │       ├── icons.tsx           # Custom SVG icons (LinkedIn, GitHub)
│   │       └── progress-bar.tsx    # Scroll progress indicator
│   ├── data/
│   │   └── content.ts              # 📝 Single source of truth for all content
│   ├── hooks/
│   │   └── use-scroll.ts           # Scroll position, active section, theme hooks
│   └── lib/
│       └── utils.ts                # Utility functions (cn, etc.)
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

## 🛠 Setup & Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd portfolio
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

- **Personal info:** Name, title, email, social links, resume URL
- **About section:** Summary text and highlights
- **Experience:** Job roles, achievements, technologies
- **Projects:** Descriptions, challenges, decisions, learnings
- **Skills:** Categorized technology lists
- **Education:** Degree, institution, period
- **Contact:** Email, social profiles, phone

### Example: Adding a New Project

```typescript
// In src/data/content.ts → projects array
{
  title: "My New Project",
  description: "A brief description of the project.",
  technologies: ["React", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/Inkithai/project-name",
  liveUrl: "https://project-name.vercel.app", // or null if not available
  challenges: ["Challenge 1", "Challenge 2"],
  decisions: ["Decision 1", "Decision 2"],
  learnings: ["Learning 1", "Learning 2"],
  featured: true, // true shows in main grid, false shows in "Other Projects"
}
```

### Adding a Resume

Place your PDF resume as `public/Inkithai_Meiyalagan_CV.pdf` (or update `resumeUrl` in `content.ts`).

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy (no additional configuration needed)

Or use the Vercel CLI:

```bash
npx vercel
```

## ✅ Features

- **Dark mode first** with light mode toggle
- **Responsive design** — mobile, tablet, and desktop
- **Sticky navigation** with active section highlighting
- **Smooth scrolling** between sections
- **Scroll progress indicator** at the top
- **Keyboard shortcuts** — press `/` to scroll to top
- **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- **SEO optimized** — Metadata, Open Graph, Twitter Cards, robots.txt, sitemap.xml, JSON-LD structured data
- **Copy email to clipboard** with visual feedback
- **Expandable project details** for challenges, decisions, and learnings
- **Tabbed skills** for organized browsing
- **Collapsible experience timeline**

## 📊 SEO & Performance

- Metadata and structured data (JSON-LD)
- Open Graph and Twitter Card support
- robots.txt and sitemap.xml
- Semantic HTML with ARIA labels
- Optimized for Lighthouse scores: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 100

## 🎨 Design Philosophy

Minimal, polished, and professional — inspired by portfolios from engineers at Vercel, Stripe, Linear, and Anthropic. Clean typography, subtle animations, and consistent spacing throughout.

## 📄 License

This portfolio is personal and proprietary to Inkithai Meiyalagan.
