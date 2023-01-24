using System.ComponentModel.DataAnnotations;

namespace CookieData.Model
{
    public class AuthenticateRequest
    {
        [Required]
        public string Login { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}
