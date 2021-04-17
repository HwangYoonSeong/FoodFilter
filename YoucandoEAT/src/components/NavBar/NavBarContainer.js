import React, { useState, useEffect } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from 'firebase/app'
import 'firebase/auth'

function NavBarContainer(props) {
  const [sidebar, setSidebar] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const provider = new firebase.auth.GoogleAuthProvider();

  // GoogleAuthProvider를 사용할 때마다 구글 팝업 
  provider.setCustomParameters({
    login_hint: "user@example.com",
    prompt: 'select_account'
  });

  const logIn = (e) => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;
      props.setUid(user.uid);
      setUserEmail(user.email)
      setSidebar(false)
    })
      .catch(function (error) {
        console.error(`ERROR : ${error}`)
      });
  };

  const logOut = (e) => {
    firebase.auth().signOut().then(function () {
      setUserEmail(null);
      setSidebar(false)
    }).catch(function (error) {
      alert(`ERROR : ${error}`)
    });
  };

  // 로그인 상태인지 확인
  const GoogleSignIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.email);
        console.log(user.uid);
      } else {
        console.log("not login!")
      }
    });
  }

  useEffect(() => {
    GoogleSignIn();
  }, [])

  return (
    <>
      <NavBarPresenter sidebar={sidebar} setSidebar={setSidebar} logIn={logIn} logOut={logOut} userEmail={userEmail} />
    </>
  );
}

export default NavBarContainer;
