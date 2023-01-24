import { memo } from "react";
import { Logout } from "./Logout/Logout";
import { ProfileBlock, UserName } from "./MainProfileBlock.styled";
import { UserStory } from "./UserStory/UserStory";

const MainProfileBlock = ({ user }) => {
  return (
    <ProfileBlock>
      <Logout />
      <UserName>{user.toUpperCase()}</UserName>
      <UserStory />
    </ProfileBlock>
  );
};

export default memo(MainProfileBlock);
