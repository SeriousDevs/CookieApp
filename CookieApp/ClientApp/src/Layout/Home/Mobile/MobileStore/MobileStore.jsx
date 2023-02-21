import { MobileContainer, MobileTitle } from "common/common.styled"
import { memo } from "react"
import { useSelector } from "react-redux";
import { getUpgrades } from "redux/gameAccSlice";
import { MobileLvlUpList, MobileLvlUps } from "./MobileStore.styled"

const MobileStore = () => {
  const upgradeList = useSelector(getUpgrades);

  return (
    <MobileContainer>
      <MobileTitle>Store</MobileTitle>
      <MobileLvlUps>
        <MobileLvlUpList>
          {/* <MobileStoreLvlUpItem key={} levelUp ={} /> */}
        </MobileLvlUpList>
      </MobileLvlUps>
    </MobileContainer>
  )
}

export default memo(MobileStore)
