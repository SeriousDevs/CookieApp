using CookieData.Entities.Interfaces;

namespace CookieData.Entities
{
    public class BaseEntity : IEntity
    {
        public int Id { get; set; }
    }
}
