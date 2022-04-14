using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class PratoMap : BaseModelMap<Prato>
    {
        public virtual void Configure(EntityTypeBuilder<Prato> builder)
        {
            base.Configure(builder);

            builder
                .Property(x => x.Preco)
                .IsRequired();
            
            builder
                .Property(x => x.Nome)
                .IsRequired();

            builder
                .HasMany(x => x.Fotos)
                .WithOne(x => x.Prato)
                .HasForeignKey(x => x.PratoId);
            
        }
    }
}


