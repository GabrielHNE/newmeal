using System.Collections.Generic;
using System.Linq;

namespace NewMeal.Domain.Models
{
    public class Restaurante : BaseModel{
        public string Cnpj { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string UrlFoto { get; set; }
        public bool CardapioAtivo { get; set; }
        private List<Prato> _pratos;
        public IEnumerable<Prato> Pratos { get => _pratos.AsReadOnly();}
        public int UserId { get; set; }
        public User User { get; set; }

        public Restaurante() { _pratos = new List<Prato>(); }

        public void AddPrato(Prato p){
            _pratos.Add(p);
        }

        public bool RemovePrato(int pratoId){
            Prato p = _pratos.Find(x => x.Id == pratoId);
            return _pratos.Remove(p);
        }
    }
}