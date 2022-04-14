namespace NewMeal.Domain.Models
{
    public class FotoPrato : BaseModel
    {
        public string Url { get; set; }
        public int PratoId { get; set; }
        public Prato Prato { get; set; }
    }
}