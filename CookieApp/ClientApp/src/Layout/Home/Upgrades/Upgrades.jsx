import React from 'react'
import { useSelector } from 'react-redux';
import { getUpgrades } from 'redux/gameAccSlice';
import { UpgradesListItem } from './UpgradesListItem/UpgradesListItem';
import {
    Store,
    UpgradeList,
    UpgradesLarge,
    UpgradesMini,
    UpgradesWrapper
} from './Upgrades.styled';


export const Upgrades = () => {
    const upgrades = useSelector(getUpgrades);
    
    return (
        <UpgradesWrapper>
            
            <Store>Store</Store>
            <UpgradesMini>
                Upgrades of the upgrades
            </UpgradesMini>
            <UpgradesLarge>
                <UpgradeList>
                    {upgrades.map(({ name, id, amount, price, image }) => {
                        return <UpgradesListItem key={id} id={id} name={name} amount={amount} price={price} img={image} />
                    })}
                </UpgradeList>
            </UpgradesLarge>
        </UpgradesWrapper>
    )
};
