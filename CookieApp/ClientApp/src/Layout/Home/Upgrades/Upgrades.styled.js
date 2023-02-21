import styled from "styled-components";

export const UpgradesWrapper = styled.div`
  position: relative;
  width: 23vw;
  height: 100vh;
  background-color: yellowgreen;
`;

export const Store = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7%;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

export const LevelUpBlock = styled.div`
  display: flex;
  padding: 5px 0 5px 5px;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 8%;
  max-height: 20%;
  border-bottom: 1px solid black;
`;

export const UpgradesLarge = styled.div`
  position: relative;
  max-height: 73%;
`;

export const UpgradeList = styled.ul`
  max-height: calc(80vh - 122px);
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: auto;
  list-style: none;
  padding: 0;
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
