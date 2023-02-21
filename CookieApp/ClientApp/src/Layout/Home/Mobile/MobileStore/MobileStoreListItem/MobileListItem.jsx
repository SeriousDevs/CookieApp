import { seriousNumbers } from "common/ConvertFunc/convertFunc";
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { buyUpgrade, getCookies } from "redux/gameAccSlice";
import { BoldText, Paragraph, UpgradeAmount, UpgradeImage, UpgradeItem, UpgradeName, UpgradePrice } from "./MobileStoreListItem.styled"

const MobileListItem = ({ upgrade:{basePrice, image, amount, name, upgradeInfoId, currentValue} }) => {
    const dispatch = useDispatch();
    const cookies = useSelector(getCookies);

    const upgrPrice = Math.ceil(basePrice * (1.15 ** amount)); 

    const condition = upgrPrice <= cookies;

    const handleUpgradesClick = () => {
        if (condition) {
            dispatch(buyUpgrade({ upgradeInfoId, upgrPrice }));
        }
    }

    return (
        <UpgradeItem onClick = {handleUpgradesClick} available={condition}>
            <UpgradeImage src={image} alt={name} />
            <UpgradeName available={condition}>{name}</UpgradeName>
            <UpgradePrice>Price: {seriousNumbers(upgrPrice)}</UpgradePrice>
            <UpgradeAmount>AMOUNT: {amount}</UpgradeAmount>
            <Paragraph>Your <BoldText available={condition}>{seriousNumbers(amount)} {name}</BoldText> producing <BoldText available={condition}>{seriousNumbers(Math.round((currentValue * amount) * 10) / 10)} cookies </BoldText> per second</Paragraph>
        </UpgradeItem>
    )
}

export default memo(MobileListItem)
