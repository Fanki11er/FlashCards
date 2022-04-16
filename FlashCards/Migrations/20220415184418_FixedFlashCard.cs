using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlashCards.Migrations
{
    public partial class FixedFlashCard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsNew",
                table: "FlashCards");

            migrationBuilder.DropColumn(
                name: "Learned",
                table: "FlashCards");

            migrationBuilder.DropColumn(
                name: "ToRepeat",
                table: "FlashCards");

            migrationBuilder.RenameColumn(
                name: "PolishText",
                table: "FlashCards",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "EnglishText",
                table: "FlashCards",
                newName: "FrontText");

            migrationBuilder.AddColumn<string>(
                name: "BackText",
                table: "FlashCards",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BackText",
                table: "FlashCards");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "FlashCards",
                newName: "PolishText");

            migrationBuilder.RenameColumn(
                name: "FrontText",
                table: "FlashCards",
                newName: "EnglishText");

            migrationBuilder.AddColumn<bool>(
                name: "IsNew",
                table: "FlashCards",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Learned",
                table: "FlashCards",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ToRepeat",
                table: "FlashCards",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
