import styled from "styled-components";
import { LevelUpList } from "Layout/Home/Upgrades/LvelUps/LevelUps.styled";
import { MobileContainer } from "common/common.styled";

export const MobileStoreContainer = styled(MobileContainer)`
  overflow: auto;
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

export const UpgradeList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
