import styled from "styled-components";

export const MobileStoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  list-style: none;
  padding: 20px;
  margin: 0;
  max-height: 90%;

  overflow: auto;
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

export const MobileStoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const StoryImage = styled.img`
  width: 100%;
  max-width: 300px;
`;

export const StoryText = styled.p`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
