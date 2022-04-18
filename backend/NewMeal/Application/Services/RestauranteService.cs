using System;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;
using NewMeal.Infra;
using NewMeal.Infra.Repositories;

namespace NewMeal.Application.Services
{
    public class RestauranteService
    {
        private RestauranteRepository _restauranteRepository;

        public RestauranteService(RestauranteRepository restauranteRepository){
            _restauranteRepository = restauranteRepository;
        }
        public async Task<IEnumerable<RestauranteResponseViewModel>> GetAll(bool details)
        {
            
            IEnumerable<Restaurante> restaurantes;
            if(details) restaurantes = await _restauranteRepository.GetAllFull();
            else restaurantes = await _restauranteRepository.GetAll();

            List<RestauranteResponseViewModel> response = new List<RestauranteResponseViewModel>();
            foreach(Restaurante r in restaurantes){
                RestauranteResponseViewModel aux = new RestauranteResponseViewModel{
                    Id = r.Id,
                    Nome = r.Nome,
                    Cnpj = r.Cnpj,
                    Endereco = r.Endereco,
                    Telefone = r.Telefone
                };
                if(details){
                    List<PratoResponseViewModel> pratos = new List<PratoResponseViewModel>();
                    foreach(Prato p in r.Pratos){
                        PratoResponseViewModel auxP = new PratoResponseViewModel{
                            Descricao = p.Descricao,
                            Nome = p.Nome,
                            Preco = p.Preco,
                            RestauranteId = p.RestauranteId
                        };

                        List<FotoPratoResponseViewModel> fotos = new List<FotoPratoResponseViewModel>();
                        foreach(FotoPrato f in p.Fotos){
                            FotoPratoResponseViewModel auxF = new FotoPratoResponseViewModel{
                                Url = f.Url
                            };
                            fotos.Add(auxF);
                        }
                        auxP.Fotos = fotos;
                        pratos.Add(auxP);
                    }
                    aux.Pratos = pratos;
                }
                response.Add(aux);
            }

            return response;
        }
    }
}