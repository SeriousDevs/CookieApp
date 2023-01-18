import { BoxStyle, BoxStyleList } from '../../common.styled';
import aveta from "aveta";

export const Hover = ({upgrade }) => {
    const {name, amount, baseValue} = upgrade;
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each {name} produces <b style={{color: 'teal'}}>{aveta(Math.round((baseValue) * 10) / 10)} cookies</b></li>
                <li>{aveta(amount)} {name} producing <b style={{color: 'teal'}}>{aveta(Math.round((baseValue * amount) * 10) / 10)} cookies </b> per second</li>
            </BoxStyleList>
        </BoxStyle>
    )
} 