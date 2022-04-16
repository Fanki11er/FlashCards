namespace FlashCards.Models
{
    public class AuthUserDto
    {
        public AuthUserDto(int Id, string Name, string AccessToken, int DailyFlashCards, int MaximumBreak, int PercentNew)
        {
            this.Id = Id;   
            this.Name = Name;
            this.AccessToken = AccessToken;
            this.Settings = new UserSettingsDto(DailyFlashCards, MaximumBreak, PercentNew);
        }
        public int Id { get; set; }
        public string Name { get; set;}
        public UserSettingsDto Settings { get; set;}
        public string AccessToken { get; set;}

    }
}
