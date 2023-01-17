import { BoxStyle, BoxStyleList } from '../../common.styled';

export const Hover = ({ upgrade }) => {
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each {upgrade.name} produces <b style={{color: 'teal'}}>{Math.round((upgrade.baseValue) * 10) / 10} cookies</b></li>
                <li>{upgrade.amount} {upgrade.name} producing <b style={{color: 'teal'}}>{Math.round((upgrade.baseValue * upgrade.amount) * 10) / 10} cookies </b> per second</li>
            </BoxStyleList>
        </BoxStyle>
    )
} 