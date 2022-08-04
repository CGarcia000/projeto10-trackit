import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body html #root {
        height: 100%;
    }
`;

export default GlobalStyle;