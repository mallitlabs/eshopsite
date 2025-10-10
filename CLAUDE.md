# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a golf equipment e-commerce site built with Next.js 15, TailwindCSS, and Velite for content management. The site showcases golf products across multiple categories with detailed product pages, filtering, and a modern, responsive design.

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Styling**: TailwindCSS 3.4
- **Content Management**: Velite.js (MDX-based)
- **Language**: JavaScript (React 19)
- **View Counter**: Supabase (optional, requires configuration)
- **Deployment**: Optimized for Vercel

## Build & Development Commands

```bash
# Install dependencies
npm install

# Generate content from MDX files
npm run content

# Run development server
npm run dev

# Build for production (automatically runs content generation)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Content Structure

Products are managed as MDX files in `content/products/` organized by category:
```
content/products/
├── clubs/        # Drivers, irons, wedges, putters
├── balls/        # Golf balls (various types)
├── shoes/        # Golf shoes (spiked, spikeless)
├── gloves/       # Golf gloves (all weather types)
├── bags/         # Golf bags (cart, stand, travel)
└── accessories/  # Rangefinders, GPS, training aids, etc.
```

### Product Schema

Products are defined in `velite.config.js` with the following fields:
- **Required**: title, brand, price, category, description, slug, body (MDX content)
- **Optional**: salePrice, subcategory, image, featured, bestSeller, newArrival, inStock, rating, reviewCount, specifications, filters

### Page Structure

- `/` - Homepage with hero banner, featured products, and category showcases
- `/products/[slug]` - Individual product detail pages
- `/categories/[slug]` - Category listing pages (clubs, balls, shoes, gloves, etc.)
- `/blogs/[slug]` - Blog posts (from original template, still functional)
- `/about` - About page
- `/contact` - Contact page

### Component Organization

```
src/components/
├── Product/
│   ├── ProductCard.js          # Product card component
│   ├── FeaturedProducts.js     # Featured products section
│   ├── CategoryShowcase.js     # Category-specific product showcase
│   └── HeroBanner.js           # Homepage hero banner
├── Blog/                       # Blog-related components (from template)
├── Header/                     # Site navigation
└── Footer/                     # Site footer
```

## Product Categories & Filters

See `PRODUCT_STRUCTURE.md` for the complete category hierarchy and filter specifications. Key categories:

1. **Clubs**: Drivers, woods, hybrids, irons, wedges, putters
   - Filters: club type, hand, gender, shaft material/flex, loft, etc.
2. **Balls**: 2-5 piece construction options
   - Filters: compression, construction, cover material, feel
3. **Shoes**: Men's, women's, junior options
   - Filters: spike type, waterproof, style, closure type
4. **Gloves**: Various materials and weather types
   - Filters: material, leather grade, weather type, hand
5. **Bags**: Stand, cart, travel, carry bags
6. **Accessories**: Rangefinders, GPS, training aids, tees, etc.

## Adding New Products

1. Create an MDX file in the appropriate category folder under `content/products/`
2. Follow the schema defined in `velite.config.js`
3. Run `npm run content` to regenerate static data
4. The product will automatically appear on the site

Example product frontmatter:
```yaml
---
title: "Product Name"
brand: "Brand Name"
price: 299.99
salePrice: 249.99        # Optional
category: "clubs"
subcategory: "drivers"    # Optional
description: "Short product description"
featured: true
bestSeller: true
slug: "product-slug"
specifications:
  key: "value"
filters:
  filterType: ["value1", "value2"]
---
```

## Environment Variables

Create a `.env` file based on `.env.example`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

Note: Supabase is optional and only used for blog view counters. The site works without it.

## Important Notes

- **Images**: Product images are currently optional. To add real images, place them in the product folder and reference them in the MDX frontmatter, or use public URLs.
- **Filters**: Advanced filtering UI is not yet implemented. Basic brand filtering is shown on category pages.
- **Shopping Cart**: Not implemented - this is a portfolio/showcase project.
- **Payment Processing**: Not implemented - this is a portfolio/showcase project.

## Future Enhancements

- Implement advanced product filtering UI
- Add product search functionality
- Add product comparison feature
- Implement shopping cart (if needed)
- Add product reviews system
- Connect to a real product database/CMS
- Add proper product images
