using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Context.Configuration;

public class FairyTailConfig : IEntityTypeConfiguration<FairyTail>
{
    public void Configure(EntityTypeBuilder<FairyTail> builder)
    {
        builder.ToTable(nameof(FairyTail)).HasKey(e => e.Id);
        builder.Property(e => e.Id).HasColumnName("FairyTailId").ValueGeneratedOnAdd();
        builder.Property(e => e.Image).HasMaxLength(100).IsRequired();
        builder.Property(e => e.Story).HasMaxLength(1000).IsRequired();
        builder.Property(e => e.Trigger).IsRequired();
    }
}
