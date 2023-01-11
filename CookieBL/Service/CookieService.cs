using AutoMapper;
using CookieBL.IRepository.Interfaces;
using CookieBL.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;

namespace CookieBL.Service
{
    public class CookieService : ICookieService
    {
        private readonly IRepository<GameAccount> _accountsRepository;
        private readonly IRepository<Upgrade> _upgradesRepository;
        private readonly IMapper _mapper;

        public CookieService(IRepository<GameAccount> accountsRepository, IRepository<Upgrade> upgradesRepository, IMapper mapper)
        {
            _accountsRepository = accountsRepository;
            _upgradesRepository = upgradesRepository;
            _mapper = mapper;
        }

        public async Task<GameAccountModel> GetGameAccountAsync(int id)
        {
            GameAccount gameAccount = await _accountsRepository.GetEntityByIdAsync(id);
            GameAccountModel gameAccountModel = _mapper.Map<GameAccountModel>(gameAccount);

            return gameAccountModel;
        }

        public async Task SaveGameAccountAsync(GameAccountModel gameAccountModel)
        {
            GameAccount gameAccount = _mapper.Map<GameAccount>(gameAccountModel);
            await _accountsRepository.UpdateEntityAsync(gameAccount);
        }

        public async Task UpdateUpgradeAsync(UpgradeModel upgradeModel)
        {
            Upgrade upgrade = _mapper.Map<Upgrade>(upgradeModel);
            await _upgradesRepository.UpdateEntityAsync(upgrade);
        }
    }
}
