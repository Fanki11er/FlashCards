using System.ComponentModel.DataAnnotations;

namespace FlashCards.Models
{
    public class RegisterUserDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [MinLength(6)]
        public string Password { get; set; }
        [Required]
        public string Login { get; set; }
     
    }
}
