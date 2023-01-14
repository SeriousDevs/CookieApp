import { useSelector } from "react-redux";
import { getTotalClicks, getUpgrades, getNetWorth } from "redux/gameAccSlice";
import { StatsBlock, StatsItem, StatsList } from "./Statistics.styled";
import { Heading } from '../Dashboard.styled';

export const Statistics = () => {
 const clicks = useSelector(getTotalClicks);
  const upgrades = useSelector(getUpgrades);
  const netWorth = useSelector(getNetWorth);
  
  const totalUpgrades = upgrades.reduce((acc, el) => (acc += el.amount), 0);

  return (
     <StatsBlock>
        <Heading>Statistic</Heading>
        <StatsList>
        <StatsItem>Net Worth: {netWorth}</StatsItem>
        <StatsItem>Clicks per second: 10</StatsItem>
        <StatsItem>Total clicks: {clicks}</StatsItem>
        <StatsItem>Total upgrades: {totalUpgrades}</StatsItem>
        </StatsList>
      </StatsBlock>
  )
}
