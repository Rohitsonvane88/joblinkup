import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDxex5bFYDiZccEFm6xMPrRYv8IL2X74bo",
  authDomain: "job-linkup.firebaseapp.com",
  projectId: "job-linkup",
  storageBucket: "job-linkup.appspot.com",
  messagingSenderId: "461989265813",
  appId: "1:461989265813:web:b3e079917742810b07f69c",
  measurementId: "G-YY3KMVS1FV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
