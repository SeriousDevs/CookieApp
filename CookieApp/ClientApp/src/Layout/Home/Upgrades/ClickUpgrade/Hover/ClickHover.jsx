import { BoxStyle, BoxStyleList } from "common/common.styled"
import { seriousNumbers } from "common/ConvertFunc/convertFunc";


export const ClickHover = ({value}) => {
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each click gives you <b style={{ color: 'teal' }}>{seriousNumbers(value)} cookies</b></li>
                <li>"Just click don't waste your time"</li>
            </BoxStyleList>
        </BoxStyle>
    )
}
