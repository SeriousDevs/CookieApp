using System.Text.Json.Serialization;

namespace CookieData.Entities
{
    public class User : BaseEntity
    {
        public string UserName { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
