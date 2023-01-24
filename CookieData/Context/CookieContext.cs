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
        public DbSet<GameAccount> GameAccounts { get; set; }
        public DbSet<Upgrade> Upgrades { get; set; }
        public DbSet<ClickUpgrade> ClickUpgrades { get; set; }
        public DbSet<UpgradeInfo> UpgradesInfo { get; set; }
        public DbSet<FairyTail> FairyTails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfig());
            modelBuilder.ApplyConfiguration(new GameAccountConfig());
            modelBuilder.ApplyConfiguration(new UpgradeConfig());
            modelBuilder.ApplyConfiguration(new UpgradeInfoConfig());
            modelBuilder.ApplyConfiguration(new ClickUpgradeConfig());
            modelBuilder.ApplyConfiguration(new FairyTailConfig());
        }
    }
}
