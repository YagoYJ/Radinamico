import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  main {
    width: 100%;
    display: flex;
    flex: 1;
    padding: 50px 10%;
    margin: 0 auto;
    background-color: ${theme.colors.lightGray}
  }
`;

export default GlobalStyle;
