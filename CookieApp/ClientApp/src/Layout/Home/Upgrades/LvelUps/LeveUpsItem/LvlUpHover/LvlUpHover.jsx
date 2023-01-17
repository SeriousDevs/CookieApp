import { BoxStyle, BoxStyleList } from 'common/common.styled'
import { useSelector } from 'react-redux';
import { getCookies } from 'redux/gameAccSlice';
// import { Paragraph } from './LvlUpHover.styled'

export const LvlUpHover = ({ upgrade }) => {
    const cookies = useSelector(getCookies);
    const { price, name, amount, level } = upgrade;
    const amountArr = [1, 5, 25, 50, 100, 150, 1200, 250, 300, 350, 400, 450, 500, 550];

    const condition = amount >= amountArr[level - 1];

    return (
        <BoxStyle>
            <BoxStyleList>
                {!condition && <li><b style={{ color: 'tomato' }}>You need to have {amountArr[level - 1]} {name}</b></li>}
                <li>Price: <b style={{ color: 'teal' }}> {price}</b></li>
                <li>After upgrade <b style={{ color: 'teal' }}> {name} </b>will produce <b style={{ color: 'teal' }}> twice</b> cookies</li>
            </BoxStyleList>
        </BoxStyle>
    )
}
