using System;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;
using NewMeal.Infra;
using NewMeal.Infra.Repositories;
using AutoMapper;

namespace NewMeal.Application.Services
{
    public class RestauranteService
    {
        private RestauranteRepository _restauranteRepository;
        private IMapper _mapper;

        public RestauranteService(RestauranteRepository restauranteRepository, IMapper mapper){
            _restauranteRepository = restauranteRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<RestauranteResponseViewModel>> GetAll(bool details)
        {
            
            IEnumerable<Restaurante> restaurantes;
            if(details) restaurantes = await _restauranteRepository.GetAllFull();
            else restaurantes = await _restauranteRepository.GetAll();

            List<RestauranteResponseViewModel> response = _mapper.Map<List<RestauranteResponseViewModel>>(restaurantes);

            return response;
        }
    }
}