namespace NewMeal.Application.ViewModels
{
    public class UserResponseViewModel {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Contato { get; set; }
        public string Rua { get; set; }
        public string Numero { get; set; }
        public string Compl { get; set; }
        public string Role { get; set; }
        public RestauranteResponseViewModel Restaurante { get; set; }
    }
}