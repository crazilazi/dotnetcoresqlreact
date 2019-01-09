using Ahc.Discovery.BAL.Models;
using Ahc.Discovery.BAL.Paging;
using System;
using System.Collections.Generic;
using System.Text;

namespace Ahc.Discovery.BAL.Dto
{
    public class PagedEmployee : IPaging
    {
        public IEnumerable<Employee> AppEmployee { get; set; }
        public int TotalNoRows { get;  set; }
        public int NoOfPages { get;  set; }
        public int PageNo { get;  set; }
        public int PageSize { get;  set; }
    }
}

