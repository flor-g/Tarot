# Halloween Tarot

A three-card Major Arcana tarot reading web app with a Halloween theme.

## Card Art Style

**Geometric block composition with Halloween color palette**

All 22 Major Arcana cards use a consistent style of rectangular color blocks, simplified geometric figures, and Halloween motifs.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Bright Orange | `#FF6B00` / `#F97316` | Primary shapes, accents |
| Deep Purple | `#6B21A8` / `#4C1D95` | Secondary blocks |
| Black | `#000000` | Grid lines, silhouettes, borders |
| Cream / Off-White | `#FEF3C7` / `#FFFBEB` | Backgrounds, negative space |
| Yellow | `#FBBF24` / `#F59E0B` | Accents, stars, details |
| Red | `#DC2626` / `#B91C1C` | Emphasis blocks |

The four reference cards (The Fool, The Magician, Death, The World) are the exact approved images. The remaining 18 cards were generated to match the same geometric block style and color system.

## Deploy to Vercel (recommended)

1. Go to **[vercel.com/new](https://vercel.com/new)** and import this GitHub repo: `flor-g/Tarot`
   - Direct import link: [Import flor-g/Tarot](https://vercel.com/new/import?s=https://github.com/flor-g/Tarot)
2. Framework preset should auto-detect as **Next.js**. Click Deploy.
3. After the project is created, go to **Settings → Environment Variables** and add:
   - Name: `XAI_API_KEY`
   - Value: your key from [console.x.ai](https://console.x.ai)
4. Redeploy (or push any commit) so the variable is available.

The app will be live at a `*.vercel.app` URL. Custom domains can be added later in the Vercel dashboard.

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

- `public/cards/` — 22 Major Arcana card images
- `src/data/tarot.ts` — card data (names, keywords, upright/reversed meanings)
- `src/app/page.tsx` — main reading interface
- `src/app/api/interpret/route.ts` — interpretation API route

## Next Steps
- Add your `XAI_API_KEY` to enable real interpretations
- Deploy to Vercel
- Optionally expand to Minor Arcana later
