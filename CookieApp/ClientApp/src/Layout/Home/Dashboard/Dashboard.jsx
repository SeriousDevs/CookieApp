import { useSelector } from "react-redux"
import { getUserList } from "redux/gameAccSlice";
import { getUser } from "redux/userSlice"
import { ProfileBlock, Heading, UserImage, UserName, Wrapper, LeadershipBlock, LeadershipList} from "./Dashboars.styled"
import { LeadershipElement } from "./LeadershipItem/LeadershipElement";
import { Statistics } from "./Statistics/Statistics";

export const Dashboard = () => {
  const user = useSelector(getUser);
  const usersList = useSelector(getUserList);

  return (
    <Wrapper>
      <ProfileBlock>
        <UserName>{user.toUpperCase()}</UserName>
        <UserImage src="#" alt="#" />
      </ProfileBlock>
     <Statistics/>
      <LeadershipBlock>
        <Heading>Leadership</Heading>
        {/*<LeadershipList>*/}
        {/*  {usersList.length > 0 && usersList.sort((a, b) => a.id - b.id).map((el, idx) => <LeadershipElement key={el.id} name={el.login} position={idx+1} />)}*/}
        {/*</LeadershipList>*/}
      </LeadershipBlock>
    </Wrapper>
  )
}
