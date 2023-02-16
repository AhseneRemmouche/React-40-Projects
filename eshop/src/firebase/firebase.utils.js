// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCPKZ8_EUMLVisV-PTARhbfSizIxyYBk1g',
    authDomain: 'eshop-adfbb.firebaseapp.com',
    projectId: 'eshop-adfbb',
    storageBucket: 'eshop-adfbb.appspot.com',
    messagingSenderId: '166021561226',
    appId: '1:166021561226:web:4a21570e3bd743db89e673',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createAt });
        } catch (error) {
            console.log('error creating user from Goole auth', error.message);
        }
    }
    return userDocRef;
};
