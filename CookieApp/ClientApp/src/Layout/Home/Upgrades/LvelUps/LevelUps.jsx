import { useSelector } from "react-redux"
import { getUpgrades } from "redux/gameAccSlice"
import { LevelUpList } from "./LevelUps.styled"
import { LvlUpListItem } from "./LeveUpsItem/LvlUpListItem"

export const LevelUps = () => {
    const upgradeList = useSelector(getUpgrades);

  return (
      <LevelUpList>
          {upgradeList && upgradeList.map(upgrade => <LvlUpListItem key={upgrade.id} upgrade={upgrade} />) }
    </LevelUpList>
  )
}

