using System;
using System.Linq;
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
        private UnitOfWork _unitOfWork;
        private IMapper _mapper;

        public RestauranteService(RestauranteRepository restauranteRepository, UnitOfWork unitOfWork, IMapper mapper){
            _restauranteRepository = restauranteRepository;
            _unitOfWork = unitOfWork;
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

        public async Task<IEnumerable<PratoResponseViewModel>> GetCardapio(int id){
            Restaurante restaurante = await _restauranteRepository.GetRestauranteFull(id);
            IEnumerable<PratoResponseViewModel> response = _mapper.Map<IEnumerable<PratoResponseViewModel>>(restaurante.Pratos);
            return response;
        }

        public async Task<PratoResponseViewModel> AdicionarPrato(int idRest, PratoRequestViewModel pratoRequestViewModel){
            Restaurante restaurante = await _restauranteRepository.GetRestauranteFull(idRest);
            Prato prato = _mapper.Map<Prato>(pratoRequestViewModel);
            prato.RestauranteId = idRest;

            restaurante.AddPrato(prato);
            await _restauranteRepository.Update(restaurante);
            await _unitOfWork.SaveChanges();

            return _mapper.Map<PratoResponseViewModel>(prato);
        }

        public async Task<bool> RemovePrato(int idRest, int idPrato){
            Restaurante restaurante = await _restauranteRepository.GetRestauranteFull(idRest);
            var response = restaurante.RemovePrato(idPrato);
            await _restauranteRepository.Update(restaurante);
            await _unitOfWork.SaveChanges();
            return response;
        }

        public async Task MudarStatus(int id){
            Restaurante restaurante = await _restauranteRepository.GetRestaurante(id);
            restaurante.CardapioAtivo = !restaurante.CardapioAtivo;
            await _restauranteRepository.Update(restaurante);
            await _unitOfWork.SaveChanges();
        }
    }
}