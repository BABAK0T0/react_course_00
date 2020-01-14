import {createGlobalStyle} from 'styled-components';

export const darkGrey = "#515263";
export const medGrey = "#dad9d9";
export const lightGrey = "#f7f7f7";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${darkGrey};
        background-color: ${lightGrey};
        font-family: 'Blinker', sans-serif;
    }
`