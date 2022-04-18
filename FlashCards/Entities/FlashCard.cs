
namespace FlashCards.Entities
{
    public class FlashCard
    {
        public int Id { get; set; }
        public string FrontText { get; set; }
        public string BackText { get; set; }
        public string Status { get; set; } = "NEW";
        public DateTime NextSession { get; set; } = DateTime.Now.Date;
        public int CorrectAtRow { get; set; } = 0;

        public int UserId { get; set; }
        public virtual User User { get; set; }
       

    }
}
