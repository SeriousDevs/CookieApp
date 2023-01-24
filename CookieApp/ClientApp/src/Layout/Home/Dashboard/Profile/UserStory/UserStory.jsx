import { useSelector } from "react-redux";
import { getUserStory } from "redux/gameAccSlice";
import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";

export const UserStory = () => {
  const userStory = useSelector(getUserStory);
  if (!userStory.image) return;
  const {
    story = "My life was not the best, and I decided that it was my time to change it all",
    image = "images/Profile/1.png",
  } = userStory;

  return (
    <UserImageBlock>
      <ProfileImage src={image} alt="#" />
      <ProfileStory>{story}</ProfileStory>
    </UserImageBlock>
  );
};
