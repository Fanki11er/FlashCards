using FlashCards.Data;
using FlashCards.Entities;
using FlashCards.Models;
using FlashCards.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace FlashCards.Controllers
{
    [Route("FlashCards")]
    [Authorize]
    public class FlashCardsController: ControllerBase
    {
        private readonly IFlashCardsService _flashCardsService;

        public FlashCardsController(IFlashCardsService flashCardsService)
        {
            _flashCardsService = flashCardsService;
        }
        [HttpPost("Create")]
        public ActionResult CreateFlashCard([FromBody]CreateFlashCardDto dto)
        {   
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var userId = int.Parse(User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value);
            _flashCardsService.Create(dto, userId);

            //return Created($"/FlashCards/{flashCard.Id}", null);
            return Created($"/FlashCards", null);
        }
        [HttpGet("Status")]
        public ActionResult<Status> GetStatus()
        {
            var userId = int.Parse(User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value);
            var status = _flashCardsService.GetStatus(userId);

            return Ok(status);

        }

    }
    
}
