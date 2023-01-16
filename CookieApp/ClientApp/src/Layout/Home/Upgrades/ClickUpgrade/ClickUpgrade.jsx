import { useDispatch, useSelector } from 'react-redux';
import { buyClickUpgrade, getClickUpgr } from 'redux/gameAccSlice';
import { ClickUpgradeItem,  AdditionalWrapper, Amount, ListItemCentralDiv, UpgradeImage, UpgradeName, UpgradePrice } from './ClickUpgrade.styled';

export const ClickUpgrade = () => {
  const dispatch = useDispatch();
  const clickInfo = useSelector(getClickUpgr);
  const { level, basePrice, image } = clickInfo;

  let upgrPrice = basePrice;
  
  for (let i = 1; i < level; i++){
    upgrPrice = basePrice * 4
  }
  
  const handleClick = () => {
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
