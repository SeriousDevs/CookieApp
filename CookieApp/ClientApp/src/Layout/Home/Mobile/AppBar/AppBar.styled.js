import styled from "styled-components";

export const Menu = styled.ul`
  position: absolute;
  bottom: 0;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 50px / repeat(5, 1fr);
  z-index: 10;
`;

export const MenuItem = styled.li`
  border: 1px solid black;
  border-radius: 5px 5px 0 0;
  background-color: yellowgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;