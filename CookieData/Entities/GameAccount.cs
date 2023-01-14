using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class GameAccount : BaseEntity
    {
        public long Networth { get; set; }
        public long Cookies { get; set; }
        public long Clicks { get; set; }
        public int ClickUpgradeId { get; set; }
        public Upgrade ClickUpgrade { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }

        // [JsonIgnore]
        public User User { get; set; }
    }
}
