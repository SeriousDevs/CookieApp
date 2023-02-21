import { seriousNumbers } from "common/ConvertFunc/convertFunc";
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { buyClickUpgrade, getClickUpgr, getCookies } from "redux/gameAccSlice";
import { BoldText, Paragraph, UpgradeAmount, UpgradeImage, UpgradeItem, UpgradeName, UpgradePrice } from "../MobileStoreListItem/MobileStoreListItem.styled"

const MobileClickUpgrade = () => {
    const dispatch = useDispatch();
    const clickInfo = useSelector(getClickUpgr);
    const cookies = useSelector(getCookies);
    const { level, basePrice, image, name } = clickInfo;

    let upgrPrice = basePrice;
    for (let i = 1; i < level; i++) {
        upgrPrice *= 4;
    }
    const condition = !(cookies < upgrPrice);
    const handleClick = () => {
        if (cookies < upgrPrice) return;
        dispatch(buyClickUpgrade(upgrPrice));
    };

    return (
        <UpgradeItem onClick={handleClick} available={condition}>
            <UpgradeImage src={image} alt={name} />
            <UpgradeName available={condition}>{name}</UpgradeName>
            <UpgradePrice>Price: {seriousNumbers(upgrPrice)}</UpgradePrice>
            <UpgradeAmount>LVL: {level}</UpgradeAmount>
            <Paragraph>Each click gives you <BoldText available={condition}>{seriousNumbers(Math.round((2 ** (level - 1)) * 10) / 10)} cookies</BoldText></Paragraph>
        </UpgradeItem>
    )
}

export default memo(MobileClickUpgrade)
