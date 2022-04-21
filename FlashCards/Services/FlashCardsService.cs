using FlashCards.Data;
using FlashCards.Entities;
using FlashCards.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace FlashCards.Services
{
    public interface IFlashCardsService
    {
        void Create(CreateFlashCardDto dto, int userId);
        Status GetStatus(int userId);

        IEnumerable<FlashCardDto> GetFlashCardsToLearn(int userId);

        void UpdateProcessedFlashCard(FlashCardDto flashCard, int userId);

        IEnumerable<FlashCardDto> GetAllFlashCards(int userId);
    }
    public class FlashCardsService : IFlashCardsService
    {
        private readonly FlashCardsDbContext _dbContext;
        private readonly IAuthorizationService _authorizationService;
        public FlashCardsService(FlashCardsDbContext dbContext, IAuthorizationService authorizationService)
        {
            _dbContext = dbContext;
            _authorizationService = authorizationService;
        }

        public void Create(CreateFlashCardDto dto, int userId)
        {
            var flashCard = new FlashCard();
            flashCard.FrontText = dto.FrontText;
            flashCard.BackText = dto.BackText;
            flashCard.UserId = userId;

            var reversedFlashCard = new FlashCard();
            reversedFlashCard.FrontText = dto.BackText;
            reversedFlashCard.BackText = dto.FrontText;
            reversedFlashCard.UserId = userId;

            _dbContext.FlashCards.Add(flashCard);
            _dbContext.FlashCards.Add(reversedFlashCard);
            _dbContext.SaveChanges();
        }

        public Status GetStatus(int userId)
        {
            var status = new Status();
            status.AllAmount = _dbContext.FlashCards.Count(f => f.UserId == userId);
            status.ToLearnAmount = _dbContext.FlashCards.Count(f => f.UserId == userId && f.Status == "LEARN");
            status.NewAmount = _dbContext.FlashCards.Count(f => f.UserId == userId && f.Status == "NEW");

            return status;
        }

       public IEnumerable<FlashCardDto>  GetFlashCardsToLearn(int userId)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Id == userId);
            int remaining = 0;
            if(user == null)
            {
                return Enumerable.Empty<FlashCardDto>();
            }
            int percentNew =   (int)Math.Ceiling(((user.PercentNew*0.1) / 100) * user.DailyFlashCards);
            var newFlashCards = _dbContext.FlashCards.Where(f => f.UserId == userId && f.Status == "NEW").Take(percentNew);
            remaining = user.DailyFlashCards - newFlashCards.Count();
            var toLearnFlashCards = _dbContext.FlashCards.Where(f => f.UserId == userId && f.Status == "LEARN");
            var flashCardsToSend = newFlashCards.Union(toLearnFlashCards);
            remaining = user.DailyFlashCards - flashCardsToSend.Count();
            var repeatFlashCards = _dbContext.FlashCards.Where(f => f.UserId == userId && f.NextSession <= DateTime.Now).Except(flashCardsToSend).Take(remaining);
            flashCardsToSend = flashCardsToSend.Union(repeatFlashCards);
            /*var flashCardsToSend = flashCards.Select(flashCard => new FlashCardDto()
            {
                Id = flashCard.Id,
                FrontText = flashCard.FrontText,
                BackText = flashCard.BackText,
                Status = flashCard.Status
            })*/
            //
            return flashCardsToSend.Select(f => new FlashCardDto()
            {
                Id = f.Id,
                FrontText = f.FrontText,
                BackText = f.BackText,
                Status = f.Status,
                CorrectAtRow = f.CorrectAtRow,
            }).ToArray();

        }

        public void UpdateProcessedFlashCard(FlashCardDto flashCard, int userId)
        {
            var days = 0; 
            var user = _dbContext.Users.FirstOrDefault(u => u.Id == userId);
            var oldFlashCard = _dbContext.FlashCards.FirstOrDefault(f => f.Id == flashCard.Id && f.UserId == userId);
            if(flashCard.CorrectAtRow > 0)
            {
                days = flashCard.CorrectAtRow * 3;       
            }
            if (days > user.MaximumBreak)
            {
                days = user.MaximumBreak;
            }
            oldFlashCard.Status = flashCard.Status;
            oldFlashCard.CorrectAtRow = flashCard.CorrectAtRow;
            
            oldFlashCard.NextSession = DateTime.Now.AddDays(days);

            _dbContext.FlashCards.Update(oldFlashCard);
            _dbContext.SaveChanges();
            
        }
        public IEnumerable<FlashCardDto> GetAllFlashCards(int userId)
        {
            var flashCards = _dbContext.FlashCards.Where(f => f.UserId == userId);
            return flashCards.Select(f => new FlashCardDto()
            {
                Id = f.Id,
                FrontText = f.FrontText,
                BackText = f.BackText,
                Status = f.Status,
                CorrectAtRow = f.CorrectAtRow,
            }).ToArray();
        }
    }
    

}
