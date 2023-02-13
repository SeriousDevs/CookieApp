using CookieData.Entities;

namespace CookieData.Repository.Interfaces;

public interface IStoryRepository
{
    Task<FairyTail> GetByNetworth(double networth);
}
