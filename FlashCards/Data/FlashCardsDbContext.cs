using FlashCards.Entities;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Data
{
    public class FlashCardsDbContext : DbContext
    {
        public DbSet<User>Users { get; set; }
        
        public DbSet<FlashCard> FlashCards { get; set; }

        public FlashCardsDbContext(DbContextOptions options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>()
                .Property(u => u.Email)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(u => u.Password)
                .IsRequired();


            modelBuilder.Entity<FlashCard>()
                .Property(u => u.EnglishText)
                .IsRequired();

            modelBuilder.Entity<FlashCard>()
               .Property(u => u.PolishText)
               .IsRequired();
        }
    }
}
