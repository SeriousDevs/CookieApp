﻿using System.Text.Json.Serialization;

namespace CookieData.Entities;

public class Upgrade : BaseEntity
{
    public string CurrentValue { get; set; } = null!;
    public long Level { get; set; }
    public long Amount { get; set; }
    public int GameAccountId { get; set; }

    [JsonIgnore]
    public GameAccount GameAccount { get; set; } = null!;
    public int UpgradeInfoId { get; set; }
    public UpgradeInfo UpgradeInfo { get; set; } = null!;
}
