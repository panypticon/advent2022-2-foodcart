import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    body {
        font-size: 1.6rem;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        color: #000;
    }

    h2 {
        font-weight: 700;
        font-size: 3.2rem;
    }
`;

export default GlobalStyle;
