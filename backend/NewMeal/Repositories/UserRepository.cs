using System.Collections.Generic;
using System.Linq;
using Shop.Models;

namespace Shop.Repositories
{

    public class UserRepository
    {
        private BdConnection _bdConnection;

        public UserRepository(){
            _bdConnection = new BdConnection();
        }

        public InfoLogin GetInfoLogin(string login, string senha){
            return _bdConnection.infoLogins.FirstOrDefault(x => x.Login == login && x.Senha == senha);
        }

        public User GetUser(int id)
        {
            return _bdConnection.users.FirstOrDefault(x => x.Id == id);
        }
    }
}

