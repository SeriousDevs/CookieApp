using CookieApp.Model.Requests;
using CookieApp.Model.Responses;
using CookieData.Entities;
using CookieData.Model;

namespace CookieApp.Service.Interfaces
{
    public interface IUserService
    {
        Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model);
        Task<AuthenticateResponse> RegisterAsync(UserModel userModel);
        Task<IEnumerable<UserStatsModel>> GetAllUsersAsync();
        Task<UserModel> GetUserAsync(int id);
        Task<User> GetByIdAsync(int id);
    }
}
