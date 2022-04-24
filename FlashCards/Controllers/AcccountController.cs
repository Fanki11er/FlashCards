using FlashCards.Models;
using FlashCards.Services;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;


namespace FlashCards.Controllers
{   
    [Route("account")]
    [ApiController]
    
    public class AcccountController: ControllerBase 
    {
        private readonly IAccountService _accountService;
        public AcccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        
        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody]RegisterUserDto dto)
        {
            _accountService.RegisterUser(dto);
            return Ok();
        }
        [HttpPost("login")]
        public ActionResult Login([FromBody]LoginDto dto)
        {

            string token = _accountService.GenerateJwt(dto);
            var authUser = _accountService.GetUser(dto);
            authUser.AccessToken = token;
            return Ok(authUser);
        }
        [HttpPost("Settings")]
        public ActionResult UpdateSettings([FromBody] UserSettingsWithNameDto dto)
        {
            var userId = int.Parse(User.FindFirst(c => c.Type == ClaimTypes.NameIdentifier).Value);
            _accountService.UpdateSettings(dto, userId);
            var user = _accountService.GetUserById(userId);
            
            return Ok(user);
        }


    }
}
