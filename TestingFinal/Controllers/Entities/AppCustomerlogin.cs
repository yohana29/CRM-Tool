using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers.Entities
{
    public class AppCustomerlogin
    {
        public int Id { get; set; }
        public string CustomerId { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public double AccountNumber { get; set; }
        public double RoutingNumber { get; set; }
    }
}
