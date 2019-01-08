using Ahc.Discovery.BAL.Models;
using Ahc.Discovery.BAL.Repository;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ahc.Discovery.DAL.Repository
{
    public class EmployeeRepository : IRepository<Employee>
    {
        readonly EmployeeContext _employeeContext;
        readonly ILog _logger;
        public EmployeeRepository(EmployeeContext context, ILog logger)
        {
            _employeeContext = context;
            _logger = logger;
        }

        public IEnumerable<Employee> GetAll()
        {
            _logger.Info("Getting all employee");
            return _employeeContext.Employees.ToList();
        }

        public Employee Get(Guid id)
        {
            _logger.Info($"Getting details for employee {id}");
            return _employeeContext.Employees
                  .FirstOrDefault(e => e.Id == id);
        }

        public void Add(Employee entity)
        {
            _logger.Info($"Adding employee {entity.FullName}");
            _employeeContext.Employees.Add(entity);
            _employeeContext.SaveChanges();
        }

        public void Update(Employee employee, Employee entity)
        {
            _logger.Info($"Updating employee {entity.FullName}");
            employee.FirstName = entity.FirstName;
            employee.LastName = entity.LastName;
            employee.Email = entity.Email;
            employee.DateOfBirth = entity.DateOfBirth;
            employee.PhoneNumber = entity.PhoneNumber;
            employee.FullName = entity.FullName;
            employee.Gender = entity.Gender;
            employee.Address = entity.Address;

            _employeeContext.SaveChanges();
        }

        public void Delete(Employee employee)
        {
            _logger.Info($"Deleting employee {employee.Id}");
            _employeeContext.Employees.Remove(employee);
            _employeeContext.SaveChanges();
        }
    }
}
