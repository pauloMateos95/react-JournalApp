import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAn3hJ_HPuibKIgN8Sd20uG9CD7ZL6F9k0",
    authDomain: "react-app-curso-1e0cf.firebaseapp.com",
    databaseURL: "https://react-app-curso-1e0cf.firebaseio.com",
    projectId: "react-app-curso-1e0cf",
    storageBucket: "react-app-curso-1e0cf.appspot.com",
    messagingSenderId: "283919371841",
    appId: "1:283919371841:web:f1b5e0ac998116bdb480c0"
};
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}