using CookieData.Repository.Interfaces;
using CookieData.Context;
using Microsoft.EntityFrameworkCore;
using CookieData.Entities;
using Infrastructure.Services.Interfaces;

namespace CookieData.Repository;

public class GameAccountRepository : IRepository<GameAccount>
{
    private readonly CookieContext _context;

    public GameAccountRepository(IDbContextWrapper<CookieContext> contextFactory)
    {
        _context = contextFactory.DbContext;
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

        return gameAccount!;
    }

    public async Task UpdateEntityAsync(GameAccount gameAccount)
    {
        _context.GameAccounts.Update(gameAccount);
        await _context.SaveChangesAsync();
    }
}
