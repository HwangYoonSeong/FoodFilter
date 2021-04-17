import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDbRWC7N0QVQZiUERqu4s3bRxf2G7X4whA",
    authDomain: "watsin-3b4e3.firebaseapp.com",
    projectId: "watsin-3b4e3",
    storageBucket: "watsin-3b4e3.appspot.com",
    messagingSenderId: "335744177629",
    appId: "1:335744177629:web:84b912a4c514eb00f55234"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// GoogleAuthProvider를 사용할 때마다 구글 팝업 
provider.setCustomParameters({
    login_hint: "user@example.com",
    // 계정 지정 옵션
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user.uid);
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


export default firebase;