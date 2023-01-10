using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class User : BaseEntity
    {
        public string Login { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
    }
}
