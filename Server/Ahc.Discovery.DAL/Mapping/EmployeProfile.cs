using Ahc.Discovery.BAL.Dto;
using Ahc.Discovery.BAL.Models;
using Ahc.Discovery.BAL.Paging;
using AutoMapper;

namespace Ahc.Discovery.DAL.Mapping
{
    class EmployeProfile : Profile
    {
        public EmployeProfile()
        {
            CreateMap<Employee, AppEmployee>().ReverseMap();
            CreateMap < Paging<Employee>, PagedEmployee>().ReverseMap();
        }
    }
}
