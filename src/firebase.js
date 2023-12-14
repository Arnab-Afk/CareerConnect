
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCcrrpCigYlOCmwVGSwqCbZQHGv2JNagTY",
    authDomain: "careerconnect-408010.firebaseapp.com",
    projectId: "careerconnect-408010",
    storageBucket: "careerconnect-408010.appspot.com",
    messagingSenderId: "821703083769",
    appId: "1:821703083769:web:2bdf277d8579cd6f528428",
    measurementId: "G-EEXC94PJXS",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { firestore, auth, googleAuthProvider, app as default };
