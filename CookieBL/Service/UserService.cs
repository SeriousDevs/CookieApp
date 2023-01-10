using AutoMapper;
using CookieBL.Helper;
using CookieBL.Repository.Interfaces;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using Microsoft.Extensions.Configuration;

namespace CookieBL.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IConfiguration configuration, IMapper mapper)
        {
            _userRepository = userRepository;
            _configuration = configuration;
            _mapper = mapper;
        }

        public async Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model)
        {
            var user = await _userRepository.GetUserByCredentialsAsync(model.Login, model.Password);

            if (user == null)
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

            await _userRepository.AddUserAsync(user);

            var response = await AuthenticateAsync(new AuthenticateRequest
            {
                Login = user.Login,
                Password = user.Password
            });

            return response;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _userRepository.GetAllUsersAsync();
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }
    }
}
