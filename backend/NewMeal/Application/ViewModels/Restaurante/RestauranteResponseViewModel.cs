using System.Collections.Generic;

namespace NewMeal.Application.ViewModels
{
    public class RestauranteResponseViewModel {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string UrlFoto { get; set; }
        public bool CardapioAtivo { get; set; }
        public IEnumerable<PratoResponseViewModel> Pratos { get; set; }
    }
}