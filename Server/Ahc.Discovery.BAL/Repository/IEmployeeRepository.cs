using Ahc.Discovery.BAL.Models;
using System.Collections.Generic;

namespace Ahc.Discovery.BAL.Repository
{
    public interface IEmployeeRepository: IRepository<Employee>
    {
        IEnumerable<Employee> GetPagedData(int pageNumber, int pageSize);
    }
}
