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
            // ==================== CLUBS - DRIVERS ====================

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
                ImageUrl = "http://localhost:5065/images/products/TitleistTSi3Driver.png",
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

            // TaylorMade Stealth 2 Driver
            new Product
            {
                Title = "TaylorMade Stealth 2 Driver",
                Brand = "TaylorMade",
                Price = 599.99m,
                Category = "clubs",
                Subcategory = "drivers",
                Description = "Revolutionary carbon face technology provides enhanced energy transfer for explosive distance and forgiveness.",
                Slug = "taylormade-stealth-2-driver",
                ImageUrl = "http://localhost:5065/images/products/TaylorMadeStealth2Driver.png",
                Featured = true,
                BestSeller = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 12,
                Rating = 4.9,
                ReviewCount = 387,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Driver" },
                    { "loft", "9°, 10.5°, 12°" },
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
                    { "shaftFlex", new[] { "Stiff", "Regular", "Senior" } },
                    { "skillLevel", new[] { "Beginner", "Intermediate", "Advanced" } }
                }),
                BodyContent = "60X Carbon Twist Face and advanced aerodynamics deliver maximum ball speed and forgiveness across the entire face.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Callaway Paradym Driver
            new Product
            {
                Title = "Callaway Paradym Driver",
                Brand = "Callaway",
                Price = 579.99m,
                SalePrice = 529.99m,
                Category = "clubs",
                Subcategory = "drivers",
                Description = "Shift your performance paradigm with the new Paradym Driver featuring advanced 360 Carbon Chassis.",
                Slug = "callaway-paradym-driver",
                ImageUrl = "http://localhost:5065/images/products/CallawayParadymDriver.png",
                Featured = true,
                InStock = true,
                StockQuantity = 18,
                Rating = 4.7,
                ReviewCount = 256,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Driver" },
                    { "loft", "9°, 10.5°" },
                    { "shaftMaterial", "Graphite" },
                    { "hand", "Right" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Drivers" },
                    { "hand", "Right" },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Graphite" },
                    { "shaftFlex", new[] { "Stiff", "Regular" } },
                    { "skillLevel", new[] { "Intermediate", "Advanced" } }
                }),
                BodyContent = "Industry-first 360 Carbon Chassis and AI-designed Jailbreak Speed Frame deliver exceptional distance and stability.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== CLUBS - IRONS ====================

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
                ImageUrl = "http://localhost:5065/images/products/CallawayRogueSTMaxIrons.png",
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

            // TaylorMade P790 Irons
            new Product
            {
                Title = "TaylorMade P790 Irons",
                Brand = "TaylorMade",
                Price = 1299.99m,
                SalePrice = 1199.99m,
                Category = "clubs",
                Subcategory = "irons",
                Description = "Players distance irons combining forged feel with explosive distance through SpeedFoam Air technology.",
                Slug = "taylormade-p790-irons",
                ImageUrl = "http://localhost:5065/images/products/TaylorMadeP790Irons.png",
                Featured = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 10,
                Rating = 4.9,
                ReviewCount = 421,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Irons" },
                    { "ironGroup", "Complete Set (4-PW)" },
                    { "ironType", "Players Distance" },
                    { "shaftMaterial", "Steel" },
                    { "hand", "Right, Left" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Irons" },
                    { "ironGroup", new[] { "Long Irons", "Mid Irons", "Short Irons" } },
                    { "ironType", "Players Distance" },
                    { "hand", new[] { "Right", "Left" } },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Steel" },
                    { "shaftFlex", new[] { "Stiff", "Regular" } },
                    { "skillLevel", new[] { "Intermediate", "Advanced", "Professional" } }
                }),
                BodyContent = "Forged hollow body construction with SpeedFoam Air and Inverted Cone Technology for elite performance.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Ping G430 Irons
            new Product
            {
                Title = "Ping G430 Irons",
                Brand = "Ping",
                Price = 999.99m,
                Category = "clubs",
                Subcategory = "irons",
                Description = "High-launching irons with increased ball speed from new FACEWRAP technology and PurFlex cavity badge.",
                Slug = "ping-g430-irons",
                ImageUrl = "http://localhost:5065/images/products/PingG430Irons.png",
                BestSeller = true,
                InStock = true,
                StockQuantity = 14,
                Rating = 4.8,
                ReviewCount = 298,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Irons" },
                    { "ironGroup", "Complete Set (5-PW, UW)" },
                    { "ironType", "Game Improvement" },
                    { "shaftMaterial", "Graphite" },
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
                    { "shaftMaterial", "Graphite" },
                    { "shaftFlex", new[] { "Regular", "Senior" } },
                    { "skillLevel", new[] { "Beginner", "Intermediate" } }
                }),
                BodyContent = "FACEWRAP Technology and lower CG deliver higher launch, increased distance, and improved stopping power.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== CLUBS - WEDGES ====================

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
                ImageUrl = "http://localhost:5065/images/products/TitleistVokeySM9Wedge.png",
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

            // Cleveland RTX ZipCore Wedge
            new Product
            {
                Title = "Cleveland RTX ZipCore Wedge",
                Brand = "Cleveland",
                Price = 149.99m,
                SalePrice = 129.99m,
                Category = "clubs",
                Subcategory = "wedges",
                Description = "Revolutionary ZipCore technology shifts weight to raise MOI and lower CG for enhanced spin and control.",
                Slug = "cleveland-rtx-zipcore-wedge",
                ImageUrl = "http://localhost:5065/images/products/ClevelandRTXZipCoreWedge.png",
                Featured = true,
                InStock = true,
                StockQuantity = 28,
                Rating = 4.7,
                ReviewCount = 356,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Wedge" },
                    { "wedgeType", "Gap Wedge" },
                    { "loft", "52°" },
                    { "bounce", "12°" },
                    { "grind", "Full Grind" },
                    { "shaftMaterial", "Steel" },
                    { "hand", "Right, Left" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Wedges" },
                    { "wedgeType", "Gap" },
                    { "loft", "52°" },
                    { "hand", new[] { "Right", "Left" } },
                    { "gender", "Men's" },
                    { "shaftMaterial", "Steel" },
                    { "skillLevel", new[] { "Beginner", "Intermediate", "Advanced" } }
                }),
                BodyContent = "ZipCore technology and UltiZip Grooves provide maximum spin and consistency from any lie.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== CLUBS - PUTTERS ====================

            // Scotty Cameron Special Select Newport 2
            new Product
            {
                Title = "Scotty Cameron Special Select Newport 2",
                Brand = "Titleist",
                Price = 449.99m,
                Category = "clubs",
                Subcategory = "putters",
                Description = "Classic blade putter with timeless design and Tour-proven performance.",
                Slug = "scotty-cameron-newport-2",
                ImageUrl = "http://localhost:5065/images/products/ScottyCameronSpecialSelectNewport2.png",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 16,
                Rating = 4.9,
                ReviewCount = 612,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Putter" },
                    { "putterType", "Blade" },
                    { "length", "33\", 34\", 35\"" },
                    { "hand", "Right" },
                    { "gender", "Unisex" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Putters" },
                    { "putterType", "Blade" },
                    { "hand", "Right" },
                    { "skillLevel", new[] { "Intermediate", "Advanced", "Professional" } }
                }),
                BodyContent = "Precision milled from 303 stainless steel with refined weighting for exceptional feel and roll.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Odyssey White Hot OG Putter
            new Product
            {
                Title = "Odyssey White Hot OG Putter",
                Brand = "Odyssey",
                Price = 199.99m,
                Category = "clubs",
                Subcategory = "putters",
                Description = "The legendary White Hot insert returns, delivering incredible feel and consistent roll.",
                Slug = "odyssey-white-hot-og",
                ImageUrl = "http://localhost:5065/images/products/OdysseyWhiteHotOGPutter.png",
                BestSeller = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 24,
                Rating = 4.8,
                ReviewCount = 487,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "clubType", "Putter" },
                    { "putterType", "Mallet" },
                    { "length", "34\", 35\"" },
                    { "hand", "Right, Left" },
                    { "gender", "Unisex" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "clubType", "Putters" },
                    { "putterType", "Mallet" },
                    { "hand", new[] { "Right", "Left" } },
                    { "skillLevel", new[] { "Beginner", "Intermediate", "Advanced" } }
                }),
                BodyContent = "Iconic White Hot insert with improved acoustics and feel for confident putting performance.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== GOLF BALLS ====================

            // Titleist Pro V1
            new Product
            {
                Title = "Titleist Pro V1 Golf Balls",
                Brand = "Titleist",
                Price = 54.99m,
                Category = "balls",
                Description = "The #1 ball in golf, delivering total performance with exceptional distance, consistent flight, and Drop-and-Stop control.",
                Slug = "titleist-pro-v1",
                ImageUrl = "http://localhost:5065/images/products/TitleistProV1GolfBalls.png",
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
                ImageUrl = "http://localhost:5065/images/products/CallawayChromeSoftGolfBalls.png",
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

            // TaylorMade TP5
            new Product
            {
                Title = "TaylorMade TP5 Golf Balls",
                Brand = "TaylorMade",
                Price = 54.99m,
                SalePrice = 49.99m,
                Category = "balls",
                Description = "Complete tee-to-green performance with 5-layer construction and Tour Flight Dimple Pattern.",
                Slug = "taylormade-tp5",
                ImageUrl = "http://localhost:5065/images/products/TaylorMadeTP5GolfBalls.png",
                Featured = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 180,
                Rating = 4.9,
                ReviewCount = 743,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "compression", "High (97)" },
                    { "construction", "5-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Medium" },
                    { "color", "White" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "compression", "High (86+)" },
                    { "construction", "5-Piece" },
                    { "coverMaterial", "Urethane" },
                    { "feel", "Medium" },
                    { "skillLevel", new[] { "Advanced", "Professional" } },
                    { "color", "White" }
                }),
                BodyContent = "5-layer construction provides complete performance with increased speed, higher launch, and exceptional greenside control.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Bridgestone Tour B XS
            new Product
            {
                Title = "Bridgestone Tour B XS Golf Balls",
                Brand = "Bridgestone",
                Price = 49.99m,
                Category = "balls",
                Description = "Tiger's choice. Premium tour ball engineered for increased ball speed and enhanced greenside spin.",
                Slug = "bridgestone-tour-b-xs",
                ImageUrl = "http://localhost:5065/images/products/BridgestoneTourBXSGolfBalls.png",
                BestSeller = true,
                InStock = true,
                StockQuantity = 120,
                Rating = 4.8,
                ReviewCount = 521,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "compression", "Medium (88)" },
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
                    { "skillLevel", new[] { "Intermediate", "Advanced", "Professional" } },
                    { "color", "White" }
                }),
                BodyContent = "ReactIV urethane cover and gradational compression core deliver Tour-level performance and feel.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== SHOES ====================

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
                ImageUrl = "http://localhost:5065/images/products/FootJoyProSLGolfShoes.png",
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

            // Adidas CodeChaos 22
            new Product
            {
                Title = "Adidas CodeChaos 22 Golf Shoes",
                Brand = "Adidas",
                Price = 149.99m,
                SalePrice = 129.99m,
                Category = "shoes",
                Subcategory = "mens",
                Description = "Revolutionary spikeless design with Twist Grip outsole for maximum traction and athletic performance.",
                Slug = "adidas-codechaos-22",
                ImageUrl = "http://localhost:5065/images/products/AdidasCodeChaos22GolfShoes.png",
                Featured = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 38,
                Rating = 4.8,
                ReviewCount = 412,
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
                BodyContent = "Boost cushioning and Twist Grip outsole deliver comfort and performance for 18 holes and beyond.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Nike Air Zoom Infinity Tour
            new Product
            {
                Title = "Nike Air Zoom Infinity Tour Golf Shoes",
                Brand = "Nike",
                Price = 179.99m,
                Category = "shoes",
                Subcategory = "mens",
                Description = "Premium spiked golf shoes with Zoom Air and React foam for ultimate comfort and stability.",
                Slug = "nike-air-zoom-infinity",
                ImageUrl = "http://localhost:5065/images/products/NikeAirZoomInfinityTourGolfShoes.png",
                BestSeller = true,
                InStock = true,
                StockQuantity = 32,
                Rating = 4.9,
                ReviewCount = 567,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "spikeType", "Spiked" },
                    { "waterproof", "Yes" },
                    { "closure", "Laces" },
                    { "width", "Standard" },
                    { "gender", "Men's" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "spikeType", "Spiked" },
                    { "waterproof", "Yes" },
                    { "style", "Athletic" },
                    { "closure", "Laces" },
                    { "width", "Standard" },
                    { "gender", "Men's" }
                }),
                BodyContent = "Tour-level performance with Zoom Air units, React foam, and integrated traction pattern for explosive power.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Ecco Biom C4
            new Product
            {
                Title = "Ecco Biom C4 Golf Shoes",
                Brand = "Ecco",
                Price = 199.99m,
                Category = "shoes",
                Subcategory = "mens",
                Description = "Premium leather golf shoes with anatomical fit and groundbreaking MTN GRIP outsole.",
                Slug = "ecco-biom-c4",
                ImageUrl = "http://localhost:5065/images/products/EccoBiomC4GolfShoes.png",
                Featured = true,
                InStock = true,
                StockQuantity = 28,
                Rating = 4.8,
                ReviewCount = 389,
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
                    { "style", "Classic" },
                    { "closure", "Laces" },
                    { "width", "Standard" },
                    { "gender", "Men's" }
                }),
                BodyContent = "Premium yak leather upper with GORE-TEX waterproofing and anatomical last for natural movement.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== GLOVES ====================

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
                ImageUrl = "http://localhost:5065/images/products/TitleistPerma-SoftGolfGlove.png",
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
            },

            // FootJoy StaSof
            new Product
            {
                Title = "FootJoy StaSof Golf Glove",
                Brand = "FootJoy",
                Price = 19.99m,
                Category = "gloves",
                Subcategory = "mens",
                Description = "Premium cabretta leather glove with exclusive Taction2 Advanced Performance leather.",
                Slug = "footjoy-stasof",
                ImageUrl = "http://localhost:5065/images/products/FootJoyStaSofGolfGlove.png",
                BestSeller = true,
                InStock = true,
                StockQuantity = 95,
                Rating = 4.7,
                ReviewCount = 892,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "material", "Cabretta Leather" },
                    { "leatherGrade", "AAA" },
                    { "weatherType", "Dry Weather" },
                    { "hand", "Left" },
                    { "gender", "Men's" },
                    { "color", "White" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "material", "Cabretta Leather" },
                    { "leatherGrade", "AAA" },
                    { "weatherType", "Dry Weather" },
                    { "hand", "Left" },
                    { "gender", "Men's" }
                }),
                BodyContent = "#1 glove in golf with exclusive Taction2 leather for unmatched softness, grip, and durability.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== BAGS ====================

            // Titleist Players 4 StaDry Stand Bag
            new Product
            {
                Title = "Titleist Players 4 StaDry Stand Bag",
                Brand = "Titleist",
                Price = 299.99m,
                SalePrice = 269.99m,
                Category = "bags",
                Subcategory = "stand",
                Description = "Premium waterproof stand bag with 4-way top and innovative StaDry pocket system.",
                Slug = "titleist-players-4-stadry",
                ImageUrl = "http://localhost:5065/images/products/TitleistPlayers4StaDryStandBag.png",
                Featured = true,
                BestSeller = true,
                InStock = true,
                StockQuantity = 22,
                Rating = 4.9,
                ReviewCount = 345,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "bagType", "Stand Bag" },
                    { "dividers", "4-Way Top" },
                    { "pockets", "8" },
                    { "waterproof", "Yes" },
                    { "weight", "5.5 lbs" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "bagType", "Stand" },
                    { "dividers", new[] { "4-Way" } },
                    { "waterproof", "Yes" },
                    { "pockets", "6-9" }
                }),
                BodyContent = "Tour-inspired design with waterproof StaDry pockets, integrated stand, and premium organization.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Callaway ORG 14 Cart Bag
            new Product
            {
                Title = "Callaway ORG 14 Cart Bag",
                Brand = "Callaway",
                Price = 279.99m,
                Category = "bags",
                Subcategory = "cart",
                Description = "Premium cart bag with 14-way full-length divider system for ultimate club organization.",
                Slug = "callaway-org-14",
                ImageUrl = "http://localhost:5065/images/products/CallawayORG14CartBag.png",
                Featured = true,
                InStock = true,
                StockQuantity = 18,
                Rating = 4.8,
                ReviewCount = 478,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "bagType", "Cart Bag" },
                    { "dividers", "14-Way Full Length" },
                    { "pockets", "10" },
                    { "waterproof", "No" },
                    { "weight", "7.5 lbs" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "bagType", "Cart" },
                    { "dividers", new[] { "14-Way" } },
                    { "waterproof", "No" },
                    { "pockets", "10+" }
                }),
                BodyContent = "14-way full-length dividers keep clubs organized and protected with multiple pockets for all your gear.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // ==================== ACCESSORIES ====================

            // Bushnell Pro XE Rangefinder
            new Product
            {
                Title = "Bushnell Pro XE Rangefinder",
                Brand = "Bushnell",
                Price = 549.99m,
                SalePrice = 499.99m,
                Category = "accessories",
                Subcategory = "rangefinders",
                Description = "Elite rangefinder with slope, wind, and temperature compensation for ultimate accuracy.",
                Slug = "bushnell-pro-xe",
                ImageUrl = "http://localhost:5065/images/products/BushnellProXERangefinder.png",
                Featured = true,
                BestSeller = true,
                NewArrival = true,
                InStock = true,
                StockQuantity = 35,
                Rating = 4.9,
                ReviewCount = 623,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "range", "500+ yards" },
                    { "accuracy", "+/- 0.5 yards" },
                    { "slope", "Yes" },
                    { "waterproof", "Yes" },
                    { "magnification", "7x" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "type", "Laser Rangefinder" },
                    { "slope", "Yes" },
                    { "waterproof", "Yes" },
                    { "range", "500+ yards" }
                }),
                BodyContent = "Professional-grade rangefinder with Elements feature provides slope, wind, and temperature adjustments.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            },

            // Garmin Approach S62
            new Product
            {
                Title = "Garmin Approach S62 GPS Watch",
                Brand = "Garmin",
                Price = 499.99m,
                Category = "accessories",
                Subcategory = "gps",
                Description = "Premium GPS golf watch with Virtual Caddie, PlaysLike Distance, and full-color touchscreen.",
                Slug = "garmin-approach-s62",
                ImageUrl = "http://localhost:5065/images/products/GarminApproachS62GPSWatch.png",
                Featured = true,
                InStock = true,
                StockQuantity = 42,
                Rating = 4.8,
                ReviewCount = 512,
                Specifications = JsonSerializer.Serialize(new Dictionary<string, string>
                {
                    { "display", "1.3\" Color Touchscreen" },
                    { "batteryLife", "20 hours (GPS mode)" },
                    { "courses", "41,000+ preloaded" },
                    { "waterproof", "Yes (5 ATM)" },
                    { "features", "Virtual Caddie, Wind Speed" }
                }),
                Filters = JsonSerializer.Serialize(new Dictionary<string, object>
                {
                    { "type", "GPS Watch" },
                    { "touchscreen", "Yes" },
                    { "waterproof", "Yes" },
                    { "features", new[] { "Virtual Caddie", "PlaysLike Distance" } }
                }),
                BodyContent = "Advanced GPS watch with Virtual Caddie analyzes wind and elevation to suggest optimal club selection.",
                IsPublished = true,
                CreatedAt = DateTime.UtcNow
            }
        };

        context.Products.AddRange(products);
        await context.SaveChangesAsync();
    }
}
