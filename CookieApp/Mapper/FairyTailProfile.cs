using AutoMapper;
using CookieData.Entities;
using CookieData.Model;

namespace CookieData.Mapper
{
    public class FairyTailProfile : Profile
    {
        public FairyTailProfile()
        {
            CreateMap<FairyTail, FairyTailModel>()
                .ForMember(ftp => ftp.Image, opt => opt.MapFrom(ft => ft.Image))
                .ForMember(ftp => ftp.Story, opt => opt.MapFrom(ft => ft.Story));
        }
    }
}
