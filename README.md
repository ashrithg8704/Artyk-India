# Artyk India — Curated Living

Ultra-premium website for Artyk India, a curated luxury furniture destination in Jubilee Hills.

## Technology

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

## Git LFS (Required For Intro Video)

This repository stores the intro video using Git LFS.

If this is your first clone setup on a machine:

```bash
brew install git-lfs
git lfs install
```

After cloning (or when pulling new media changes):

```bash
git lfs pull
```

Current LFS-tracked media:

- `public/videos/artyk-intro.mp4`

## Sanity CMS Setup

This repo uses a dedicated Sanity Studio inside `sanity/` and a frontend client layer in `src/lib/sanity`.

### 1) Configure environment

Copy env templates and fill your Sanity values:

```bash
cp .env.example .env.local
cp sanity/.env.example sanity/.env
```

Required keys:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_API_VERSION`

Optional keys:

- `SANITY_API_READ_TOKEN` (for private dataset/server reads)
- `SANITY_REVALIDATE_SECRET` (for on-demand revalidation webhook)

### 2) Run Sanity Studio

```bash
npm run cms:dev
```

Studio runs from `sanity/` and uses structured schemas for:

- Site Settings
- Hero Section
- Collections
- Featured Products
- Brand Story
- Craftsmanship Section
- Showroom Section
- Testimonials
- CTA Section
- Lookbook Items

### 3) Build checks

```bash
npm run build
npm run cms:build
```

## Page Routes

- `/` — Homepage
- `/about` — Brand philosophy
- `/collections` — Curated collections
- `/lookbook` — Gallery / lookbook
- `/gallery` — Alias to lookbook
- `/contact` — Enquiry and showroom details

## Brand System

- Background: `#EEEAE4`
- Accent: `#B59B87`
- Text: `#212121`
- Headline style: Palatino-inspired serif
- Body style: Creato Display Regular-inspired modern sans

## Asset Notes

- Replace placeholders in `public/images/**` with final photography and logo assets.
- Keep logo treatment pristine: no stretch, rotation, distortion, flipping, shadows, gradients, textures, blur, or recolor.

## Deployment Notes

- Deploy frontend (Next.js) and Studio (`sanity`) separately.
- For live content updates, configure a Sanity webhook to `POST /api/revalidate` with header `x-sanity-token: <SANITY_REVALIDATE_SECRET>`.
- After first Studio launch, create/publish singleton docs with IDs used in desk structure:
	- `siteSettings`
	- `heroSection`
	- `brandStory`
	- `craftsmanshipSection`
	- `showroomSection`
	- `ctaSection`
