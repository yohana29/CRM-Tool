using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestingFinal.Controllers.Entities
{
    public class AppTicket
    {
        public int id { get; set; }
        public string Customerid { get; set; }
        public string Category{ get; set; }
        public string SubCategory{ get; set; }
        public string Comments { get; set; }
        public double ContactNumber { get; set; }

        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string Status { get; set; }
    }
}
