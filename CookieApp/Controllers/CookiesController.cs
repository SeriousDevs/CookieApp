using CookieBL.Helper;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using CookieData.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CookieApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CookiesController : ControllerBase
    {
        private readonly ICookieService _cookieService;
        public CookiesController(ICookieService service)
        {
            _cookieService = service;
        }

        [Authorize]
        [HttpGet("user")]
        public async Task<IActionResult> GetGameAccount()
        {
            if (HttpContext.Items["User"] is User user)
            {
                GameAccountModel gameAccount = await _cookieService.GetGameAccountAsync(user.GameAccountId);
                return Ok(gameAccount);
            }

            return NotFound(new { Message = "Account not found!" });
        }

        [Authorize]
        [HttpPost("user")]
        public async Task<IActionResult> SaveGameAccount(GameAccountModel gameAccountModel)
        {
            try
            {
                await _cookieService.SaveGameAccountAsync(gameAccountModel);
            }
            catch (Exception ex)
            {
                return BadRequest(new { ex.Message });
            }

            return Ok(new { Message = "Saved" });
        }

        [Authorize]
        [HttpPost("upgrade")]
        public async Task<IActionResult> UpdateUpgrade(UpgradeModel upgradeModel)
        {
            try
            {
                await _cookieService.UpdateUpgradeAsync(upgradeModel);
            }
            catch (Exception ex)
            {
                return BadRequest(new { ex.Message });
            }

            return Ok();
        }

        [Authorize]
        [HttpGet("story")]
        public async Task<IActionResult> UpdateUpgrade()
        {
            if (HttpContext.Items["User"] is User user)
            {
                FairyTailModel story = await _cookieService.GetStory(user.GameAccountId);
                return Ok(story);
            }

            return NotFound(new { Message = "Account not found!" });
        }
    }
}
