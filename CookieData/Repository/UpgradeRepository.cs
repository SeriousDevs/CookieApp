using CookieData.IRepository.Interfaces;
using CookieData.Context;
using CookieData.Entities;
using Microsoft.EntityFrameworkCore;

namespace CookieData.Repository
{
    public class UpgradeRepository : IRepository<Upgrade>
    {
        private readonly CookieContext _context;

        public UpgradeRepository(CookieContext context)
        {
            _context = context;
        }

        public async Task AddEntityAsync(Upgrade upgrade)
        {
            await _context.AddAsync(upgrade);
            _context.SaveChanges();
        }

        public async Task<IEnumerable<Upgrade>> GetAllEntitiesAsync()
        {
            IEnumerable<Upgrade> upgrades = await _context.Upgrades.AsNoTracking().ToListAsync();
            return upgrades;
        }

        public async Task<Upgrade> GetEntityByIdAsync(int id)
        {
            Upgrade? upgrade = await _context.Upgrades.FirstOrDefaultAsync(ga => ga.Id == id);
            return upgrade!;
        }

        public async Task UpdateEntityAsync(Upgrade upgrade)
        {
            _context.Upgrades.Update(upgrade);
            await _context.SaveChangesAsync();
        }
    }
}
