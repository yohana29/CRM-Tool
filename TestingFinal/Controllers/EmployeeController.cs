using TestingFinal.Data;
using TestingFinal.Controllers.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestingFinal.Controllers
{
    public class EmployeeController:BaseApiController
    {
        private readonly DataContext _context;
        public EmployeeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppEmployeelogin>>> GetEmployee()
        {
            return await _context.EmployeeLoginDetails.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppEmployeelogin>> GetEmployee(int id)
        {
            return await _context.EmployeeLoginDetails.FindAsync(id);
        }


    }
}
