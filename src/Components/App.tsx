import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles.js";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery, QueryHookResult } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Footer from "./Footer";
import styled from "styled-components";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const App: React.FC = () => {
  const {
    data: { isLoggedIn }
  }: QueryHookResult<{ isLoggedIn: boolean }, any> | any = useQuery(QUERY);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <>
          <Wrapper>
            <GlobalStyles />
            <AppRouter isLoggedIn={isLoggedIn} />
            <Footer />
          </Wrapper>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
