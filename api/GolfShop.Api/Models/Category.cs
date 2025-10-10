using System.ComponentModel.DataAnnotations;

namespace GolfShop.Api.Models;

public class Category
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Slug { get; set; } = string.Empty;

    [MaxLength(500)]
    public string? Description { get; set; }

    public string? ImageUrl { get; set; }

    public int DisplayOrder { get; set; } = 0;

    public bool IsActive { get; set; } = true;
}
