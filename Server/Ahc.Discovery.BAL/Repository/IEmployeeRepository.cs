using Ahc.Discovery.BAL.Dto;
using Ahc.Discovery.BAL.Models;

namespace Ahc.Discovery.BAL.Repository
{
    public interface IEmployeeRepository: IRepository<Employee>
    {
        PagedEmployee GetPagedData(int pageNumber, int pageSize);
    }
}
