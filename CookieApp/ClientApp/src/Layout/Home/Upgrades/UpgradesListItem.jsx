import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyUpgrade, getCookies } from 'redux/gameAcc';
import { AdditionalWrapper, CentralDivTxt, ListItemCentralDiv, Quantities, UpgradeImage, UpgradeListItem } from './Upgrades.styled';

export const UpgradesListItem = ({id, amount = 1, name = 'name', price = 100, img }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(amount);
    const [sum, setSum] = useState(price);

    const cookies = useSelector(getCookies);

    const handlerUpgradesClick = () => {
        if (sum <= cookies) {
            setQuantity(p => p + 1);
            setSum(p => Math.round(p * 2));
            
            const obj = {
                id,
                price: sum*2,
                amount: quantity+1,
            }
            
            dispatch(buyUpgrade(obj));
        }
    }

    return (
        <UpgradeListItem onClick={()=> handlerUpgradesClick()}>
            <AdditionalWrapper>
                <UpgradeImage src={img} alt="img of the upgrade" />
                <ListItemCentralDiv>
                    <CentralDivTxt>{name}</CentralDivTxt>
                    <CentralDivTxt>{sum}</CentralDivTxt>
                </ListItemCentralDiv>
            </AdditionalWrapper>
            <Quantities>{quantity}</Quantities>
        </UpgradeListItem>
    )
};
