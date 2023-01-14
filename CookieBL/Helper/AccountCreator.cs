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
                /*Upgrades = new List<Upgrade>()
                {
                    new Upgrade()
                    {
                        Name = "Click",
                        Price = 100,
                        BaseTick = 1,
                        Level = 1,
                        Amount = 1,
                        Image = "images/Upgrades/Clicker"
                    },
                    new Upgrade()
                    {
                        Name = "Rolling Pin",
                        Price = 1000,
                        BaseTick = 3,
                        Level = 1,
                        Amount = 0,
                        Image = "images/Upgrades/RollingPin"
                    }
                }*/
            };

            return account;
        }
    }
}
