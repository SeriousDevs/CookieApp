import styled from "styled-components";

export const UserImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProfileImage = styled.img`
  max-height: 60%;
  max-width: 60%;
  display: block;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`;

export const ProfileStory = styled.p`
  text-align: center;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  color: black;
  font-size: 16px;
  font-family: sans-serif;
  margin: 0;
  max-height: 100px;
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
