using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Context.Configuration;

public class GameAccountConfig : IEntityTypeConfiguration<GameAccount>
{
    public void Configure(EntityTypeBuilder<GameAccount> builder)
    {
        builder.ToTable(nameof(GameAccount)).HasKey(ga => ga.Id);
        builder.Property(ga => ga.Id)
            .HasColumnName("GameAccountId")
            .UseHiLo("game_account_hilo")
            .IsRequired();

        builder.Property(ga => ga.Cookies).IsRequired();
        builder.Property(ga => ga.Clicks).IsRequired();

        builder.HasOne(ga => ga.ClickUpgrade)
            .WithOne(u => u.GameAccount)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
