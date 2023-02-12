﻿using AutoMapper;
using CookieData.IRepository.Interfaces;
using CookieApp.Service.Interfaces;
using CookieData.Entities;
using CookieData.Model;
using CookieData.Repository.Interfaces;

namespace CookieApp.Service
{
    public class CookieService : ICookieService
    {
        private readonly IRepository<GameAccount> _accountsRepository;
        private readonly IRepository<Upgrade> _upgradesRepository;
        private readonly IStoryRepository _storyRepository;
        private readonly IMapper _mapper;

        public CookieService(IRepository<GameAccount> accountsRepository, IRepository<Upgrade> upgradesRepository, IStoryRepository storyRepository, IMapper mapper)
        {
            _accountsRepository = accountsRepository;
            _upgradesRepository = upgradesRepository;
            _storyRepository = storyRepository;
            _mapper = mapper;
        }

        public async Task<GameAccountModel> GetGameAccountAsync(int id)
        {
            GameAccount gameAccount = await _accountsRepository.GetEntityByIdAsync(id);
            GameAccountModel gameAccountModel = _mapper.Map<GameAccountModel>(gameAccount);
            FairyTail story = await _storyRepository.GetByNetworth(gameAccount.Networth);
            gameAccountModel.Story = _mapper.Map<FairyTailModel>(story);

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

        public async Task<FairyTailModel> GetStory(int id)
        {
            var gameAccount = await _accountsRepository.GetEntityByIdAsync(id);
            FairyTail story = await _storyRepository.GetByNetworth(gameAccount.Networth);
            FairyTailModel storyModel = _mapper.Map<FairyTailModel>(story);

            return storyModel;
        }
    }
}
