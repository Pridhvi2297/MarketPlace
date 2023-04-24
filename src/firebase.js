import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcq_6uG46b4nEiXGYdadeRV0iEm3ptR78",
    authDomain: "marketplace-pnc.firebaseapp.com",
    projectId: "marketplace-pnc",
    storageBucket: "marketplace-pnc.appspot.com",
    messagingSenderId: "14955583576",
    appId: "1:14955583576:web:9a014daecc589c2f8b522d",
    measurementId: "G-3D5DRTSC13"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };