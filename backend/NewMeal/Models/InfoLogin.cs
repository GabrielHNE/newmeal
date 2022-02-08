namespace Shop.Models
{
    public class InfoLogin : BaseModel{
        public string Email { get; set; }
        public string Senha { get; set; }
        public int PerfilId { get; set; }
    }
}