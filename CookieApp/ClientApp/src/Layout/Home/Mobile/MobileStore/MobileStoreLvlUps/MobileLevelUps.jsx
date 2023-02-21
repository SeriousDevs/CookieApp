import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUpgrades } from 'redux/gameAccSlice';
import { UpgradeList } from './MobileLevelUps.styled';
import MobileStoreLvlUpItem from './MobileStoreLvlUpItem/MobileStoreLvlUpItem';

const MobileLevelUps = () => {
    const upgrades = useSelector(getUpgrades);
  return (
    <UpgradeList>
      {upgrades.map((upgrade) => <MobileStoreLvlUpItem key={upgrade.id} upgrade={upgrade} />)}
    </UpgradeList>
  );
};

export default memo(MobileLevelUps);
