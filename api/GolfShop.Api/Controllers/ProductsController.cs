using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GolfShop.Api.Data;
using GolfShop.Api.Models;
using GolfShop.Api.DTOs;
using System.Text.Json;

namespace GolfShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly GolfShopDbContext _context;
    private readonly ILogger<ProductsController> _logger;

    public ProductsController(GolfShopDbContext context, ILogger<ProductsController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts(
        [FromQuery] string? category = null,
        [FromQuery] bool? featured = null,
        [FromQuery] bool? bestSeller = null,
        [FromQuery] bool? inStock = null,
        [FromQuery] string? brand = null,
        [FromQuery] int? limit = null)
    {
        var query = _context.Products.Where(p => p.IsPublished);

        if (!string.IsNullOrEmpty(category))
        {
            query = query.Where(p => p.Category == category);
        }

        if (featured.HasValue)
        {
            query = query.Where(p => p.Featured == featured.Value);
        }

        if (bestSeller.HasValue)
        {
            query = query.Where(p => p.BestSeller == bestSeller.Value);
        }

        if (inStock.HasValue)
        {
            query = query.Where(p => p.InStock == inStock.Value);
        }

        if (!string.IsNullOrEmpty(brand))
        {
            query = query.Where(p => p.Brand == brand);
        }

        if (limit.HasValue && limit.Value > 0)
        {
            query = query.Take(limit.Value);
        }

        var products = await query.OrderByDescending(p => p.CreatedAt).ToListAsync();
        return Ok(products.Select(MapToDto));
    }

    // GET: api/products/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound();
        }

        return Ok(MapToDto(product));
    }

    // GET: api/products/by-slug/{slug}
    [HttpGet("by-slug/{slug}")]
    public async Task<ActionResult<ProductDto>> GetProductBySlug(string slug)
    {
        var product = await _context.Products.FirstOrDefaultAsync(p => p.Slug == slug);

        if (product == null)
        {
            return NotFound();
        }

        return Ok(MapToDto(product));
    }

    // POST: api/products
    [HttpPost]
    public async Task<ActionResult<ProductDto>> CreateProduct(CreateProductDto dto)
    {
        var product = new Product
        {
            Title = dto.Title,
            Brand = dto.Brand,
            Price = dto.Price,
            SalePrice = dto.SalePrice,
            Category = dto.Category,
            Subcategory = dto.Subcategory,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            Images = dto.Images != null ? JsonSerializer.Serialize(dto.Images) : null,
            Slug = dto.Slug,
            Featured = dto.Featured,
            BestSeller = dto.BestSeller,
            NewArrival = dto.NewArrival,
            InStock = dto.InStock,
            StockQuantity = dto.StockQuantity,
            Rating = dto.Rating,
            ReviewCount = dto.ReviewCount,
            Specifications = dto.Specifications != null ? JsonSerializer.Serialize(dto.Specifications) : null,
            Filters = dto.Filters != null ? JsonSerializer.Serialize(dto.Filters) : null,
            BodyContent = dto.BodyContent,
            IsPublished = dto.IsPublished,
            CreatedAt = DateTime.UtcNow
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, MapToDto(product));
    }

    // PUT: api/products/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, UpdateProductDto dto)
    {
        if (id != dto.Id)
        {
            return BadRequest();
        }

        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        product.Title = dto.Title;
        product.Brand = dto.Brand;
        product.Price = dto.Price;
        product.SalePrice = dto.SalePrice;
        product.Category = dto.Category;
        product.Subcategory = dto.Subcategory;
        product.Description = dto.Description;
        product.ImageUrl = dto.ImageUrl;
        product.Images = dto.Images != null ? JsonSerializer.Serialize(dto.Images) : null;
        product.Slug = dto.Slug;
        product.Featured = dto.Featured;
        product.BestSeller = dto.BestSeller;
        product.NewArrival = dto.NewArrival;
        product.InStock = dto.InStock;
        product.StockQuantity = dto.StockQuantity;
        product.Rating = dto.Rating;
        product.ReviewCount = dto.ReviewCount;
        product.Specifications = dto.Specifications != null ? JsonSerializer.Serialize(dto.Specifications) : null;
        product.Filters = dto.Filters != null ? JsonSerializer.Serialize(dto.Filters) : null;
        product.BodyContent = dto.BodyContent;
        product.IsPublished = dto.IsPublished;
        product.UpdatedAt = DateTime.UtcNow;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProductExists(id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    // DELETE: api/products/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // PATCH: api/products/{id}/stock
    [HttpPatch("{id}/stock")]
    public async Task<IActionResult> UpdateStock(int id, [FromBody] int quantity)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
        {
            return NotFound();
        }

        product.StockQuantity = quantity;
        product.InStock = quantity > 0;
        product.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProductExists(int id)
    {
        return _context.Products.Any(e => e.Id == id);
    }

    private static ProductDto MapToDto(Product product)
    {
        return new ProductDto
        {
            Id = product.Id,
            Title = product.Title,
            Brand = product.Brand,
            Price = product.Price,
            SalePrice = product.SalePrice,
            Category = product.Category,
            Subcategory = product.Subcategory,
            Description = product.Description,
            ImageUrl = product.ImageUrl,
            Images = product.Images != null ? JsonSerializer.Deserialize<List<string>>(product.Images) : null,
            Slug = product.Slug,
            Featured = product.Featured,
            BestSeller = product.BestSeller,
            NewArrival = product.NewArrival,
            InStock = product.InStock,
            StockQuantity = product.StockQuantity,
            Rating = product.Rating,
            ReviewCount = product.ReviewCount,
            Specifications = product.Specifications != null ? JsonSerializer.Deserialize<Dictionary<string, string>>(product.Specifications) : null,
            Filters = product.Filters != null ? JsonSerializer.Deserialize<Dictionary<string, object>>(product.Filters) : null,
            BodyContent = product.BodyContent,
            IsPublished = product.IsPublished
        };
    }
}
