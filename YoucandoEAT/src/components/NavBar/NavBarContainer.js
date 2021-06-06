import React, { useState, useEffect, useCallback } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from "firebase/app";
import axios from "axios";
import ipObj from "../../key"
import { useDispatch } from "react-redux";
import { setUid } from "../../modules/uid";

function NavBarContainer () {
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  const logIn = useCallback(() => {
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
            dispatch(setUid(user.uid));
            setUserEmail(user.email);
            setUserPhoto(user.photoURL);
            // 사진, uid, email등
            // 서버로 유저 정보 전송
            axios
              .post(`${ipObj.ip}/userInput`, { "uid": user.uid, "email": user.email, "userImg": user.photoURL }, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                console.log("url:", "POST /userInput", "\nstatus:", response.status, "\nstatusText:", response.statusText);
              })
              .catch((err) => {
                console.error(err.response);
              });

          });
      })
      .catch((error) => {
        console.error(`ERROR : ${error}`);
      });
  }, [dispatch]);

  const logOut = (e) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUserEmail(null);
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
        dispatch(setUid(user.uid));
        setUserPhoto(user.photoURL);
      } else {
        dispatch(setUid(""));

        console.log("!login");
      }
    });
  }, [dispatch]);

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
