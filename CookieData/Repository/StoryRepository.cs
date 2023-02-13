using CookieData.Context;
using CookieData.Entities;
using CookieData.Repository.Interfaces;
using Infrastructure.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CookieData.Repository;

public class StoryRepository : IStoryRepository
{
    private readonly CookieContext _context;

    public StoryRepository(IDbContextWrapper<CookieContext> contextFactory)
    {
        _context = contextFactory.DbContext;
    }

    public async Task<FairyTail> GetByNetworth(double networth)
    {
        var item = await _context.FairyTails.OrderByDescending(i => i.Trigger).FirstOrDefaultAsync(i => i.Trigger <= networth);

        return item!;
    }
}
