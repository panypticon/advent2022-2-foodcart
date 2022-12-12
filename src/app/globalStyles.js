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
`;

export default GlobalStyle;
