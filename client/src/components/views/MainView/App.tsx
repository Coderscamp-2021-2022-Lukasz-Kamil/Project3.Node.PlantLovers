import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../global-styles/GlobalStyles";
import { theme } from "../../../theme/theme";
import { Button, ButtonWithBorders } from "../../ui/Button/Button.style";
import { FlexCenter } from "../../wrappers/FlexCenter/FlexCenter.style";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FlexCenter direction="column">
        <h1>Hello World</h1>
        <Button>Primary</Button>
        <ButtonWithBorders>Mam style z Buttona</ButtonWithBorders>
      </FlexCenter>
    </ThemeProvider>
  );
}

export default App;
