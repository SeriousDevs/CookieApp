import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserStories } from "redux/gameAccSlice";
import {
  ProfileBlock,
  ProfileButton,
  UserName,
} from "./MainProfileBlock.styled";
import { UserStory } from "./UserStory/UserStory";

const MainProfileBlock = ({ user }) => {
  const userStories = useSelector(getUserStories);
  const lastIndex = userStories.length - 1;
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(lastIndex);

  useEffect(() => {
    setSelectedStoryIndex(lastIndex);
  }, [lastIndex]);

  const selectedStory = userStories[selectedStoryIndex];

  const handlePrevClick = () => {
    setSelectedStoryIndex((prevIndex) =>
      prevIndex === 0 ? userStories.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedStoryIndex((prevIndex) => (prevIndex + 1) % userStories.length);
  };

  return (
    <ProfileBlock>
      <UserName>{user?.toUpperCase()}</UserName>
      <UserStory userStory={selectedStory} />
      <ProfileButton onClick={handlePrevClick}>Prev</ProfileButton>
      <ProfileButton right onClick={handleNextClick}>
        Next
      </ProfileButton>
    </ProfileBlock>
  );
};

export default memo(MainProfileBlock);
