import styled from "styled-components";

export const UpgradeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  max-width: 200px;
  min-width: 150px;
  background-color: ${(props) =>
    props.available ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s;

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
  text-align: center;
  margin: 0;
  color: ${(props) => (props.available ? "teal" : "yellow")};
`;

export const UpgradePrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UpgradeAmount = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  color: white;
  margin: 0;
  font-size: 12px;
  text-align: center;
`;
export const BoldText = styled.b`
  color: ${(props) => (props.available ? "teal" : "yellow")};
`;
