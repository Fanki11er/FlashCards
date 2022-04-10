using FlashCards.Models;
using FlashCards.Entities;
using FlashCards.Data;
using Microsoft.AspNetCore.Identity;

namespace FlashCards.Services
{
    public interface IAccountService
    {
        void RegisterUser(RegisterUserDto dto);
    }
    public class AccountService: IAccountService
    {
        private readonly FlashCardsDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;

        public AccountService(FlashCardsDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }
        public void RegisterUser(RegisterUserDto dto)
        {
            var user = new User()
            {
                Login = dto.Login,
                Email = dto.Email,
            };
            var hashedPassword = _passwordHasher.HashPassword(user, dto.Password);

            user.Password = hashedPassword;
            _context.Users.Add(user);
            _context.SaveChanges();
        }
    }
}
