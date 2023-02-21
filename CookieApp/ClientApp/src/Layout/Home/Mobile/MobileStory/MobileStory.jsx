import { MobileContainer, MobileTitle } from "common/common.styled";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserStories } from "redux/gameAccSlice";
import {
  MobileStoryList,
  MobileStoryItem,
  StoryImage,
  StoryText,
} from "./MobileStory.styled";

const MobileStory = () => {
  const stories = useSelector(getUserStories);

  return (
    <MobileContainer>
      <MobileTitle>Story</MobileTitle>
      <MobileStoryList>
        {[...stories].reverse().map((story, index) => (
          <MobileStoryItem key={index}>
            <StoryImage src={story.image} alt="Story Image" />
            <StoryText>{story.story}</StoryText>
          </MobileStoryItem>
        ))}
      </MobileStoryList>
    </MobileContainer>
  );
};

export default memo(MobileStory);
