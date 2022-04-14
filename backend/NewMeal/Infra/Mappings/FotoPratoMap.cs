using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class FotoPratoMap : BaseModelMap<FotoPrato>
    {
        public virtual void Configure(EntityTypeBuilder<FotoPrato> builder)
        {
            base.Configure(builder);

            builder
                .Property(x => x.Url)
                .IsRequired();
            
        }
    }
}


