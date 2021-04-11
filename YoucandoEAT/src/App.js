import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBarContainer";
import Main from "./components/Main/MainContainer";

const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';
  }
`;

const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Container>
        <Route path="/" exact>
          <Main />
        </Route>
      </Container>
    </>
  );
}

export default App;
