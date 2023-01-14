import { useSelector } from "react-redux";
import { getCookies, getTotalClicks, getUpgrades } from "redux/gameAccSlice";
import { StatsBlock, StatsItem, StatsList } from "./Statistics.styled";
import { Heading } from '../Dashboard.styled'
import { statisticsLogic } from "./statisticsLogic";

export const Statistics = () => {
 const clicks = useSelector(getTotalClicks);
  const upgrades = useSelector(getUpgrades);
  const cookies = useSelector(getCookies);
  
  const obj = statisticsLogic(clicks, upgrades, cookies);
 
  const {netWorth, totalClicks, totalUpgrades} = obj;

  return (
     <StatsBlock>
        <Heading>Statistic</Heading>
        <StatsList>
        <StatsItem>Net Worth: {netWorth}</StatsItem>
        <StatsItem>Clicks per second: 10</StatsItem>
        <StatsItem>Total clicks: {totalClicks}</StatsItem>
        <StatsItem>Total upgrades: {totalUpgrades}</StatsItem>
        </StatsList>
      </StatsBlock>
  )
}
