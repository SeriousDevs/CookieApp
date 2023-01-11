using CookieData.Entities;

namespace CookieData.Model
{
    public class GameAccountModel
    {
        public int Id { get; set; }
        public int Cookies { get; set; }
        public int Clicks { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }
    }
}
