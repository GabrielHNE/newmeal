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

        [HttpGet]
        [Route("restaurantes/{id:int}/cardapio")]
        [AllowAnonymous]
        public async Task<IEnumerable<PratoResponseViewModel>> GetCardapio([FromRoute] int id)
        {   
            return await _restauranteService.GetCardapio(id);     
        }

        [HttpDelete]
        [Route("restaurantes/{idRestaurante:int}/cardapio/{idPrato:int}")]
        [AllowAnonymous]
        public async Task<bool> RemoverPrato([FromRoute] int idRestaurante, [FromRoute] int idPrato)
        {   
            return await _restauranteService.RemovePrato(idRestaurante, idPrato);     
        }

        [HttpPut]
        [Route("restaurantes/{id:int}/cardapio/status")]
        [AllowAnonymous]
        public async Task<bool> MudarStatus([FromRoute] int id)
        {   
            await _restauranteService.MudarStatus(id);
            return true;
        }
    }
}