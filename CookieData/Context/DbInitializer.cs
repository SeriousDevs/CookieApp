using CookieData.Entities;

namespace CookieData.Context;

public class DbInitializer
{
    public static async Task Initialize(CookieContext context)
    {
        await context.Database.EnsureCreatedAsync();

        if (!context.FairyTails.Any())
        {
            await context.FairyTails.AddRangeAsync(GetPreconfiguredFairyTails());

            await context.SaveChangesAsync();
        }

        if (!context.UpgradesInfo.Any())
        {
            await context.UpgradesInfo.AddRangeAsync(GetPreconfiguredUpgradeInfo());

            await context.SaveChangesAsync();
        }
    }

    private static IEnumerable<UpgradeInfo> GetPreconfiguredUpgradeInfo()
    {
        var list = new List<UpgradeInfo>()
            {
                new UpgradeInfo
                {
                    Name = "Click",
                    BaseValue = "1",
                    BasePrice = "100",
                    Image = "images/Upgrades/Clicker.png",
                    LvlImage = "images/LvlUps/Clicker.png"
                },
                new UpgradeInfo
                {
                    Name = "Hand Mate",
                    BaseValue = "0.1",
                    BasePrice = "15",
                    Image = "images/Upgrades/HandMate.png",
                    LvlImage = "images/LvlUps/HandMate.png"
                },
                new UpgradeInfo
                {
                    Name = "Rolling Pin",
                    BaseValue = "1",
                    BasePrice = "100",
                    Image = "images/Upgrades/RollingPin.png",
                    LvlImage = "images/LvlUps/RollingPin.png"
                },
                new UpgradeInfo
                {
                    Name = "Oven",
                    BaseValue = "8",
                    BasePrice = "1100",
                    Image = "images/Upgrades/Oven.png",
                    LvlImage = "images/LvlUps/Oven.png"
                },
                new UpgradeInfo
                {
                    Name = "Grand Daughter",
                    BaseValue = "47",
                    BasePrice = "12000",
                    Image = "images/Upgrades/GrandDaughter.png",
                    LvlImage = "images/LvlUps/GrandDaughter.png"
                },
                new UpgradeInfo
                {
                    Name = "Baker",
                    BaseValue = "260",
                    BasePrice = "130000",
                    Image = "images/Upgrades/Baker.png",
                    LvlImage = "images/LvlUps/Baker.png"
                },
                new UpgradeInfo
                {
                    Name = "Granny Boss",
                    BaseValue = "1400",
                    BasePrice = "1400000",
                    Image = "images/Upgrades/GrannyBoss.png",
                    LvlImage = "images/LvlUps/GrannyBoss.png"
                },
                new UpgradeInfo
                {
                    Name = "Buns Stall",
                    BaseValue = "7800",
                    BasePrice = "20000000",
                    Image = "images/Upgrades/BunsStall.png",
                    LvlImage = "images/LvlUps/BunsStall.png"
                },
                new UpgradeInfo
                {
                    Name = "Bakery",
                    BaseValue = "44000",
                    BasePrice = "330000000",
                    Image = "images/Upgrades/Bakery.png",
                    LvlImage = "images/LvlUps/Bakery.png"
                },
                new UpgradeInfo
                {
                    Name = "Granny's Restaurant",
                    BaseValue = "260000",
                    BasePrice = "5100000000",
                    Image = "images/Upgrades/GrannysRestaurant.png",
                    LvlImage = "images/LvlUps/GrannysRestaurant.png"
                },
                new UpgradeInfo
                {
                    Name = "Cookie Franchise",
                    BaseValue = "1600000",
                    BasePrice = "75000000000",
                    Image = "images/Upgrades/CookieFranchise.png",
                    LvlImage = "images/LvlUps/CookieFranchise.png"
                },
                new UpgradeInfo
                {
                    Name = "Factory",
                    BaseValue = "10000000",
                    BasePrice = "1000000000000",
                    Image = "images/Upgrades/Factory.png",
                    LvlImage = "images/LvlUps/Factory.png"
                },
                new UpgradeInfo
                {
                    Name = "Worldwide Shipping",
                    BaseValue = "65000000",
                    BasePrice = "14000000000000",
                    Image = "images/Upgrades/WorldwideShipping.png",
                    LvlImage = "images/LvlUps/WorldwideShipping.png"
                },
                new UpgradeInfo
                {
                    Name = "Space Devilery",
                    BaseValue = "430000000",
                    BasePrice = "170000000000000",
                    Image = "images/Upgrades/SpaceDevilery.png",
                    LvlImage = "images/LvlUps/SpaceDevilery.png"
                },
                new UpgradeInfo
                {
                    Name = "Time Machine",
                    BaseValue = "2900000000",
                    BasePrice = "2100000000000000",
                    Image = "images/Upgrades/TimeMachine.png",
                    LvlImage = "images/LvlUps/TimeMachine.png"
                },
                new UpgradeInfo
                {
                    Name = "!Gamer || Cheater!",
                    BaseValue = "21000000000",
                    BasePrice = "26000000000000000",
                    Image = "images/Upgrades/GamerCheater.png",
                    LvlImage = "images/LvlUps/GamerCheater.png"
                },
            };

        return list;
    }

    private static IEnumerable<FairyTail> GetPreconfiguredFairyTails()
    {
        var data = new List<FairyTail>()
            {
                new FairyTail()
                {
                    Image = "images/Profile/1.png",
                    Story = "My life was not the best, and I decided that it was my time to change it all...",
                    Trigger = 0,
                },
                new FairyTail()
                {
                    Image = "images/Profile/2.png",
                    Story = "And that's how I became a simple cook...",
                    Trigger = 100,
                },
                new FairyTail()
                {
                    Image = "images/Profile/3.png",
                    Story = "It was very hard for me, and I was sick of this life, until one moment...",
                    Trigger = 2000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/4.png",
                    Story = "I met her, my ray of sunshine in this gloomy life.",
                    Trigger = 20000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/5.png",
                    Story = "I continued to work in the bakery, but I realized that I had someone else to live for.",
                    Trigger = 200000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/6.png",
                    Story = "And unexpectedly, it turned out that her grandmother is the owner of this place.",
                    Trigger = 2500000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/7.png",
                    Story = "Business was going well and grandmother decided to leave the bakery to us, but why? We didn't understand...",
                    Trigger = 45000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/8.png",
                    Story = "We didn't lose our cool and made this place very successful and attractive to everyone who passes by.",
                    Trigger = 1000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/9.png",
                    Story = "Once grandmother came to visit us, and it turned out that she had opened a restaurant, and I became her head chef.",
                    Trigger = 12000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/10.png",
                    Story = "Then I realized that I had to move on. And I opened a franchise",
                    Trigger = 201000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/11.png",
                    Story = "There is no limit to progress, I need to build a factory",
                    Trigger = 3000000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/12.png",
                    Story = "Since I have factories, I realized that I could do business all over the world.",
                    Trigger = 40000000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/13.png",
                    Story = "Having done business all over the planet, you can go further, and I decided that it would be space.",
                    Trigger = 400000000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/14.png",
                    Story = "There's more. And I decided to build my empire in the past so that people would learn what cookies are from me.",
                    Trigger = 5100000000000000,
                },
                new FairyTail()
                {
                    Image = "images/Profile/15.png",
                    Story = "Well, we don't believe that you got here on your own, so we just congratulate you. And if you did it all on your own, go ahead and write here: vut1111111@gmail.com or allonsy053@gmail.com, and share your experience and how you like our game. Have you checked out our RXY and ALG currencies?",
                    Trigger = 77000000000000000,
                },
            };

        return data;
    }
}
