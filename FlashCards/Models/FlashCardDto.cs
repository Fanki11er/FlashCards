namespace FlashCards.Models
{
    public class FlashCardDto
    {
        public int Id { get; set; }
        public string FrontText { get; set; }
        public string BackText { get; set; }
        public string Status { get; set; }
        public int CorrectAtRow { get; set; }
    }
}
