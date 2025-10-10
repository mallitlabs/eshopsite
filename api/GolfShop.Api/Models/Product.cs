using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GolfShop.Api.Models;

public class Product
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string Brand { get; set; } = string.Empty;

    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }

    [Column(TypeName = "decimal(18,2)")]
    public decimal? SalePrice { get; set; }

    [Required]
    [MaxLength(50)]
    public string Category { get; set; } = string.Empty; // clubs, balls, shoes, gloves, bags, accessories

    [MaxLength(50)]
    public string? Subcategory { get; set; }

    [Required]
    [MaxLength(1000)]
    public string Description { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    public string? Images { get; set; } // JSON array of image URLs

    [Required]
    [MaxLength(200)]
    public string Slug { get; set; } = string.Empty;

    public bool Featured { get; set; } = false;

    public bool BestSeller { get; set; } = false;

    public bool NewArrival { get; set; } = false;

    public bool InStock { get; set; } = true;

    public int StockQuantity { get; set; } = 0;

    public double? Rating { get; set; }

    public int? ReviewCount { get; set; }

    public string? Specifications { get; set; } // JSON object

    public string? Filters { get; set; } // JSON object for category-specific filters

    [MaxLength(5000)]
    public string? BodyContent { get; set; } // Full product description/details

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    public bool IsPublished { get; set; } = true;
}
