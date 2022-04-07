namespace FlashCards.Models
{
    public class UserSettings
    {
        public int Id { get; set; }
        public int DailyFlashCards { get; set; }
        public TimeSpan MaximumBreak { get; set; }
        public int PercentNew { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

    }
}
