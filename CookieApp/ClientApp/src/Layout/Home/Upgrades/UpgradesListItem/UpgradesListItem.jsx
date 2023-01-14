import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyUpgrade, getCookies } from 'redux/gameAccSlice';
import { AdditionalWrapper, CentralDivTxt, ListItemCentralDiv, Quantities, UpgradeImage, UpgradeListItem } from './UpgradesListItem.styled';

export const UpgradesListItem = ({id, amount = 1, name = 'name', price = 100, img }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(amount);
    const [upgrPrice, setUpgrPrice] = useState(price);

    const cookies = useSelector(getCookies);

    const handlerUpgradesClick = () => {
        if (upgrPrice <= cookies) {
            setQuantity(p => p + 1);
            setUpgrPrice(p => Math.round(p * 2));
        
            const obj = {
                    id,
                    price: upgrPrice*2,
                    amount: quantity + 1,
                    prevPrice: upgrPrice,
            }
            
            dispatch(buyUpgrade(obj));
        }
    }

    return (
        <UpgradeListItem onClick={()=> handlerUpgradesClick()}>
            <AdditionalWrapper>
                <UpgradeImage src={img} />
                <ListItemCentralDiv>
                    <CentralDivTxt>{name}</CentralDivTxt>
                    <CentralDivTxt>{upgrPrice}</CentralDivTxt>
                </ListItemCentralDiv>
            </AdditionalWrapper>
            <Quantities>{quantity}</Quantities>
        </UpgradeListItem>
    )
};
