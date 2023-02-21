import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";

export const UserStory = ({ userStory }) => {
  const { story, image } = userStory;

  return (
    <UserImageBlock>
      <ProfileImage src={image} alt="#" />
      <ProfileStory>{story}</ProfileStory>
    </UserImageBlock>
  );
};
