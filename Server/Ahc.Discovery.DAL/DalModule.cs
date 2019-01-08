using System;
using System.Collections.Generic;
using System.Text;
using Ahc.Discovery.BAL.Models;
using Ahc.Discovery.BAL.Repository;
using Ahc.Discovery.DAL.Repository;
using Autofac;

namespace Ahc.Discovery.DAL
{
    public class DalModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<EmployeeRepository>().As<IRepository<Employee>>().InstancePerLifetimeScope();
           
        }
    }
}
