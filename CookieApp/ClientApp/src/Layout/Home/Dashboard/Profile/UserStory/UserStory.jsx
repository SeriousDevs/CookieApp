import { useSelector } from "react-redux";
import { getUserStory } from "redux/gameAccSlice";
import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";

export const UserStory = () => {
  const userStory = useSelector(getUserStory);
  const { image, story } = userStory;
  return (
    <UserImageBlock>
      <ProfileImage src={image} alt="#" />
      <ProfileStory>{story}</ProfileStory>
    </UserImageBlock>
  );
};
