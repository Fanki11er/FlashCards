namespace FlashCards.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int UserSettingsId { get; set; }
        public virtual UserSettings UserSettings { get; set; }
        public virtual List<FlashCard> FlashCards { get; set; }
    }
}
