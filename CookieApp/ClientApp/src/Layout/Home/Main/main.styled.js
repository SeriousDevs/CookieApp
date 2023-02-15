import styled from "styled-components";

export const Container = styled.div`
  width: 54vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fce671;
  background-color: ${(props) =>
    props.bgChange
      ? "#" + Math.floor(Math.random() * 16777215).toString(16)
      : " #fce671"};
`;
