using CookieData.Entities;
using CookieData.Model;

namespace CookieBL.Service.Interfaces
{
    public interface IUserService
    {
        Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model);
        Task<AuthenticateResponse> RegisterAsync(UserModel userModel);
        Task<IEnumerable<UserModel>> GetAllUsersAsync();
        Task<UserModel> GetUserAsync(int id);
        Task<User> GetByIdAsync(int id);
    }
}
