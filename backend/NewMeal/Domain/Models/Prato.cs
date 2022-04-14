using System.Collections.Generic;

namespace NewMeal.Domain.Models
{
    public class Prato : BaseModel
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public int RestauranteId { get; set; }
        public Restaurante Restaurante { get; set; }
        public IEnumerable<FotoPrato> Fotos { get; set; }
    }
}