import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyClickUpgrade, getClickUpgr, getCookies } from 'redux/gameAccSlice';
import { ClickUpgradeItem,  AdditionalWrapper, Amount, ListItemCentralDiv, UpgradeImage, UpgradeName, UpgradePrice } from './ClickUpgrade.styled';

const ClickUpgrade = () => {
  const dispatch = useDispatch();
  const clickInfo = useSelector(getClickUpgr);
  const cookies = useSelector(getCookies)
  const { level, basePrice, image } = clickInfo;

  let upgrPrice = basePrice;
  for (let i = 1; i < level; i++){
    upgrPrice = upgrPrice * 4
  }
  console.log({level, upgrPrice})
  
  const handleClick = () => {
    if (cookies < upgrPrice) return;
        dispatch(buyClickUpgrade(upgrPrice))
    }
 

  return (
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
  )
}
 export default memo(ClickUpgrade)