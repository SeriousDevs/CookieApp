import { useSelector } from "react-redux";
import { getUserStory } from "redux/gameAccSlice";
import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";

export const UserStory = () => {
  const userStory = useSelector(getUserStory);
  if (!userStory.image) return;
  const { story, image } = userStory;

  return (
    <UserImageBlock>
      <ProfileImage src={image} alt="#" />
      <ProfileStory>{story}</ProfileStory>
    </UserImageBlock>
  );
};
