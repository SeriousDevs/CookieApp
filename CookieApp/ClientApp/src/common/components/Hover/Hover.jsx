import { BoxStyle, BoxStyleList } from '../../common.styled';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';
import { memo } from 'react';

const Hover = ({upgrade }) => {
    const {name, amount, currentValue} = upgrade;
    
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each {name} produces <b style={{color: 'teal'}}>{seriousNumbers(Math.round((currentValue) * 10) / 10)} cookies</b></li>
                <li>{seriousNumbers(amount)} {name} producing <b style={{color: 'teal'}}>{seriousNumbers(Math.round((currentValue * amount) * 10) / 10)} cookies </b> per second</li>
            </BoxStyleList>
        </BoxStyle>
    )
} 

export default memo(Hover)