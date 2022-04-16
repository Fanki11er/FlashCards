using FlashCards.Data;
using FlashCards.Entities;
using FlashCards.Models;
using Microsoft.AspNetCore.Mvc;

namespace FlashCards.Controllers
{
    [Route("FlashCards")]
    public class FlashCardsController: ControllerBase
    {
        private readonly FlashCardsDbContext _dbContext;

        public FlashCardsController(FlashCardsDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost("Create")]
        public ActionResult CreateFlashCard([FromBody]CreateFlashCardDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var flashCard = new FlashCard();
            flashCard.FrontText = dto.FrontText;
            flashCard.BackText = dto.BackText;
            flashCard.UserId = dto.UserId;
            //Set user ID
            _dbContext.FlashCards.Add(flashCard);
            _dbContext.SaveChanges();

            return Created($"/FlashCards/{flashCard.Id}", null);
        }
        [HttpGet("Status:{userId}")]
        public ActionResult<Status> GetStatus([FromRoute]int userId)
        {
            var status = new Status();
            status.AllAmount = _dbContext.FlashCards.Count(f => f.UserId == userId);
            status.ToLearnAmount = _dbContext.FlashCards.Count(f => f.UserId == userId && f.Status == "LEARN");
            status.NewAmount = _dbContext.FlashCards.Count(f => f.UserId == userId && f.Status == "NEW");
            
            return Ok(status);

        }

    }
    
}
