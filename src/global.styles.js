import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto Condensed', sans-serif;
    }

    main {
        @media screen and (min-width: 1200px) {
            width: calc(85% - 10px);
            margin: 0 auto;
        }
        background: #f6f6ef;
    }

    * {
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    input {
        outline: 0;
    }
`;