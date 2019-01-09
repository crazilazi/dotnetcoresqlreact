using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Ahc.Discovery.BAL.Paging
{
    public class Paging<T> : List<T>, IPaging
    {
        public int TotalNoRows { get; private set; }
        public int NoOfPages { get; private set; }
        public int PageNo { get; private set; }
        public int PageSize { get; private set; }

        public Paging(IQueryable<T> source, int page, int pageSize)
        {
            TotalNoRows = source.Count();
            NoOfPages = GetPageCount(pageSize, TotalNoRows);
            PageNo = page < 1 ? 0 : page - 1;
            PageSize = pageSize;

            AddRange(source.Skip(PageNo * PageSize).Take(PageSize).ToList());
        }

        private int GetPageCount(int pageSize, int totalCount)
        {
            if (pageSize == 0)
                return 0;

            var remainder = totalCount % pageSize;
            return (totalCount / pageSize) + (remainder == 0 ? 0 : 1);
        }
    }
}
