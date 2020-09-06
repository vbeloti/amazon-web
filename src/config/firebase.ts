import * as firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-iT9DVdq3sepsg4GrpYOmQAH_UTb2fT0",
    authDomain: "web-9139a.firebaseapp.com",
    databaseURL: "https://web-9139a.firebaseio.com",
    projectId: "web-9139a",
    storageBucket: "web-9139a.appspot.com",
    messagingSenderId: "22661755101",
    appId: "1:22661755101:web:003aec2811d504f4d2eb34",
    measurementId: "G-YZMBBZWSWX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };