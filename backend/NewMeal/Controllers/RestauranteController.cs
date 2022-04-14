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
    public class RestauranteController : Controller
    {
        private RestauranteService _restauranteService;
        
        public RestauranteController(RestauranteService restauranteService){
            _restauranteService = restauranteService;
        }
        
        [HttpGet]
        [Route("restaurantes")]
        [AllowAnonymous]
        public async Task<IEnumerable<RestauranteResponseViewModel>> GetAll([FromQuery] bool details)
        {   
            return await _restauranteService.GetAll(details);     
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