using System;
using System.Threading.Tasks;
using NewMeal.Domain;
using Microsoft.EntityFrameworkCore;

namespace NewMeal.Infra
{
    public class UnitOfWork 
    {
        private NewMealDbContext _newMealDbContext;

        public UnitOfWork(NewMealDbContext newMealDbContext)
        {
            _newMealDbContext = newMealDbContext;
        }

        public async Task SaveChanges()
        {
            await _newMealDbContext.SaveChangesAsync();
        }

    }
}
