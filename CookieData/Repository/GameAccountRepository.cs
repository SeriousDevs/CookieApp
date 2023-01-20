using CookieData.IRepository.Interfaces;
using CookieData.Context;
using CookieData.Entities;
using Microsoft.EntityFrameworkCore;

namespace CookieData.IRepository
{
    public class GameAccountRepository : IRepository<GameAccount>
    {
        private readonly CookieContext _context;

        public GameAccountRepository(CookieContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<GameAccount>> GetAllEntitiesAsync()
        {
            IEnumerable<GameAccount> gameAccounts = await _context.GameAccounts
                .Include(ga => ga.Upgrades)
                .ThenInclude(u => u.UpgradeInfo)
                .Include(ga => ga.ClickUpgrade)
                .ThenInclude(u => u.UpgradeInfo)
                .AsNoTracking()
                .ToListAsync();

            return gameAccounts;
        }

        public async Task<GameAccount> GetEntityByIdAsync(int id)
        {
            GameAccount? gameAccount = await _context.GameAccounts
                .Include(ga => ga.Upgrades)
                .ThenInclude(u => u.UpgradeInfo)
                .Include(ga => ga.ClickUpgrade)
                .ThenInclude(u => u.UpgradeInfo)
                .AsNoTracking()
                .FirstOrDefaultAsync(ga => ga.Id == id);

            return gameAccount;
        }

        public async Task UpdateEntityAsync(GameAccount gameAccount)
        {
            _context.GameAccounts.Update(gameAccount);
            await _context.SaveChangesAsync();
        }
    }
}
