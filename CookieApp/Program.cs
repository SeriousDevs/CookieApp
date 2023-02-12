using CookieApp.Helpers;
using CookieData.IRepository.Interfaces;
using CookieData.IRepository;
using CookieApp.Service.Interfaces;
using CookieApp.Service;
using Microsoft.EntityFrameworkCore;
using CookieData.Context;
using CookieData.Entities;
using CookieData.Repository;
using Microsoft.AspNetCore.Identity;
using CookieData.Repository.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSwaggerGen();
string? connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<CookieContext>(options => options.UseSqlServer(connection));

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IStoryRepository, StoryRepository>();
builder.Services.AddScoped<IRepository<GameAccount>, GameAccountRepository>();
builder.Services.AddScoped<IRepository<Upgrade>, UpgradeRepository>();

builder.Services.AddScoped<IPasswordHasher<User>, BCryptPasswordHasher<User>>();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICookieService, CookieService>();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddCors();
builder.Services.AddControllers();

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

app.Run();
