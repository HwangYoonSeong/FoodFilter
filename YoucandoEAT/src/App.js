import React, { useReducer, useCallback } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

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
  }
`;

const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
`;

const uidReducer = (state, action) => {
  if (action.type === "SET_UID") return action.uid;
  else return state;
}

const searchModeReducer = (state, action) => {
  if (action.type === "SET_SEARCHMODE") return action.mode;
  else return state;
}

function App () {
  // const [uid, setUid] = useState("");
  // const [searchMode, setSearchMode] = useState(false);
  const [uid, uidDispatch] = useReducer(uidReducer, "");
  const [searchMode, smDispatch] = useReducer(searchModeReducer, false);

  const setUid = useCallback(uid => {
    uidDispatch({ type: 'SET_UID', uid });
  }, []);

  const setSearchMode = useCallback(mode => {
    smDispatch({ type: 'SET_SEARCHMODE', mode });
  }, []);


  return (
    <>
      <GlobalStyle />
      {searchMode ? null : <NavBar setUid={setUid} />}

      <Container>
        <Route exact path="/" component={Main} />

        <Route exact path="/selectIngredients" component={SelectIngredients} />

        <Route exact path="/capture" component={Capture} />

        <Route
          exact
          path="/logic"
          render={(props) => <Logic {...props} uid={uid} />}
        />

        <Route
          exact
          path="/community"
          render={(props) => (
            <Community
              {...props}
              uid={uid}
              setSearchMode={setSearchMode}
              searchMode={searchMode}
            />
          )}
        />

        <Route exact path="/community/write" component={WritePost} />

        <Route
          exact
          path="/community/detail/:pid"
          render={(props) => <Detail {...props} uid={uid} />}
        />
      </Container>
    </>
  );
}

export default App;
