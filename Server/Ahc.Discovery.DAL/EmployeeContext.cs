using Ahc.Discovery.BAL.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace Ahc.Discovery.DAL
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var employees = new List<Employee>();
            var s = Environment.CurrentDirectory;
      
            string mockDataPath = @"C:\Working\training\dotnetcoresqlreact\server\Ahc.Discovery.DAL\MOCK_DATA.json";
            using (StreamReader r = new StreamReader(mockDataPath))
            {
                string json = r.ReadToEnd();
                employees = JsonConvert.DeserializeObject<List<Employee>>(json);
            }
            modelBuilder.Entity<Employee>().HasData(employees.ToArray());
        }
    }
}
