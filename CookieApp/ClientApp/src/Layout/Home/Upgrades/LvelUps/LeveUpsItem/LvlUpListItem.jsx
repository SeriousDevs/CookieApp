import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyLevelUpgrade, getCookies } from "redux/gameAccSlice";
import { LevelUpListItem, LvlUpButton } from "./LvlUpListItem.styled"

const LvlUpListItem = ({ upgrade }) => {
    const dispatch = useDispatch();
    const cookies = useSelector(getCookies);
    const { amount, upgradeInfoId, level, basePrice } = upgrade;
    
    if (amount < 1) return;

    const amountArr = [1, 5, 25, 50, 100, 150, 1200, 250, 300, 350, 400, 450, 500, 550];
    const priceArr = [10, 50, 500, 50000, 5000000, 500000000, 500000000000, 500000000000000, 500000000000000000, 500000000000000000000, 5000000000000000000000000, 50000000000000000000000000, 500000000000000000000000000000000, 5000000000000000000000000000000000000];
    
    const condition = amount >= amountArr[level - 1];
    const price = basePrice * priceArr[level -1];
    
    const handleOnClick = () => {
        if (price > cookies) return;
        
        const obj = {
            price,
            upgradeInfoId,
        }

        dispatch(buyLevelUpgrade(obj));
    }

    return (
        <LevelUpListItem>
            <LvlUpButton type='button' onClick={handleOnClick} disabled={!condition}>{price}</LvlUpButton>
        </LevelUpListItem>
    );
}

export default memo(LvlUpListItem)
