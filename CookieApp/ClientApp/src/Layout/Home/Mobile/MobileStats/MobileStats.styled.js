import styled from "styled-components";

export const MobileStatsWrapper = styled.div`
  padding: 20px;
`;

export const MobileStatsTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const MobileStatsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;

  list-style-type: none;
  margin: 0;
  padding: 20px;
`;

export const MobileStatsItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border-radius: 4px;
  background-color: rgb(240, 250, 50, 0.7);
`;

export const MobileStatsName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const MobileStatsValue = styled.p`
  margin: 0;

  font-size: 18px;
  font-weight: bold;
`;
