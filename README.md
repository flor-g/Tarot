# Halloween Tarot

A three-card tarot reading web app with a Halloween theme. Full 78-card deck (22 Major + 56 Minor Arcana).

**Status: Deployed to Vercel.**

## Card Art Style

**Geometric block composition with Halloween color palette**

All 78 cards use a consistent style of rectangular color blocks, simplified geometric figures, and Halloween motifs.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Bright Orange | `#FF6B00` / `#F97316` | Primary shapes, accents |
| Deep Purple | `#6B21A8` / `#4C1D95` | Secondary blocks |
| Black | `#000000` | Grid lines, silhouettes, borders |
| Cream / Off-White | `#FEF3C7` / `#FFFBEB` | Backgrounds, negative space |
| Yellow | `#FBBF24` / `#F59E0B` | Accents, stars, details |
| Red | `#DC2626` / `#B91C1C` | Emphasis blocks |

The four reference cards (The Fool, The Magician, Death, The World) are the exact approved images. The remaining 18 Major Arcana and all 56 Minor Arcana were generated to match the same geometric block style and color system.

## Deployment

The app is already deployed on Vercel (imported from `flor-g/Tarot`).

- Framework: Next.js
- To update the live site: push to `main` (Vercel auto-deploys)
- Environment variable required for interpretations:
  - Name: `XAI_API_KEY`
  - Value: your key from [console.x.ai](https://console.x.ai)
  - Set it in Vercel → Project Settings → Environment Variables, then redeploy if needed

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Copy `.env.example` to `.env.local` and set `XAI_API_KEY` for local interpretation testing:

```bash
cp .env.example .env.local
# then edit .env.local
XAI_API_KEY=xai-your-key-here
```

## Project Structure

- `public/cards/` — 78 tarot card images (Major + Minor Arcana)
- `src/data/tarot.ts` — full card data (names, keywords, upright/reversed meanings)
- `src/app/page.tsx` — main reading interface (with starfield, moon, card flip animations)
- `src/app/api/interpret/route.ts` — interpretation API route
- `src/app/globals.css` — Halloween atmospheric styles

## Recent Updates

- Full 78-card geometric Halloween Mondrian deck
- Polished UI: Creepster/Cinzel fonts, animated starfield + moon, 3D card flip reveal, staggered entrance
- Deployed to Vercel
