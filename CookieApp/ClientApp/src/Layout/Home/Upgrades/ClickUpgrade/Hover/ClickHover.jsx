import { BoxStyle, BoxStyleList } from "common/common.styled"


export const ClickHover = ({value}) => {
    return (
        <BoxStyle>
            <BoxStyleList>
                <li>Each click gives you <b style={{ color: 'teal' }}>{value} cookies</b></li>
                <li>"Just click don't waste your time"</li>
            </BoxStyleList>
        </BoxStyle>
    )
}
