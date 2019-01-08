using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ahc.Discovery.BAL.Base
{
    public class BaseEntity<IdType>
        where IdType : struct
    {
        /// <summary>
        /// Gets uniue identifier of this entity.
        /// </summary>
        ///  [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public IdType Id { get; set; }

        public DateTimeOffset DateCreated { get; set; }
        public DateTimeOffset DateModified { get; set; }
    }
}
