using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Onboard.Repository;
using Onboard.Model;

namespace Onboard.BLL
{
    public class AuditLogBLL
    {
        private readonly OnboardContext context;
        public AuditLogBLL(OnboardContext context)
        {
            this.context = context;
        }

        public IEnumerable<AuditLog> ViewAllAuditLogs()
        {
            using(var uow = new UnitOfWork(context))
            {
                return uow.GetRepository<AuditLogRepository>().GetAll();
            }
        }

        public AuditLog ViewAuditLogById(int id)
        {
            using (var uow = new UnitOfWork(context))
            {
                return uow.GetRepository<AuditLogRepository>().GetById(id);
            }
        }

        public void AddAuditLog(AuditLog auditLog)
        {
            using (var uow = new UnitOfWork(context))
            {
                uow.GetRepository<AuditLogRepository>().Add(auditLog);
                uow.Commit();
            }
        }

        public void UpdateAuditLog(AuditLog auditLog)
        {
            using (var uow = new UnitOfWork(context))
            {
                uow.GetRepository<AuditLogRepository>().Update(auditLog);
                uow.Commit();
            }
        }

        public void DeleteAuditLog(AuditLog auditLog)
        {
            using (var uow = new UnitOfWork(context))
            {
                uow.GetRepository<AuditLogRepository>().Delete(auditLog);
                uow.Commit();
            }
        }

        public void DeleteAuditLogById(int id)
        {
            using (var uow = new UnitOfWork(context))
            {
                AuditLogRepository repository = uow.GetRepository<AuditLogRepository>();
                repository.Delete(repository.GetById(id));
                uow.Commit();
            }
        }
    }
}
