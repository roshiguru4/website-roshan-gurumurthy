# Roshan Gurumurthy — Portfolio

Minimal, typography-driven personal site built with Next.js 14 + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Next.js — just click Deploy
4. (Optional) Add a custom domain in Vercel project settings

## Editing content

All content lives in:
- `app/page.tsx` — the data for experience, projects, education
- `components/Sections.tsx` — the components and skills list

Colors and fonts are in `tailwind.config.ts` and `app/globals.css`.
