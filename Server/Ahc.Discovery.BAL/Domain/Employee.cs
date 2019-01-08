using Ahc.Discovery.BAL.Base;
using System;

namespace Ahc.Discovery.BAL.Models
{
    public class Employee: BaseEntity<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string FullName { get; set; }
        public string Gender { get; set; }
    }
}
