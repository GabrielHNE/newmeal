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


namespace NewMeal.Application.Services
{
    public class AuthService
    {
        private UserRepository _userRepository;
        private EmailService _emailService;
        private UnitOfWork _unitOfWork;

        public AuthService(UserRepository userRepository, EmailService emailService, UnitOfWork unitOfWork){
            _userRepository = userRepository;
            _emailService = emailService;
            _unitOfWork = unitOfWork;
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

            UserResponseViewModel userResponse = new UserResponseViewModel{
                Id = user.Id,
                Nome = user.Nome,
                Contato = user.Contato,
                Rua = user.Rua,
                Numero = user.Rua,
                Compl = user.Compl,
                Role = user.Role
            };
            
            return new LoginResponseViewModel{User = userResponse, Token = token};
        }

        public async Task<bool> SignUp(SignUpRequestViewModel signUpRequest)
        {

            User user = new User{
                Nome = signUpRequest.Nome,
                Contato = signUpRequest.Contato,
                Rua = signUpRequest.Rua,
                Numero = signUpRequest.Numero,
                Compl = signUpRequest.Compl,
                Role = "consumidor"
            };
            
            InfoLogin infoLogin = new InfoLogin{
                Email = signUpRequest.Email,
                Senha = signUpRequest.Senha
            };

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