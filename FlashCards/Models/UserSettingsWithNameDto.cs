namespace FlashCards.Models
{
    public class UserSettingsWithNameDto
    {
        public string UserName { get; set; }
        public int DailyFlashCards { get; set; }
        public int MaximumBreak { get; set; }
        public int PercentNew { get; set; }
    }
}
