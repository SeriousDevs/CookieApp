import { MobileTitle } from "common/common.styled"
import { memo } from "react"
import { useSelector } from "react-redux";
import { getUpgrades } from "redux/gameAccSlice";
import MobileClickUpgrade from "./MobileClickUpgrade/MobileClickUpgrade";
import { MobileStoreContainer, UpgradeList } from "./MobileStore.styled";
import MobileListItem from "./MobileStoreListItem/MobileListItem";
import MobileLevelUps from "./MobileStoreLvlUps/MobileLevelUps";

const MobileStore = () => {
  const upgrades = useSelector(getUpgrades);

  return (
    <MobileStoreContainer>
      <MobileTitle>Upgrades X2 Multiplier</MobileTitle>
      <MobileLevelUps/>
      <MobileTitle>Upgrades</MobileTitle>
      <UpgradeList>
        <MobileClickUpgrade/>
        {upgrades.map((upgrade) => <MobileListItem key={upgrade.id} upgrade={upgrade} />)}
      </UpgradeList>
    </MobileStoreContainer>
  );
};

export default memo(MobileStore)