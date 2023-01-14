namespace CookieData.Model
{
    public class UpgradeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public long BasePrice { get; set; }
        public long BaseValue { get; set; }
        public long Level { get; set; }
        public long Amount { get; set; }
        public string Image { get; set; }
        public int GameAccountId { get; set; }
        public int UpgradeInfoId { get; set; }
    }
}
