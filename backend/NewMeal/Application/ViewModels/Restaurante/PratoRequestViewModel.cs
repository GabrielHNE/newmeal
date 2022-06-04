using System.Collections.Generic;

namespace NewMeal.Application.ViewModels
{
    public class PratoRequestViewModel
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public int CategoriaPreco { get; set; }
        public IEnumerable<FotoPratoRequestViewModel> Fotos { get; set; }
    }
}