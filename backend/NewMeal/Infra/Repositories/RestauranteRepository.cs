using System;
using System.Collections.Generic;
using System.Linq;
using NewMeal.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace NewMeal.Infra.Repositories
{
    public class RestauranteRepository : BaseRepository<Restaurante>
    {
        public RestauranteRepository(NewMealDbContext newMealDbContext) : base(newMealDbContext){} 

        public async Task<Restaurante> GetRestaurante(int id){
            return await Query.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Restaurante> GetRestauranteFull(int id){
            return await Query.Include(x => x.Pratos).ThenInclude(x => x.Fotos).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Restaurante>> GetAll(){
            return await Query.ToListAsync();
        }

        public async Task<List<Restaurante>> GetAllFull(){
            return await Query.Include(x => x.Pratos).ThenInclude(x => x.Fotos).ToListAsync();
        }

    }
}

