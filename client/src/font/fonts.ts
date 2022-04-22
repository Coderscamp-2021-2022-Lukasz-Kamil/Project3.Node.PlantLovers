import { createGlobalStyle } from "styled-components";
import plant_font from "./plants-lovin.woff2";

const FontStyles = createGlobalStyle`
@font-face { font-family: 'plants_lovin'; src: url(${plant_font}) format('woff2'); font-weight: normal; font-style: normal; };
`;
export default FontStyles;
