using CookieData.Entities;

namespace CookieData.Repository.Interfaces;

public interface IRepository<TEntity>
    where TEntity : BaseEntity
{
    Task<IEnumerable<TEntity>> GetAllEntitiesAsync();
    Task<TEntity> GetEntityByIdAsync(int id);
    Task UpdateEntityAsync(TEntity entity);
}
