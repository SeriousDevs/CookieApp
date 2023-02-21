import { memo } from "react";
import { useSelector } from "react-redux";
import { MobileContainer, MobileTitle } from "common/common.styled";
import {
  getNetWorth,
  getPerSec,
  getTotalClicks,
  getUpgrades,
} from "redux/gameAccSlice";
import {
  MobileStatsItem,
  MobileStatsList,
  MobileStatsName,
  MobileStatsTitle,
  MobileStatsValue,
  MobileStatsWrapper,
} from "./MobileStats.styled";
import { seriousNumbers } from "common/ConvertFunc/convertFunc";

const MobileStats = () => {
  const clicks = useSelector(getTotalClicks);
  const upgrades = useSelector(getUpgrades);
  const netWorth = useSelector(getNetWorth);
  const perSec = useSelector(getPerSec);

  const totalUpgrades = upgrades.reduce((acc, el) => (acc += el.amount), 0);

  return (
    <MobileContainer>
        <MobileTitle>Statistics</MobileTitle>
        <MobileStatsList>
          <MobileStatsItem>
            <MobileStatsName>Net Worth:</MobileStatsName>
            <MobileStatsValue>
              {seriousNumbers(Math.round(netWorth))}
            </MobileStatsValue>
          </MobileStatsItem>
          <MobileStatsItem>
            <MobileStatsName>Cookies per second:</MobileStatsName>
            <MobileStatsValue>{seriousNumbers(perSec)}</MobileStatsValue>
          </MobileStatsItem>
          <MobileStatsItem>
            <MobileStatsName>Total clicks:</MobileStatsName>
            <MobileStatsValue>{clicks}</MobileStatsValue>
          </MobileStatsItem>
          <MobileStatsItem>
            <MobileStatsName>Total upgrades:</MobileStatsName>
            <MobileStatsValue>{totalUpgrades}</MobileStatsValue>
          </MobileStatsItem>
        </MobileStatsList>
    </MobileContainer>
  );
};

export default memo(MobileStats);
