import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";

import NavBar from "./components/NavBar/NavBarContainer";

const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';
    max-width:500px;
    background:tomato;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
