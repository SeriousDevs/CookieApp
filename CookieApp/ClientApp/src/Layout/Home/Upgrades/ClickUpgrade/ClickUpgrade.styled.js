import styled from "styled-components";

export const ClickUpgradeItem = styled.div`
  display: flex;
  margin-bottom: 1px;
  height: 75px;
  padding: 10px 20px 10px 0;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(130, 130, 130, 0.5);
  cursor: pointer;

  &:hover {
    background-color: rgba(130, 130, 130, 0.8);
  }
`;

export const UpgradeImage = styled.img`
  width: 80px;
  padding: 5px;
  // background-color: teal;
  height: 75px;
  margin-right: 10px;
`;

export const ListItemCentralDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

export const UpgradeName = styled.p`
  color: white;
  display: block;
  margin: 0;
  font-weight: 700;
  font-size: 17px;
`;

export const UpgradePrice = styled.p`
  color: white;
  display: block;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
`;

export const Amount = styled.p`
  font-size: 42px;
  color: white;
  font-family: sans-serif;
`;

export const AdditionalWrapper = styled.div`
  display: flex;
`;
