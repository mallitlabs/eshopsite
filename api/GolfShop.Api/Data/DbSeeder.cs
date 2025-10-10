using GolfShop.Api.Models;
using System.Text.Json;

namespace GolfShop.Api.Data;

public static class DbSeeder
{
    public static async Task SeedData(GolfShopDbContext context)
    {
        // Check if we already have products
        if (context.Products.Any())
        {
            return; // Database has been seeded
        }

        var products = new List<Product>
        {
            // Titleist TSi3 Driver
            new Product
            {
                Title = "Titleist TSi3 Driver",
                Brand = "Titleist",
                Price = 599.99m,
                SalePrice = 499.99m,
                Category = "clubs",
                Subcategory = "drivers",
                Description = "The TSi3 driver combines speed with precision, featuring an adjustable weight system for customized performance.",
                Slug = "titleist-tsi3-driver",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 15,
                Rating = 4.8,
                ReviewCount = 245,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Driver" },
                    { "loft", "9°, 10°" },
                    { "shaftMaterial", "Graphite" },
                    { "hand", "Right, Left" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Drivers" },
                    { "hand", new[] { "Right", "Left" } },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Graphite" },
                    { "shaftFlex", new[] { "Stiff", "Regular" } },
                    { "skillLevel", new[] { "Intermediate", "Advanced", "Professional" } }
                }),
                BodyContent = "Tour-proven driver delivering exceptional speed and adjustability with SureFit CG and ATI 425 Aerospace Titanium face.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Callaway Rogue ST Irons
            new Product
            {
                Title = "Callaway Rogue ST Max Irons",
                Brand = "Callaway",
                Price = 899.99m,
                Category = "clubs",
                Subcategory = "irons",
                Description = "Game improvement irons with AI-designed Flash Face Cup for increased ball speed and forgiveness.",
                Slug = "callaway-rogue-st-irons",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 8,
                Rating = 4.7,
                ReviewCount = 312,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Irons" },
                    { "ironGroup", "Complete Set (5-PW, AW)" },
                    { "ironType", "Game Improvement" },
                    { "shaftMaterial", "Steel" },
                    { "hand", "Right" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Irons" },
                    { "ironGroup", new[] { "Mid Irons", "Short Irons" } },
                    { "ironType", "Game Improvement" },
                    { "hand", "Right" },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Steel" },
                    { "shaftFlex", "Regular" },
                    { "skillLevel", new[] { "Beginner", "Intermediate" } }
                }),
                BodyContent = "Combines speed, forgiveness, and premium feel with AI Flash Face Cup and tungsten weighting.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Vokey SM9 Wedge
            new Product
            {
                Title = "Titleist Vokey SM9 Wedge",
                Brand = "Titleist",
                Price = 179.99m,
                Category = "clubs",
                Subcategory = "wedges",
                Description = "Tour-proven wedge with enhanced spin and improved feel for precision short game performance.",
                Slug = "vokey-sm9-wedge",
                BestSeller = true,
                InStock = true,
                StockQuantity = 22,
                Rating = 4.9,
                ReviewCount = 428,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Wedge" },
                    { "wedgeType", "Sand Wedge" },
                    { "loft", "56°" },
                    { "bounce", "10°" },
                    { "grind", "M Grind" },
                    { "shaftMaterial", "Steel" },
                    { "hand", "Right" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Wedges" },
                    { "wedgeType", "Sand" },
                    { "loft", "56°" },
                    { "hand", "Right" },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Steel" },
                    { "skillLevel", new[] { "Intermediate", "Advanced", "Professional" } }
                }),
                BodyContent = "Ultimate spin, control, and consistency with Progressive CG and TX4 Grooves.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Titleist Pro V1
            new Product
            {
                Title = "Titleist Pro V1 Golf Balls",
                Brand = "Titleist",
                Price = 54.99m,
                Category = "balls",
                Description = "The #1 ball in golf, delivering total performance with exceptional distance, consistent flight, and Drop-and-Stop control.",
                Slug = "titleist-pro-v1",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 150,
                Rating = 4.9,
                ReviewCount = 892,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "compression", "Medium (87)" },
                    { "construction", "3-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Soft" },
                    { "color", "White" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "compression", "Medium (70-85)" },
                    { "construction", "3-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Soft" },
                    { "skillLevel", new[] { "Advanced", "Professional" } },
                    { "color", "White" }
                }),
                BodyContent = "Tour-level performance with faster core, soft feel, consistent flight, and exceptional greenside spin.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Callaway Chrome Soft
            new Product
            {
                Title = "Callaway Chrome Soft Golf Balls",
                Brand = "Callaway",
                Price = 49.99m,
                Category = "balls",
                Description = "Premium golf ball with exceptional feel and optimized aerodynamics for longer, straighter flight.",
                Slug = "callaway-chrome-soft",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 200,
                Rating = 4.8,
                ReviewCount = 654,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "compression", "Low (65)" },
                    { "construction", "3-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Soft" },
                    { "color", "White" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "compression", "Low (45-70)" },
                    { "construction", "3-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Soft" },
                    { "skillLevel", new[] { "Intermediate", "Advanced" } },
                    { "color", "White" }
                }),
                BodyContent = "Combines tour-level performance with soft feel using Hyper Elastic SoftFast Core technology.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // FootJoy Pro SL
            new Product
            {
                Title = "FootJoy Pro SL Golf Shoes",
                Brand = "FootJoy",
                Price = 159.99m,
                Category = "shoes",
                Subcategory = "mens",
                Description = "Premium spikeless golf shoes combining tour performance with versatile style.",
                Slug = "footjoy-pro-sl",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 45,
                Rating = 4.7,
                ReviewCount = 523,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "spikeType", "Spikeless" },
                    { "waterproof", "Yes" },
                    { "closure", "Laces" },
                    { "width", "Standard" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "spikeType", "Spikeless" },
                    { "waterproof", "Yes" },
                    { "style", "Athletic" },
                    { "closure", "Laces" },
                    { "width", "Standard" },
                    { "gender", "Men's" }
                }),
                BodyContent = "Tour-proven performance with Infinity Outsole, OptiFlex technology, and complete waterproof protection.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Titleist Permasoft Glove
            new Product
            {
                Title = "Titleist Perma-Soft Golf Glove",
                Brand = "Titleist",
                Price = 22.99m,
                Category = "gloves",
                Subcategory = "mens",
                Description = "Premium cabretta leather glove offering exceptional feel, grip, and durability.",
                Slug = "titleist-permasoft",
                BestSeller = true,
                InStock = true,
                StockQuantity = 80,
                Rating = 4.8,
                ReviewCount = 734,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "material", "Cabretta Leather" },
                    { "leatherGrade", "AAA" },
                    { "weatherType", "All-Weather" },
                    { "hand", "Left" },
                    { "gender", "Men's" },
                    { "color", "White" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "material", "Cabretta Leather" },
                    { "leatherGrade", "AAA" },
                    { "weatherType", "All-Weather" },
                    { "hand", "Left" },
                    { "gender", "Men's" }
                }),
                BodyContent = "AAA-grade cabretta leather with FiberSof technology for superior feel and performance in all conditions.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            }
        };

        context.Products.AddRange(products);
        await context.SaveChangesAsync();
    }
}
