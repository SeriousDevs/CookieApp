using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Entities.Configuration
{
    public class UpgradeConfig : IEntityTypeConfiguration<Upgrade>
    {
        public void Configure(EntityTypeBuilder<Upgrade> builder)
        {
            builder.ToTable(nameof(Upgrade)).HasKey(u => u.Id);
            builder.Property(u => u.Id).HasColumnName("UpgradeId").ValueGeneratedOnAdd();
            builder.Property(u => u.Name).HasMaxLength(50).IsRequired();
            builder.Property(u => u.Price).IsRequired();
            builder.Property(u => u.BaseTick).IsRequired();
            builder.Property(u => u.Amount).IsRequired();
            builder.Property(u => u.Level).IsRequired();
            builder.Property(u => u.GameAccountId).IsRequired();

            builder.HasOne(u => u.GameAccount)
                .WithMany(ga => ga.Upgrades)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(u => u.GameAccountId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
