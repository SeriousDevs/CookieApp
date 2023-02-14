using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Context.Configuration;

public class ClickUpgradeConfig : IEntityTypeConfiguration<ClickUpgrade>
{
    public void Configure(EntityTypeBuilder<ClickUpgrade> builder)
    {
        builder.ToTable(nameof(ClickUpgrade)).HasKey(u => u.Id);
        builder.Property(u => u.Id)
            .HasColumnName("ClickUpgradeId")
            .UseHiLo("click_upgrade_hilo")
            .IsRequired();

        builder.Property(u => u.Level).IsRequired();
        builder.Property(u => u.GameAccountId).IsRequired();

        builder.HasOne(u => u.GameAccount)
            .WithOne(ga => ga.ClickUpgrade)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(u => u.UpgradeInfo)
            .WithMany(u => u.ClickUpgrades)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
