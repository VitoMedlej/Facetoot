import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MSGID}`,
    appId: `${process.env.REACT_APP_APPID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();

export {auth, app, db}
