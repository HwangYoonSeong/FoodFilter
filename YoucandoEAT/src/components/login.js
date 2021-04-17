import React from "react";
import styled from "styled-components";

import { signInWithGoogle } from '../firebase_config';
import { auth } from '../firebase_config';

const Button = styled.button`
  margin-top: 5px;
  width: 100px;
  height: 40px;
`

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

const logOut = () => {
    auth.signOut().then(function () {
        alert("로그아웃 되셨습니다.")

    }).catch(function (error) {
        alert("ERROR")
    });
}

function Login () {
    return (
        <>
            <Button onClick={signInWithGoogle}>logIn</Button>
            <Button onClick={logOut}>logOut</Button>
        </>
    );
}

export default Login;
