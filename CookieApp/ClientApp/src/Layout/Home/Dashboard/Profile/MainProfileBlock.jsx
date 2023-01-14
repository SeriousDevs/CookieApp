import { Logout } from "./Logout/Logout"
import { ProfileBlock, UserImage, UserName } from "./MainProfileBlock.styled"

export const MainProfileBlock = ({user}) => {
    return (
        <ProfileBlock>
            <Logout/>
            <UserName>{user.toUpperCase()}</UserName>
            <UserImage src="#" alt="#" />
        </ProfileBlock>
    )
}
