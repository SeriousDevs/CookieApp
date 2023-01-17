import { BoxStyle, BoxStyleList } from '../../common.styled';

export const Hover = ({ upgrade }) => {
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each {upgrade.name} produces <b style={{color: 'teal'}}>{upgrade.baseValue} cookies</b></li>
                <li>{upgrade.amount} {upgrade.name} producing <b style={{color: 'teal'}}>{upgrade.baseValue * upgrade.amount} cookies </b> per second</li>
            </BoxStyleList>
        </BoxStyle>
    )
}