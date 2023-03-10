import styled, { keyframes } from "styled-components";

const click = keyframes`
from {
transform: scale(1.1);
}
to{
transform: scale(2);
}
`;

export const ClickedComponent = styled.p`
  margin: 0;
  pading: 0;
  position: absolute;
  cursor: none;
  color: white;
  font-size: 16px;
  font-family: serif;
  font-weight: 700;
  top: ${(props) => props.top - 30}px;
  left: ${(props) => props.left}px;
  // top: ${(props) => (props.top ? props.top - 30 : 600)}px;
  // left: ${(props) => (props.left ? props.left : 600)}px;
  animation: ${click} 1s linear;
  z-index: 2;

  user-drag: none;
`;
