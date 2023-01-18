import { BoxStyle, BoxStyleList } from '../../common.styled';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';

export const Hover = ({upgrade }) => {
    const {name, amount, baseValue} = upgrade;
    
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each {name} produces <b style={{color: 'teal'}}>{seriousNumbers(Math.round((baseValue) * 10) / 10)} cookies</b></li>
                <li>{seriousNumbers(amount)} {name} producing <b style={{color: 'teal'}}>{seriousNumbers(Math.round((baseValue * amount) * 10) / 10)} cookies </b> per second</li>
            </BoxStyleList>
        </BoxStyle>
    )
} 