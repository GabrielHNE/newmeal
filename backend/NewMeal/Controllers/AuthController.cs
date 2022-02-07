using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Shop.Services;
using Shop.Repositories;
using Shop.ViewModels;

namespace Shop.Controllers
{
    public class AuthController : Controller
    {
        private AuthService _authService;
        private UserRepository _userRepository;
        
        public AuthController(AuthService authService){
            _authService = authService;
            _userRepository = new UserRepository();
        }
        
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody]InfoLoginViewModel model)
        {
            
            // User usuario = _authService.Authenticate();

            //recupera o usuário
            var infoLogin = _userRepository.GetInfoLogin(model.Login, model.Senha);

            //Verifica se o usuário existe
            if (infoLogin == null)
                return new NotFoundResult();

            var user = _userRepository.GetUser(infoLogin.Id);

            //Gere o token
            var token = TokenService.GenerateToken(infoLogin, user);

            //Oculta a senha

            //Retorna os dados

            return new
            {
                user = user,
                token = token
            };
        }

        // [HttpGet]
        // [Route("anonymous")]
        // [AllowAnonymous]
        // public string Anonymous() => "Anônimo";

        // [HttpGet]
        // [Route("authenticated")]
        // [Authorize]
        // public string Authenticated() => String.Format("Autenticado - {0}", User.Identity.Name );

        // [HttpGet]
        // [Route("employee")]
        // [Authorize(Roles = "employee,manager")]
        // public string Employee() => "Funcionário";

        // [HttpGet]
        // [Route("manager")]
        // [Authorize(Roles = "manager")]
        // public string Manager() => "Gerente";
    }
}