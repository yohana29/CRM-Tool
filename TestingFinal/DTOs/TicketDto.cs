using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerTicketing.DTOs
{
    public class TicketDto
    {
        [Required]
        public string Customerid { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string SubCategory { get; set; }
        [Required]
        public string Comments { get; set; }
        [Required]
        public double ContactNumber { get; set; }
        [Required]
        public string Status { get; set; }
        public string BranchLocation { get; set; }

    }
}
