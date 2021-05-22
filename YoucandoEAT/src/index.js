import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
//import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import rootReducer from "./modules";

const firebaseConfig = {
  apiKey: "AIzaSyDbRWC7N0QVQZiUERqu4s3bRxf2G7X4whA",
  authDomain: "watsin-3b4e3.firebaseapp.com",
  projectId: "watsin-3b4e3",
  storageBucket: "watsin-3b4e3.appspot.com",
  messagingSenderId: "335744177629",
  appId: "1:335744177629:web:84b912a4c514eb00f55234",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// uid reducer
const initialUid = "";
function uidReducer(state = initialUid, action) {
  if (action.type === "SET_UID") return action.uid;
  else return state;
}

// searchMode reducer
const initialSearchMode = false;
function searchModeReducer(state = initialSearchMode, action) {
  if (action.type === "SET_SEARCHMODE") return action.mode;
  else return state;
}

// store
const store = createStore(combineReducers({ uidReducer, searchModeReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
