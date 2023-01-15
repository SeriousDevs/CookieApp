import styled from "styled-components";

export const UpgradesWrapper = styled.div`
  width: 23vw;
  height: 100vh;
  background-color: yellowgreen;
`;

export const Store = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

export const UpgradesMini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
  border-bottom: 1px solid black;
`;

export const UpgradesLarge = styled.div`
  position: relative;
`;

export const UpgradeList = styled.ul`
  height: 608px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;
