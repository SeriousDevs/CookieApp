using Microsoft.AspNetCore.Identity;

namespace CookieApp.Helpers
{
    public class BCryptPasswordHasher<TUser> : IPasswordHasher<TUser>
        where TUser : class
    {
        public string HashPassword(TUser user, string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password, 12);
        }

        public PasswordVerificationResult VerifyHashedPassword(
          TUser user, string hashedPassword, string providedPassword)
        {
            var isValid = BCrypt.Net.BCrypt.Verify(providedPassword, hashedPassword);

            return isValid ? PasswordVerificationResult.Success : PasswordVerificationResult.Failed;
        }
    }
}
