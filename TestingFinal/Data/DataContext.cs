using TestingFinal.Controllers.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppCustomerlogin> CustomerLoginDetails { get; set; }
        public DbSet<AppEmployeelogin> EmployeeLoginDetails { get; set; }
        public DbSet<AppTicket> TicketDetails { get; set; }
        public DbSet<AppTicketAssignment> TicketAssignmentDetails { get; set; }

    }
}
