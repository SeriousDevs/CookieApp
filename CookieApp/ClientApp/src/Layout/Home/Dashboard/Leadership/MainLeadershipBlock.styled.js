import styled from "styled-components";

export const Leadership = styled.div`
  max-height: 50%;
  position: relative;
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
  width: 100%;
  max-height: 50%;
  margin-inline: auto;
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
