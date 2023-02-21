import styled from "styled-components";
import { LevelUpList } from "Layout/Home/Upgrades/LvelUps/LevelUps.styled";

export const MobileLvlUps = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  //   border-top: 1px solid black;
`;

export const MobileLvlUpList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  gap: 1px;
  padding: 5px 5px 5px 0;
  margin: 0;
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
