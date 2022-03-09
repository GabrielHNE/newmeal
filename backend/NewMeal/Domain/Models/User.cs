namespace NewMeal.Domain.Models
{
    public class User : BaseModel
    {
        public string Nome { get; set; }
        public string Contato { get; set; }
        public string Rua { get; set; }
        public string Numero { get; set; }
        public string Compl { get; set; }
        public string Role { get; set; }
    }
}