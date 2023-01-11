using AutoMapper;
using CookieData.Entities;
using CookieData.Model;

namespace CookieData.Mapper
{
    public class UpgradeProfile : Profile
    {
        public UpgradeProfile()
        {
            CreateMap<UpgradeModel, Upgrade>()
                .ForMember(u => u.Id, opt => opt.Ignore())
                .ForMember(u => u.Name, opt => opt.MapFrom(um => um.Name))
                .ForMember(u => u.Price, opt => opt.MapFrom(um => um.Price))
                .ForMember(u => u.BaseTick, opt => opt.MapFrom(um => um.BaseTick))
                .ForMember(u => u.Level, opt => opt.MapFrom(um => um.Level))
                .ForMember(u => u.Amount, opt => opt.MapFrom(um => um.Amount))
                .ForMember(u => u.GameAccountId, opt => opt.MapFrom(um => um.GameAccountId));

            CreateMap<Upgrade, UpgradeModel>()
                .ForMember(um => um.Id, opt => opt.MapFrom(u => u.Id))
                .ForMember(um => um.Name, opt => opt.MapFrom(u => u.Name))
                .ForMember(um => um.Price, opt => opt.MapFrom(u => u.Price))
                .ForMember(um => um.BaseTick, opt => opt.MapFrom(u => u.BaseTick))
                .ForMember(um => um.Level, opt => opt.MapFrom(u => u.Level))
                .ForMember(um => um.Amount, opt => opt.MapFrom(u => u.Amount))
                .ForMember(um => um.GameAccountId, opt => opt.MapFrom(u => u.GameAccountId));
        }
    }
}
