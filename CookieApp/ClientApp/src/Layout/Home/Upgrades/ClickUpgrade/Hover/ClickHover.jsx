import { BoxStyle, BoxStyleList } from "common/common.styled"
import aveta from "aveta";


export const ClickHover = ({value}) => {
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each click gives you <b style={{ color: 'teal' }}>{aveta(value)} cookies</b></li>
                <li>"Just click don't waste your time"</li>
            </BoxStyleList>
        </BoxStyle>
    )
}
