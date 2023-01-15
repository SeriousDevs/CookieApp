﻿using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class GameAccount : BaseEntity
    {
        public double Networth { get; set; }
        public long Cookies { get; set; }
        public long Clicks { get; set; }
        public ClickUpgrade ClickUpgrade { get; set; }
        public IEnumerable<Upgrade> Upgrades { get; set; }

        [JsonIgnore]
        public User User { get; set; }
    }
}
