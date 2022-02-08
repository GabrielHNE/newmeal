using System;
using System.Net.Mail;
using System.Net;
using Shop.Models;
using Shop.ViewModels;
using Shop.Repositories;

namespace Shop.Services
{
    public class EmailService {
        private SmtpClient _client;
        private string SmtpClient {get; set;}
        private int SmtpPort {get; set;}
        private string _email {get;set;}
        private string _senha {get; set;}
        
        public EmailService(){
            SmtpClient = "smtp.gmail.com";
            SmtpPort = 587;

            _email = "newmeal2022@gmail.com";
            _senha = "LEMINHASENHANAO";

            _client = new SmtpClient(SmtpClient, SmtpPort){
                        Credentials = new NetworkCredential(_email, _senha),
                        EnableSsl = true
                    };
        }

        public bool sendEmail(string email, string subject, string body){
            try{
                _client.Send(_email, email, subject, body);

            }catch(Exception e){
                Console.WriteLine(e.Message);
                return false;
            }

            return true;
        } 
    }
}
   
    