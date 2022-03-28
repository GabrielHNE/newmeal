using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class InfoLoginMap : BaseModelMap<InfoLogin>
    {
        public virtual void Configure(EntityTypeBuilder<InfoLogin> builder)
        {
            base.Configure(builder);

            builder
                .Property(x => x.Email)
                .IsRequired();
            
            builder
                .Property(x => x.Senha)
                .IsRequired();
        }
    }
}


