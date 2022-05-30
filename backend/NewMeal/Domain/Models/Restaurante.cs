using System.Collections.Generic;

namespace NewMeal.Domain.Models
{
    public class Restaurante : BaseModel{
        public string Cnpj { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string UrlFoto { get; set; }
        public bool CardapioAtivo { get; set; }
        public IEnumerable<Prato> Pratos { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}