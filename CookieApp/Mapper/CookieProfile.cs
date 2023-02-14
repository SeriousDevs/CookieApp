using AutoMapper;
using CookieApp.Model.Responses;
using CookieData.Entities;
using CookieData.Model;

namespace CookieApp.Mapper;

public class CookieProfile : Profile
{
    public CookieProfile()
    {
        CreateMap<UserModel, User>()
             .ForMember(u => u.Id, opt => opt.Ignore());

        CreateMap<User, UserModel>()
            .ForMember(um => um.Password, opt => opt.Ignore());

        CreateMap<User, AuthenticateResponse>()
            .ForMember(ar => ar.Token, opt => opt.Ignore());

        CreateMap<User, UserStatsModel>()
            .ForMember(um => um.Networth, opt => opt.MapFrom(u => u.GameAccount.Networth));

        CreateMap<GameAccountModel, GameAccount>();
        CreateMap<GameAccount, GameAccountModel>();

        CreateMap<UpgradeModel, Upgrade>();

        CreateMap<Upgrade, UpgradeModel>()
            .ForMember(um => um.Name, opt => opt.MapFrom(u => u.UpgradeInfo.Name))
            .ForMember(um => um.BasePrice, opt => opt.MapFrom(u => u.UpgradeInfo.BasePrice))
            .ForMember(um => um.BaseValue, opt => opt.MapFrom(u => u.UpgradeInfo.BaseValue))
            .ForMember(um => um.Image, opt => opt.MapFrom(u => u.UpgradeInfo.Image))
            .ForMember(um => um.LvlImage, opt => opt.MapFrom(u => u.UpgradeInfo.LvlImage));

        CreateMap<ClickUpgradeModel, ClickUpgrade>();

        CreateMap<ClickUpgrade, ClickUpgradeModel>()
            .ForMember(um => um.Name, opt => opt.MapFrom(u => u.UpgradeInfo.Name))
            .ForMember(um => um.BasePrice, opt => opt.MapFrom(u => u.UpgradeInfo.BasePrice))
            .ForMember(um => um.BaseValue, opt => opt.MapFrom(u => u.UpgradeInfo.BaseValue))
            .ForMember(um => um.Image, opt => opt.MapFrom(u => u.UpgradeInfo.Image));

        CreateMap<FairyTail, FairyTailModel>();
    }
}
