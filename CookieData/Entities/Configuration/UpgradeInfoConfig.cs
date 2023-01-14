using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Entities.Configuration
{
    public class UpgradeInfoConfig : IEntityTypeConfiguration<UpgradeInfo>
    {
        public void Configure(EntityTypeBuilder<UpgradeInfo> builder)
        {
            builder.ToTable(nameof(UpgradeInfo)).HasKey(u => u.Id);
            builder.Property(u => u.Id).HasColumnName("UpgradeInfoId");
            builder.Property(u => u.Name).HasMaxLength(50).IsRequired();
            builder.Property(u => u.BasePrice).IsRequired();
            builder.Property(u => u.BaseValue).IsRequired();
            builder.Property(u => u.Image).IsRequired();
        }
    }
}
