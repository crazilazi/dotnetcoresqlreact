using System;
using System.Collections.Generic;
using System.Text;

namespace Ahc.Discovery.BAL.Paging
{
    public interface IPaging
    {
        int TotalNoRows { get; }
        int NoOfPages { get; }
        int PageNo { get; }
        int PageSize { get; }
    }
}
