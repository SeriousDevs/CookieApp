import { useSelector } from "react-redux"
import { getUserList } from "redux/gameAccSlice";
import { getUser } from "redux/userSlice"
import { Wrapper} from "./Dashboard.styled"
import { MainLeadership } from "./Leadership/MainLeadershipBlock";
import { MainProfileBlock } from "./Profile/MainProfileBlock";
import { Statistics } from "./Statistics/Statistics";

export const Dashboard = () => {
  const user = useSelector(getUser);
  const usersList = useSelector(getUserList);

  return (
    <Wrapper>
      <MainProfileBlock user={user} />
      <Statistics />
      <MainLeadership users={usersList} />
    </Wrapper>
  )
}
