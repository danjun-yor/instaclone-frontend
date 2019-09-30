import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import AppRouter from "./Router";
import { useQuery, QueryHookResult } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles.js";
import Theme from "../Styles/Theme";
import Router from "./Router";
import Footer from "./Footer";

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
        <Wrapper>
          <GlobalStyles />
          <AppRouter isLoggedIn={isLoggedIn} />
          <Footer />
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
