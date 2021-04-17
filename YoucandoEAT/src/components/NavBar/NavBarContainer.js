import React, { useState } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from 'firebase/app'
import 'firebase/auth'

function NavBarContainer(props) {
  const [sidebar, setSidebar] = useState(false);

  // 나중에 사용할 코드!
  // const GoogleSignIn = () => {
  //     auth.onAuthStateChanged(user => {
  //         if (user) {
  //             console.log(user.email);
  //             console.log(user.uid);


  //         } else {
  //             console.log("error")
  //         }
  //     });
  // }

  const provider = new firebase.auth.GoogleAuthProvider();

  // GoogleAuthProvider를 사용할 때마다 구글 팝업 
  provider.setCustomParameters({
    login_hint: "user@example.com",
    // 계정 지정 옵션
    prompt: 'select_account'
  });

  const logIn = (e) => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;
      props.setUid(user.uid);
      console.log("Login Success")
      setSidebar(false)
    })
      .catch(function (error) {
        console.error(error)
      });
  };

  const logOut = (e) => {
    firebase.auth().signOut().then(function () {
      alert("로그아웃 되셨습니다.")

    }).catch(function (error) {
      alert(`ERROR : ${error}`)
    });
  };

  return (
    <>
      <NavBarPresenter sidebar={sidebar} setSidebar={setSidebar} logIn={logIn} logOut={logOut} />
    </>
  );
}

export default NavBarContainer;
