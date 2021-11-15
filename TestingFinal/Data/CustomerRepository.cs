using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestingFinal.Controllers.Entities;

namespace TestingFinal.Data
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DataContext _context;

        public CustomerRepository(DataContext context)
        {
            _context = context;
        }

        
        public async Task<AppTicket> GetCustomerTickets(string customerid)
        {
            return await _context.TicketDetails.FirstOrDefaultAsync(c => c.Customerid == customerid);
        }
    }
}
