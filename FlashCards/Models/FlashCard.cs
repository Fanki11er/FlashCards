namespace FlashCards.Models
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

        //public int ApplicationUserId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
       

    }
}
