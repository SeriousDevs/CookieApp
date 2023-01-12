using AutoMapper;
using CookieBL.Helper;
using CookieBL.IRepository.Interfaces;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CookieBL.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _usersRepository;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public UserService(IUserRepository usersRepository, IConfiguration configuration, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _configuration = configuration;
            _mapper = mapper;
        }

        public async Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model)
        {
            var user = await _usersRepository.GetUserByCredentialsAsync(model.Login, model.Password);

            if (user is null)
            {
                // todo: need to add logger
                return null;
            }

            var token = _configuration.GenerateJwtToken(user);

            return new AuthenticateResponse(user, token);
        }

        public async Task<AuthenticateResponse> RegisterAsync(UserModel userModel)
        {
            var user = _mapper.Map<User>(userModel);

            user.GameAccount = AccountCreator.CreateGameAccount();

            await _usersRepository.AddUserAsync(user);

            var response = await AuthenticateAsync(new AuthenticateRequest
            {
                Login = user.Login,
                Password = user.Password
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
