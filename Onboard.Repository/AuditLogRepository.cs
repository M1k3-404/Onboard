using Onboard.Model;
using Onboard.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Onboard.Repository
{
    public class AuditLogRepository : BaseRepository<AuditLog>, IAuditLogRepository
    {
        public AuditLogRepository(OnboardContext context) : base(context)
        {
        }
    }
}
