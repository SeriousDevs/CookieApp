using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class GameAccount : BaseEntity
    {
        public double Networth { get; set; }
        public double Cookies { get; set; }
        public long Clicks { get; set; }
        public ClickUpgrade ClickUpgrade { get; set; } = null!;
        public IEnumerable<Upgrade> Upgrades { get; set; } = null!;

        [JsonIgnore]
        public User User { get; set; } = null!;
    }
}
