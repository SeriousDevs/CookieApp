import { useSelector } from 'react-redux';
import { getUpgrades } from 'redux/gameAccSlice';
import UpgradesListItem from './UpgradesListItem/UpgradesListItem';
import {
    Store,
    UpgradeList,
    UpgradesLarge,
    LevelUpBlock,
    UpgradesWrapper
} from './Upgrades.styled';
import LevelUps from './LvelUps/LevelUps';
import ClickUpgrade from './ClickUpgrade/ClickUpgrade';
import { memo } from 'react';


const Upgrades = ({counter}) => {
    const upgrades = useSelector(getUpgrades);
    
    return (
        <UpgradesWrapper>
            
            <Store>Store</Store>
            <LevelUpBlock>
                <LevelUps/>
            </LevelUpBlock>
            <UpgradesLarge>
                <ClickUpgrade/>
                <UpgradeList>
                    {upgrades.map(({ id, ...props }) => {
                        return <UpgradesListItem key={id} counter={counter} {...props} />
                    })}
                </UpgradeList>
            </UpgradesLarge>
        </UpgradesWrapper>
    )
};

export default memo(Upgrades)