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

export const UpgradesLarge = styled.div``;

export const UpgradeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const UpgradeListItem = styled.li`
  display: flex;
  padding: 10px 20px 10px 0;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: rgba(130, 130, 130, 0.5);
  cursor: pointer;

  &:hover {
    background-color: rgba(130, 130, 130, 0.8);
  }
`;

export const UpgradeImage = styled.img`
  width: 80px;
  background-color: teal;
  height: 75px;
`;

export const ListItemCentralDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CentralDivTxt = styled.p`
  color: white;
  display: block;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
`;

export const Quantities = styled.p`
  font-size: 58px;
  color: white;
  font-family: sans-serif;
`;

export const AdditionalWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
