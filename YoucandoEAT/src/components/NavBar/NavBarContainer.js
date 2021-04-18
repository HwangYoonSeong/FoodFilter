import React, { useState, useEffect, useCallback } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from "firebase/app";
import "firebase/auth";

function NavBarContainer({ setUid }) {
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
            setUid(user.uid);
            setUserEmail(user.email);
            setUserPhoto(user.photoURL);
            setSidebar(false);
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
        setSidebar(false);
      })
      .catch(function (error) {
        alert(`ERROR : ${error}`);
      });
  };

  // 로그인 상태인지 확인
  // 새로고침시 또는 최초의 유저 저오 할당
  const GoogleSignIn = useCallback(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("login");
        setUserEmail(user.email);
        setUid(user.uid);
        setUserPhoto(user.photoURL);
      } else {
        console.log("!login");
      }
    });
  }, [setUid]);

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

export default React.memo(NavBarContainer);
