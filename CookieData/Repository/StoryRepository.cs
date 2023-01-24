using CookieData.Context;
using CookieData.Entities;
using CookieData.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CookieData.Repository
{
    public class StoryRepository : IStoryRepository
    {
        private readonly CookieContext _context;

        public StoryRepository(CookieContext context)
        {
            _context = context;
        }

        public async Task<FairyTail> GetByNetworth(double networth)
        {
            var item = await _context.FairyTails.OrderByDescending(i => i.Trigger).FirstOrDefaultAsync(i => i.Trigger <= networth);

            return item!;
        }
    }
}
