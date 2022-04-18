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
    public DbSet<Restaurante> Restaurantes { get; set; }
    public DbSet<Prato> Pratos { get; set; }
    public DbSet<FotoPrato> FotosPratos { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new InfoLoginMap());
        builder.ApplyConfiguration(new UserMap());
        builder.ApplyConfiguration(new RestauranteMap());
        builder.ApplyConfiguration(new PratoMap());
        builder.ApplyConfiguration(new FotoPratoMap());
    }
}
}


