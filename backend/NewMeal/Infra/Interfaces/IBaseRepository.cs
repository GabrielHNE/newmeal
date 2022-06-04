using System.Linq;
using System.Threading.Tasks;
using NewMeal.Domain.Models;

namespace NewMeal.Infra.Interfaces
{
    public interface IBaseRepository<T> where T : BaseModel
    {
        IQueryable<T> Query {get;}
        Task Add(T obj);
        Task Update(T obj);
        Task Delete(int id);
    }
}
