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



// A function to the current user into database, if the user is not signed in
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if user is not logged in return 
    if(!userAuth) return ;

    // if user has signed in then find it in firestore database
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get();

    // If user is not present in firestore database 
    // then use its database reference like userRef to store it in database
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user: ', error.message )
        }
        
    }

    // Return the userRef for using the user value stored in database
    return userRef
}


// Google authentication for sign in. It prompts for selecting users specific google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;