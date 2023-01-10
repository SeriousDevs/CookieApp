using CookieData.Entities;
using CookieData.Entities.Configuration;
using Microsoft.EntityFrameworkCore;

namespace CookieData.Context
{
    public class CookieContext : DbContext
    {
        public CookieContext(DbContextOptions<CookieContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfig());
        }
    }
}
