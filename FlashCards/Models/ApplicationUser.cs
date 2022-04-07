using Microsoft.AspNetCore.Identity;


namespace FlashCards.Models
{
    public class ApplicationUser : IdentityUser
    {
       public int UserSettingsId { get; set; }
       public virtual UserSettings UserSettings { get; set;}
       public virtual List<FlashCard>FlashCards { get; set;}
       
    }
}