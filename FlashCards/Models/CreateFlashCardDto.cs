using System.ComponentModel.DataAnnotations;

namespace FlashCards.Models
{
    public class CreateFlashCardDto
    {
        [Required]
        public string FrontText { get; set; }
        [Required]
        public string BackText { get; set; }
        [Required]
        public int UserId { get; set; }
    }
}




