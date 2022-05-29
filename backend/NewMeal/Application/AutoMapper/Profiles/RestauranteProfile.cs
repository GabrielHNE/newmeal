using AutoMapper;

using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;

namespace NewMeal.Application.AutoMapper.Profiles
{
    public class RestauranteProfile : Profile
    {
        public RestauranteProfile()
        {
            CreateMap<Restaurante, RestauranteResponseViewModel>();
        }
    }
}