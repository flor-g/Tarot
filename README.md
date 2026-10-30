# Halloween Tarot

A mystical three-card Major Arcana tarot reading web app with a Halloween theme.

## Features
- 3-card spread (Past · Present · Future)
- 22 Major Arcana cards
- Halloween aesthetic
- Ready for Grok API interpretation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Image Prompts
Each card in `src/data/tarot.ts` includes an `imagePrompt` field optimized for AI image generators (Midjourney, Flux, DALL·E, etc.).

Recommended tools:
- **Flux** (via fal.ai or Replicate) — excellent for consistent style
- **Midjourney** — strong Halloween atmosphere
- **Ideogram** — good with text if needed later

## Next Steps
1. Generate card images using the prompts
2. Add real Grok API key for interpretations
3. Deploy to Vercel
