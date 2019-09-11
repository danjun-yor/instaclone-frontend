import React from "react";
// import * as Theme from "../Styles/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
