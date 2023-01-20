import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyUpgrade, getCookies, upgradeTick } from 'redux/gameAccSlice';
import { AdditionalWrapper, UpgradeName, ListItemCentralDiv, Amount, UpgradeImage, UpgradeListItem, UpgradePrice } from './UpgradesListItem.styled';
import Hover from 'common/components/Hover/Hover.jsx';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';

const UpgradesListItem = ({counter, amount = 0, name = 'name', basePrice = 100, baseValue = 0, image, upgradeInfoId=0 }) => {
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
        <Tooltip placement="left" destroyTooltipOnHide={true} overlay={<Hover upgrade={{ name, baseValue, amount }} />}>
            <UpgradeListItem onClick={() => handlerUpgradesClick()}>
                <AdditionalWrapper>
                    <UpgradeImage src={image} alt='upgrade img' />
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