import React from "react";
import "./App.css";
import styled, { createGlobalStyle, css } from "styled-components";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "./components/NavBar/NavBarContainer";
import Main from "./components/Main/MainContainer";
import Capture from "./components/Capture/CaptureContainer";
import Logic from "./components/Logic/LogicContainer";
import Community from "./components/Community/CommunityContainer";
import SelectIngredients from "./components/SelectIngredients/SIContainer";
import WritePost from "./components/Community/WritePost/WritePostContainer";
import Detail from "./components/Community/Detail/DetailContainer";
const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';

    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    ${(props) =>
      props.captureMode
        ? css`
            background: black;
          `
        : css`
            background: #e9ecef;
          `}

  }
`;

const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
`;

function App() {
  const searchMode = useSelector((state) => state.searchMode);
  const uid = useSelector((state) => state.uid);
  const captureMode = useSelector((state) => state.captureMode);

  return (
    <>
      <GlobalStyle captureMode={captureMode} />
      {searchMode || captureMode ? null : <NavBar />}
      <Container>
        <Route exact path="/" component={Main} />
        <Route exact path="/selectIngredients" component={SelectIngredients} />
        <Route exact path="/capture" component={Capture} />
        <Route exact path="/logic" component={Logic} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/community/write" component={WritePost} />
        <Route exact path="/community/detail/:pid" component={Detail} />
      </Container>
    </>
  );
}

export default App;
