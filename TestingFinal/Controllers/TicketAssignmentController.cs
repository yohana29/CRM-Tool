using TestingFinal.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers.Entities
{
    public class TicketAssignmentController : BaseApiController
    {
        private readonly DataContext _context;
        public List<AppTicket> tick{get;set;}

        public TicketAssignmentController(DataContext context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<ActionResult<List<AppTicket>>> GetTicketsforadmin()
        {
            return await _context.TicketDetails.Where(s => s.Status == "Open").ToListAsync();
        }


        //[HttpGet("{username}")] //original
        //public async Task<ActionResult<List<AppTicket>>> GetCustomersTickets(string username)
        //{
        //    var id = await _context.TicketAssignmentDetails.Where(t => t.Username == username).Select(t => t.Ticketid).FirstOrDefaultAsync();
        //    return await _context.TicketDetails.Where(s => (s.Status == "Open" || s.Status == "Acknowledged") && (s.id.ToString() == id.ToString())).ToListAsync();
        //}

         
        [HttpGet("{username}")] 
        public async Task<ActionResult<List<AppTicketAssignment>>> GetCustomersTickets(string username)
        {
            return await _context.TicketAssignmentDetails.Where(t => t.Username == username).ToListAsync();

        }
        [HttpDelete]
        public async Task<ActionResult<int>> DeleteAssignment(int? ticketid)
        {
            var assignment = await _context.TicketAssignmentDetails.FirstOrDefaultAsync(m => m.Ticketid == ticketid);
            _context.TicketAssignmentDetails.Remove(assignment);
            await _context.SaveChangesAsync();
            return ticketid;
        }


    }
}
