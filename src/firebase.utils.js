import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3w8vs6wspNbW50Y_xH8HRPFGrTZSPGKw",
    authDomain: "breaking-news-react.firebaseapp.com",
    databaseURL: "https://breaking-news-react.firebaseio.com",
    projectId: "breaking-news-react",
    storageBucket: "breaking-news-react.appspot.com",
    messagingSenderId: "778462893620",
    appId: "1:778462893620:web:e8c5ce8d25bdcaaeec9c61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;