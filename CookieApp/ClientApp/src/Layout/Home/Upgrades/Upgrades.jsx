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


export const Upgrades = ({counter}) => {
    const upgrades = useSelector(getUpgrades);
    
    return (
        <UpgradesWrapper>
            
            <Store>Store</Store>
            <UpgradesMini>
                Level ups
            </UpgradesMini>
            <UpgradesLarge>
                <UpgradeList>
                    {upgrades.map(({ id, ...props }) => {
                        return <UpgradesListItem key={id} counter={counter} {...props} />
                    })}
                </UpgradeList>
            </UpgradesLarge>
        </UpgradesWrapper>
    )
};
