using FlashCards.Models;
using FlashCards.Services;
using Microsoft.AspNetCore.Mvc;

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
            return Ok(token);
        }
    }
}
