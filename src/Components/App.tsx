import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery, QueryHookResult } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const App: React.FC = () => {
  const {
    data: { isLoggedIn }
  }: QueryHookResult<{ isLoggedIn: boolean }, any> | any = useQuery(QUERY);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
      </ThemeProvider>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
