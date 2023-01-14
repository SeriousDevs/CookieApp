import styled from "styled-components";

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
  padding: 5px;
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
