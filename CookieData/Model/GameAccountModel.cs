using CookieData.Entities;

namespace CookieData.Model
{
    public class GameAccountModel
    {
        public int Id { get; set; }
        public ulong Networth { get; set; }
        public ulong Cookies { get; set; }
        public ulong Clicks { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }
    }
}
