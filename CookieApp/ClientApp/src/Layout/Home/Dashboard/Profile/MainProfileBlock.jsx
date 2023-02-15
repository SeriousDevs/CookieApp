import { memo } from "react";
import { ProfileBlock, UserName } from "./MainProfileBlock.styled";
import { UserStory } from "./UserStory/UserStory";

const MainProfileBlock = ({ user }) => {
  return (
    <ProfileBlock>
      <UserName>{user?.toUpperCase()}</UserName>
      <UserStory />
    </ProfileBlock>
  );
};

export default memo(MainProfileBlock);
