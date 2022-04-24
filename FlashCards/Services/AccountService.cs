using FlashCards.Models;
using FlashCards.Entities;
using FlashCards.Data;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using FlashCards.Exceptions;

namespace FlashCards.Services
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto dto);
        string GenerateJwt(LoginDto dto);
        AuthUserDto GetUser(LoginDto dto);

        void UpdateSettings(UserSettingsWithNameDto dto, int userId);

        AuthUserDto GetUserById(int userId);


    }
    public class AccountService: IAccountService
    {
        private readonly FlashCardsDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;
        public AccountService(FlashCardsDbContext context, IPasswordHasher<User> passwordHasher, AuthenticationSettings authenticationSettings)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
        }
        public void RegisterUser(RegisterUserDto dto)
        {
            var user = new User()
            {
                Name = dto.Name,
                Email = dto.Email,
            };
            var hashedPassword = _passwordHasher.HashPassword(user, dto.Password);

            user.Password = hashedPassword;
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public AuthUserDto GetUser(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email);
            if (user is null)
            {
                throw new BadRequestException("Nie znaleziono użytkownika");
            }
            return new AuthUserDto(user.Id, user.Name, "", user.DailyFlashCards, user.MaximumBreak, user.PercentNew );
        }

        public string GenerateJwt(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email);

            if(user is null)
            {
                throw new BadRequestException("Błędne imię lub hasło");
            }
            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if(result == PasswordVerificationResult.Failed)
            {
                throw new BadRequestException("Błędne imię lub hasło"); 
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, $"{user.Name}"),
                new Claim(ClaimTypes.Email, $"{user.Email}"),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireDays);

            var token = new JwtSecurityToken(_authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }

        public void UpdateSettings(UserSettingsWithNameDto dto, int userId)
        {
            var user = _context.Users.FirstOrDefault(u=> u.Id == userId);
            if (user is null)
            {
                throw new BadRequestException("Użytkownik nie istnieje");
            }

            user.Name = dto.UserName;
            user.DailyFlashCards = dto.DailyFlashCards;
            user.MaximumBreak = dto.MaximumBreak;
            user.PercentNew = dto.PercentNew;
            _context.Users.Update(user);
            _context.SaveChanges();
        }

       public AuthUserDto GetUserById(int userId) {

            var user = _context.Users.FirstOrDefault(u => u.Id == userId);
            if (user is null)
            {
                throw new BadRequestException("Nie znaleziono użytkownika");
            }
            return new AuthUserDto(user.Id, user.Name, "", user.DailyFlashCards, user.MaximumBreak, user.PercentNew);
        }
        
            
        
    }
}
