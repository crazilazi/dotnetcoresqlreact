using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Ahc.Discovery.BAL.Paging
{
    public static class PagedListExtensions
    {
        public static PagedList<T> ToPagedList<T>(this IQueryable<T> source, int page, int pageSize)
        {
            return new PagedList<T>(source, page, pageSize);
        }
    }
}
