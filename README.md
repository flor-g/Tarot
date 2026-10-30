# Halloween Tarot

A mystical three-card Major Arcana tarot reading web app with a Halloween theme.

## Features
- 3-card spread (Past · Present · Future)
- 22 Major Arcana cards
- Halloween aesthetic
- Real Grok (xAI) API interpretation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Setting up the Grok / xAI API Key

Interpretations use the xAI API. You need an API key from [console.x.ai](https://console.x.ai).

1. Create an account / sign in at [console.x.ai](https://console.x.ai)
2. Add credits / set up billing
3. Create an API key on the API Keys page
4. Copy it immediately (shown only once)

### Local development
Copy `.env.example` to `.env.local` and fill in your key:

```bash
cp .env.example .env.local
# then edit .env.local
XAI_API_KEY=xai-your-key-here
```

Next.js automatically loads `.env.local`.

### Deployment (e.g. Vercel)
Add `XAI_API_KEY` as an environment variable in your project settings (Settings → Environment Variables).

### Cloud computer / Grok session
If running the app inside a persistent cloud session:
```bash
echo 'export XAI_API_KEY="xai-your-key-here"' >> ~/.bashrc
source ~/.bashrc
```
Or put it in a project `.env` and source it.

## Image Prompts
Each card in `src/data/tarot.ts` includes an `imagePrompt` field optimized for AI image generators (Midjourney, Flux, DALL·E, etc.).

Recommended tools:
- **Flux** (via fal.ai or Replicate) — excellent for consistent style
- **Midjourney** — strong Halloween atmosphere
- **Ideogram** — good with text if needed later

## Next Steps
1. Generate card images using the prompts
2. Deploy to Vercel (remember to set XAI_API_KEY)
3. Customize the model in `src/app/api/interpret/route.ts` if desired (currently `grok-4`)
