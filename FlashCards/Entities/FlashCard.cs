
namespace FlashCards.Entities
{
    public class FlashCard
    {
        public int Id { get; set; }
        public string EnglishText { get; set; }
        public string PolishText { get; set; }
        public bool IsNew { get; set; }
        public bool ToRepeat { get; set; }
        public bool Learned { get; set; }
        public DateTime NextSession { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
       

    }
}
