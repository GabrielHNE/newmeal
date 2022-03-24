using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.Unicode;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Encodings.Web;
using System.Linq;
using NewMeal.Domain.Models;

namespace NewMeal.Infra.Repositories
{
    public class BdConnection
    {
        private string BasePath;
        private string PathInfoLogin;
        private string PathUser;
        private JsonSerializerOptions options;
        public List<InfoLogin> infoLogins { get; set; }
        public List<User> users { get; set; }

        public BdConnection(){
            BasePath = Path.Combine(Directory.GetCurrentDirectory(), "BD");
            PathInfoLogin = Path.Combine(BasePath,"info-login.json");
            PathUser= Path.Combine(BasePath,"user.json");

            options = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
                WriteIndented = true
            };

            infoLogins = ReadInfoLogin().ToList();
            users = ReadUser().ToList();
        }

        private IEnumerable<InfoLogin> ReadInfoLogin(){
            try
            {
                IEnumerable<InfoLogin> lista;
                
                byte[] bytes;
                bytes = File.ReadAllBytes(PathInfoLogin);

                var readOnlySpan = new ReadOnlySpan<byte>(bytes);
                lista = JsonSerializer.Deserialize<IEnumerable<InfoLogin>>(readOnlySpan, options);

                return lista;
            }
            catch (IOException erro)
            {
                throw new IOException(erro.Message);
            }
            catch
            {
                return new List<InfoLogin>();
            }
        }

        private IEnumerable<User> ReadUser(){
            try
            {
                IEnumerable<User> lista;
                
                byte[] bytes;
                bytes = File.ReadAllBytes(PathUser);

                var readOnlySpan = new ReadOnlySpan<byte>(bytes);
                lista = JsonSerializer.Deserialize<IEnumerable<User>>(readOnlySpan, options);

                return lista;
            }
            catch (IOException erro)
            {
                throw new IOException(erro.Message);
            }
            catch
            {
                return new List<User>();
            }
        }

        public void Save(){
            try
            {
                byte[] bytes;
                bytes = JsonSerializer.SerializeToUtf8Bytes(infoLogins, options);
                File.WriteAllBytes(PathInfoLogin, bytes);

                bytes = JsonSerializer.SerializeToUtf8Bytes(users, options);
                File.WriteAllBytes(PathUser, bytes); 
            }
            catch (IOException erro)
            {
                throw new IOException(erro.Message);
            }
        }
    }
}