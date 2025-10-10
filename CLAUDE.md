# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a golf equipment e-commerce site with a Next.js 15 frontend and .NET 8 Web API backend. The frontend showcases golf products with a modern, responsive design, while the backend manages product data, inventory, and provides RESTful API endpoints.

## Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **Styling**: TailwindCSS 3.4
- **Content Management**: Velite.js (MDX-based, for static content/blogs)
- **Language**: JavaScript (React 19)
- **View Counter**: Supabase (optional, requires configuration)
- **Deployment**: Optimized for Vercel

### Backend API
- **Framework**: .NET 8.0 Web API
- **ORM**: Entity Framework Core 9.0
- **Database**: SQLite (development), can be switched to PostgreSQL/SQL Server for production
- **Language**: C# 12.0
- **Documentation**: Swagger/OpenAPI

## Build & Development Commands

### Frontend (Next.js)

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

### Backend API (.NET)

```bash
# Navigate to API directory
cd api/GolfShop.Api

# Restore dependencies
dotnet restore

# Build the API
dotnet build

# Run the API (starts on http://localhost:5065)
dotnet run

# Watch mode for development
dotnet watch run
```

### Running Both Frontend and Backend

1. **Start the API** (Terminal 1):
   ```bash
   cd api/GolfShop.Api
   dotnet run
   ```
   API will be available at `http://localhost:5065`

2. **Start the Frontend** (Terminal 2):
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:3000`

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

## API Integration

### API Endpoints

The backend API provides the following endpoints:

**Products:**
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/by-slug/{slug}` - Get product by slug
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `PATCH /api/products/{id}/stock` - Update stock

**Categories:**
- `GET /api/categories` - Get all categories
- `GET /api/categories/{slug}` - Get category by slug

### Connecting Frontend to API

To switch the Next.js frontend from MDX-based content to API-based:

1. Create API client in `src/lib/api.js`:
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5065/api';

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params);
  const response = await fetch(`${API_BASE_URL}/products?${query}`);
  return response.json();
}

export async function getProductBySlug(slug) {
  const response = await fetch(`${API_BASE_URL}/products/by-slug/${slug}`);
  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  return response.json();
}
```

2. Update pages to use API instead of Velite:
   - Replace `import { products } from "@/.velite/generated"` with API calls
   - Use `fetch` or `axios` in server components
   - Or use React Query/SWR for client-side data fetching

### Environment Variables

Add to `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5065/api
```

## Database Management

The API uses SQLite in development. To inspect the database:

```bash
cd api/GolfShop.Api
sqlite3 golfshop.db
```

Common SQL commands:
```sql
.tables                    -- List all tables
SELECT * FROM Products;    -- View all products
SELECT * FROM Categories;  -- View all categories
```

### Resetting the Database

To reset and reseed the database, simply delete `golfshop.db` and restart the API:
```bash
rm api/GolfShop.Api/golfshop.db
cd api/GolfShop.Api && dotnet run
```

## Future Enhancements

- Implement advanced product filtering UI
- Add product search functionality
- Add product comparison feature
- Implement shopping cart and checkout
- Add product reviews and ratings system
- Add user authentication and authorization
- Migrate to PostgreSQL or SQL Server for production
- Add proper product images and image upload
- Implement inventory management
- Add order processing and tracking
- Create admin dashboard for product management
