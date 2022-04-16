import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDcUtvMeaFz-N9Wc9gL2jxccJO0wXVqK8",
    authDomain: "twiter-clone-269c2.firebaseapp.com",
    projectId: "twiter-clone-269c2",
    storageBucket: "twiter-clone-269c2.appspot.com",
    messagingSenderId: "1005121613655",
    appId: "1:1005121613655:web:fc80713fbcd94315899812",
    measurementId: "G-J4973PZMB2"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();