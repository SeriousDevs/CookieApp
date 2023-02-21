import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyUpgrade, getCookies } from 'redux/gameAccSlice';
import { AdditionalWrapper, UpgradeName, ListItemCentralDiv, Amount, UpgradeImage, UpgradeListItem, UpgradePrice } from './UpgradesListItem.styled';
import Hover from 'common/components/Hover/Hover.jsx';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';

const UpgradesListItem = ({ amount = 0, name = 'name', basePrice = 100, currentValue = 0, image, upgradeInfoId = 0 }) => {
    const dispatch = useDispatch();
    const cookies = useSelector(getCookies);
    
    const upgrPrice = Math.ceil(basePrice * (1.15 ** amount)); 

    const handlerUpgradesClick = () => {
        if (upgrPrice <= cookies) {
            dispatch(buyUpgrade({ upgradeInfoId, upgrPrice }));
        }
    }

    return (
        <Tooltip placement="left" destroyTooltipOnHide={true} overlay={<Hover upgrade={{ name, currentValue, amount }} />}>
            <UpgradeListItem onClick={() => handlerUpgradesClick()}>
                <AdditionalWrapper>
                    <UpgradeImage src={image} alt={name} />
                    <ListItemCentralDiv>
                        <UpgradeName>{name}</UpgradeName>
                        <UpgradePrice>{seriousNumbers(upgrPrice)}</UpgradePrice>
                    </ListItemCentralDiv>
                </AdditionalWrapper>
                <Amount>{seriousNumbers(amount)}</Amount>
            </UpgradeListItem>
        </Tooltip>
    )
};

export default memo(UpgradesListItem)