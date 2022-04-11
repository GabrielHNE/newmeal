using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using NewMeal.Domain.Models;

namespace NewMeal.Infra.Mappings{
    public class BaseModelMap<T> : IEntityTypeConfiguration<T> where T : BaseModel
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {

            builder.HasKey(x => x.Id);

        }
    }
}


