using CookieData.Entities;

namespace CookieData.Model
{
    public class GameAccountModel
    {
        public int Id { get; set; }
        public double Networth { get; set; }
        public long Cookies { get; set; }
        public long Clicks { get; set; }
        public ClickUpgradeModel ClickUpgrade { get; set; }
        public IEnumerable<UpgradeModel> Upgrades { get; set; }
    }
}
