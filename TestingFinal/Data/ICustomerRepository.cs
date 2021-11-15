using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestingFinal.Controllers.Entities;

namespace TestingFinal.Data
{
    interface ICustomerRepository
    {
        Task<AppTicket> GetCustomerTickets(string customerid); 
    }
}
