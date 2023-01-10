using CookieData.Entities;

namespace CookieData.Model
{
    public class AuthenticateResponse
    {
        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            Login = user.Login;
            Name = user.Name;
            Email = user.Email;
            Token = token;
        }

        public long Id { get; set; }
        public string Login { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}
