import styled from "styled-components";

export const UpgradeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  flex-shrink: 0;
  transition: transform 0.2s;
  cursor: pointer;
  background-color: ${(props) =>
    props.available ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};

  &:active {
    transform: scale(0.95);
  }
`;

export const UpgradeImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const UpgradeName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const UpgradePrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UpgradeText = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;
