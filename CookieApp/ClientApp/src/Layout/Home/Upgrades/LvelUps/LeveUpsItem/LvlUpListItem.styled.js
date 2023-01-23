import styled from "styled-components";

export const LevelUpListItem = styled.li`
  display: block;
  height: 40px;
  width: 40px;
`;

export const LvlUpButton = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: ${(props) =>
    !props?.condition ? "rgba(133,133,133, 0.3)" : "rgba(133,133,133, 1)"};
  color: ${(props) => (!props?.condition ? "black" : "white")};
  height: 40px;
  width: 40px;
  font-size: 12px;
`;
