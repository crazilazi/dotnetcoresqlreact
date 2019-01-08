using Ahc.Discovery.BAL.Models;
using System;
using System.Collections.Generic;

namespace Ahc.Discovery.BAL.Repository
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();
        T Get(Guid id);
        void Add(T entity);
        void Update(T employee, T entity);
        void Delete(T employee);
    }
 
}
