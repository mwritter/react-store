import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvjvHvIMXpgqET068StDf4E9WWPCppDC8",
    authDomain: "crwn-db-90040.firebaseapp.com",
    projectId: "crwn-db-90040",
    storageBucket: "crwn-db-90040.appspot.com",
    messagingSenderId: "597576012763",
    appId: "1:597576012763:web:49113b9ac2b278294e0dfe",
    measurementId: "G-1T0MJSJW3D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;