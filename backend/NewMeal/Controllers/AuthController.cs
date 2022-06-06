using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Net.Http;

using NewMeal.Application.Services;
using NewMeal.Application.ViewModels;
using NewMeal.Infra.Repositories;

namespace NewMeal.Controllers
{
    public class AuthController : Controller
    {
        private AuthService _authService;
        
        public AuthController(AuthService authService){
            _authService = authService;
        }
        
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<JsonResult> Authenticate([FromBody]LoginRequestViewModel model)
        {
            LoginResponseViewModel response = _authService.Authenticate(model);

            if(response == null)
                return Json(NotFound());
            
            return Json(response);            
        }

        [HttpPost]
        [Route("signup")]
        [AllowAnonymous]
        public async Task<JsonResult> SignUp([FromBody] SignUpRequestViewModel model)
        {
            bool res = await _authService.SignUp(model);

            if(!res)
                return Json(BadRequest("Email já cadastrado"));

            return Json(Ok(res));
        }

        [HttpPost]
        [Route("restaurantes/{idUsuario:int}")]
        [AllowAnonymous]
        public async Task<RestauranteResponseViewModel> CriaRestaurante([FromRoute] int idUsuario,[FromBody] RestauranteRequestViewModel restauranteRequestViewModel)
        {
            return await _authService.CriarRestaurante(idUsuario, restauranteRequestViewModel);     
        }
    }
}