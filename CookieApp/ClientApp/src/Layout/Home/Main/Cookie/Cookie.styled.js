import styled, { keyframes } from "styled-components";

export const CookieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const click = keyframes`
0%  { transform: translate(2px, 1px)   rotate(0deg);  }
40% { transform: translate(1px, -1px)  rotate(1deg);  }
50% { transform: translate(-1px, 2px)  rotate(-1deg); }
60% { transform: translate(-3px, 1px)  rotate(0deg);  }
100%{ transform: translate(1px, -2px)  rotate(-1deg); }`;

export const CookieButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  height: 300px;
  width: 300px;

  &.shake {
    animation: ${click} 0.01s;
  }
`;

export const CookieQuantity = styled.p`
  margin: 0;
  font-size: 32px;
  font-family: serif;
  font-weight: 700;
`;

export const PerSecond = styled.p`
  margin-top: 0;
  font-size: 20px;
  font-family: serif;
  font-weight: 700;
`;
