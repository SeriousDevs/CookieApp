import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  user-select: none;
}

  *::-webkit-scrollbar {
    width: 3px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
     box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  body {
    margin: 0;
  }
`;
