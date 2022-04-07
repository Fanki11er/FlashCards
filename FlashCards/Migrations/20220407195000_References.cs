using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlashCards.Migrations
{
    public partial class References : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "FlashCard",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId1",
                table: "FlashCard",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserSettingsId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "UserSettings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DailyFlashCards = table.Column<int>(type: "int", nullable: false),
                    MaximumBreak = table.Column<TimeSpan>(type: "time", nullable: false),
                    PercentNew = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSettings", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlashCard_ApplicationUserId1",
                table: "FlashCard",
                column: "ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserSettingsId",
                table: "AspNetUsers",
                column: "UserSettingsId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserSettings_UserSettingsId",
                table: "AspNetUsers",
                column: "UserSettingsId",
                principalTable: "UserSettings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FlashCard_AspNetUsers_ApplicationUserId1",
                table: "FlashCard",
                column: "ApplicationUserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserSettings_UserSettingsId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_FlashCard_AspNetUsers_ApplicationUserId1",
                table: "FlashCard");

            migrationBuilder.DropTable(
                name: "UserSettings");

            migrationBuilder.DropIndex(
                name: "IX_FlashCard_ApplicationUserId1",
                table: "FlashCard");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserSettingsId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "FlashCard");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId1",
                table: "FlashCard");

            migrationBuilder.DropColumn(
                name: "UserSettingsId",
                table: "AspNetUsers");
        }
    }
}
