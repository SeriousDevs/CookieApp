using CookieData.Entities;

namespace CookieData.Model
{
    public class AuthenticateResponse
    {
        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            Login = user.Login;
            Email = user.Email;
            Token = token;
        }

        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}
