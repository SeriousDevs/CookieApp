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
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false)
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
                table: "UpgradeInfo",
                columns: new[] { "UpgradeInfoId", "BasePrice", "BaseValue", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 100L, 1.0, "images/Upgrades/Clicker", "Click" },
                    { 2, 15L, 0.10000000000000001, "images/Upgrades/HandMate", "Hand Mate" },
                    { 3, 100L, 1.0, "images/Upgrades/RollingPin", "Rolling Pin" },
                    { 4, 1100L, 8.0, "images/Upgrades/Oven", "Oven" },
                    { 5, 12000L, 47.0, "images/Upgrades/GrandDaughter", "Grand Daughter" },
                    { 6, 130000L, 260.0, "images/Upgrades/Baker", "Baker" },
                    { 7, 1400000L, 1400.0, "images/Upgrades/GrannyBoss", "Granny Boss" },
                    { 8, 20000000L, 7800.0, "images/Upgrades/BunsStall", "Buns Stall" },
                    { 9, 330000000L, 44000.0, "images/Upgrades/Bakery", "Bakery" },
                    { 10, 5100000000L, 260000.0, "images/Upgrades/GrannysRestaurant", "Granny's Restaurant" },
                    { 11, 75000000000L, 1600000.0, "images/Upgrades/CookieFranchise", "Cookie Franchise" }
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
