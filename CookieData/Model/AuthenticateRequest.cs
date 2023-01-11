using System.ComponentModel.DataAnnotations;

namespace CookieData.Model
{
    public class AuthenticateRequest
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
