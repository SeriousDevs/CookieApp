using CookieData.Entities;
using CookieData.Entities.Interfaces;

namespace CookieBL.Repository.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByCredentialsAsync(string login, string password);
        Task AddUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task RemoveUserAsync(int id);
    }
}
