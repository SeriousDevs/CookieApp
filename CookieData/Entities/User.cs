using System.Text.Json.Serialization;

namespace CookieData.Entities;

public class User : BaseEntity
{
    public string Login { get; set; } = null!;
    [JsonIgnore]
    public string Password { get; set; } = null!;
    public string Email { get; set; } = null!;
    public int GameAccountId { get; set; }
    public GameAccount GameAccount { get; set; } = null!;
}
