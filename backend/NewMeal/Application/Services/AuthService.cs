using System.Buffers.Text;
using System.Reflection.Metadata;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using NewMeal.Domain.Models;
using NewMeal.Application.ViewModels;
using NewMeal.Infra;
using NewMeal.Infra.Repositories;
using Microsoft.IdentityModel.Tokens;

using AutoMapper;

namespace NewMeal.Application.Services
{
    public class AuthService
    {
        private UserRepository _userRepository;
        private EmailService _emailService;
        private UnitOfWork _unitOfWork;
        private IMapper _mapper;


        public AuthService(UserRepository userRepository, EmailService emailService, UnitOfWork unitOfWork, IMapper mapper){
            _userRepository = userRepository;
            _emailService = emailService;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public LoginResponseViewModel Authenticate(LoginRequestViewModel loginRequest)
        {
            //recupera o usuário
            var infoLogin = _userRepository.GetInfoLogin(loginRequest.Email, loginRequest.Senha);

            //Verifica se o usuário existe
            if (infoLogin == null)
                return null;

            var user = _userRepository.GetUser(infoLogin.Id);

            //Gera o token
            var token = TokenService.GenerateToken(infoLogin, user);


            UserResponseViewModel userResponse = _mapper.Map<UserResponseViewModel>(user);
            // UserResponseViewModel userResponse = new UserResponseViewModel{
            //     Id = user.Id,
            //     Nome = user.Nome,
            //     Contato = user.Contato,
            //     Rua = user.Rua,
            //     Numero = user.Rua,
            //     Compl = user.Compl,
            //     Role = user.Role
            // };
            
            return new LoginResponseViewModel{User = userResponse, Token = token};
        }

        public async Task<bool> SignUp(SignUpRequestViewModel signUpRequest)
        {

            User user = _mapper.Map<User>(signUpRequest);
            user.Role = "Consumidor";
            
            InfoLogin infoLogin = _mapper.Map<InfoLogin>(signUpRequest);

            if(_userRepository.GetInfoLogin(infoLogin.Email, infoLogin.Senha) != null){
                return false;
            }

            user.InfoLogin = infoLogin;
            
            await _userRepository.Add(user);
            await _unitOfWork.SaveChanges();
            _emailService.sendEmail(infoLogin.Email, "Conta criada no NewMeal", $"Olá, {user.Nome}. Sua conta no NewMeal foi criada com sucesso!");
            return true;
        }
    }
}