using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class Upgrade : BaseEntity
    {
        public long Level { get; set; }
        public long Amount { get; set; }
        public int GameAccountId { get; set; }

        [JsonIgnore]
        public GameAccount? GameAccount { get; set; }
        public int UpgradeInfoId { get; set; }
        public UpgradeInfo? UpgradeInfo { get; set; }
    }
}
