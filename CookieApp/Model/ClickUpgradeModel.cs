﻿namespace CookieData.Model
{
    public class ClickUpgradeModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string CurrentValue { get; set; } = null!;
        public string BasePrice { get; set; } = null!;
        public string BaseValue { get; set; } = null!;
        public long Level { get; set; }
        public string Image { get; set; } = null!;
        public int GameAccountId { get; set; }
        public int UpgradeInfoId { get; set; }
    }
}
