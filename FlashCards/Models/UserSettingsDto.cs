namespace FlashCards.Models
{
    public class UserSettingsDto
    {
        public UserSettingsDto(int DailyFlashCards, int MaximumBreak, int PercentNew)
        {
            this.DailyFlashCards = DailyFlashCards;
            this.MaximumBreak = MaximumBreak;   
            this.PercentNew = PercentNew;
        }

        public int DailyFlashCards { get; set; }
        public int MaximumBreak { get; set; }
        public int PercentNew { get; set; }
    }
}
