using System.Linq;
using System;
using NewMeal.Domain.Models;
using NewMeal.Domain.Interfaces;
using NewMeal.Infra;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace NewMeal.Infra.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseModel
    {
        protected readonly DbSet<T> _dbSet;
        public virtual IQueryable<T> Query => _dbSet.AsQueryable();

        public BaseRepository(NewMealDbContext newMealDbContext)
        {
            _dbSet = newMealDbContext.Set<T>();

            if (_dbSet == null)
                throw new InvalidOperationException("Invalid Dataset");
        }

        public async virtual Task Add(T obj)
        {
            await _dbSet.AddAsync(obj);
        }

        public virtual Task Update(T obj)
        {
            _dbSet.Update(obj);
            return Task.CompletedTask;
        }

        public virtual Task Delete(int id)
        {
            var obj = _dbSet.FirstOrDefault(item => item.Id == id);

            if (obj == null)
                throw new InvalidOperationException("Not possible to delete object with Id: " + id);

            _dbSet.Remove(obj);
            return Task.CompletedTask;
        }
    }
}
