import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBAgkcH3lK_yN_7rllASc_peZJR_N63EvY",
    authDomain: "crown-db-cff1d.firebaseapp.com",
    projectId: "crown-db-cff1d",
    storageBucket: "crown-db-cff1d.appspot.com",
    messagingSenderId: "237805782675",
    appId: "1:237805782675:web:4b59960ad6f42cb364af66",
    measurementId: "G-KNQVDYW7N2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;