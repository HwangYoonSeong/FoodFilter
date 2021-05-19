import React, { useState, useEffect, useCallback } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from "firebase/app";
import { connect } from "react-redux";

function NavBarContainer({ setUid, state, dispatch }) {
  const [sidebar, setSidebar] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  const logIn = (e) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        // GoogleAuthProvider를 사용할 때마다 구글 팝업
        provider.setCustomParameters({
          login_hint: "user@example.com",
          prompt: "select_account",
        });

        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            var user = result.user;

            dispatch({ type: "SET_UID", uid: user.uid });
            setUid(user.uid);

            setUserEmail(user.email);
            setUserPhoto(user.photoURL);
            // 사진, uid, email등
            // 서버로 유저 정보 전송
            // setSidebar(false);
          });
      })
      .catch((error) => {
        console.error(`ERROR : ${error}`);
      });
  };

  const logOut = (e) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUserEmail(null);
        // setSidebar(false);
      })
      .catch(function (error) {
        alert(`ERROR : ${error}`);
      });
  };

  // 로그인 상태인지 확인
  // 새로고침시 또는 최초의 유저 정보 할당
  const GoogleSignIn = useCallback(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("login");
        setUserEmail(user.email);

        setUid(user.uid);
        dispatch({ type: "SET_UID", uid: user.uid });

        setUserPhoto(user.photoURL);
      } else {
        setUid(null);
        dispatch({ type: "SET_UID", uid: "" });

        console.log("!login");
      }
    });
  }, [dispatch, setUid]);

  useEffect(() => {
    GoogleSignIn();
  }, [GoogleSignIn]);

  return (
    <>
      <NavBarPresenter
        sidebar={sidebar}
        setSidebar={setSidebar}
        logIn={logIn}
        logOut={logOut}
        userEmail={userEmail}
        userPhoto={userPhoto}
      />
    </>
  );
}

function stateTOprops(state) {
  return { state };
}

export default React.memo(connect(stateTOprops)(NavBarContainer));
