import styled from "styled-components";

export const ProfileBlock = styled.div`
  padding: 35px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  border-bottom: 1px solid white;
`;

export const Wrapper = styled.div`
  width: 23vw;
  height: 100vh;
  background: teal;
`;

export const UserImage = styled.img`
  height: 130px;
  width: 130px;
  display: block;
  background-color: white;
`;

export const UserName = styled.p`
  color: white;
  font-size: 32px;
  display: block;
  margin: 0;
`;

export const StatsBlock = styled.div`
  border-bottom: 1px solid white;
  padding: 20px;
`;

export const Heading = styled.h3`
  diplay: block;
  margin: 0;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const StatsItem = styled.li`
  color: white;
  font-size: 16px;
`;

export const LeadershipBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const LeadershipList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 30vh;
  width: 100%;
`;

export const LeadershipItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 75px;
  background-color: rgba(180, 180, 180, 0.5);
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const Position = styled.p`
  font-size: 36px;
`;

export const NetWorth = styled.p`
  font-size: 24px;
`;
