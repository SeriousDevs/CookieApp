using AutoMapper;
using CookieData.Entities;
using CookieData.Model;

namespace CookieData.Mapper
{
    public class GameAccountProfile : Profile
    {
        public GameAccountProfile()
        {
            CreateMap<GameAccountModel, GameAccount>()
                .ForMember(ga => ga.Id, opt => opt.MapFrom(gam => gam.Id))
                .ForMember(ga => ga.Networth, opt => opt.MapFrom(gam => gam.Networth))
                .ForMember(ga => ga.Cookies, opt => opt.MapFrom(gam => gam.Cookies))
                .ForMember(ga => ga.Clicks, opt => opt.MapFrom(gam => gam.Clicks))
                .ForMember(ga => ga.ClickUpgrade, opt => opt.MapFrom(gam => gam.ClickUpgrade))
                .ForMember(ga => ga.Upgrades, opt => opt.MapFrom(gam => gam.Upgrades));

            CreateMap<GameAccount, GameAccountModel>()
                .ForMember(gam => gam.Id, opt => opt.MapFrom(ga => ga.Id))
                .ForMember(gam => gam.Networth, opt => opt.MapFrom(ga => ga.Networth))
                .ForMember(gam => gam.Cookies, opt => opt.MapFrom(ga => ga.Cookies))
                .ForMember(gam => gam.Clicks, opt => opt.MapFrom(ga => ga.Clicks))
                .ForMember(gam => gam.ClickUpgrade, opt => opt.MapFrom(ga => ga.ClickUpgrade))
                .ForMember(gam => gam.Upgrades, opt => opt.MapFrom(ga => ga.Upgrades));
        }
    }
}
