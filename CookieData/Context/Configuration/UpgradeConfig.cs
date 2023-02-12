using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Context.Configuration
{
    public class UpgradeConfig : IEntityTypeConfiguration<Upgrade>
    {
        public void Configure(EntityTypeBuilder<Upgrade> builder)
        {
            builder.ToTable(nameof(Upgrade)).HasKey(u => u.Id);
            builder.Property(u => u.Id).HasColumnName("UpgradeId").ValueGeneratedOnAdd();
            builder.Property(u => u.Amount).IsRequired();
            builder.Property(u => u.Level).IsRequired();
            builder.Property(u => u.GameAccountId).IsRequired();

            builder.HasOne(u => u.GameAccount)
                .WithMany(ga => ga.Upgrades)
                .HasForeignKey(u => u.GameAccountId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(u => u.UpgradeInfo)
                .WithMany(u => u.Upgrades)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
