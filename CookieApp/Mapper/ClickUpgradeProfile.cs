using AutoMapper;
using CookieData.Entities;
using CookieData.Model;

namespace CookieData.Mapper
{
    public class ClickUpgradeProfile : Profile
    {
        public ClickUpgradeProfile()
        {
            CreateMap<ClickUpgradeModel, ClickUpgrade>()
               .ForMember(u => u.Id, opt => opt.MapFrom(um => um.Id))
               .ForMember(u => u.UpgradeInfo, opt => opt.MapFrom(um => new UpgradeInfo()
               {
                   Id = um.UpgradeInfoId,
                   Name = um.Name,
                   BasePrice = um.BasePrice,
                   BaseValue = um.BaseValue,
                   Image = um.Image,
                   LvlImage = string.Empty
               }))
               .ForMember(u => u.Level, opt => opt.MapFrom(um => um.Level))
               .ForMember(u => u.GameAccountId, opt => opt.MapFrom(um => um.GameAccountId));

            CreateMap<ClickUpgrade, ClickUpgradeModel>()
                .ForMember(um => um.Id, opt => opt.MapFrom(u => u.Id))
                .ForMember(um => um.Name, opt => opt.MapFrom(u => u.UpgradeInfo.Name))
                .ForMember(um => um.BasePrice, opt => opt.MapFrom(u => u.UpgradeInfo.BasePrice))
                .ForMember(um => um.BaseValue, opt => opt.MapFrom(u => u.UpgradeInfo.BaseValue))
                .ForMember(um => um.Level, opt => opt.MapFrom(u => u.Level))
                .ForMember(um => um.Image, opt => opt.MapFrom(u => u.UpgradeInfo.Image))
                .ForMember(um => um.GameAccountId, opt => opt.MapFrom(u => u.GameAccountId))
                .ForMember(um => um.UpgradeInfoId, opt => opt.MapFrom(u => u.UpgradeInfo.Id));
        }
    }
}
