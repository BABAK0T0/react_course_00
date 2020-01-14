import {createGlobalStyle} from 'styled-components';

const darkGrey = "#515263";
const lightGrey = "#f7f7f7";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${darkGrey};
        background-color: ${lightGrey};
        font-family: 'Blinker', sans-serif;
    }
`