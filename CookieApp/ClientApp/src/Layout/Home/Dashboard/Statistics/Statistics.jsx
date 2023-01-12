import { useSelector } from "react-redux";
import { getCookies, getTotalClicks, getUpgrades } from "redux/gameAccSlice";
import { Heading, StatsBlock, StatsItem, StatsList } from '../Dashboars.styled'
import { statisticsLogic } from "./statisticsLogic";

export const Statistics = () => {
 const totalClicks = useSelector(getTotalClicks);
  const upgrades = useSelector(getUpgrades);
  const cookies = useSelector(getCookies);
  
  const obj = statisticsLogic(totalClicks, upgrades, cookies);


  return (
     <StatsBlock>
        <Heading>Statistic</Heading>
        <StatsList>
        <StatsItem>Net Worth: {obj.netWorth}</StatsItem>
        <StatsItem>Clicks per second: 10</StatsItem>
        <StatsItem>Total clicks: {obj.totalClicks}</StatsItem>
        <StatsItem>Total upgrades: {obj.totalUpgrades}</StatsItem>
        </StatsList>
      </StatsBlock>
  )
}
