using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerTicketing.DTOs
{
    public class CustomerloginDto
    {
        [Required]
        public string CustomerId { get; set; }

        [Required]
        public string Password { get; set; }

    }
}
