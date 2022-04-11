using System;
using System.Collections.Generic;
using System.Linq;
using NewMeal.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;


namespace NewMeal.Infra.Repositories
{
    public class UserRepository : BaseRepository<User>
    {
        public UserRepository(NewMealDbContext newMealDbContext) : base(newMealDbContext){} 

        public InfoLogin GetInfoLogin(string email, string senha){
            return Query.AsNoTracking().Include(x => x.InfoLogin).Where(x => x.InfoLogin.Email == email && x.InfoLogin.Senha == senha)
            .Select(x => x.InfoLogin).FirstOrDefault();
        }

        public User GetUser(int id)
        {
            return Query.AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

    }
}

