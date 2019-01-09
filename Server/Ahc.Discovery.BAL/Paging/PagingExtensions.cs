using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Ahc.Discovery.BAL.Paging
{
    public static class PagingExtensions
    {
        public static Paging<T> ToPagingData<T>(this IQueryable<T> source, int page, int pageSize)
        {
            return new Paging<T>(source, page, pageSize);
        }
    }
}
