import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body html #root {
        height: 100%;
    }
`;

export default GlobalStyle;