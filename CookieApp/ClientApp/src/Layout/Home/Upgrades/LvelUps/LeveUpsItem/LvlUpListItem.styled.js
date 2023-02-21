import styled from "styled-components";

export const LevelUpListItem = styled.li`
  display: block;
  position: relative;
  height: 50px;
  width: 50px;
`;

export const BackgroundBlock = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  background-color: ${(props) => !props?.condition ? "rgba(0,0,0, 0.2)" : "rgba(0,0,0, 0.0)"};
  cursor: ${(props) => (!props?.condition ? "default" : "pointer")};
`;

export const LvlUpButton = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;

  // cursor: ${(props) => (!props?.condition ? "default" : "pointer")};
  //background-color: ${(props) =>
    !props?.condition ? "rgba(0,0,0, 0.1)" : "bisque"};

  background-color: bisque;
  height: 50px;
  width: 50px;
  font-size: 12px;
`;

export const LvlUpImg = styled.img`
  height: 50px;
  width: 50px;
`;
