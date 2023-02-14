using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using CookieApp.Service;
using CookieApp.Service.Interfaces;
using CookieApp.Helpers;
using CookieData.Context;
using CookieData.Entities;
using CookieData.Repository;
using CookieData.Repository.Interfaces;
using Infrastructure.Services;
using Infrastructure.Services.Interfaces;

var configuration = GetConfiguration();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddCors();

builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IStoryRepository, StoryRepository>();
builder.Services.AddTransient<IRepository<GameAccount>, GameAccountRepository>();
builder.Services.AddTransient<IRepository<Upgrade>, UpgradeRepository>();

builder.Services.AddTransient<IPasswordHasher<User>, BCryptPasswordHasher<User>>();

builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<ICookieService, CookieService>();

// string connectionString = configuration["ConnectionString"] !;
string connectionString = builder.Configuration.GetConnectionString("PostgresConnection") !;
builder.Services.AddDbContextFactory<CookieContext>(options => options.UseNpgsql(connectionString));
builder.Services.AddScoped<IDbContextWrapper<CookieContext>, DbContextWrapper<CookieContext>>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(x => x
              .AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());

app.UseAuthorization();

app.UseMiddleware<JwtMiddleware>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

CreateDbIfNotExists(app);
app.Run();

static IConfiguration GetConfiguration()
{
    var builder = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("connectionString.json", optional: false, reloadOnChange: true)
        .AddEnvironmentVariables();

    return builder.Build();
}

void CreateDbIfNotExists(IHost host)
{
    using (var scope = host.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        try
        {
            var context = services.GetRequiredService<CookieContext>();

            DbInitializer.Initialize(context).Wait();
        }
        catch (Exception ex)
        {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An error occurred creating the DB.");
        }
    }
}
