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
                .ForMember(ga => ga.Cookies, opt => opt.MapFrom(gam => gam.Cookies))
                .ForMember(ga => ga.Clicks, opt => opt.MapFrom(gam => gam.Clicks))
                .ForMember(ga => ga.Upgrades, opt => opt.MapFrom(gam => gam.Upgrades));

            CreateMap<GameAccount, GameAccountModel>()
                .ForMember(gam => gam.Id, opt => opt.MapFrom(ga => ga.Id))
                .ForMember(gam => gam.Cookies, opt => opt.MapFrom(ga => ga.Cookies))
                .ForMember(gam => gam.Clicks, opt => opt.MapFrom(ga => ga.Clicks))
                .ForMember(gam => gam.Upgrades, opt => opt.MapFrom(ga => ga.Upgrades));
        }
    }
}
