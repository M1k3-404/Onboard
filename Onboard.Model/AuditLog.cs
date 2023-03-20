using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Onboard.Model
{
    [Table("AuditLog")]
    public class AuditLog
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        public DateTime? DateOfChange { get; set; }
        public DateTime? TimeOfChange { get; set; }
        public String AuditType { get; set; }
        public String AuditDescription { get; set; }
    }
}