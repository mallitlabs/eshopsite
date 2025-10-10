using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GolfShop.Api.Data;
using GolfShop.Api.DTOs;

namespace GolfShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly GolfShopDbContext _context;

    public CategoriesController(GolfShopDbContext context)
    {
        _context = context;
    }

    // GET: api/categories
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryDto>>> GetCategories()
    {
        var categories = await _context.Categories
            .Where(c => c.IsActive)
            .OrderBy(c => c.DisplayOrder)
            .ToListAsync();

        var result = new List<CategoryDto>();
        foreach (var category in categories)
        {
            var productCount = await _context.Products
                .Where(p => p.Category == category.Slug && p.IsPublished)
                .CountAsync();

            result.Add(new CategoryDto
            {
                Id = category.Id,
                Name = category.Name,
                Slug = category.Slug,
                Description = category.Description,
                ImageUrl = category.ImageUrl,
                DisplayOrder = category.DisplayOrder,
                IsActive = category.IsActive,
                ProductCount = productCount
            });
        }

        return Ok(result);
    }

    // GET: api/categories/{slug}
    [HttpGet("{slug}")]
    public async Task<ActionResult<CategoryDto>> GetCategory(string slug)
    {
        var category = await _context.Categories.FirstOrDefaultAsync(c => c.Slug == slug);

        if (category == null)
        {
            return NotFound();
        }

        var productCount = await _context.Products
            .Where(p => p.Category == category.Slug && p.IsPublished)
            .CountAsync();

        var result = new CategoryDto
        {
            Id = category.Id,
            Name = category.Name,
            Slug = category.Slug,
            Description = category.Description,
            ImageUrl = category.ImageUrl,
            DisplayOrder = category.DisplayOrder,
            IsActive = category.IsActive,
            ProductCount = productCount
        };

        return Ok(result);
    }
}
