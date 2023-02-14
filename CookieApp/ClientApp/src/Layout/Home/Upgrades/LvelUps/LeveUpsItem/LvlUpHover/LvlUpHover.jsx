import { BoxStyle, BoxStyleList } from 'common/common.styled'
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';
import { memo } from 'react';

const LvlUpHover = ({ upgrade }) => {
    if (upgrade === null) return;
    const { price = 0, name, amount, level } = upgrade;
    const amountArr = [1, 5, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
    const condition = amount >= amountArr[level - 1];

    return (
        <BoxStyle>
            <BoxStyleList>
                {!condition && <li><b style={{ color: 'tomato' }}>You need to have {amountArr[level - 1]} {name}</b></li>}
                <li>Price: <b style={{ color: 'teal' }}> {seriousNumbers(price)}</b></li>
                <li>After upgrade <b style={{ color: 'teal' }}> {name} </b>will produce <b style={{ color: 'teal' }}> twice</b> cookies</li>
            </BoxStyleList>
        </BoxStyle>
    )
}

export default memo(LvlUpHover);