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

            _dbContext.FlashCards.Add(flashCard);
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
    }

}
