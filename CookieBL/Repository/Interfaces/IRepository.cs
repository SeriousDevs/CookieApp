using CookieData.Entities;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CookieBL.Repository.Interfaces
{
    public interface IRepository<TEntity>
        where TEntity : BaseEntity
    {
        Task<IEnumerable<TEntity>> GetAllEntitiesAsync();
        Task<TEntity> GetEntityByIdAsync(int id);
        Task AddEntityAsync(TEntity entity);
        Task UpdateEntityAsync(TEntity entity);
        Task RemoveEntityAsync(int id);
    }
}
