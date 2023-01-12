using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class GameAccount : BaseEntity
    {
        public ulong Networth { get; set; }
        public ulong Cookies { get; set; }
        public ulong Clicks { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }
}
