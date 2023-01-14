import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  // overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

  body {
    margin: 0;
  }
`;
