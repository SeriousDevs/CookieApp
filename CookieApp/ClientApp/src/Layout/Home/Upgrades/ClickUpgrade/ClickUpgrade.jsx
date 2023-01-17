import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyClickUpgrade, getClickUpgr, getCookies } from 'redux/gameAccSlice';
import { ClickUpgradeItem,  AdditionalWrapper, Amount, ListItemCentralDiv, UpgradeImage, UpgradeName, UpgradePrice } from './ClickUpgrade.styled';
import { Hover } from 'common/components/Hover/Hover.jsx';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const ClickUpgrade = () => {
  const dispatch = useDispatch();
  const clickInfo = useSelector(getClickUpgr);
  const cookies = useSelector(getCookies)
  const { level, basePrice, image } = clickInfo;

  let upgrPrice = basePrice;
  for (let i = 1; i < level; i++){
    upgrPrice = upgrPrice * 4
  }
  
  const handleClick = () => {
    if (cookies < upgrPrice) return;
        dispatch(buyClickUpgrade(upgrPrice))
    }
 

  return (<>
    <Tooltip placement="left" trigger={'hover'} overlay={<p>test</p>}>
        <ClickUpgradeItem onClick={()=> handleClick()}>
            <AdditionalWrapper>
                <UpgradeImage src={image} alt='clickImage'/>
                <ListItemCentralDiv>
                    <UpgradeName>Click</UpgradeName>
                    <UpgradePrice>{upgrPrice}</UpgradePrice>
                </ListItemCentralDiv>
          </AdditionalWrapper>
            <Amount>Lvl:{level}</Amount>
    </ClickUpgradeItem>
  </Tooltip>
  </>
  )
}
 export default memo(ClickUpgrade)