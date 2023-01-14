using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class ClickUpgrade : BaseEntity
    {
        public long Level { get; set; }
        public int GameAccountId { get; set; }

        [JsonIgnore]
        public GameAccount? GameAccount { get; set; }
        public int UpgradeInfoId { get; set; }
        public UpgradeInfo? UpgradeInfo { get; set; }
    }
}
