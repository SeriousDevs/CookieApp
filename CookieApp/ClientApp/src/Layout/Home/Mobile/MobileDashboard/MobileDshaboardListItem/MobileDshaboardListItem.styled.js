import styled from "styled-components";

export const LeadershipItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-height: 50px;
  background-color: rgba(180, 180, 180, 0.5);
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const LeadershipItemUser = styled(LeadershipItem)`
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid gold;
  border-radius: 3px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const Position = styled.p`
  //   font-size: 36px;
`;

export const NetWorth = styled.p`
  //   font-size: 24px;
`;
