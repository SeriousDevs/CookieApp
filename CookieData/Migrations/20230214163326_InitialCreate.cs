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
            migrationBuilder.CreateSequence(
                name: "click_upgrade_hilo",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "fairy_tail_hilo",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "game_account_hilo",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "upgrade_hilo",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "upgrade_info_hilo",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "user_hilo",
                incrementBy: 10);

            migrationBuilder.CreateTable(
                name: "FairyTail",
                columns: table => new
                {
                    FairyTailId = table.Column<int>(type: "integer", nullable: false),
                    Image = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Story = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: false),
                    Trigger = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FairyTail", x => x.FairyTailId);
                });

            migrationBuilder.CreateTable(
                name: "GameAccount",
                columns: table => new
                {
                    GameAccountId = table.Column<int>(type: "integer", nullable: false),
                    Networth = table.Column<string>(type: "text", nullable: false),
                    Cookies = table.Column<string>(type: "text", nullable: false),
                    Clicks = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameAccount", x => x.GameAccountId);
                });

            migrationBuilder.CreateTable(
                name: "UpgradeInfo",
                columns: table => new
                {
                    UpgradeInfoId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    BaseValue = table.Column<string>(type: "text", nullable: false),
                    BasePrice = table.Column<string>(type: "text", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    LvlImage = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpgradeInfo", x => x.UpgradeInfoId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    Login = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    Email = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    GameAccountId = table.Column<int>(type: "integer", nullable: false)
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
                    ClickUpgradeId = table.Column<int>(type: "integer", nullable: false),
                    CurrentValue = table.Column<string>(type: "text", nullable: false),
                    Level = table.Column<long>(type: "bigint", nullable: false),
                    GameAccountId = table.Column<int>(type: "integer", nullable: false),
                    UpgradeInfoId = table.Column<int>(type: "integer", nullable: false)
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
                    UpgradeId = table.Column<int>(type: "integer", nullable: false),
                    CurrentValue = table.Column<string>(type: "text", nullable: false),
                    Level = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<long>(type: "bigint", nullable: false),
                    GameAccountId = table.Column<int>(type: "integer", nullable: false),
                    UpgradeInfoId = table.Column<int>(type: "integer", nullable: false)
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

            migrationBuilder.DropSequence(
                name: "click_upgrade_hilo");

            migrationBuilder.DropSequence(
                name: "fairy_tail_hilo");

            migrationBuilder.DropSequence(
                name: "game_account_hilo");

            migrationBuilder.DropSequence(
                name: "upgrade_hilo");

            migrationBuilder.DropSequence(
                name: "upgrade_info_hilo");

            migrationBuilder.DropSequence(
                name: "user_hilo");
        }
    }
}
