namespace CookieData.Model
{
    public class UpgradeModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public long BasePrice { get; set; }
        public double BaseValue { get; set; }
        public long Level { get; set; }
        public long Amount { get; set; }
        public string Image { get; set; } = null!;
        public string LvlImage { get; set; } = null!;
        public int GameAccountId { get; set; }
        public int UpgradeInfoId { get; set; }
    }
}
