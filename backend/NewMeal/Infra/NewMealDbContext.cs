using Microsoft.EntityFrameworkCore;
using NewMeal.Infra.Mappings;
using NewMeal.Domain.Models;

namespace NewMeal.Infra{
    public class NewMealDbContext : DbContext
{
    public NewMealDbContext(DbContextOptions<NewMealDbContext> options) : base(options)
    {
    }

    public DbSet<InfoLogin> InfoLogins { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new InfoLoginMap());
        builder.ApplyConfiguration(new UserMap());
    }
}
}


