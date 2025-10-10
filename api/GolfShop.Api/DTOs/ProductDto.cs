namespace GolfShop.Api.DTOs;

public class ProductDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal? SalePrice { get; set; }
    public string Category { get; set; } = string.Empty;
    public string? Subcategory { get; set; }
    public string Description { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public List<string>? Images { get; set; }
    public string Slug { get; set; } = string.Empty;
    public bool Featured { get; set; }
    public bool BestSeller { get; set; }
    public bool NewArrival { get; set; }
    public bool InStock { get; set; }
    public int StockQuantity { get; set; }
    public double? Rating { get; set; }
    public int? ReviewCount { get; set; }
    public Dictionary<string, string>? Specifications { get; set; }
    public Dictionary<string, object>? Filters { get; set; }
    public string? BodyContent { get; set; }
    public bool IsPublished { get; set; }
}

public class CreateProductDto
{
    public string Title { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public decimal? SalePrice { get; set; }
    public string Category { get; set; } = string.Empty;
    public string? Subcategory { get; set; }
    public string Description { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public List<string>? Images { get; set; }
    public string Slug { get; set; } = string.Empty;
    public bool Featured { get; set; }
    public bool BestSeller { get; set; }
    public bool NewArrival { get; set; }
    public bool InStock { get; set; } = true;
    public int StockQuantity { get; set; }
    public double? Rating { get; set; }
    public int? ReviewCount { get; set; }
    public Dictionary<string, string>? Specifications { get; set; }
    public Dictionary<string, object>? Filters { get; set; }
    public string? BodyContent { get; set; }
    public bool IsPublished { get; set; } = true;
}

public class UpdateProductDto : CreateProductDto
{
    public int Id { get; set; }
}
