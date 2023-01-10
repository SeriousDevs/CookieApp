namespace CookieData.Entities
{
    public class GameAccount : BaseEntity
    {
        public int Cookies { get; set; }
        public int Clicks { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }
        public User User { get; set; }
    }
}
