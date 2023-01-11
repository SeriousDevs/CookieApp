using CookieBL.IRepository.Interfaces;
using CookieData.Context;
using CookieData.Entities;
using Microsoft.EntityFrameworkCore;

namespace CookieBL.IRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly CookieContext _context;
        public UserRepository(CookieContext context)
        {
            _context = context;
        }

        public async Task AddUserAsync(User user)
        {
            await _context.AddAsync(user);
            _context.SaveChanges();
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            IEnumerable<User> users = await _context.Users.Include(u => u.GameAccount).AsNoTracking().ToListAsync();
            return users;
        }

        public async Task<User> GetUserByCredentialsAsync(string login, string password)
        {
            User user = await _context.Users.Include(u => u.GameAccount).ThenInclude(ga => ga.Upgrades).FirstOrDefaultAsync(u => u.Login == login && u.Password == password);
            return user;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            User user = await _context.Users.Include(u => u.GameAccount).ThenInclude(ga => ga.Upgrades).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task RemoveUserAsync(int id)
        {
            User user = await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id);

            if (user is not null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public async Task UpdateUserAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
    }
}
