using CookieData.Entities;

namespace CookieData.Model
{
    public class GameAccountModel
    {
        public int Id { get; set; }
        public long Networth { get; set; }
        public long Cookies { get; set; }
        public long Clicks { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }
    }
}
