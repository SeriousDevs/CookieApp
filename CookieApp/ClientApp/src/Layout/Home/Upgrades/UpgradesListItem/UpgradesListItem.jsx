import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyUpgrade, getCookies, upgradeTick } from 'redux/gameAccSlice';
import { AdditionalWrapper, UpgradeName, ListItemCentralDiv, Amount, UpgradeImage, UpgradeListItem, UpgradePrice } from './UpgradesListItem.styled';

export const UpgradesListItem = ({counter, amount = 0, name = 'name', basePrice = 100, baseValue = 0, level = 1, img, upgradeInfoId=0 }) => {
    const dispatch = useDispatch();
    const cookies = useSelector(getCookies);
    const upgrPrice = Math.ceil(basePrice * (1.15 ** amount));


    useEffect(() => {
        if (amount >= 1 && counter !== 0) {
            dispatch(upgradeTick(baseValue*amount));
        }
    }, [counter])
    
    

    const handlerUpgradesClick = () => {
        if (upgrPrice <= cookies) {

            dispatch(buyUpgrade({ upgradeInfoId, upgrPrice }));
        }
        
    }

    return (
        <UpgradeListItem onClick={()=> handlerUpgradesClick()}>
            <AdditionalWrapper>
                <UpgradeImage src={img} alt='upgrade img'/>
                <ListItemCentralDiv>
                    <UpgradeName>{name}</UpgradeName>
                    <UpgradePrice>{upgrPrice}</UpgradePrice>
                </ListItemCentralDiv>
            </AdditionalWrapper>
            <Amount>{amount}</Amount>
        </UpgradeListItem>
    )
};
