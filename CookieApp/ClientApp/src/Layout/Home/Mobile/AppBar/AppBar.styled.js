import styled from "styled-components";
import { TbHandClick } from "react-icons/tb";
import { MdHistoryEdu, MdOutlineLeaderboard } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { GiUpgrade } from "react-icons/gi";

export const Menu = styled.ul`
  position: absolute;
  bottom: 0;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 50px / repeat(5, 1fr);
  z-index: 10;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MenuItem = styled.li`
  border: 1px solid black;
  border-radius: 5px 5px 0 0;
  background-color: #8acb88;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DashboardIcon = styled(MdOutlineLeaderboard)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const StatsIcon = styled(ImStatsDots)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const StoreIcon = styled(GiUpgrade)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const StoryIcon = styled(MdHistoryEdu)`
  width: 40px;
  height: 40px;
  fill: white;
`;

export const ClickerIcon = styled(TbHandClick)`
  width: 40px;
  height: 40px;
  fill: white;
`;
