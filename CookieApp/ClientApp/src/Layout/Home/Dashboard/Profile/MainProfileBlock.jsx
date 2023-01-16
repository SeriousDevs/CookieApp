import { memo } from "react"
import { Logout } from "./Logout/Logout"
import { ProfileBlock, UserImage, UserName } from "./MainProfileBlock.styled"

const MainProfileBlock = ({user}) => {
    return (
        <ProfileBlock>
            <Logout/>
            <UserName>{user.toUpperCase()}</UserName>
            <UserImage src="#" alt="#" />
        </ProfileBlock>
    )
}

export default memo(MainProfileBlock)