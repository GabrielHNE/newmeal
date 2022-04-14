using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class RestauranteMap : BaseModelMap<Restaurante>
    {
        public virtual void Configure(EntityTypeBuilder<Restaurante> builder)
        {
            base.Configure(builder);

            builder
            .HasIndex(x => x.Cnpj)
            .IsUnique();
            
            builder
                .Property(x => x.Nome)
                .IsRequired();

            builder
                .Property(x => x.Telefone)
                .IsRequired();

            builder
                .Property(x => x.Endereco)
                .IsRequired();

            builder
                .HasMany(x => x.Pratos)
                .WithOne(x => x.Restaurante)
                .HasForeignKey(x => x.RestauranteId);
            
        }
    }
}


