# Halloween Tarot

A mystical three-card Major Arcana tarot reading web app with a Halloween theme.

## Card Art Style

**Mondrian-inspired geometric abstraction + Halloween color palette**

### Fixed Color Palette (use consistently across all cards)

| Name | Hex | Usage |
|------|-----|-------|
| Pumpkin Orange | `#F97316` | Primary accent, shapes, symbols |
| Deep Purple | `#6B21A8` | Secondary blocks, backgrounds |
| Black | `#000000` | Grid lines, silhouettes, borders |
| Cream | `#FEF3C7` | Background, negative space |
| Gold | `#FBBF24` | Small accents, stars, details |
| Deep Red | `#B91C1C` | Occasional emphasis (Death, Devil, etc.) |
| Off-White | `#FFFBEB` | Card faces, text areas |

All cards use the same limited palette, black grid lines, and geometric rectangular composition.

## Deploy to Vercel (recommended)

1. Go to **[vercel.com/new](https://vercel.com/new)** and import this GitHub repo: `flor-g/Tarot`
   - Direct import link: [Import flor-g/Tarot](https://vercel.com/new/import?s=https://github.com/flor-g/Tarot)
2. Framework preset should auto-detect as **Next.js**. Click Deploy.
3. After the project is created, go to **Settings → Environment Variables** and add:
   - Name: `XAI_API_KEY`
   - Value: your key from [console.x.ai](https://console.x.ai)
4. Redeploy (or push any commit) so the variable is available.

The app will be live at a `*.vercel.app` URL. Custom domains can be added later in the Vercel dashboard.

## Local development (optional)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Copy `.env.example` to `.env.local` and set `XAI_API_KEY` for local interpretation testing.

## Image Prompts
Each card in `src/data/tarot.ts` includes an `imagePrompt` field optimized for AI image generators.

## Next Steps
- Customize the model in `src/app/api/interpret/route.ts` if desired (currently `grok-4`)
- Add a custom domain
- Further UI polish
