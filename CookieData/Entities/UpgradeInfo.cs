using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class UpgradeInfo : BaseEntity
    {
        public string? Name { get; set; }
        public double BaseValue { get; set; }
        public long BasePrice { get; set; }
        public string? Image { get; set; }
        [JsonIgnore]
        public IEnumerable<Upgrade>? Upgrades { get; set; }
        [JsonIgnore]
        public ClickUpgrade? ClickUpgrade { get; set; }
    }
}
