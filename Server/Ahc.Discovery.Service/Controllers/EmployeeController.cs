using System;
using System.Collections.Generic;
using Ahc.Discovery.BAL.Dto;
using Ahc.Discovery.BAL.Models;
using Ahc.Discovery.BAL.Repository;
using AutoMapper;
using log4net;
using Microsoft.AspNetCore.Mvc;
using Ahc.Discovery.Service.Filters;

namespace Ahc.Discovery.Service.Controllers
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IRepository<Employee> _employeeRepository;
        private readonly IMapper _mapper;
        public EmployeeController(IRepository<Employee> employeeRepository, IMapper mapper)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
        }

        // GET: api/Employee/GetAllEmployee
        [ApiAuthFilter]
        [HttpGet("GetAllEmployee")]
       
        public IActionResult Get()
        {
            IEnumerable<Employee> employees = _employeeRepository.GetAll();
            return Ok(_mapper.Map< IEnumerable<AppEmployee>>(employees));
        }

        // GET: api/Employee/GetOneEmployee/5
        [HttpGet("GetOneEmployee/{id}")]
        public IActionResult Get(Guid id)
        {
            Employee employee = _employeeRepository.Get(id);

            if (employee == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            return Ok(_mapper.Map<AppEmployee>(employee));
        }

        // POST: api/Employee/CreateEmployee
        [HttpPost("CreateEmployee")]
        public IActionResult Post([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee is null.");
            }

            _employeeRepository.Add(employee);
            return CreatedAtRoute(
                  "GetOneEmployee",
                  new { Id = employee.Id },
                  employee);
        }

        // PUT: api/Employee/UpdateEmployee/5
        [HttpPut("UpdateEmployee/{id}")]
        public IActionResult Put(Guid id, [FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee is null.");
            }

            Employee employeeToUpdate = _employeeRepository.Get(id);
            if (employeeToUpdate == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            _employeeRepository.Update(employeeToUpdate, employee);
            return NoContent();
        }

        // DELETE: api/Employee/DeleteEmployee/5
        [HttpDelete("DeleteEmployee/{id}")]
        public IActionResult Delete(Guid id)
        {
            Employee employee = _employeeRepository.Get(id);
            if (employee == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            _employeeRepository.Delete(employee);
            return NoContent();
        }
    }
}