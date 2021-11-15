using TestingFinal.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers.Entities
{
    public class TicketAssignmentController:BaseApiController
    {
        private readonly DataContext _context;

        public TicketAssignmentController(DataContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //public async Task<ActionResult<List<AppTicketAssignment>>> GetTicketAssignment()
        //{
        //    return await _context.TicketAssignmentDetails.ToListAsync();
        //}


        //[HttpGet("{username}")]
        //public async Task<ActionResult<List<AppTicket>>> GetCustomersTicketstestingforadmin(string username)
        //{

        //    var id = await _context.TicketAssignmentDetails.Where(t => t.Username == username).Select(t => t.Ticketid).ToListAsync();
        //    for(int i=0; i<id.Count;i++)
        //    {
        //        var tick = await _context.TicketDetails.Where(s => s.id.ToString() == id.ToString()).ToListAsync();
        //    }
        //    return await tick;
        //}

        [HttpGet]
        public async Task<ActionResult<List<AppTicket>>> GetTicketsforadmin()
        {
            return await _context.TicketDetails.Where(s => s.Status == "Open").ToListAsync();
        }


        [HttpGet("{username}")]
        public async Task<ActionResult<List<AppTicket>>> GetCustomersTickets(string username)
        {
            var id = await _context.TicketAssignmentDetails.Where(t => t.Username == username).Select(t => t.Ticketid).FirstOrDefaultAsync();
            return await _context.TicketDetails.Where(s => s.id.ToString() == id.ToString()).ToListAsync();
        }


    }
}
