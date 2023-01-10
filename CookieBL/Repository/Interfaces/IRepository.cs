using CookieData.Entities;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CookieBL.IRepository.Interfaces
{
    public interface IRepository<TEntity>
        where TEntity : BaseEntity
    {
        Task<IEnumerable<TEntity>> GetAllEntitiesAsync();
        Task<TEntity> GetEntityByIdAsync(int id);
        Task UpdateEntityAsync(TEntity entity);
    }
}
