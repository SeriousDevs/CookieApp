using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class Upgrade : BaseEntity
    {
        public string Name { get; set; }
        public ulong Price { get; set; }
        public ulong BaseTick { get; set; }
        public ulong Level { get; set; }
        public ulong Amount { get; set; }
        public string Image { get; set; }
        public int GameAccountId { get; set; }
        [JsonIgnore]
        public GameAccount? GameAccount { get; set; }
    }
}
