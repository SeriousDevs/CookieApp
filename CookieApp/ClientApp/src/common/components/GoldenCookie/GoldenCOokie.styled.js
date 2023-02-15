import styled, { keyframes } from "styled-components";

const click = keyframes`
0%  { transform: translate(2px, 1px)   rotate(0deg);  }
40% { transform: translate(1px, -1px)  rotate(1deg);  }
50% { transform: translate(-1px, 2px)  rotate(-1deg); }
60% { transform: translate(-3px, 1px)  rotate(0deg);  }
80%{ transform: translate(1px, -2px)  rotate(-1deg); }
100%{ transform:translate(2px, 1px)   rotate(0deg); }`;

export const GoldenBtn = styled.button`
  position: absolute;
  border: none;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  animation: ${click} 2s linear infinite;
  z-index: 10;
`;

export const GoldenImg = styled.img`
  width: 80px;
  height: 80px;
`;
