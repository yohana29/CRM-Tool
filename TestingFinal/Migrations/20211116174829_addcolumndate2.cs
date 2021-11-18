using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace TestingFinal.Migrations
{
    public partial class addcolumndate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CreatedYear",
                table: "TicketDetails",
                type: "int",
                nullable: true,
                //defaultValue:DateTime.Today,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CreatedYear",
                table: "TicketDetails",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
