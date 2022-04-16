using System.ComponentModel.DataAnnotations;

namespace FlashCards.Models
{
    public class Status
    {
        [Required]
        public int AllAmount { get; set; }
        [Required]
        public int ToLearnAmount { get; set; }
        [Required]
        public int NewAmount { get; set; }
    }
}
