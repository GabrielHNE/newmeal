using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.Unicode;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Encodings.Web;
using System.Linq;
using Shop.Models;

namespace Shop.Repositories
{
    public class BdConnection
    {
        private string BasePath;
        private JsonSerializerOptions options;
        public List<InfoLogin> infoLogins { get; set; }
        public List<User> users { get; set; }

        public BdConnection(){
            // BasePath = Path.Combine(Directory.GetCurrentDirectory(), "../BD");
            BasePath = "C:\\Users\\GabrielH\\Documents\\1-Aulas\\EngSoft\\2bim\\newmeal\\jwt-dotnet5\\Shop\\BD";

            options = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
                WriteIndented = true
            };

            infoLogins = ReadInfoLogin().ToList();
            users = ReadUser().ToList();

            Console.WriteLine(infoLogins.Count());
            
        }

        private IEnumerable<InfoLogin> ReadInfoLogin(){
            try
            {
                IEnumerable<InfoLogin> lista;
                string PathJson = Path.Combine(BasePath,"info-login.json");
                byte[] bytes;
                bytes = File.ReadAllBytes(PathJson);

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
                Console.WriteLine("DEU MERDA");
                return new List<InfoLogin>();
            }
        }

        private IEnumerable<User> ReadUser(){
            try
            {
                IEnumerable<User> lista;
                string PathJson = Path.Combine(BasePath,"user.json");
                byte[] bytes;
                bytes = File.ReadAllBytes(PathJson);

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
    }
}