namespace CookieData.Entities
{
    public class FairyTail : BaseEntity
    {
        public string Image { get; set; } = null!;
        public string Story { get; set; } = null!;
        public double Trigger { get; set; }
    }
}
