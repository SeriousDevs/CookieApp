namespace CookieData.Entities
{
    public class UpgradeInfo : BaseEntity
    {
        public string Name { get; set; }
        public long BaseValue { get; set; }
        public long BasePrice { get; set; }
        public string Image { get; set; }
        public Upgrade? Upgrade { get; set; }
        public ClickUpgrade? ClickUpgrade { get; set; }
    }
}
