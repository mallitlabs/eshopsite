using Microsoft.EntityFrameworkCore;
using GolfShop.Api.Models;

namespace GolfShop.Api.Data;

public class GolfShopDbContext : DbContext
{
    public GolfShopDbContext(DbContextOptions<GolfShopDbContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Product
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasIndex(p => p.Slug).IsUnique();
            entity.HasIndex(p => p.Category);
            entity.HasIndex(p => p.Featured);
            entity.HasIndex(p => p.BestSeller);
        });

        // Configure Category
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasIndex(c => c.Slug).IsUnique();
            entity.HasIndex(c => c.DisplayOrder);
        });

        // Seed Categories
        modelBuilder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "Clubs", Slug = "clubs", Description = "Golf clubs including drivers, irons, wedges, and putters", DisplayOrder = 1, IsActive = true },
            new Category { Id = 2, Name = "Balls", Slug = "balls", Description = "Golf balls for all skill levels and playing conditions", DisplayOrder = 2, IsActive = true },
            new Category { Id = 3, Name = "Shoes", Slug = "shoes", Description = "Golf shoes for comfort and performance on the course", DisplayOrder = 3, IsActive = true },
            new Category { Id = 4, Name = "Gloves", Slug = "gloves", Description = "Golf gloves for improved grip and feel", DisplayOrder = 4, IsActive = true },
            new Category { Id = 5, Name = "Bags", Slug = "bags", Description = "Golf bags for carrying and protecting your equipment", DisplayOrder = 5, IsActive = true },
            new Category { Id = 6, Name = "Accessories", Slug = "accessories", Description = "Golf accessories and training aids", DisplayOrder = 6, IsActive = true }
        );
    }
}
