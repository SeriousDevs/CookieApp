using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Entities.Configuration
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable(nameof(User)).HasKey(u => u.Id);
            builder.Property(u => u.Id).HasColumnName("UserId").ValueGeneratedOnAdd();
            builder.Property(u => u.Login).HasMaxLength(50).IsRequired();
            builder.Property(u => u.Password).HasMaxLength(50).IsRequired();
            builder.Property(u => u.Email).HasMaxLength(100).IsRequired();

            builder.HasOne(u => u.GameAccount)
                .WithOne(ga => ga.User)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey<User>(u => u.GameAccountId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
