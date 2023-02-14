﻿using CookieData.Entities;

namespace CookieData.Repository.Interfaces;

public interface IUserRepository
{
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<User> GetUserByIdAsync(int id);
    Task<User> GetUserByLoginAsync(string login);
    Task AddUserAsync(User user);
    Task UpdateUserAsync(User user);
    Task RemoveUserAsync(int id);
}
