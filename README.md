# Revival Ministries

Official website for Revival Ministries — a Tamil Christian ministry led by Pastor Lucasekar. Built with Next.js, featuring worship music, sermons, prayer, and offerings.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured music, latest sermon, about preview |
| `/about` | About the ministry, Pastor Lucasekar, vision and stats |
| `/music` | Worship collection, featured releases, album browser, music library |
| `/sermons` | Biblical teaching, sermon carousel, popular messages |
| `/offerings` | Give online — tithe, offering, missions, building fund |
| `/prayer` | Submit prayer requests, praise reports, join live prayer |

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

# Lint
npm run lint
```

Development server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── music/page.tsx
│   ├── offerings/page.tsx
│   ├── prayer/page.tsx
│   ├── sermons/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutPageContent.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── HomePreviewSections.tsx
│   ├── MusicPageContent.tsx
│   ├── MusicSection.tsx
│   ├── Navbar.tsx
│   ├── OfferingsPageContent.tsx
│   ├── PrayerPageContent.tsx
│   ├── PrayerSection.tsx
│   ├── SermonsPage.tsx
│   ├── SermonsSection.tsx
│   ├── SupportPreview.tsx
│   └── TopographicBackground.tsx
└── utils/
    └── img.ts
```

## Features

- Responsive across mobile, tablet, and desktop
- Touch swipe on carousels
- `prefers-reduced-motion` support
- Static generation for all pages
- Optimized images via `next/image`
- Custom topographic background with canvas performance tuning

## Deployment

Optimized for [Vercel](https://vercel.com):

```bash
npx vercel
```

All pages are statically generated at build time.

## License

ISC
