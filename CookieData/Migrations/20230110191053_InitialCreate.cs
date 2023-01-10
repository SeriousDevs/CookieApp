using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

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
                    Cookies = table.Column<int>(type: "int", nullable: false),
                    Clicks = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameAccount", x => x.GameAccountId);
                });

            migrationBuilder.CreateTable(
                name: "Upgrade",
                columns: table => new
                {
                    UpgradeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    BaseTick = table.Column<int>(type: "int", nullable: false),
                    Level = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    GameAccountId = table.Column<int>(type: "int", nullable: false)
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
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Login = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
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

            migrationBuilder.CreateIndex(
                name: "IX_Upgrade_GameAccountId",
                table: "Upgrade",
                column: "GameAccountId");

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
                name: "Upgrade");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "GameAccount");
        }
    }
}
