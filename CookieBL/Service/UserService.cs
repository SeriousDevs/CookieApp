using AutoMapper;
using CookieBL.Helper;
using CookieBL.IRepository.Interfaces;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CookieBL.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _usersRepository;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _hasher;

        public UserService(IUserRepository usersRepository, IConfiguration configuration, IMapper mapper, IPasswordHasher<User> hasher)
        {
            _usersRepository = usersRepository;
            _configuration = configuration;
            _mapper = mapper;
            _hasher = hasher;
        }

        public async Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model)
        {
            var user = await _usersRepository.GetUserByLoginAsync(model.Login);

            if (user is null)
            {
                throw new Exception("User not found");
            }

            var hashResult = _hasher.VerifyHashedPassword(user, user.Password, model.Password);
            if (hashResult == PasswordVerificationResult.Failed)
            {
                throw new Exception("Incorrect password");
            }

            var token = _configuration.GenerateJwtToken(user);

            return new AuthenticateResponse(user, token);
        }

        public async Task<AuthenticateResponse> RegisterAsync(UserModel userModel)
        {
            var user = _mapper.Map<User>(userModel);
            string clearPass = user.Password;

            user.GameAccount = AccountCreator.CreateGameAccount();
            user.Password = _hasher.HashPassword(user, clearPass);

            await _usersRepository.AddUserAsync(user);

            var response = await AuthenticateAsync(new AuthenticateRequest
            {
                Login = user.Login,
                Password = clearPass
            });

            return response;
        }

        public async Task<IEnumerable<UserStatsModel>> GetAllUsersAsync()
        {
            IEnumerable<User> users = await _usersRepository.GetAllUsersAsync();
            IEnumerable<UserStatsModel> usersModel = users.Select(_mapper.Map<UserStatsModel>);

            return usersModel;
        }

        public async Task<UserModel> GetUserAsync(int id)
        {
            User user = await _usersRepository.GetUserByIdAsync(id);
            UserModel userModel = _mapper.Map<UserModel>(user);

            return userModel;
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _usersRepository.GetUserByIdAsync(id);
        }
    }
}
