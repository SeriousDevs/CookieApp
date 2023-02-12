using CookieData.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CookieData.Context.Configuration
{
    public class FairyTailConfig : IEntityTypeConfiguration<FairyTail>
    {
        public void Configure(EntityTypeBuilder<FairyTail> builder)
        {
            builder.ToTable(nameof(FairyTail)).HasKey(e => e.Id);
            builder.Property(e => e.Id).HasColumnName("FairyTailId").ValueGeneratedOnAdd();
            builder.Property(e => e.Image).HasMaxLength(100).IsRequired();
            builder.Property(e => e.Story).HasMaxLength(1000).IsRequired();
            builder.Property(e => e.Trigger).IsRequired();

            builder.HasData(GetData());
        }

        private static IEnumerable<FairyTail> GetData()
        {
            var data = new List<FairyTail>()
            {
                new FairyTail()
                {
                    Id = 1,
                    Image = "images/Profile/1.png",
                    Story = "My life was not the best, and I decided that it was my time to change it all...",
                    Trigger = 0,
                },
                new FairyTail()
                {
                    Id = 2,
                    Image = "images/Profile/2.png",
                    Story = "And that's how I became a simple cook...",
                    Trigger = 100,
                },
                new FairyTail()
                {
                    Id = 3,
                    Image = "images/Profile/3.png",
                    Story = "It was very hard for me, and I was sick of this life, until one moment...",
                    Trigger = 2000,
                },
                new FairyTail()
                {
                    Id = 4,
                    Image = "images/Profile/4.png",
                    Story = "I met her, my ray of sunshine in this gloomy life.",
                    Trigger = 20_000,
                },
                new FairyTail()
                {
                    Id = 5,
                    Image = "images/Profile/5.png",
                    Story = "I continued to work in the bakery, but I realized that I had someone else to live for.",
                    Trigger = 200_000,
                },
                new FairyTail()
                {
                    Id = 6,
                    Image = "images/Profile/6.png",
                    Story = "And unexpectedly, it turned out that her grandmother is the owner of this place.",
                    Trigger = 2_500_000,
                },
                new FairyTail()
                {
                    Id = 7,
                    Image = "images/Profile/7.png",
                    Story = "Business was going well and grandmother decided to leave the bakery to us, but why? We didn't understand...",
                    Trigger = 45_000_000,
                },
                new FairyTail()
                {
                    Id = 8,
                    Image = "images/Profile/8.png",
                    Story = "We didn't lose our cool and made this place very successful and attractive to everyone who passes by.",
                    Trigger = 1_000_000_000,
                },
                new FairyTail()
                {
                    Id = 9,
                    Image = "images/Profile/9.png",
                    Story = "Once grandmother came to visit us, and it turned out that she had opened a restaurant, and I became her head chef.",
                    Trigger = 12_000_000_000,
                },
                new FairyTail()
                {
                    Id = 10,
                    Image = "images/Profile/10.png",
                    Story = "Then I realized that I had to move on. And I opened a franchise",
                    Trigger = 201_000_000_000,
                },
                new FairyTail()
                {
                    Id = 11,
                    Image = "images/Profile/11.png",
                    Story = "There is no limit to progress, I need to build a factory",
                    Trigger = 3_000_000_000_000,
                },
                new FairyTail()
                {
                    Id = 12,
                    Image = "images/Profile/12.png",
                    Story = "Since I have factories, I realized that I could do business all over the world.",
                    Trigger = 40_000_000_000_000,
                },
                new FairyTail()
                {
                    Id = 13,
                    Image = "images/Profile/13.png",
                    Story = "Having done business all over the planet, you can go further, and I decided that it would be space.",
                    Trigger = 400_000_000_000_000,
                },
                new FairyTail()
                {
                    Id = 14,
                    Image = "images/Profile/14.png",
                    Story = "There's more. And I decided to build my empire in the past so that people would learn what cookies are from me.",
                    Trigger = 5_100_000_000_000_000,
                },
                new FairyTail()
                {
                    Id = 15,
                    Image = "images/Profile/15.png",
                    Story = "Well, we don't believe that you got here on your own, so we just congratulate you. And if you did it all on your own, go ahead and write here: vut1111111@gmail.com or allonsy053@gmail.com, and share your experience and how you like our game. Have you checked out our RXY and ALG currencies?",
                    Trigger = 77_000_000_000_000_000,
                },
            };

            return data;
        }
    }
}
