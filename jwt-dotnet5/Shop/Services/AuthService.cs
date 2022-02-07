using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Shop.Models;
using Shop.ViewModels;
using Microsoft.IdentityModel.Tokens;


namespace Shop.Services
{
    public class AuthService
    {
        public User Authenticate(InfoLoginViewModel infoLoginViewModel)
        {
            return null;
        }

        public Boolean SignUp(InfoLoginViewModel infoLoginViewModel)
        {
            return false;
        }
    }
}