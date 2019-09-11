import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
      </ThemeProvider>
      <AppRouter isLoggedIn={false} />
    </>
  );
};

export default App;
