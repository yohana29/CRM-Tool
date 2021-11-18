using TestingFinal.Controllers.Entities;
using TestingFinal.Data;
using CustomerTicketing.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TestingFinal.Controllers
{
    public class EmployeeUserAccountsController : BaseApiController
    {
        private readonly DataContext _context;
        public EmployeeUserAccountsController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("CustomerRegister")]
        public async Task<ActionResult<AppCustomerlogin>> Register(CustomerRegisterDto customerregisterDto)
        {
            if (await CustomerExists(customerregisterDto.CustomerId)) return BadRequest("Username is Taken");
            using var hmac = new HMACSHA512();
            var customer = new AppCustomerlogin
            {
                CustomerId = customerregisterDto.CustomerId.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(customerregisterDto.Password)),
                PasswordSalt = hmac.Key,
                AccountNumber = customerregisterDto.AccountNumber,
                RoutingNumber = customerregisterDto.RoutingNumber,
            };
            _context.CustomerLoginDetails.Add(customer);
            await _context.SaveChangesAsync();



            return customer;
        }

        private async Task<bool> CustomerExists(string customerid)
        {
            return await _context.CustomerLoginDetails.AnyAsync(x => x.CustomerId == customerid.ToLower());
        }


        [HttpPost("EmployeeRegister")]
        public async Task<ActionResult<AppEmployeelogin>> EmployeeRegister(EmployeeloginDto employeelogin)
        {
            if (await EmployeeExists(employeelogin.UserName)) return BadRequest("Username is already available");
            using var hmac = new HMACSHA512();
            var employee = new AppEmployeelogin
            {
                Username = employeelogin.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(employeelogin.Password)),
                PasswordSalt = hmac.Key,
            };
            _context.EmployeeLoginDetails.Add(employee);
            await _context.SaveChangesAsync();



            return employee;
        }

        private async Task<bool> EmployeeExists(string username)
        {
            return await _context.EmployeeLoginDetails.AnyAsync(x => x.Username == username.ToLower());
        }




        [HttpPost("Customerlogin")]
        public async Task<ActionResult<AppCustomerlogin>> CustomerLogin(CustomerloginDto customerloginDto)
        {
            var customer = await _context.CustomerLoginDetails.SingleOrDefaultAsync(x => x.CustomerId == customerloginDto.CustomerId);

            if (customer == null) return Unauthorized("Invalid Username");

            using var hmac = new HMACSHA512(customer.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(customerloginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != customer.PasswordHash[i]) return Unauthorized("Invalid Password");
            }

            return customer;
        }

        [HttpPost("Employeelogin")]
        public async Task<ActionResult<AppEmployeelogin>> EmployeeLogin(EmployeeloginDto employeeloginDto)
        {
            var employee = await _context.EmployeeLoginDetails.SingleOrDefaultAsync(x => x.Username == employeeloginDto.UserName);

            if (employee == null) return Unauthorized("Invalid Username");

            using var hmac = new HMACSHA512(employee.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(employeeloginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != employee.PasswordHash[i]) return Unauthorized("Invalid Password");
            }

            return employee;
        }

        [HttpPost("TicketRegister")]
        public async Task<ActionResult<AppTicket>> TicketRegister(TicketDto ticketDto)
        {
            var ticket = new AppTicket
            {
                Customerid = ticketDto.Customerid.ToLower(),
                Category = ticketDto.Category,
                SubCategory = ticketDto.SubCategory,
                Comments = ticketDto.Comments,
                ContactNumber = ticketDto.ContactNumber,
                Status = ticketDto.Status,
                BranchLocation = ticketDto.BranchLocation
            };
            _context.TicketDetails.Add(ticket);
            await _context.SaveChangesAsync();



            return ticket;
        }


        //[HttpPut("TicketStatusAck")]
        //public async Task<ActionResult<AppTicket>> TicketStatusAck(int id, TicketDto ticket)
        //{
        //    var result = await _context.TicketDetails.SingleOrDefaultAsync(b => b.id == id);
        //    result.Status = "Acknowledged";
        //    _context.TicketDetails.Update(result);
        //    await _context.SaveChangesAsync();
        //    return result;
        //}

        [HttpPut("TicketStatusAck")]
        public async Task<ActionResult<AppTicket>> TicketStatusAck(int id)
        {
            var result = await _context.TicketDetails.FindAsync(id);
            if(result!=null)
            {
                result.Customerid = result.Customerid;
                result.Category = result.Category;
                result.SubCategory = result.SubCategory;
                result.Comments = result.Comments;
                result.Status = "Acknowledged";
                await _context.SaveChangesAsync();
                return result;

            }
            return null;
        }

        [HttpPut("TicketStatusClose")]
        public async Task<ActionResult<AppTicket>> TicketStatusClose(int id)
        {
            var result = await _context.TicketDetails.FindAsync(id);
            if (result != null)
            {
                result.Customerid = result.Customerid;
                result.Category = result.Category;
                result.SubCategory = result.SubCategory;
                result.Comments = result.Comments;
                result.Status = "Closed";
                await _context.SaveChangesAsync();
                return result;

            }
            return null;
        }


    }

}
