using TestingFinal.Controllers.Entities;
using TestingFinal.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers
{
    public class TicketController:BaseApiController
    {
        private readonly DataContext _context;

        public TicketController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppTicket>>> GetTicketAssignment()
        {
            return await _context.TicketDetails.ToListAsync();
        }


        [HttpGet("{customerid}")]
        public async Task<ActionResult<List<AppTicket>>> GetCustomersTicketsforUser(string customerid)
        {
            return await _context.TicketDetails.Where(s => (s.Status == "Open" || s.Status == "Acknowledged") && (s.Customerid == customerid)).ToListAsync();
        }



    }
}
