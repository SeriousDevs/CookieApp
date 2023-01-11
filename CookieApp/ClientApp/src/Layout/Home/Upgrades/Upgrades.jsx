import React from 'react'
import { AdditionalWrapper, CentralDivTxt, ListItemCentralDiv, Quantities, Store, UpgradeImage, UpgradeList, UpgradeListItem, UpgradesLarge, UpgradesMini, UpgradesWrapper } from './Upgrades.styled';

export const Upgrades = () => {
    return (
        <UpgradesWrapper>
            
            <Store>Store</Store>
            <UpgradesMini>
                Upgrades of the upgrades
                {/* <ul>
                    <li></li>
                </ul> */}
            </UpgradesMini>
            <UpgradesLarge>
                <UpgradeList>
                    <UpgradeListItem>
                        <AdditionalWrapper>
                        <UpgradeImage src="#" alt="img of the upgrade" />
                        <ListItemCentralDiv>
                        <CentralDivTxt>Cursor</CentralDivTxt>
                        <CentralDivTxt>100</CentralDivTxt>
                        </ListItemCentralDiv>
                        </AdditionalWrapper>
                        <Quantities>1</Quantities>
                        {/* <p>1 upgrade producing: </p>
                        <p>Each produces: </p> */}
                    </UpgradeListItem>
                </UpgradeList>
            </UpgradesLarge>
        </UpgradesWrapper>
    )
};
