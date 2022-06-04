using AutoMapper;

using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;

namespace NewMeal.Application.AutoMapper.Profiles
{
    public class PratoProfile : Profile
    {
        public PratoProfile()
        {
            CreateMap<Prato, PratoResponseViewModel>();
            CreateMap<PratoRequestViewModel, Prato>();
            CreateMap<FotoPrato, FotoPratoResponseViewModel>();
            CreateMap<FotoPratoRequestViewModel, FotoPrato>();
        }
    }
}