using CookieData.Entities;

namespace CookieData.Model
{
    public class GameAccountModel
    {
        public int Id { get; set; }
        public string Networth { get; set; } = null!;
        public string Cookies { get; set; } = null!;
        public string Clicks { get; set; } = null!;
        public ClickUpgradeModel ClickUpgrade { get; set; } = null!;
        public FairyTailModel Story { get; set; } = null!;
        public IEnumerable<UpgradeModel> Upgrades { get; set; } = null!;
    }
}
