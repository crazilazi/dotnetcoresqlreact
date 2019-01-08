using System;
using System.Collections.Generic;
using System.Text;

namespace Ahc.Discovery.BAL.Paging
{
    public interface IPagedList
    {
        int TotalCount { get; }
        int PageCount { get; }
        int Page { get; }
        int PageSize { get; }
    }
}
