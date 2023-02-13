using System.Text.Json.Serialization;

namespace CookieData.Entities;

public class GameAccount : BaseEntity
{
    public string Networth { get; set; } = null!;
    public string Cookies { get; set; } = null!;
    public string Clicks { get; set; } = null!;
    public ClickUpgrade ClickUpgrade { get; set; } = null!;
    public IEnumerable<Upgrade> Upgrades { get; set; } = null!;

    [JsonIgnore]
    public User User { get; set; } = null!;
}
