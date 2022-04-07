using Duende.IdentityServer.EntityFramework.Options;
using FlashCards.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace FlashCards.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<FlashCard> FlashCard { get; set; }
        public DbSet<UserSettings>UserSettings { get; set; }
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        { 
            
        }

    }
}