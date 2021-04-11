import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

import NavBar from "./components/NavBar/NavBarContainer";

const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';
    /* background:tomato; */
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

        
      </Container>
    </>
  );
}

export default App;
