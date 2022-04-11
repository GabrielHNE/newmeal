namespace NewMeal.Domain.Models
{
    public class InfoLogin : BaseModel{
        public string Email { get; set; }
        public string Senha { get; set; }
        public int PerfilId { get; set; }
        public User Perfil { get; set; }
    }
}