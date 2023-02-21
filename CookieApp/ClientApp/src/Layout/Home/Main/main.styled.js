import styled from "styled-components";

export const Container = styled.div`
  position: static;
  width: 54vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgChange
      ? "#" + Math.floor(Math.random() * 16777215).toString(16)
      : " #fce671"};

  @media screen and (max-width: 1279.97px) {
    position: relative;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
  }
`;
