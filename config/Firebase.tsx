import * as firebase from 'firebase';
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAffJDAexQab0j-6K2aXlvsXqLjCIQdtsE",
    authDomain: "insta-clone-tutorial-dd51e.firebaseapp.com",
    projectId: "insta-clone-tutorial-dd51e",
    storageBucket: "insta-clone-tutorial-dd51e.appspot.com",
    messagingSenderId: "390170046482",
    appId: "1:390170046482:web:72ff930343f70dba48e8cb"
};

    //Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;