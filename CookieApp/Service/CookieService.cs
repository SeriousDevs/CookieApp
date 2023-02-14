using AutoMapper;
using CookieData.Repository.Interfaces;
using CookieApp.Service.Interfaces;
using CookieData.Model;
using Infrastructure.Services;
using CookieData.Context;
using Infrastructure.Services.Interfaces;
using CookieData.Entities;

namespace CookieApp.Service;

public class CookieService : BaseDataService<CookieContext>, ICookieService
{
    private readonly IRepository<GameAccount> _accountsRepository;
    private readonly IRepository<Upgrade> _upgradesRepository;
    private readonly IStoryRepository _storyRepository;
    private readonly IMapper _mapper;

    public CookieService(
        IDbContextWrapper<CookieContext> dbContextWrapper,
        ILogger<BaseDataService<CookieContext>> logger,
        IRepository<GameAccount> accountsRepository,
        IRepository<Upgrade> upgradesRepository,
        IStoryRepository storyRepository,
        IMapper mapper)
        : base(dbContextWrapper, logger)
    {
        _accountsRepository = accountsRepository;
        _upgradesRepository = upgradesRepository;
        _storyRepository = storyRepository;
        _mapper = mapper;
    }

    public async Task<GameAccountModel> GetGameAccountAsync(int id)
    {
        return await ExecuteSafeAsync(async () =>
        {
            GameAccount gameAccount = await _accountsRepository.GetEntityByIdAsync(id);
            GameAccountModel gameAccountModel = _mapper.Map<GameAccountModel>(gameAccount);
            FairyTail story = await _storyRepository.GetByNetworth(StringToDouble(gameAccount.Networth));
            gameAccountModel.Story = _mapper.Map<FairyTailModel>(story);

            return gameAccountModel;
        });
    }

    public async Task SaveGameAccountAsync(GameAccountModel gameAccountModel)
    {
        await ExecuteSafeAsync(async () =>
        {
            GameAccount gameAccount = _mapper.Map<GameAccount>(gameAccountModel);
            await _accountsRepository.UpdateEntityAsync(gameAccount);
        });
    }

    public async Task UpdateUpgradeAsync(UpgradeModel upgradeModel)
    {
        await ExecuteSafeAsync(async () =>
        {
            Upgrade upgrade = _mapper.Map<Upgrade>(upgradeModel);
            await _upgradesRepository.UpdateEntityAsync(upgrade);
        });
    }

    public async Task<FairyTailModel> GetStoryAsync(int id)
    {
        return await ExecuteSafeAsync(async () =>
        {
            var gameAccount = await _accountsRepository.GetEntityByIdAsync(id);
            FairyTail story = await _storyRepository.GetByNetworth(StringToDouble(gameAccount.Networth));
            FairyTailModel storyModel = _mapper.Map<FairyTailModel>(story);

            return storyModel;
        });
    }

    private static double StringToDouble(string num)
    {
        if (!double.TryParse(num, out double result))
        {
            result = double.MaxValue;
        }

        return result;
    }
}
