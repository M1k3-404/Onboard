using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Onboard.BLL;
using Onboard.Repository;
using System.Diagnostics;

namespace Onboard.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditLogController : ControllerBase
    {
        private AuditLogBLL _auditLogBLL;
        public AuditLogController(OnboardContext context)
        {
            _auditLogBLL = new AuditLogBLL(context);
        }

        //Get
        [HttpGet("GetAllAuditLog")]
        public IActionResult GetAllAuditLog()
        {
            var response = _auditLogBLL.ViewAllAuditLogs();
            if (response == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(response);
            }
        }
    }
}