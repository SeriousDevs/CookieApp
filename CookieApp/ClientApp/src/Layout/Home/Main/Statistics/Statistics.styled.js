import styled from "styled-components";

export const StatsBlock = styled.div`
  height: 160px;
  position: absolute;
  left: 25vw;
  top: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const StatsList = styled.ul`
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StatsItem = styled.li`
  color: black;
  font-size: 16px;
  font-family: Courier New;
`;

export const StatsTitle = styled.h3`
  display: block;
  margin: 0;
  color: black;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  font-family: monospace;
`;
