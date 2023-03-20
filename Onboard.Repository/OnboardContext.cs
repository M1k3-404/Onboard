using Microsoft.EntityFrameworkCore;
using Onboard.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Onboard.Repository
{
    public class OnboardContext : DbContext
    {
        public OnboardContext(DbContextOptions<OnboardContext> options) : base(options) { }

        public DbSet<AuditLog> AuditLogs { get; set; }
    }
}
