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
using Infrastructure.Services.Interfaces;
using Infrastructure.Services;

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

string? connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContextFactory<CookieContext>(options => options.UseSqlServer(connection));
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

app.Run();
