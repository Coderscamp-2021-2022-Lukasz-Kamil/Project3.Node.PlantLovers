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
}
`;

export default GlobalStyles;
