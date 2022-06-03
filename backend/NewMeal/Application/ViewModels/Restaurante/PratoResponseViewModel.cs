using System.Collections.Generic;

namespace NewMeal.Application.ViewModels
{
    public class PratoResponseViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public int RestauranteId { get; set; }
        public IEnumerable<FotoPratoResponseViewModel> Fotos { get; set; }
    }
}