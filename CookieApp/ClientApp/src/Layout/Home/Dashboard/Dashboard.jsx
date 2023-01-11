import { useSelector } from "react-redux"
import { getUser } from "redux/userSlice"
import { ProfileBlock, StatsBlock, Heading, StatsItem, StatsList, UserImage, UserName, Wrapper, LeadershipBlock, LeadershipList, LeadershipItem, Position, CookiesAmount } from "./Dashboars.styled"

export const Dashboard = () => {
  const user = useSelector(getUser);
  return (
    <Wrapper>
      <ProfileBlock>
        <UserName>{user.toUpperCase()}</UserName>
        <UserImage src="#" alt="#" />
      </ProfileBlock>
      <StatsBlock>
        <Heading>Statistic</Heading>
        <StatsList>
        <StatsItem>Rating: 10</StatsItem>
        <StatsItem>Clicks per second: 10</StatsItem>
        <StatsItem>Total clicks: 10</StatsItem>
        <StatsItem>Total upgrades: 10</StatsItem>
        </StatsList>
      </StatsBlock>
      <LeadershipBlock>
        <Heading>Leadership</Heading>
        <LeadershipList>
          <LeadershipItem>
            <Position>1</Position>
            <p>Name</p>
            <CookiesAmount>10</CookiesAmount>
          </LeadershipItem>
        </LeadershipList>
      </LeadershipBlock>
    </Wrapper>
  )
}
