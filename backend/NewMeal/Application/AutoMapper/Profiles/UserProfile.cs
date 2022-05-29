using AutoMapper;

using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;

namespace NewMeal.Application.AutoMapper.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserResponseViewModel>();
            CreateMap<SignUpRequestViewModel, User>();
            CreateMap<SignUpRequestViewModel, InfoLogin>();
        }
    }
}