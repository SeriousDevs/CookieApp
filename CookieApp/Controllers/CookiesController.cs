using CookieApp.Helpers;
using CookieApp.Model.Responses;
using CookieApp.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace CookieApp.Controllers
{
    [ApiController]
    [Route(ComponentDefaults.DefaultRoute)]
    public class CookiesController : ControllerBase
    {
        private readonly ICookieService _cookieService;
        public CookiesController(ICookieService service)
        {
            _cookieService = service;
        }

        [Authorize]
        [HttpPost]
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
        [HttpPost]
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
        [HttpPost]
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
        [HttpPost]
        public async Task<IActionResult> GetStories()
        {
            if (HttpContext.Items["User"] is User user)
            {
                IEnumerable<FairyTailModel> stories = await _cookieService.GetStoriesAsync(user.GameAccountId);
                return Ok(new DataResponse<FairyTailModel> { Data = stories });
            }

            return NotFound(new { Message = "Account not found!" });
        }
    }
}
