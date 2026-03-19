# Shubham Jain — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, and **CSS Modules**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (zero runtime, scoped by default)
- **Fonts**: Syne · Fraunces · JetBrains Mono · Outfit (via Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── globals.css        # CSS variables, resets, global animations
│   ├── layout.tsx         # Root layout + metadata/SEO
│   └── page.tsx           # Main page — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / .module.css
│   │   └── Footer.tsx / .module.css
│   ├── sections/
│   │   ├── Hero.tsx / .module.css
│   │   ├── About.tsx / .module.css
│   │   ├── Experience.tsx / .module.css
│   │   ├── Skills.tsx / .module.css
│   │   ├── Projects.tsx / .module.css
│   │   ├── Achievements.tsx / .module.css
│   │   ├── Resume.tsx / .module.css
│   │   └── Contact.tsx / .module.css
│   └── ui/
│       ├── Hologram.tsx / .module.css     # Cyberpunk holographic avatar
│       ├── ParticleCanvas.tsx / .module.css
│       ├── AchievementToast.tsx / .module.css
│       └── ScrollInit.tsx                 # Cursor + scroll reveal + magnetic buttons
├── hooks/
│   ├── useCursor.ts        # Custom cursor with ring
│   ├── useTypewriter.ts    # Typewriter role cycling
│   └── useScrollReveal.ts  # IntersectionObserver reveal
├── lib/
│   └── data.ts             # Single source of truth — all content lives here
└── types/
    └── index.ts            # Shared TypeScript types
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

All portfolio content lives in **`src/lib/data.ts`** — update your:
- Experience bullets
- Projects + links
- Social URLs (LinkedIn, GitHub, LeetCode, CodeChef)
- Achievements

Replace **`public/avatar.jpg`** with your own image.

Replace **`public/resume.pdf`** with your actual resume PDF.

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import in [vercel.com](https://vercel.com) — zero config needed.
