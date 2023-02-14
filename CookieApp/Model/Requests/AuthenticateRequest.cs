using System.ComponentModel.DataAnnotations;

namespace CookieApp.Model.Requests
{
    public class AuthenticateRequest
    {
        [Required]
        public string Login { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}
