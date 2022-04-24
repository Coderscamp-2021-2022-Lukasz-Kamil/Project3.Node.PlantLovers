import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *:before, *:after{
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}
body {
   font-family: 'Poppins', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: ${({ theme }) => theme.colors.common.backgroundcolor};
   
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}
}
`;
/*
export const LogoStyle = createGlobalStyle`
@font-face {
    font-family: 'plants_lovin';
    src: url('../font/plants_lovin-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`*/

export default GlobalStyles;
