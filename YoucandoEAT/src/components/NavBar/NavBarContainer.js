import React, { useState } from "react";
import NavBarPresenter from "./NavBarPresenter";
import firebase from 'firebase/app'
import 'firebase/auth'

// import { signInWithGoogle } from '../../firebase_config';
// import { auth } from '../../firebase_config';

function NavBarContainer (props) {
  const [sidebar, setSidebar] = useState(false);

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
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      //console.log(user.uid);
      props.setUid(user.uid);
      console.log("Login Success")
      setSidebar(false)

      // _this.$router.push("/profile");
    })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        //var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;
        // ...
      });
  };

  const logOut = (e) => {
    firebase.auth().signOut().then(function () {
      alert("로그아웃 되셨습니다.")

    }).catch(function (error) {
      alert("ERROR")
    });
  };

  return (
    <>
      <NavBarPresenter sidebar={sidebar} setSidebar={setSidebar} logIn={logIn} logOut={logOut} />
    </>
  );
}

export default NavBarContainer;
