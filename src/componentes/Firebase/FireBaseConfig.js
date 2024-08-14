//import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth,GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZMN10y7Z8fwCi4K-vOYsIDzQj0hSIfT4",
  authDomain: "appgit-64235.firebaseapp.com",
  projectId: "appgit-64235",
  storageBucket: "appgit-64235.appspot.com",
  messagingSenderId: "749037177167",
  appId: "1:749037177167:web:a371b2959cf5ac5a699d3a"
}

//initialize firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GithubAuthProvider()

export {auth,provider}