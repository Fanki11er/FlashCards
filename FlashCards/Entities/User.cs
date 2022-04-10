namespace FlashCards.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public int DailyFlashCards { get; set; } = 20;
        public int MaximumBreak { get; set; } = 60;
        public int PercentNew { get; set; } = 30;

        public virtual List<FlashCard> FlashCards { get; set; }
    }
}
