﻿using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class Upgrade : BaseEntity
    {
        public string Name { get; set; }
        public long Price { get; set; }
        public int BaseTick { get; set; }
        public int Level { get; set; }
        public int Amount { get; set; }
        public string Image { get; set; }
        public int GameAccountId { get; set; }
        [JsonIgnore]
        public GameAccount? GameAccount { get; set; }
    }
}
