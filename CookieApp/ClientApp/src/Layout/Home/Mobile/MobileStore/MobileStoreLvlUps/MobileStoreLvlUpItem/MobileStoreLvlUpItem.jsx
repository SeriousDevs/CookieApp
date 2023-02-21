import { seriousNumbers } from 'common/ConvertFunc/convertFunc';
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyLevelUpgrade, getCookies } from 'redux/gameAccSlice';
import { UpgradeAmount, UpgradeImage, UpgradeItem, UpgradeName, UpgradePrice, UpgradeText } from './MobileStoreLvlUpItem.styled'

const MobileStoreLvlUpItem = ({ upgrade }) => {
  const dispatch = useDispatch();
  const cookies = useSelector(getCookies);
  const { amount, upgradeInfoId, level, basePrice, lvlImage, name } = upgrade;

  if (amount < 1) return;

  const amountArr = [
    1, 5, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550,
  ];
  const priceArr = [
    10, 50, 500, 50000, 5000000, 500000000, 500000000000, 500000000000000,
    500000000000000000, 500000000000000000000, 5000000000000000000000000,
    50000000000000000000000000, 500000000000000000000000000000000,
    5000000000000000000000000000000000000,
  ];

  const price = basePrice * priceArr[level - 1];
  const condition = amount >= amountArr[level - 1] && cookies >= price;

  const handleOnClick = () => {
    if (!condition) return;

    const obj = {
      price,
      upgradeInfoId,
    };

    dispatch(buyLevelUpgrade(obj));
  };

  return (
    <UpgradeItem onClick={handleOnClick} available={condition}>
      <UpgradeImage src={upgrade.lvlImage} alt={upgrade.name} />
      <UpgradeName>{upgrade.name}</UpgradeName>
      <UpgradePrice>{seriousNumbers(price)}</UpgradePrice>
      {!condition && <UpgradeText>You need to have <b style={{color:'yellow'}}>{amountArr[level - 1]} {name}</b></UpgradeText>}
    </UpgradeItem>
  )
}

export default memo(MobileStoreLvlUpItem)