import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBMosa8HeysEHSaNCqBgcgyvlVjrckBo",
  authDomain: "linkedin-clone-c1f92.firebaseapp.com",
  projectId: "linkedin-clone-c1f92",
  storageBucket: "linkedin-clone-c1f92.appspot.com",
  messagingSenderId: "1016761072982",
  appId: "1:1016761072982:web:17be210d6c860fa0fc6af7",
  measurementId: "G-FQVE9J4XW4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
