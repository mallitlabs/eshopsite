# Golf Shop API

A .NET 8 Web API for managing golf equipment e-commerce data.

## Overview

This API provides endpoints for managing golf products, categories, and inventory. It uses Entity Framework Core with SQLite for data persistence and includes CORS configuration for the Next.js frontend.

## Tech Stack

- **.NET 8.0**
- **Entity Framework Core 9.0** with SQLite
- **ASP.NET Core Web API**
- **Swagger/OpenAPI** for API documentation

## Getting Started

### Prerequisites

- .NET 8.0 SDK or later
- (Optional) SQLite browser for database inspection

### Installation

1. Navigate to the API directory:
```bash
cd api/GolfShop.Api
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Build the project:
```bash
dotnet build
```

4. Run the API:
```bash
dotnet run
```

The API will start on `http://localhost:5065` (or `https://localhost:7065` for HTTPS).

## API Endpoints

### Products

- **GET** `/api/products` - Get all products
  - Query parameters:
    - `category` (string) - Filter by category
    - `featured` (boolean) - Filter featured products
    - `bestSeller` (boolean) - Filter best sellers
    - `inStock` (boolean) - Filter in-stock products
    - `brand` (string) - Filter by brand
    - `limit` (int) - Limit number of results

- **GET** `/api/products/{id}` - Get product by ID

- **GET** `/api/products/by-slug/{slug}` - Get product by slug

- **POST** `/api/products` - Create a new product

- **PUT** `/api/products/{id}` - Update a product

- **DELETE** `/api/products/{id}` - Delete a product

- **PATCH** `/api/products/{id}/stock` - Update product stock quantity

### Categories

- **GET** `/api/categories` - Get all categories with product counts

- **GET** `/api/categories/{slug}` - Get category by slug

## Example Requests

### Get All Products
```bash
GET http://localhost:5065/api/products
```

### Get Products by Category
```bash
GET http://localhost:5065/api/products?category=clubs
```

### Get Featured Best Sellers
```bash
GET http://localhost:5065/api/products?featured=true&bestSeller=true&limit=4
```

### Get Product by Slug
```bash
GET http://localhost:5065/api/products/by-slug/titleist-tsi3-driver
```

### Get All Categories
```bash
GET http://localhost:5065/api/categories
```

## Database

The API uses SQLite with the database file `golfshop.db` created in the project directory. The database is automatically created and seeded with sample data on first run.

### Initial Data

The API seeds the following on startup:
- 6 product categories (Clubs, Balls, Shoes, Gloves, Bags, Accessories)
- 7 sample products across different categories

### Database Schema

**Products Table:**
- Id, Title, Brand, Price, SalePrice
- Category, Subcategory, Description
- Images, Slug, Featured, BestSeller, NewArrival
- InStock, StockQuantity, Rating, ReviewCount
- Specifications (JSON), Filters (JSON)
- BodyContent, CreatedAt, UpdatedAt, IsPublished

**Categories Table:**
- Id, Name, Slug, Description
- ImageUrl, DisplayOrder, IsActive

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (Next.js development server)
- `https://localhost:3000`

To add additional origins, modify the CORS policy in `Program.cs`.

## Development

### Adding New Products via API

Use POST request to `/api/products`:

```json
{
  "title": "New Product",
  "brand": "Brand Name",
  "price": 299.99,
  "category": "clubs",
  "description": "Product description",
  "slug": "new-product",
  "inStock": true,
  "stockQuantity": 10
}
```

### Viewing API Documentation

When running in development mode, Swagger UI is available at:
```
http://localhost:5065/swagger
```

## Project Structure

```
GolfShop.Api/
├── Controllers/
│   ├── ProductsController.cs
│   └── CategoriesController.cs
├── Data/
│   ├── GolfShopDbContext.cs
│   └── DbSeeder.cs
├── DTOs/
│   ├── ProductDto.cs
│   └── CategoryDto.cs
├── Models/
│   ├── Product.cs
│   └── Category.cs
├── Program.cs
└── appsettings.json
```

## Environment Configuration

Configure the API in `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=golfshop.db"
  }
}
```

## Deployment

For production deployment:

1. Update CORS origins in `Program.cs`
2. Configure appropriate connection string
3. Set environment to Production
4. Consider using a production-ready database (PostgreSQL, SQL Server)

## Integration with Frontend

The Next.js frontend can call this API using the following base URL:
```
http://localhost:5065/api
```

Example fetch in Next.js:
```javascript
const response = await fetch('http://localhost:5065/api/products');
const products = await response.json();
```
