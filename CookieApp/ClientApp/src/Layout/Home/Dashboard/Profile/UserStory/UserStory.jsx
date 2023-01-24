import { ProfileImage, ProfileStory, UserImageBlock } from "./UserStory.styled";
const arr = [
  "My life was not the best, and I decided that it was my time to change it all...",
  "And that's how I became a simple cook...",
  "It was very hard for me, and I was sick of this life, until one moment...",
  "I met her, my ray of sunshine in this gloomy life.",
  "I continued to work in the bakery, but I realized that I had someone else to live for.",
  "And unexpectedly, it turned out that her grandmother is the owner of this place.",
  "Business was going well and grandmother decided to leave the bakery to us, but why? We didn't understand...",
  "We didn't lose our cool and made this place very successful and attractive to everyone who passes by.",
  "Once grandmother came to visit us, and it turned out that she had opened a restaurant, and I became her head chef.",
  "Then I realized that I had to move on. And I opened a franchise",
  "There is no limit to progress, I need to build a factory",
  "Since I have factories, I realized that I could do business all over the world.",
  "Having done business all over the planet, you can go further, and I decided that it would be space.",
  "There's more. And I decided to build my empire in the past so that people would learn what cookies are from me.",
  "Well, we don't believe that you got here on your own, so we just congratulate you. And if you did it all on your own, go ahead and write here: vut1111111@gmail.com or allonsy053@gmail.com, and share your experience and how you like our game. Have you checked out our RXY and ALG currencies?",
];
let story = 1;
export const UserStory = () => {
  return (
    <UserImageBlock>
      <ProfileImage src={`images/Profile/${story}.png`} alt="#" />
      <ProfileStory>{arr[story - 1]}</ProfileStory>
    </UserImageBlock>
  );
};
