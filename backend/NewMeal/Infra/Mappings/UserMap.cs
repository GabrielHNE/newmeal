using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class UserMap : BaseModelMap<User>
    {
        public virtual void Configure(EntityTypeBuilder<User> builder)
        {
            base.Configure(builder);

            builder
                .Property(x => x.Nome)
                .IsRequired();
            
            builder
                .HasOne(x => x.InfoLogin)
                .WithOne(x => x.Perfil)
                .HasForeignKey<InfoLogin>(x => x.PerfilId);
            
            builder
                .HasOne(x => x.Restaurante)
                .WithOne(x => x.User)
                .HasForeignKey<Restaurante>(x => x.UserId);
        }
    }
}


