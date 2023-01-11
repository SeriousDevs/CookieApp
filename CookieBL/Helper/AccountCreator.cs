using CookieData.Entities;

namespace CookieBL.Helper
{
    public static class AccountCreator
    {
        public static GameAccount CreateGameAccount()
        {
            var account = new GameAccount()
            {
                Cookies = 0,
                Clicks = 0,
                Upgrades = new List<Upgrade>()
                {
                    new Upgrade()
                    {
                        Name = "Click",
                        Price = 100,
                        BaseTick = 1,
                        Level = 1,
                        Amount = 1,
                        Image = "https://www.doctordick.de/media/image/e2/1e/d5/penis_duenn_normaleBrille_600x600.png"
                    }
                }
            };

            return account;
        }
    }
}
