using System;
using System.Collections.Generic;
using System.Linq;
using NewMeal.Domain.Models;

namespace NewMeal.Infra.Repositories
{
    public class UserRepository
    {
        private BdConnection _bdConnection;

        public UserRepository(){
            _bdConnection = new BdConnection();
        }

        public InfoLogin GetInfoLogin(string email, string senha){
            return _bdConnection.infoLogins.FirstOrDefault(x => x.Email == email && x.Senha == senha);
        }

        public User GetUser(int id)
        {
            return _bdConnection.users.FirstOrDefault(x => x.Id == id);
        }

        public bool CreateUser(User user, InfoLogin infoLogin){
            if(_bdConnection.infoLogins.Any(x => x.Email == infoLogin.Email)){
                return false;
            }
            
            var MaxId = _bdConnection.infoLogins.OrderByDescending(x => x.Id).FirstOrDefault().Id;

            user.Id = MaxId+1;
            infoLogin.Id = MaxId+1;
            infoLogin.PerfilId = MaxId+1;

            _bdConnection.infoLogins.Add(infoLogin);
            _bdConnection.users.Add(user);
            _bdConnection.Save();

            return true;
        }
    }
}

