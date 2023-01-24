using CookieData.Context;
using CookieData.Entities;

namespace CookieData.Repository.Interfaces
{
    public interface IStoryRepository
    {
        public Task<FairyTail> GetByNetworth(double networth);
    }
}
