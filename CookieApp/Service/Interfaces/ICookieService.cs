using CookieData.Model;

namespace CookieApp.Service.Interfaces
{
    public interface ICookieService
    {
        Task<GameAccountModel> GetGameAccountAsync(int id);
        Task SaveGameAccountAsync(GameAccountModel gameAccountModel);
        Task UpdateUpgradeAsync(UpgradeModel upgradeModel);
        Task<FairyTailModel> GetStoryAsync(int id);
    }
}
