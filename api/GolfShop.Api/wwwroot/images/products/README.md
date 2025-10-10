# Product Images

This folder contains all product images that are served to the frontend.

## How to Add Images

1. **Place your images in this folder** (`api/GolfShop.Api/wwwroot/images/products/`)
2. **Name them descriptively** (e.g., `titleist-tsi3-driver.jpg`, `callaway-chrome-soft.jpg`)
3. **Update the database seeder** to reference them

## Image Naming Convention

Recommended format: `{brand}-{product-name}.{ext}`

Examples:
- `titleist-tsi3-driver.jpg`
- `taylormade-stealth-2-driver.jpg`
- `callaway-rogue-st-irons.jpg`
- `titleist-pro-v1.jpg`

## Updating Product Images in the Seeder

In `Data/DbSeeder.cs`, update the `ImageUrl` field:

```csharp
new Product
{
    Title = "Titleist TSi3 Driver",
    ImageUrl = "http://localhost:5065/images/products/titleist-tsi3-driver.jpg",
    // ... rest of product
}
```

## Image Formats

Supported formats:
- `.jpg` / `.jpeg` (recommended for photos)
- `.png` (for images with transparency)
- `.webp` (best compression, modern browsers)

## Recommended Image Sizes

- **Product Cards**: 800x800px (1:1 aspect ratio)
- **Product Detail**: 1200x1200px (1:1 aspect ratio)
- **File Size**: Keep under 500KB for fast loading

## URL Structure

Images are served at: `http://localhost:5065/images/products/{filename}`

Example:
- Local file: `api/GolfShop.Api/wwwroot/images/products/titleist-tsi3-driver.jpg`
- URL: `http://localhost:5065/images/products/titleist-tsi3-driver.jpg`

## Production Considerations

For production, you should:
1. Use a CDN (Azure Blob Storage, AWS S3, Cloudinary, etc.)
2. Optimize images (compress, convert to WebP)
3. Use HTTPS URLs
4. Update `next.config.js` to allow your production domain
