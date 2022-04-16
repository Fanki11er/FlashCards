namespace FlashCards.Models
{
    public class AuthUserDto
    {
        public AuthUserDto(string Name, string AccessToken, int DailyFlashCards, int MaximumBreak, int PercentNew)
        {
            this.Name = Name;
            this.AccessToken = AccessToken;
            this.Settings = new UserSettingsDto(DailyFlashCards, MaximumBreak, PercentNew);
        }

        public string Name { get; set;}
        public UserSettingsDto Settings { get; set;}
        public string AccessToken { get; set;}

    }
}
