using CookieBL.IRepository.Interfaces;
using CookieData.Context;
using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace CookieBL.Repository
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
            Upgrade upgrade = await _context.Upgrades.FirstOrDefaultAsync(ga => ga.Id == id);
            return upgrade;
        }

        public async Task UpdateEntityAsync(Upgrade upgrade)
        {
            Upgrade entity = await _context.Upgrades.FirstOrDefaultAsync(u => u.Id == upgrade.Id);

            if (entity is not null)
            {
                entity.Id = upgrade.Id;
                entity.Name = upgrade.Name;
                entity.Price = upgrade.Price;
                entity.BaseTick = upgrade.BaseTick;
                entity.Level = upgrade.Level;
                entity.Amount = upgrade.Amount;

                _context.Update(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
