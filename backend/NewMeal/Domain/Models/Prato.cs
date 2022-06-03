using System.Collections.Generic;

namespace NewMeal.Domain.Models
{
    public class Prato : BaseModel
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public int CategoriaPreco { get; set; }
        public int RestauranteId { get; set; }
        public Restaurante Restaurante { get; set; }
        private List<FotoPrato> _fotosPrato;
        public IEnumerable<FotoPrato> Fotos { get; set; }

        public Prato() { _fotosPrato = new List<FotoPrato>(); }
        
        public void AddFoto(FotoPrato foto)
        {
            _fotosPrato.Add(foto);
            System.Console.WriteLine(foto.Url);
        }
    }
}