using Microsoft.EntityFrameworkCore.Migrations;

namespace TestingFinal.Migrations
{
    public partial class addcolumndate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedMonth",
                table: "TicketDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedYear",
                table: "TicketDetails",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedMonth",
                table: "TicketDetails");

            migrationBuilder.DropColumn(
                name: "CreatedYear",
                table: "TicketDetails");
        }
    }
}
