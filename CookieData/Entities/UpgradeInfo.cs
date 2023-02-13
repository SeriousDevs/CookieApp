using System.Text.Json.Serialization;

namespace CookieData.Entities;

public class UpgradeInfo : BaseEntity
{
    public string Name { get; set; } = null!;
    public string BaseValue { get; set; } = null!;
    public string BasePrice { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string LvlImage { get; set; } = null!;
    [JsonIgnore]
    public IEnumerable<Upgrade>? Upgrades { get; set; }
    [JsonIgnore]
    public IEnumerable<ClickUpgrade>? ClickUpgrades { get; set; }
}
