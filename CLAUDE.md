# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a golf equipment e-commerce site built with Next.js 15 and Supabase. The frontend showcases golf products with a modern, responsive design, while Supabase provides the PostgreSQL database and auto-generated REST API.

## Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **Styling**: TailwindCSS 3.4
- **Language**: JavaScript (React 19)
- **Deployment**: Optimized for Vercel

### Backend
- **Database**: Supabase (PostgreSQL)
- **API**: Supabase auto-generated REST API
- **Auth**: Supabase Auth (ready to implement)

## Build & Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Database Schema

The Supabase database contains two main tables:

**Products Table:**
- `id` (serial, primary key)
- `title`, `brand`, `price`, `sale_price`
- `category`, `subcategory`, `description`
- `image_url`, `images` (JSONB array)
- `slug` (unique)
- `featured`, `best_seller`, `new_arrival`, `in_stock`
- `stock_quantity`, `rating`, `review_count`
- `specifications`, `filters` (JSONB)
- `body_content`, `created_at`, `updated_at`, `is_published`

**Categories Table:**
- `id` (serial, primary key)
- `name`, `slug` (unique), `description`
- `image_url`, `display_order`, `is_active`

### Page Structure

- `/` - Homepage with hero banner, featured products, and category showcases
- `/products/[slug]` - Individual product detail pages
- `/categories/[slug]` - Category listing pages (clubs, balls, shoes, gloves, etc.)
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
├── Header/                     # Site navigation
└── Footer/                     # Site footer
```

### API Client

The Supabase client is located at `src/lib/supabase.js` and the API functions are in `src/lib/api.js`.

Available functions:
- `getProducts(params)` - Fetch products with optional filters (category, featured, bestSeller, inStock, brand, limit)
- `getProductById(id)` - Fetch product by ID
- `getProductBySlug(slug)` - Fetch product by slug
- `getCategories()` - Fetch all categories with product counts
- `getCategoryBySlug(slug)` - Fetch category by slug
- `createProduct(productData)` - Create new product
- `updateProduct(id, productData)` - Update product
- `updateProductStock(id, quantity)` - Update stock quantity
- `deleteProduct(id)` - Delete product

## Product Categories & Filters

Key categories:
1. **Clubs**: Drivers, woods, hybrids, irons, wedges, putters
2. **Balls**: 2-5 piece construction options
3. **Shoes**: Men's, women's, junior options
4. **Gloves**: Various materials and weather types
5. **Bags**: Stand, cart, travel, carry bags
6. **Accessories**: Rangefinders, GPS, training aids, tees, etc.

## Environment Variables

**REQUIRED**: Create a `.env.local` file in the project root:

```bash
# Supabase Configuration (Required)
# Get these values from your Supabase project dashboard:
# https://supabase.com/dashboard/project/_/settings/api

NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Note**: The `.env.local` file is gitignored for security. Each developer must create their own copy.

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project URL and anon key from Settings > API
3. Add them to your `.env.local` file

### 2. Create Database Tables

Run the schema SQL in Supabase SQL Editor:
```bash
# Located at: supabase/schema.sql
```

### 3. Seed Initial Data

Run the seed SQL to populate products and categories:
```bash
# Located at: supabase/seed.sql
```

### 4. Row Level Security (RLS)

The schema includes RLS policies that:
- Allow public read access to published products
- Allow public read access to active categories
- Block write operations from anonymous users (use service role for admin)

## Adding New Products

Products can be added directly in the Supabase dashboard or via the API:

```javascript
import { createProduct } from '@/lib/api';

await createProduct({
  title: "Product Name",
  brand: "Brand Name",
  price: 299.99,
  salePrice: 249.99,  // Optional
  category: "clubs",
  subcategory: "drivers",
  description: "Short product description",
  slug: "product-slug",
  featured: true,
  bestSeller: true,
  specifications: { key: "value" },
  filters: { filterType: ["value1", "value2"] }
});
```

## Important Notes

- **Images**: Product images reference URLs. For production, use Supabase Storage or a CDN.
- **Filters**: Advanced filtering UI is not yet implemented. Basic brand filtering is shown on category pages.
- **Shopping Cart**: Client-side cart implemented with localStorage (CartContext).
- **Payment Processing**: Not implemented - this is a portfolio/showcase project.

## Legacy .NET API (Deprecated)

The `api/` folder contains a legacy .NET 8 Web API that is no longer used. The application now uses Supabase directly. This folder can be removed if no longer needed for reference.

## Future Enhancements

- Implement advanced product filtering UI
- Add product search functionality
- Add product comparison feature
- Implement checkout with Stripe
- Add product reviews and ratings system
- Add user authentication with Supabase Auth
- Add proper product images with Supabase Storage
- Implement inventory management
- Add order processing and tracking
- Create admin dashboard for product management
