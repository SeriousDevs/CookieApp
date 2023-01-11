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
                .ForMember(ga => ga.Id, opt => opt.MapFrom(gam => gam.Id));
        }
    }
}
