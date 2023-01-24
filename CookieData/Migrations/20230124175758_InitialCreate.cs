using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CookieData.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FairyTail",
                columns: table => new
                {
                    FairyTailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Image = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Story = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    Trigger = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FairyTail", x => x.FairyTailId);
                });

            migrationBuilder.CreateTable(
                name: "GameAccount",
                columns: table => new
                {
                    GameAccountId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Networth = table.Column<double>(type: "float", nullable: false),
                    Cookies = table.Column<double>(type: "float", nullable: false),
                    Clicks = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameAccount", x => x.GameAccountId);
                });

            migrationBuilder.CreateTable(
                name: "UpgradeInfo",
                columns: table => new
                {
                    UpgradeInfoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BaseValue = table.Column<double>(type: "float", nullable: false),
                    BasePrice = table.Column<long>(type: "bigint", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LvlImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpgradeInfo", x => x.UpgradeInfoId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Login = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    GameAccountId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_User_GameAccount_GameAccountId",
                        column: x => x.GameAccountId,
                        principalTable: "GameAccount",
                        principalColumn: "GameAccountId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClickUpgrade",
                columns: table => new
                {
                    ClickUpgradeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Level = table.Column<long>(type: "bigint", nullable: false),
                    GameAccountId = table.Column<int>(type: "int", nullable: false),
                    UpgradeInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClickUpgrade", x => x.ClickUpgradeId);
                    table.ForeignKey(
                        name: "FK_ClickUpgrade_GameAccount_GameAccountId",
                        column: x => x.GameAccountId,
                        principalTable: "GameAccount",
                        principalColumn: "GameAccountId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClickUpgrade_UpgradeInfo_UpgradeInfoId",
                        column: x => x.UpgradeInfoId,
                        principalTable: "UpgradeInfo",
                        principalColumn: "UpgradeInfoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Upgrade",
                columns: table => new
                {
                    UpgradeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Level = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<long>(type: "bigint", nullable: false),
                    GameAccountId = table.Column<int>(type: "int", nullable: false),
                    UpgradeInfoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Upgrade", x => x.UpgradeId);
                    table.ForeignKey(
                        name: "FK_Upgrade_GameAccount_GameAccountId",
                        column: x => x.GameAccountId,
                        principalTable: "GameAccount",
                        principalColumn: "GameAccountId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Upgrade_UpgradeInfo_UpgradeInfoId",
                        column: x => x.UpgradeInfoId,
                        principalTable: "UpgradeInfo",
                        principalColumn: "UpgradeInfoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "FairyTail",
                columns: new[] { "FairyTailId", "Image", "Story", "Trigger" },
                values: new object[,]
                {
                    { 1, "images/Profile/1.png", "My life was not the best, and I decided that it was my time to change it all...", 0.0 },
                    { 2, "images/Profile/2.png", "And that's how I became a simple cook...", 100.0 },
                    { 3, "images/Profile/3.png", "It was very hard for me, and I was sick of this life, until one moment...", 2000.0 },
                    { 4, "images/Profile/4.png", "I met her, my ray of sunshine in this gloomy life.", 20000.0 },
                    { 5, "images/Profile/5.png", "I continued to work in the bakery, but I realized that I had someone else to live for.", 200000.0 },
                    { 6, "images/Profile/6.png", "And unexpectedly, it turned out that her grandmother is the owner of this place.", 2500000.0 },
                    { 7, "images/Profile/7.png", "Business was going well and grandmother decided to leave the bakery to us, but why? We didn't understand...", 45000000.0 },
                    { 8, "images/Profile/8.png", "We didn't lose our cool and made this place very successful and attractive to everyone who passes by.", 1000000000.0 },
                    { 9, "images/Profile/9.png", "Once grandmother came to visit us, and it turned out that she had opened a restaurant, and I became her head chef.", 12000000000.0 },
                    { 10, "images/Profile/10.png", "Then I realized that I had to move on. And I opened a franchise", 201000000000.0 },
                    { 11, "images/Profile/11.png", "There is no limit to progress, I need to build a factory", 3000000000000.0 },
                    { 12, "images/Profile/12.png", "Since I have factories, I realized that I could do business all over the world.", 40000000000000.0 },
                    { 13, "images/Profile/13.png", "Having done business all over the planet, you can go further, and I decided that it would be space.", 400000000000000.0 },
                    { 14, "images/Profile/14.png", "There's more. And I decided to build my empire in the past so that people would learn what cookies are from me.", 5100000000000000.0 },
                    { 15, "images/Profile/15.png", "Well, we don't believe that you got here on your own, so we just congratulate you. And if you did it all on your own, go ahead and write here: vut1111111@gmail.com or allonsy053@gmail.com, and share your experience and how you like our game. Have you checked out our RXY and ALG currencies?", 77000000000000000.0 }
                });

            migrationBuilder.InsertData(
                table: "UpgradeInfo",
                columns: new[] { "UpgradeInfoId", "BasePrice", "BaseValue", "Image", "LvlImage", "Name" },
                values: new object[,]
                {
                    { 1, 100L, 1.0, "images/Upgrades/Clicker.png", "images/LvlUps/Clicker.png", "Click" },
                    { 2, 15L, 0.10000000000000001, "images/Upgrades/HandMate.png", "images/LvlUps/HandMate.png", "Hand Mate" },
                    { 3, 100L, 1.0, "images/Upgrades/RollingPin.png", "images/LvlUps/RollingPin.png", "Rolling Pin" },
                    { 4, 1100L, 8.0, "images/Upgrades/Oven.png", "images/LvlUps/Oven.png", "Oven" },
                    { 5, 12000L, 47.0, "images/Upgrades/GrandDaughter.png", "images/LvlUps/GrandDaughter.png", "Grand Daughter" },
                    { 6, 130000L, 260.0, "images/Upgrades/Baker.png", "images/LvlUps/Baker.png", "Baker" },
                    { 7, 1400000L, 1400.0, "images/Upgrades/GrannyBoss.png", "images/LvlUps/GrannyBoss.png", "Granny Boss" },
                    { 8, 20000000L, 7800.0, "images/Upgrades/BunsStall.png", "images/LvlUps/BunsStall.png", "Buns Stall" },
                    { 9, 330000000L, 44000.0, "images/Upgrades/Bakery.png", "images/LvlUps/Bakery.png", "Bakery" },
                    { 10, 5100000000L, 260000.0, "images/Upgrades/GrannysRestaurant.png", "images/LvlUps/GrannysRestaurant.png", "Granny's Restaurant" },
                    { 11, 75000000000L, 1600000.0, "images/Upgrades/CookieFranchise.png", "images/LvlUps/CookieFranchise.png", "Cookie Franchise" },
                    { 12, 1000000000000L, 10000000.0, "images/Upgrades/Factory.png", "images/LvlUps/Factory.png", "Factory" },
                    { 13, 14000000000000L, 65000000.0, "images/Upgrades/WorldwideShipping.png", "images/LvlUps/WorldwideShipping.png", "Worldwide Shipping" },
                    { 14, 170000000000000L, 430000000.0, "images/Upgrades/SpaceDevilery.png", "images/LvlUps/SpaceDevilery.png", "Space Devilery" },
                    { 15, 2100000000000000L, 2900000000.0, "images/Upgrades/TimeMachine.png", "images/LvlUps/TimeMachine.png", "Time Machine" },
                    { 16, 26000000000000000L, 21000000000.0, "images/Upgrades/GamerCheater.png", "images/LvlUps/GamerCheater.png", "!Gamer || Cheater!" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClickUpgrade_GameAccountId",
                table: "ClickUpgrade",
                column: "GameAccountId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClickUpgrade_UpgradeInfoId",
                table: "ClickUpgrade",
                column: "UpgradeInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_Upgrade_GameAccountId",
                table: "Upgrade",
                column: "GameAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Upgrade_UpgradeInfoId",
                table: "Upgrade",
                column: "UpgradeInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_User_GameAccountId",
                table: "User",
                column: "GameAccountId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClickUpgrade");

            migrationBuilder.DropTable(
                name: "FairyTail");

            migrationBuilder.DropTable(
                name: "Upgrade");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "UpgradeInfo");

            migrationBuilder.DropTable(
                name: "GameAccount");
        }
    }
}
