using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers.Entities
{
    public class AppEmployeelogin
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}
