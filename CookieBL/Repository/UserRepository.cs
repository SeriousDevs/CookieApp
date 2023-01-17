using CookieBL.Exceptions;
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
            bool exists = await ExistWithLoginAsync(user.Login);

            if (exists)
            {
                throw new AuthorizationException("The user with same Login is also created!");
            }

            exists = await ExistWithEmailAsync(user.Email);

            if (exists)
            {
                throw new AuthorizationException("The user with same Email is also created!");
            }

            await _context.AddAsync(user);
            _context.SaveChanges();
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            IEnumerable<User> users = await _context.Users
                    .Include(u => u.GameAccount)
                    .AsNoTracking()
                    .ToListAsync();

            return users;
        }

        public async Task<User> GetUserByLoginAsync(string login)
        {
            User? user = await _context.Users
                .Include(u => u.GameAccount)
                .ThenInclude(ga => ga.Upgrades)
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Login == login);

            return user;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            User? user = await _context.Users
                .Include(u => u.GameAccount)
                .ThenInclude(ga => ga.Upgrades)
                .AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task RemoveUserAsync(int id)
        {
            User? user = await _context.Users
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

        private async Task<bool> ExistWithLoginAsync(string login)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(u => u.Login == login);
            bool res = user is not null;
            return res;
        }

        private async Task<bool> ExistWithEmailAsync(string email)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            bool res = user is not null;
            return res;
        }
    }
}
