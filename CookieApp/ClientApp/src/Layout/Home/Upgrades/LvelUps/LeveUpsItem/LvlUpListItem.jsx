import { useHover } from "hooks/useHover";
import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyLevelUpgrade, getCookies } from "redux/gameAccSlice";
import {
  BackgroundBlock,
  LevelUpListItem,
  LvlUpButton,
  LvlUpImg,
} from "./LvlUpListItem.styled";

const LvlUpListItem = ({ onHover, upgrade }) => {
  const dispatch = useDispatch();
  const cookies = useSelector(getCookies);
  const ref = useRef();
  const isHovering = useHover(ref);
  const { amount, upgradeInfoId, level, basePrice, lvlImage, name } = upgrade;

  useEffect(() => {
    if (!isHovering) return;
    const obj = { ...upgrade, price };
    onHover(obj);
  }, [isHovering]);

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
    <>
      <LevelUpListItem ref={ref}>
        <LvlUpButton condition={condition}>
          <LvlUpImg src={lvlImage} alt={name} />
        </LvlUpButton>
        <BackgroundBlock
          onClick={handleOnClick}
          condition={condition}
        ></BackgroundBlock>
      </LevelUpListItem>
    </>
  );
};

export default memo(LvlUpListItem);
