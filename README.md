# My Product

![App Preview](https://imgix.cosmicjs.com/8eb03f30-29e9-11f1-80f3-d192c421c2e6-autopilot-photo-1580489944761-15a19d654956-1774621852314.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautifully designed SaaS product website built with **Next.js 16** and powered by **[Cosmic](https://www.cosmicjs.com)** CMS. Features dynamic content for product features, pricing tiers, documentation, and customer testimonials.

## Features

- 🏠 **Dynamic Homepage** — Compelling hero section with feature highlights, pricing preview, and testimonials
- 🚀 **Features Page** — Showcases all product features in a responsive grid with icons and images
- 💰 **Pricing Page** — Tiered pricing cards with popular plan highlighting and feature breakdowns
- 📖 **Documentation Page** — Organized docs with category sidebar navigation and rich HTML content
- ⭐ **Testimonials Page** — Customer reviews with star ratings, photos, and professional titles
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile viewports
- ⚡ **Server-Side Rendering** — Fast page loads with Next.js App Router and server components
- 🎨 **Modern Design** — Gradient hero, card-based layouts, smooth hover animations
- 🔍 **SEO Optimized** — Proper metadata, semantic HTML, and fast load times

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69c6943ef9808e52fa7d741d&clone_repository=69c6958cf9808e52fa7d74e1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a SaaS product website with features, pricing tiers, documentation pages, and customer testimonials."

### Code Generation Prompt

> "Build a Next.js application for an online business called 'My Product'. The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, documentation-pages, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with configured content

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd my-product

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic bucket credentials

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Features

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Pricing Tiers

```typescript
const { objects: tiers } = await cosmic.objects
  .find({ type: 'pricing-tiers' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This project uses 4 Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| 🚀 Features | `features` | Product features with icons and images |
| 💰 Pricing Tiers | `pricing-tiers` | Pricing plans with feature lists |
| 📖 Documentation | `documentation-pages` | Categorized help articles |
| ⭐ Testimonials | `testimonials` | Customer reviews with ratings |

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables (COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->