using TestingFinal.Data;
using TestingFinal.Controllers.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestingFinal.Controllers
{
    public class CustomerController:BaseApiController
    {
        private readonly DataContext _context;
        public CustomerController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppCustomerlogin>>> GetCustomers()
        {
            return await _context.CustomerLoginDetails.ToListAsync();
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<AppCustomerlogin>> GetCustomers(int id)
        //{
        //    return await _context.CustomerLoginDetails.FindAsync(id);
        //}

        [HttpGet("{ticketid}")]
        public async Task<ActionResult<List<AppTicket>>> GetTickets(int ticketid)
        {
            return await _context.TicketDetails.Where(s => s.id == ticketid).ToListAsync();
        }


        //[HttpGet("{customerid}")]
        //public async Task<ActionResult<AppTicket>> GetCustomersTickets(string customerid)
        //{
        //    return await _context.TicketDetails.FindAsync(customerid);
        //}


    }
}
