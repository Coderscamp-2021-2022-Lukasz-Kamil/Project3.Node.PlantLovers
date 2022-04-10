import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');

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
