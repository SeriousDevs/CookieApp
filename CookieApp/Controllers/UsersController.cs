using CookieBL.Helper;
using CookieBL.Service;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using Microsoft.AspNetCore.Mvc;

namespace CookieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest model)
        {
            var response = await _userService.AuthenticateAsync(model);

            if (response is null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            return Ok(response);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserModel userModel)
        {
            // return StatusCode(444);
            var response = await _userService.RegisterAsync(userModel);

            if (response is null)
            {
                return BadRequest(new { message = "Didn't register!" });
            }

            return Ok(response);
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            IEnumerable<UserModel> users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        [Authorize]
        [HttpGet("return")]
        public async Task<IActionResult> GetUser()
        {
            if (HttpContext.Items["User"] is User user)
            {
                UserModel userModel = await _userService.GetUserAsync(user.Id);
                return Ok(userModel);
            }

            return NotFound(new { Message = "Account not found!" });
        }
    }
}
