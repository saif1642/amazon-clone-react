import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXful9MAy1QDZNYxOekzCHjM_fGs5pRyE",
    authDomain: "clone-e488a.firebaseapp.com",
    databaseURL: "https://clone-e488a.firebaseio.com",
    projectId: "clone-e488a",
    storageBucket: "clone-e488a.appspot.com",
    messagingSenderId: "943466668865",
    appId: "1:943466668865:web:590d8387fce83519a0b7c0",
    measurementId: "G-CB16QJPYWB"
});

const auth = firebase.auth();

export {auth};