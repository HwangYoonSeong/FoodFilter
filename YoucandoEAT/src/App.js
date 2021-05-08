import React, { useState } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBarContainer";
import Main from "./components/Main/MainContainer";
import Capture from "./components/Capture/CaptureContainer";
import Logic from "./components/Logic/LogicContainer";
import Community from "./components/Community/CommunityContainer";
import SelectAllergy from "./components/SelectAllergy/SAContainer";
import WritePost from "./components/Community/WritePost/WritePostContainer"

const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';

    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
`;

function App() {
  let [uid, setUid] = useState("");
  return (
    <>
      <GlobalStyle />
      <NavBar setUid={setUid} />

      <Container>
        <Route exact path="/" component={Main} />
        <Route exact path="/capture" component={Capture} />
        <Route
          exact
          path="/logic"
          render={(props) => <Logic {...props} uid={uid} />}
        />
        <Route
          exact
          path="/community"
          render={(props) => <Community {...props} uid={uid} />}
        />

        <Route exact path="/selectAllergy" component={SelectAllergy} />

        <Route exact path="/community/write" component={WritePost} />
      </Container>
    </>
  );
}

export default App;
