using CookieData.Entities;

namespace CookieApp.Helpers
{
    public static class AccountCreator
    {
        private static readonly int _upgradesAmount = 16;
        public static GameAccount CreateGameAccount()
        {
            var upgrades = new List<Upgrade>();

            for (int i = 2; i <= _upgradesAmount; i++)
            {
                upgrades.Add(new Upgrade()
                {
                    UpgradeInfoId = i,
                    Level = 1,
                    Amount = 0,
                    CurrentValue = "0"
                });
            }

            var account = new GameAccount()
            {
                Networth = "0",
                Cookies = "0",
                Clicks = "0",
                Upgrades = upgrades,
                ClickUpgrade = new ClickUpgrade()
                {
                    UpgradeInfoId = 1,
                    Level = 1,
                    CurrentValue = "0"
                }
            };

            return account;
        }
    }
}
