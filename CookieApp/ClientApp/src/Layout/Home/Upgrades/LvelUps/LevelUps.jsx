import Tooltip from "rc-tooltip"
import { memo, useState } from "react"
import { useSelector } from "react-redux"
import { getUpgrades } from "redux/gameAccSlice"
import { LevelUpList } from "./LevelUps.styled"
import LvlUpListItem from "./LeveUpsItem/LvlUpListItem"
import 'rc-tooltip/assets/bootstrap.css';
import { LvlUpHover } from "./LeveUpsItem/LvlUpHover/LvlUpHover"

const LevelUps = () => {
  const upgradeList = useSelector(getUpgrades);
  const [upgrade, setUpgrade] = useState({});
  
  const onLevelUpHover = (upgr) => {
    setUpgrade(upgr);
  }

  return (
    <Tooltip placement="left" destroyTooltipOnHide={true} overlay={<LvlUpHover upgrade={upgrade}/>}>
      <LevelUpList>
        {upgradeList && upgradeList.map(upgrade => <LvlUpListItem key={upgrade.id} onHover={onLevelUpHover} upgrade={upgrade} />)}
      </LevelUpList>
    </Tooltip>
  )
}

export default memo(LevelUps)