import { MobileContainer, MobileTitle } from "common/common.styled"
import { memo } from "react"
import { useSelector } from "react-redux"
import { getUserList } from "redux/gameAccSlice"
import { MobileUserList } from "./MobileDashboard.styled"
import MobileDshaboardListItem from "./MobileDshaboardListItem/MobileDshaboardListItem"

const MobileDashboard = () => {
  const users = useSelector(getUserList);
  if (users.length <= 0) return;

  return (
    <MobileContainer>
      <MobileTitle>
        Dashboard
      </MobileTitle>
      <MobileUserList>
       {[...users].sort((a,b) => b.networth - a.networth).map((el, idx) => <MobileDshaboardListItem key={el.id} name={el.login} position={idx + 1} networth={el.networth} />)}
      </MobileUserList>
    </MobileContainer>
  )
}

export default memo(MobileDashboard);