using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product{ProductId=1,Name="Iphone 11",Description="Test Kayıtı",ImageUrl="1.jpg",Price=25000,IsActive=true,Stock=10 },
                new Product{ProductId=2,Name="Iphone 12",Description="Test Kayıtı",ImageUrl="2.jpg",Price=35000,IsActive=true,Stock=11 },
                new Product{ProductId=3,Name="Iphone 13",Description="Test Kayıtı",ImageUrl="3.jpg",Price=45000,IsActive=true,Stock=12 },
                new Product{ProductId=4,Name="Iphone 14",Description="Test Kayıtı",ImageUrl="4.jpg",Price=65000,IsActive=true,Stock=13 },
                new Product{ProductId=5,Name="Iphone 15",Description="Test Kayıtı",ImageUrl="5.jpg",Price=75000,IsActive=true,Stock=14 },
                new Product{ProductId=6,Name="Iphone 16",Description="Test Kayıtı",ImageUrl="6.jpg",Price=85000,IsActive=true,Stock=15 }
                });
    }
}
