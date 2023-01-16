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
`;

export const UpgradeList = styled.ul`
  height: 532px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;
