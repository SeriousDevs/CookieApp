using CookieData.Entities;

namespace CookieBL.Helper
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
                });
            }

            var account = new GameAccount()
            {
                Cookies = 0,
                Clicks = 0,
                Upgrades = upgrades,
                ClickUpgrade = new ClickUpgrade()
                {
                    UpgradeInfoId = 1,
                    Level = 1,
                }
            };

            return account;
        }
    }
}
