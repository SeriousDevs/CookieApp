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

            builder.HasData(GetData());
        }

        private IEnumerable<UpgradeInfo> GetData()
        {
            var list = new List<UpgradeInfo>()
            {
                new UpgradeInfo
                {
                    Id = 1,
                    Name = "Click",
                    BaseValue = 1,
                    BasePrice = 100,
                    Image = "images/Upgrades/Clicker"
                },
                new UpgradeInfo
                {
                    Id = 2,
                    Name = "Hand Mate",
                    BaseValue = 0.1,
                    BasePrice = 15,
                    Image = "images/Upgrades/HandMate"
                },
                new UpgradeInfo
                {
                    Id = 3,
                    Name = "Rolling Pin",
                    BaseValue = 1,
                    BasePrice = 100,
                    Image = "images/Upgrades/RollingPin"
                },
                new UpgradeInfo
                {
                    Id = 4,
                    Name = "Oven",
                    BaseValue = 8,
                    BasePrice = 1100,
                    Image = "images/Upgrades/Oven"
                },
                new UpgradeInfo
                {
                    Id = 5,
                    Name = "Grand Daughter",
                    BaseValue = 47,
                    BasePrice = 12000,
                    Image = "images/Upgrades/GrandDaughter"
                },
                new UpgradeInfo
                {
                    Id = 6,
                    Name = "Baker",
                    BaseValue = 260,
                    BasePrice = 130_000,
                    Image = "images/Upgrades/Baker"
                },
                new UpgradeInfo
                {
                    Id = 7,
                    Name = "Granny Boss",
                    BaseValue = 1400,
                    BasePrice = 1_400_000,
                    Image = "images/Upgrades/GrannyBoss"
                },
                new UpgradeInfo
                {
                    Id = 8,
                    Name = "Buns Stall",
                    BaseValue = 7800,
                    BasePrice = 20_000_000,
                    Image = "images/Upgrades/BunsStall"
                },
                new UpgradeInfo
                {
                    Id = 9,
                    Name = "Bakery",
                    BaseValue = 44_000,
                    BasePrice = 330_000_000,
                    Image = "images/Upgrades/Bakery"
                },
                new UpgradeInfo
                {
                    Id = 10,
                    Name = "Granny's Restaurant",
                    BaseValue = 260_000,
                    BasePrice = 5_100_000_000,
                    Image = "images/Upgrades/GrannysRestaurant"
                },
                new UpgradeInfo
                {
                    Id = 11,
                    Name = "Cookie Franchise",
                    BaseValue = 1_600_000,
                    BasePrice = 75_000_000_000,
                    Image = "images/Upgrades/CookieFranchise"
                },
                new UpgradeInfo
                {
                    Id = 12,
                    Name = "Factory",
                    BaseValue = 10_000_000,
                    BasePrice = 1_000_000_000_000,
                    Image = "images/Upgrades/Factory"
                },
                new UpgradeInfo
                {
                    Id = 13,
                    Name = "Worldwide Shipping",
                    BaseValue = 65_000_000,
                    BasePrice = 14_000_000_000_000,
                    Image = "images/Upgrades/WorldwideShipping"
                },
                new UpgradeInfo
                {
                    Id = 14,
                    Name = "Space Devilery",
                    BaseValue = 430_000_000,
                    BasePrice = 170_000_000_000_000,
                    Image = "images/Upgrades/SpaceDevilery"
                },
                new UpgradeInfo
                {
                    Id = 15,
                    Name = "Time Machine",
                    BaseValue = 2_900_000_000,
                    BasePrice = 2_100_000_000_000_000,
                    Image = "images/Upgrades/TimeMachine"
                },
                new UpgradeInfo
                {
                    Id = 16,
                    Name = "!Gamer || Cheater!",
                    BaseValue = 21_000_000_000,
                    BasePrice = 26_000_000_000_000_000,
                    Image = "images/Upgrades/GamerCheater"
                },
            };

            return list;
        }
    }
}
