import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";

export const UserStory = () => {
  return (
    <UserImageBlock>
      <ProfileImage src="images/Profile/1.png" alt="#" />
      <ProfileStory>
        My life was not the best, and I decided that it was my time to change it
        all...
      </ProfileStory>
    </UserImageBlock>
  );
};
