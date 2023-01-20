import { useSelector } from "react-redux";
import { getTotalClicks, getUpgrades, getNetWorth, getPerSec } from "redux/gameAccSlice";
import { StatsBlock, StatsItem, StatsList } from "./Statistics.styled";
import { Heading } from '../Dashboard.styled';
import { memo } from "react";
import { seriousNumbers } from 'common/ConvertFunc/convertFunc';

const Statistics = () => {
  const clicks = useSelector(getTotalClicks);
  const upgrades = useSelector(getUpgrades);
  const netWorth = useSelector(getNetWorth);
  const perSec = useSelector(getPerSec);
  
  const totalUpgrades = upgrades.reduce((acc, el) => (acc += el.amount), 0);

  return (
     <StatsBlock>
        <Heading>Statistic</Heading>
        <StatsList>
        <StatsItem>Net Worth: {seriousNumbers(Math.round(netWorth))}</StatsItem>
        <StatsItem>Cookies per second: {seriousNumbers(perSec)}</StatsItem>
        <StatsItem>Total clicks: {clicks}</StatsItem>
        <StatsItem>Total upgrades: {totalUpgrades}</StatsItem>
        </StatsList>
      </StatsBlock>
  )
}
 export default memo(Statistics)